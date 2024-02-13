const tensorA = tf.tensor([
    [1, 2], [3, 4], [5, 6], [7,8], [9,0]
]);
const tensorB = tf.tensor([
    [1,2,3,4,5],
    [6,7,8,9,0]
]);
console.log('shapeA ====> ', tensorA.shape)         // [5,2]    Its rank = 2; (matrix); it is 5 units long in X-axis; 2 units long in Y-axis
console.log('shapeB ====> ', tensorB.shape)         // [2,5]    Its rank = 2 (number of elements in shape)



const tensorC = tf.tensor([
    [ [1,2], [4,5] ]
]);
console.log('shapeC ====> ', tensorC.shape);        // [1,2,2]

const tensorD = tf.tensor([
    [ [1,2,2,5], [4,5,1,6], [7,8,4,2], [7,8,4,2] ],
    [ [3,6,2,5], [9,5,6,7], [2,6,1,4], [3,5,2,6] ]
]);
console.log('shapeD ====> ', tensorD.shape);        // [2,3,2]
tensorD.reshape([1,8,4]);
tensorD.array().then((arr) => {
    console.log(' reshaped tensorD ===> ',arr);
    console.log('tensorD shape ===> ', tensorD.shape)
});
const tensorE = tf.tensor([
    [ [1,2], [4,5] ],
    [ ],
    [ ]
]);
console.log('shapeE ====> ', tensorE.shape);