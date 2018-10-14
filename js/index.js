var c = document.getElementById("c"),
    $ = c.getContext("2d");

var Ww = window.innerWidth,
    Wh = window.innerHeight;

c.width = Ww;
c.height = Wh;


var parts = [],
    color = 0;





function createParts() {
    var x = Math.floor(Math.random() * Ww) + 1,
        y = 0,
        s = Math.floor(Math.random() * 5) + 1;
    parts.push({
        "x": x,
        "y": y,
        "s": s
    });
}



function draw() {

    createParts();

    for (var i = 0; i < parts.length; i++) {
        var p = parts[i];
        $.globalCompositeOperation = "lighter";
        color += .01;
        $.fillStyle = "hsla(" + color + ",64%, 50%,0.9)";
        $.beginPath();
        $.arc(p.x, p.y += p.s / 4, p.s * .6, 0, Math.PI * 2, true);
        $.fill();
        if (p.y > Wh) {
            parts.splice(i, 1);
        }
        if (color >= 360) {
            color = 0;
        }
    }
}
var mousemove = function (e) {
    Mx = e.clientX;
    My = e.clientY;
    for (var i = 0; i < parts.length; i++) {
        var p = parts[i];
        for (var pos = 0; pos < 10; pos++) {
            if (Mx <= p.x - pos) {
                p.x -= .7;
            }
            if (Mx >= p.x + pos) {
                p.x += .7;
            }
            if (My <= p.y - pos) {
                p.y -= .7;
            }
            if (My >= p.y + pos) {
                p.y += .7;
            }
        }
        p.s += .1;


    }
}
//addEventListener("mousemove",mousemove);
function animate() {
    $.clearRect(0, 0, Ww, Wh);
    draw()
}
setInterval(animate, 20);
