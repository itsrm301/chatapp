import React from "react";
import ChatBox from "react-custom-chat"
import {useState} from "@hookstate/core"
import store from './store';
 
export default function Secondperson(){
  const {firstpersonMessageList,secondPersonMessageList} = useState(store);
 function handleSendMessage(newMessage){

   secondPersonMessageList.merge([{
     text:newMessage,
     person:'primary'
    }])
    
    setTimeout(()=>{firstpersonMessageList.merge([{
      text:newMessage,
      person:'secondary'
    }])
  },500)
}
return (
<ChatBox 
  settings = {{
   
    navColor:'blue',
    navText:'She ',
    isOpen :true

  }}
  messageList={secondPersonMessageList.get()}
  onSendMessage={handleSendMessage}
/>
);

}