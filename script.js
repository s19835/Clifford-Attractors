const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d");

// console.log(context);
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

context.fillStyle = "white";
context.strokeStyle = "white";
// context.lineWidth = 5;

var numOfParticle = 10000;
const particles = [];

let a = 1.7540;
let b = -1.7567;
let c = -0.6681;
let d = -0.6687;

// let p = x;
// x += Math.sin(a * y) + (c * Math.cos(a * x));
// y += Math.sin(b * p) + (d * Math.cos(b * y));
