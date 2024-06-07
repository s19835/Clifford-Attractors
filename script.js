const canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

context.lineWidth = 1;
context.strokeStyle = `282c33`;
context.fillStyle = `282c33`;

let parameters = {a:2, b:-2, c:1, d:-1};

for (var particle = 0; particle < 200; particle++) {
    let x = Math.floor(Math.random() * width);
    let y = Math.floor(Math.random() * height);

    context.fillRect(x, y, 1, 1);
    draw(x, y, parameters, context);
}

function draw(x, y, parameters, context) {

    let ox = x;
    x += Math.sin(parameters.a * y) + (parameters.c * Math.cos(parameters.a * x));
    y += Math.sin(parameters.b * ox) + (parameters.d * Math.cos(parameters.b * y));

    if (x > width) x = 0;
    if (y > height) y = 0;
    if (x < 0) x = width;
    if (y < 0) y = height;

    context.lineTo(x, y);
    context.stroke();
}
