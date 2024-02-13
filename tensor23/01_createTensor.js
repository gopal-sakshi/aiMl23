// create basic tensor
// const myArr = [[1, 2], [3, 4]];
// const tensorA = tf.tensor(myArr);
// document.getElementById("demo").innerHTML = tensorA;


// create tensor from array & shape
const myArr = [1, 2, 3, 4];
const shape = [2, 2];
const tensorA = tf.tensor(myArr, shape);
document.getElementById("demo").innerHTML = tensorA;
tensorA.data().then(data => 
    console.log('data ===> ', data)
);
tensorA.array().then(array => console.log('array ===> ', array));
console.log('shape ====> ', tensorA.shape);
