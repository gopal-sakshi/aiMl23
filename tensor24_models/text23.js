// It seems chrome wont allow local files to be accessed - Not allowed to load local resource
let base23 = window.location.origin + '/tensor24_models'

let question11 = 'who is google ceo';
let question12 = 'where was tesla born';

let passages11 = await fetch(base23 +'/text23_google.txt').then(async res => await res.text());
let passages12 = await fetch(base23 +'/text23_tesla.txt').then(async res => await res.text());

qna.load().then(model => {
    model.findAnswers(question11, passages11).then(answers => {
        console.log('Answers: ', answers);
    });
});


