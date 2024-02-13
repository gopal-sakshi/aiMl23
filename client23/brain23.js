const network23 = new brain.NeuralNetwork();

// Train the Network with 4 input objects
network23.train([
    { input: [0, 0], output: { zero: 1 } },
    { input: [0, 1], output: { one: 1 } },
    { input: [1, 0], output: { one: 1 } },
    { input: [1, 1], output: { zero: 1 } },
]);

// What is the expected output of [1,0]?
let result23 = network23.run([1, 0]);

// Display the probability for "zero" and "one"
document.getElementById("demo23").innerHTML = "one: " + result23["one"] + "<br>" + "zero: " + result23["zero"];