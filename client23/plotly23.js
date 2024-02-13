const xValues = [];
const yValues = [];

for (let x = 0; x <= 10; x += 1) {
    xValues.push(x);
    yValues.push(x);
}

const data = [{
    x: xValues,
    y: yValues,
    mode: "lines"
}];

const layout = { title: "y = x" };
Plotly.newPlot("demoPlot23", data, layout);