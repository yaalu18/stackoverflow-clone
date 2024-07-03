import React from "react";
import upvote from '../../assets/upvote.png';
import downvote from '../../assets/downvote.png';
import './Questions.css';
import Avatar from '../../components/Avatar/Avatar.jsx'
import { useSelector } from "react-redux";
import { Link,useParams } from 'react-router-dom';
import DisplayAnswer from './DisplayAnswer';     
const QuestionsDetails=()=>{
    const {id}=useParams()
    const questionsList = useSelector((state) => state.questionsReducer);
    console.log('i am inside QuestionsDetails page,where questionsList:',questionsList)
    console.log('yes im printing,Am i coming or not 1:',id)
    console.log('yes im printing,Am i coming or not 2:',JSON.stringify(id))
    var questionList=[{
        id:1,
        upVotes:5,
        downVotes:2,
        noOfAnswers:2,
        questionTitle:'What is a function?',
        questionBody:'It meant to be',
        questionTags:['java','node.js','react.js','mongodb','express.js'],
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
            <div className='question-details-page'>
                {
                    questionsList.data === null ?
                  
                        <h1> Loading...</h1> :
                        (
                            <>
                                { 
                                    questionsList.data.filter(question => question.id == id).map((question) => (
                                        <div key={question.id}>
                                            <section className='question-details-container'>
                                                <h1>{question.questionTitle}</h1>
                                                <div className='question-votes'>
                                                    <img src={upvote} alt='upvotehere' width='18'/>
                                                    <p>{question.upVotes - question.downVotes}</p>
                                                    <img src={downvote} alt='downvotehere' width='18'/>
                                                </div>
                                                <div style={{ width: '100%' }}>
                                                    <p className='question-body'>{question.questionBody}</p>
                                                    <div className='question-details-tags'>
                                                        {
                                                            question.questionTags.map((tag) => (
                                                                <p key={tag}>{tag}</p>
                                                            ))
                                                        }
                                                    </div>
                                                    <div className='question-actions-user'>
                                                        <div>
                                                            <button type='button'>Share</button>
                                                            <button type='button'>Delete</button>
                                                        </div>
                                                        <div>
                                                            <p>asked {question.askedOn}</p>
                                                            <Link to={`/User/${question.userId}`} className='user-link' style={{ color: '#0086d8' }}>
                                                                <Avatar style={{ backgroundColor: 'orange', padding: '5px 8px' }}>
                                                                    {question.userPosted.charAt(0).toUpperCase()}
                                                                </Avatar>
                                                            </Link>
                                                            <div>{question.userPosted}</div>
                                                               
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                            {
                                                question.noOfAnswers !== 0 && (
                                                    <section>
                                                        <h3 style={{fontFamily:'sans-serif',fontSize:'12px'}}>{question.noOfAnswers} answers</h3>
                                                        <DisplayAnswer key={question.id} question={question}/>
                                                    </section>
                                                )
                                            }
                                            <section className='post-ans-container'>
                                                <h3>Your Answer</h3>
                                                <form>
                                                    <textarea name='' id='' cols='70' rows='20'></textarea><br/>
                                                    <input type='Submit' className='post-ans-btn' value='Post Your Answer'/>
                                                </form>
                                                <p>
                                                    Browse other Questions tagged
                                                    {
                                                        question.questionTags.map((tag) => (
                                                            <Link to='/tags' key={tag} className='ans-tags'>   {tag}   </Link>
                                                        ))
                                                    }
                                                    or
                                                    <Link to='/AskQuestion' style={{ textDecoration: 'none', color: '#009dff' }}>
                                                        ask your own question.
                                                    </Link>
                                                </p>
                                            </section>
                                        </div>
                                    ))
                                }
                            </>
                        )
                }
            </div>
        );
}        
export default QuestionsDetails;

