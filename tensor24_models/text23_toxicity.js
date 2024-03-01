const threshold = 0.9;


// In a module context, variables dont automatically get declared globally
// we have to attach them to window yourself

window.classify23 = function classify23() {
    toxicity.load(threshold).then(model => {
        let input = document.getElementById('input23').value;
        console.log('toxicity prediciton for ====> ', input);
        const sentences = [input];
        model.classify(sentences).then(predictions => {
            console.log('predictions23 ===> ', predictions);
        });
    });
}

let sentences23 = [
    'Yo bitch Ja Rule is more succesful then youll ever be',
    'toxic ===> moron, nigger, pig, fat, hat',
    
]