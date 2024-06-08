const canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

context.lineWidth = 1;
context.strokeStyle = `282c33`;
context.fillStyle = `282c33`;

let parameters = {a:2, b:-2, c:1, d:-1};
var numOfParticles = 20;

//CHAOSI
//computer simulatin of a three amplifiers, 
/*Imagine an arrangement of three amplifiers in which the first amplifier outputs a signal x that is fed to the other two. The second amplifier outputs the signal 1 - x in response to x. The third amplifier takes the two signals, x and 1 - x, as input. It generates the product, x(1 - x), of the two signals and feeds it back to the first amplifier, which also receives a control voltage, r, as input. One additional component, a device that samples its input and delivers the same voltage as output for a short time, completes the circuit; it is inserted in the output line from the first amplifier. The three-amplifier circuit does a voltage dance that becomes more hectic as the control voltage r is grad ually increased.*/

let r = Math.random() * 2.9 - 4;
let x = 3 * 0.002;
for (let i = 0; i < 200; i++) {
    x = r * x * (1-x);
    console.log(x);
}
for (let j = 0; j < 300; j++) {
    x = r * x * (1-x);
    context.fillRect(x *1000 , height/2, 2, 2);
    console.log(x);
}
