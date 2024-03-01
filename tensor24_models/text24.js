import * as qna from "@tensorflow-models/qna";
import * as tf from "@tensorflow/tfjs";


/*
    All node_modules & stuff... 
    so, dont bother it here...
    just do it in some other repo... may be testing_backend

*/


const [qnaModel, setQnAModel] = useState(null);

//...

const handleInputChange = (event) => {
    setInput(event.target.value.toString());
};

// ...

const handleInputSubmit = async (event) => {
    event.preventDefault();
    if (qnaModel) {
        let context = String(input).trim();
        console.log(typeof context);
        const answers = await qnaModel.findAnswers(context, 1);
        console.log(answers);

        setCards([
            ...cards,
            { question: answers[0].question, answer: answers[0].answer },
        ]);
    } else {
        console.error("qnaModel is not ready yet");
    }
};