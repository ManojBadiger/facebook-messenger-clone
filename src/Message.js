import React from 'react';
import './Message.css';
import { Card,Typography,CardContent} from '@material-ui/core';
function Message({message,username}) {
    const isUser=username===message.username;
    return (
      
  <div className={`message_card ${isUser && 'message_user'}`}>
    <Card className={isUser?"message_usercard":"message_guestcard"}>
      <CardContent>
        <Typography component="h2" color="white" variant="h5">
        {message.username}:{message.text}
        </Typography>
       
      </CardContent>
     
    </Card>

  </div>

           
    )
}

export default Message
