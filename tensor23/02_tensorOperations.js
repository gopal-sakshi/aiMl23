const tensorA = tf.tensor([[1, 2], [3, 4], [5, 6], [7,8], [9,0]]);
const tensorB = tf.tensor([[1,-1], [2,-2], [3,-3], [4,-4], [5,-5]]);
const tensorC = tf.tensor([[1,-1], [2,-2], [3,-3], [4,-4], [5,-5]]);

// Tensor Addition
const tensorNew = tensorA.add(tensorB).add(tensorC);
tensorNew.data().then((sum) => console.log(' addition ===> ',sum));
tensorNew.array().then((sum) => console.log(' arrayyy ===> ',sum));
console.log('shape ====> ', tensorNew.shape)

/*
    so, shape of tensorA ===> [5,2]
    - it is 5 units long in dimension01
    - it is 2 units long in dimension02

    to understand rank & shape of tensors ===> https://www.tensorflow.org/guide/tensor

    Operations on tensor
    - add, subtract, multiply, divide
    - square, reshape
*/

const tensor11 = tf.tensor([[11, 17, 12], [13, 10, 14], [18, 16, 19], [10, 15, 20]]);       
// no. of elements ===> product of sizes in shape... shape of this tensor ===> [4,3]    
const tensor12 = tensor11.reshape([4, 1]);
const tensor13 = tensor11.reshape([1, 4]);
const tensor14 = tensor11.reshape([2, 2]);
tensor12.array().then((arr) => console.log(' reshaped arrayyy ===> ',arr));
tensor13.array().then((arr) => console.log(' reshaped arrayyy ===> ',arr));
tensor14.array().then((arr) => console.log(' reshaped arrayyy ===> ',arr));