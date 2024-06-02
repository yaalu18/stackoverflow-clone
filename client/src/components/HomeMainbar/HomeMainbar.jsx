import React from 'react';
import {Link,useLocation,useNavigate} from 'react-router-dom';
import './HomeMainbar.css';
import Questions from './Questions.jsx';
import QuestionList from './QuestionList.jsx';

const HomeMainbar=()=>{
    const location=useLocation()
    const user=1
    const navigate=useNavigate()
   
    const checkAuth = () => {
        if (user === null) {
            alert("Login or sign up to ask a question");
            setTimeout(() => {
                navigate('/Auth');
            }, 100); // Delay the navigation by 100 milliseconds
        } else {
            navigate('/AskQuestion');
        }
    }
    var questionList=[{
        id:1,
        upVotes:3,
        downVotes:2,
        noOfAnswers:2,
        questionTitle:'What is a function?',
        questionBody:'It meant to be',
        questionTags:['java','node.js','react.js','mongodb'],
        userPosted:'mano',
        askedOn:'jan1',
        answer:[{
            answerBody:'Answer',
            userAnswered:'kumar',
            answeredOn:'jan2',
            userId:2,
        }]
        },{
        id:2,
        upVotes:3,
        downVotes:2,
        noOfAnswers:0,
        questionTitle:'What is a function?',
        questionBody:'It meant to be',
        questionTags:['javascript','R','python'],
        userPosted:'mano',
        askedOn:'jan1',
        userId:1,
        answer:[{
            answerBody:'Answer',
            userAnswered:'kumar',
            answeredOn:'jan2',
            userId:2,
        }]
        },{
        id:3,
        upVotes:3,
        downVotes:2,
        noOfAnswers:0,
        questionTitle:'What is a function?',
        questionBody:'It meant to be',
        questionTags:['javascript','R','python'],
        userPosted:'mano',
        askedOn:'jan1',
        userId:1,
        answer:[{
            answerBody:'Answer',
            userAnswered:'kumar',
            answeredOn:'jan2',
            userId:2,
        }]
        }]
      
    
        
    return(
        <div className='main-bar'>
            <div className='main-bar-header'>
            {
                location.pathname==='/' ?<h1>Top Questions</h1>:<h1>All Questions</h1>
            }
            <button to='/AskQuestion' onClick={checkAuth} className='ask-btn'>Ask Question</button>
            </div>
            
            <div>
                {questionList === null ? (
                    <h1>Loading...</h1>
                    ) : (
                    <>
                        <p>{questionList.length}questions</p> 
                        <QuestionList questionsList={questionList} />
                    </>
                    )
                }
            
            </div>
        </div>
    )
}

                
export default HomeMainbar;