import React from "react";
import ChatBox from "react-custom-chat"
import {useState} from "@hookstate/core"
import store from './store';
 
export default function Firstperson(){
  const {firstpersonMessageList,secondPersonMessageList} = useState(store);
 function handleSendMessage(newMessage){

  firstpersonMessageList.merge([{
    text:newMessage,
    person:'primary'
  }])
  setTimeout(()=>{ secondPersonMessageList.merge([{
    text:newMessage,
    person:'secondary'
  }])
}
,500);
 

}
return (
<ChatBox 
  settings = {{
   position:'left',
    navColor:'green',
    navText:'Raghav Mittal',
    isOpen :true

  }}
  messageList={firstpersonMessageList.get()}
  onSendMessage={handleSendMessage}
/>
);

}