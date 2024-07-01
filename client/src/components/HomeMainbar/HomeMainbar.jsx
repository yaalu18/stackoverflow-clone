import React from 'react';
import {Link,useLocation,useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import './HomeMainbar.css';
import Questions from './Questions.jsx';
import QuestionList from './QuestionList.jsx';
import questionsReducer from '../../reducers/questions';

const HomeMainbar=()=>{
    const location=useLocation()
    const user=1
    const navigate=useNavigate()
    const questionsList=useSelector(state=>state.questionsReducer)
    console.log('questions inside mongodb:',questionsList)
   
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
        return (
            <div className="main-bar">
              <div className="main-bar-header">
                {location.pathname === "/" ? (
                  <h1>Top Questions</h1>
                ) : (
                  <h1>All Questions</h1>
                )}
                <button onClick={checkAuth} className="ask-btn">
                  Ask Question
                </button>
              </div>
              <div>
                {questionsList.data === null ? (
                  <h1>Loading...</h1>
                ) : (
                  <>
                    <p>{questionsList.data.length} questions</p>
                    <QuestionList questionsList={questionsList.data} />
                  </>
                )}
              </div>
            </div>
          );
        };
        
      
    
        
    /*return(
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
    )*/
    /*return(
        <div className='question-details-page'>
            {
                questionList.data===null?
                <h1>Loading...</h1>:
                <>
                questionList.data.filter(question=>question._id===id).map(question=>(
                    <div key={questionList._id}>
                        {console.log(question)}
                        <section className='qestion-details-container'>
                            <h1>{question.questionTitle}</h1>
                            <div className='question-details-container2'>
                                <div className='question-votes'>
                                    <img src={upvote} alt='' width='18' className='votes-icon'/>
                                    <p>{question.upVotes-question.downVotes}</p>
                                    <img src={downvote} alt='' width='18' className='votes-icon'/>
                                </div>
                            </div>
                            <div style={{width:'100%'}}>
                                <p className='question-body'>{question.questionBody}</p>
                                <div className='question-details-tags'>{question.questionTags.map((tag)=>
                                <p key={tag}>(tag)</p>
                                )}
                            </div>
                            <div>
                                <p>asked{question.askedOn}</p>
                                <Link to={`/User/${question.userId}`} className='user-link' style={{color:''}}
                                <Avatar backgroundColor='orange' px='8px' py='5px'>{question.userPosted}</Avatar>
                                <div>{question.userPosted}</div>
                            </div>
                            </section>
                    
                    </div>

                </>
                
            }
        </div>
    )}*/
    /*return (
        <div className='question-details-page'>
            {
                questionsList.data === null ?
                    <h1>Loading...</h1> :
                    <>
                        {questionsList.data.filter(question=>question._id===id).map(question => (
                            <div key={question._id}>
                                {console.log(question)}
                                <section className='question-details-container'>
                                    <h1>{question.questionTitle}</h1>
                                    <div className='question-details-container2'>
                                        <div className='question-votes'>
                                            {/* Assuming upvote and downvote variables are defined elsewhere */}
                                            /*<img src={upvote} alt='' width='18' className='votes-icon'/>
                                            <p>{question.upVotes - question.downVotes}</p>
                                            <img src={downvote} alt='' width='18' className='votes-icon'/>
                                        </div>
                                    </div>
                                    <div style={{width:'100%'}}>
                                        <p className='question-body'>{question.questionBody}</p>
                                        <div className='question-details-tags'>
                                            {question.questionTags.map(tag => (
                                                <p key={tag}>{tag}</p>
                                            ))}
                                        </div>
                                        <div className='question-actions-user'>
                                            <div>
                                                <button type='button'>Share</button>
                                                <button type='button'>Delete</button>
                                            </div>
                                        </div>
                                        <div>
                                            <p>asked {question.askedOn}</p>
                                            <Link to={`/User/${question.userId}`} className='user-link' style={{color:''}}>
                                                {/* Assuming Avatar component usage */
                                                /* <Avatar backgroundColor='orange' px='8px' py='5px'>{question.userPosted}</Avatar> */}
                                                /*<div>{question.userPosted}</div>
                                            </Link>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        ))}
                    </>
            }
        </div>
    );
    
    }*/

                
export default HomeMainbar;