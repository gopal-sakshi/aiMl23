(async function fn23 () {
    await qna.load();
})();


qna.load().then(model => {
    console.log('kaneesam then ayina execute ayindaaa');
    let question = "which football club does the passage talk about";
    let passage = "Real Madrid is the most successful football club in the world. The club a record 14 ucl titles, 34 la liga tiles";
    model.findAnswers(question, passage).then(answers => {
        console.log('Answers: ', answers);
    });
});