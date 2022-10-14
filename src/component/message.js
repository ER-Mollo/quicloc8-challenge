import React from "react";
import '../css/message.css'
import { messages } from "../asserts/messages";
import { FaBeer,FaBars,FaStar } from 'react-icons/fa';
function Message() {

    

  return (
    <div className="main">
        <div className='top'>
           <FaBars style={{paddingTop:10,width:20,height:20}}/>
            <h1 className='heading'>Message</h1>
        </div>
        {
            messages.map(item=>((
                <div key={item.key}>
                    <div className='message' >
                <div className='init'>
                    <h1 className="letter"><div className="e">E</div></h1>
                    <div className='text'>
                        <h1 className='title'>{item.subject}</h1>
                        <p className='text-message'>{item.message}</p>
                    </div>
                </div>
                
                <div className="end">
                    <p className='date'>{item.display}</p>
                    <FaStar color="#FFCCBC"/>
                </div>
            </div>
            <hr className="line"/>
                
            </div>
        

                
            )))
       
        }
    </div>     
  );
}

export default Message;
