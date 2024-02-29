const network25 = new brain.NeuralNetwork();
// https://github.com/BrainJS/brain.js-examples/tree/main/src
// https://github.com/BrainJS/brain.js/blob/master/README.md#data-format
// Train the Network with some input
network25.train([
    { input: [1], output: 1 },
    { input: [2], output: 4 },
    // { input: 3, output: 9 },
    // { input: 4, output: 16 },
    // { input: 5, output: 25 },
    // { input: 6, output: 36 },
    // { input: 8, output: 64 },
    // { input: 9, output: 81 },
]);

let result25 = network25.run([7]);
console.log('this is result25 ====> ', result25);
document.getElementById("demo25").innerHTML = "see the console";