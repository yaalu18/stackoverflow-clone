import React from 'react';
import {Link,useLocation,useNavigate} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './HomeMainbar.css';
import Questions from './Questions.jsx';
import QuestionList from './QuestionList.jsx';
import questionsReducer from '../../reducers/questions';
import { fetchAllQuestions } from '../../actions/question';

const HomeMainbar=()=>{
    const location=useLocation()
    const user=1
    const navigate=useNavigate()
    //const questionsList=useSelector(state=>state.questionsReducer)
    //console.log('questions inside mongodb:',questionsList)
    const questionsList = useSelector(state => state.questionsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllQuestions()); // Dispatch fetchAllQuestions action on component mount
    }, [dispatch]);
    //if (questionsList === null) {
      //  return <div>loading...</div>; // Or any loading indicator
    //}


    console.log('questions inside HomeMainbar1:', questionsList); // Log questionsList for verification
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
    console.log('questions inside HomeMainbar1:', questionsList); // Log questionsList for verification
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
                {questionsList === null ? (
                  <h1>Loading...</h1>
                ) : (
                  <>
                  <div>
        {Array.isArray(questionsList) && questionsList.length > 0 ? (
          questionsList.map(question => (
            <div key={question._id} className="question-item">
              <h2>{question.questionTitle}</h2>
              <p>{question.questionBody}</p>
              <p>Tags: {question.questionTags.join(', ')}</p>
              <p>Number of Answers: {question.noOfAnswers}</p>
              <p>Upvotes: {question.upVote}</p>
              <p>Downvotes: {question.downVote}</p>
              <p>Posted by: {question.userPosted}</p>
              {/* Render other properties as needed */}
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
                 </div>
                    {/*<p>state:{questionsList.data}</p>
                    <p>{questionsList.data.length} questions</p>
                    <QuestionList questionsList={questionsList.data} />*/}
                  </>
                )}
              </div>
            </div>
          );
        };
        
      
    
        
    
                
export default HomeMainbar;