let slope = 3;
let intercept = 7;
const xValues = [];
const yValues = [];

for (let x = 0; x <= 10; x += 1) {
    xValues.push(x);
    yValues.push(x * slope + intercept);
}

const data = [{
    x: xValues,
    y: yValues,
    mode: "lines"
}];


const layout = {
    title: "Slope23=" + slope + " Intercept23=" + intercept
};

Plotly.newPlot("demoPlot23", data, layout);