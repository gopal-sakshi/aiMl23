const xArray = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
const yArray = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

const data = [{
    x: xArray,
    y: yArray,
    // mode: "markers",             // either "dotted" (or) "lines"
    mode: "lines"
}];

const layout = {
    xaxis: { range: [40, 256], title: "Square Meters" },                    // we can modify range ===> [50, 150] & [7,15]
    yaxis: { range: [0, 25], title: "Price in Millions" },                      // coz, all values lie in between
    title: "House Prices vs. Size"
};

Plotly.newPlot("demoPlot23", data, layout);