import React, { useState } from "react";
import "../index.css";
import questions from "./question";

function Firstpage() {

    const [score, setScore] = useState(0);
    const [currQues, setCurrQues] = useState(0);
    const [showques, setShowQues] = useState(true);

    function Check(isTrue) {
        setScore(isTrue ? (score + 1) : score)
        const nextques = currQues + 1;
        if (nextques < questions.length) {
            setCurrQues(nextques);
        }
        else {
            setShowQues(false);
        }
    }

    return (
        <div className="App">
            {showques ? (<div>
                    <div className="question-section">
                        Ques {currQues + 1}  {questions[currQues].ques}
                    </div>
                    <br /><br /><br />

                    <div className="answer-section">
                        {questions[currQues].options.map((option) =>
                            <button
                                onClick={() => Check(option.isTrue)} >
                                {option.mark}{option.ans}
                            </button> 
                        )}
                    </div>
                    <br /><br /><br />

                    <div className="question-section">
                        Score:  {score}/{currQues} </div>
                </div> )    :

                (<div className="score-section">
                You scored {score} out of {questions.length} </div>) 
            }
        </div>
    );
}

export default Firstpage;