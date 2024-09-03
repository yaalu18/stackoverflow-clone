import React from 'react';
import HomeMainbar from './HomeMainbar.jsx';
import { Link } from 'react-router-dom';
import QuestionList from './QuestionList';
const Questions=({question})=>{

    console.log(question)
    return(
        <div className='display-question-container'>
            <div className='display-votes-ans'>
            <p>{question.upVote.length-question.downVote.length}</p>
            <p>votes</p>
            </div>
            <div className='display-votes-ans'>
                <p>{question.noOfAnswers}</p>
                <p>answers</p>
            </div>
            <div className='display-question-details'>
                <Link to={`/Questions/${question._id}`} className='question-title-Link'>{question.questionTitle}</Link>
                <div className='display-tags-time'>
                    {
                        question.questionTags.map((tag)=>(
                            <p key={tag}>{tag}</p>
                        )
                    )
                    }
                </div>
                <p className='display-time'>
                    asked  {question.askedOn}{question.userPosted}

                </p>
            </div>

        </div>
        )}
               
    

export default Questions