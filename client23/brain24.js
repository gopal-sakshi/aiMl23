const network24 = new brain.NeuralNetwork();

network24.train([
    {       // White 
        input: [255 / 255, 255 / 255, 255 / 255], 
        output: { light: 1 } 
    },
    {       // lightGrey 
        input: [192 / 255, 192 / 255, 192 / 255], 
        output: { light: 1 } 
    },
    {       // darkGrey
        input: [65 / 255, 65 / 255, 65 / 255], 
        output: { dark: 1 } 
    },
    {       // black
        input: [0, 0, 0], 
        output: { dark: 1 } 
    },
]);

// What is the expected output of Dark Blue (0, 0, 128)?
let result24 = network24.run([0, 0, 128 / 255]);

// Display the probability of "dark" and "light"
document.getElementById("demo24").innerHTML = "Dark: " + result24["dark"] + "<br>" + "Light: " + result24["light"];