import React from "react";
import "./RightSidebar.css";
import comment from '../../assets/comment.png'
import penicon from '../../assets/penicon.png'
import blacklogo from '../../assets/blacklogo.png'
const Widget=()=>{
    return(
        <div className='widget'>
            <h4>The Overflow Blog</h4>
            <div className='right-sidebar-div-1'>
                <img src={penicon} alt='pen' width='25' style={{display:'inline-block'}}/>
                <p style={{display:'inline-block',marginLeft:'5px'}}> Observability is key to the future of software (and your DevOps career)</p>
                <div className='right-sidebar-div-2'>
                    <img src={penicon} alt='pen'  width='25' style={{display:'inline-block'}}/>
                    <p style={{display:'inline-block',marginLeft:'5px'}}>Podcast 374:How valuable is your screen name?</p>
                </div>
            </div>
            <h4>Featured on Meta</h4>
            <div className='right-sidebar-div-1'>
                <div className='right=sidebar-div-2'>
                    <img src={comment} alt='comment' width='50px' style={{display:'inline-block'}}/>
                    <p style={{display:'inline-block',marginLeft:'5px'}}>Review Queue workflows.Final release...</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={comment} alt='comment' width='50px' style={{display:'inline-block'}}/>
                    <p style={{display:'inline-block',marginLeft:'5px'}}>Please welcome Valued Associates:#958-v2Blast#959-SpencerG</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={blacklogo} alt='blacklogo' width='50'  style={{display:'inline-block'}}/> 
                    <p style={{display:'inline-block',marginLeft:'5px'}}>Outdated Answers:accepted answer is now unprinted on Stack Overflow</p>
                </div>
                <h4>Hot Meta Posts</h4> 
                <div className='right-sidebar-div-1'>
                    <div className='right-sidebar-div-2'>
                        <p>38</p>
                        <p>Why was this spam flag declined.yet the question marked as spam?</p>
                    </div>
                    <div className='right-sidebar-div-2'>
                        <p>20</p>
                        <p>Is a link to the "How to ask" help page a useful comment?</p>
                    </div>
                    <div className='right-sidebar-div-2'>
                        <p>14</p>
                        <p>What is the best course of action when a user has high enoough rep {/*<to styleName=""></to>*/}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Widget;