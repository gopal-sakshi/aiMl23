// https://www.w3schools.com/ai/ai_perceptrons.asp



/*
        Criteria	            Input	            Weight

    Artists is Good         	x1 = 0 or 1     	w1 = 0.7
    Weather is Good	            x2 = 0 or 1	        w2 = 0.6
    Friend will Come	        x3 = 0 or 1	        w3 = 0.5
    Food is Served	            x4 = 0 or 1	        w4 = 0.3
    Alcohol is Served	        x5 = 0 or 1	        w5 = 0.4


    Think on these lines
    - weather weight is 0.6 for you, it might be different for someone else
    - higher weight means that the weather is more important to them.
    - lower threshold means they are more wanting to go to any concert.

    Perceptron inputs are called nodes.
    - they have both value (binary - 1 or 0) & weight 

    decision is NOT made by one neuron/node alone.
    all inputs are taken into consideration

*/

const threshold = 1.5;
const weights = [0.7, 0.6, 0.5, 0.3, 0.4];

const inputs11 = [1, 0, 1, 0, 1];           // good artist, bad weather, friend comes... there is no food, but alcohol is there
const inputs12 = [0, 0, 1, 1, 1];           // bad artist, weather... friend will come, food & alcohol


let sum11 = 0, sum12 = 0;
for (let i = 0; i < inputs11.length; i++) {
    sum11 += inputs11[i] * weights[i];
}
for (let i = 0; i < inputs12.length; i++) {
    sum12 += inputs12[i] * weights[i];
}
console.log('sum For inputs11 & inputs12 ===> ', sum11, sum12);