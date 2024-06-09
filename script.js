const canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

context.lineWidth = 1;
context.strokeStyle = '#28c33';
context.fillStyle = '#282c33';

// by changing the parameters1 or others to just parameters visualize diff attractor grpahics, but only one parameters name should exist.
let parameters1 = {a: 2, b: -2, c: 1, d: -1};
let parameters2 = {a: -1.4, b: 1.6, c: 1, d: 0.7}
let parameters = {a: 1.7, b: 1.7, c: 0.6, d: 1.2}
var numOfParticles = 1000000;

for (let i = 0; i < numOfParticles; i++) {
    // Map the random coordinates to the range -2.5 to 2.5
    let x = Math.random() * 5 - 2.5;
    let y = Math.random() * 5 - 2.5;

    //console.log(x + ', ' + y);
    clifford(x, y); // Pass the initial coordinates to the clifford function
}

function clifford(x, y) {
    for (let j = 0; j < 100; j++) {
        let ox = x;
        x = (Math.sin(parameters.a * y) + (parameters.c * Math.cos(parameters.a * x)));
        y = (Math.sin(parameters.b * ox) + (parameters.d * Math.cos(parameters.b * y)));
    }
    // Map the resulting coordinates back to canvas coordinates
    let mappedX = map(x, -2.5, 2.5, 0, width);
    let mappedY = map(y, -2.5, 2.5, height, 0);
    particle(mappedX, mappedY);
    //console.log(mappedX + ', ' + mappedY);
}

function particle(x, y) {
    context.fillRect(x, y, 0.3, 0.3);
}

// Map the x, y coordiates to the canvas coordinates
function map(value, start1, stop1, start2, stop2) {
    return start2 + (value - start1) * (stop2 - start2) / (stop1 - start1);
}