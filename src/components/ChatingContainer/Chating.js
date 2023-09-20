import React from 'react'
import { messagesList } from '../../Data'
import{
    MessageingContainer,
    ProfileHeader,
    ProfileImage,
    ChatBox,
    SearchBox,
    SearchInput,
    EmojiImage,
    MessageContainer,
    MessageDiv,
    Message,
    MicImage,
    MoreImg
} from './StyledComponents'

const ChatingComponent=()=> {
  return(
   <MessageingContainer>
    <ProfileHeader>
      <ProfileImage src={'/image3.jpeg'}/>
      Sivashankar
      <MoreImg src={"more.svg"}/>
    </ProfileHeader>
    <MessageContainer>
        {
          messagesList.map((messageData)=>
          <MessageDiv isYours={messageData.senderId===0}>
              <Message isYours={messageData.senderId===0}>{[messageData.text]}</Message>    
                      
          </MessageDiv>
          )
        }
        
    </MessageContainer>
    <ChatBox>
        <SearchBox>
          <EmojiImage src={"/emoji.svg"} />
          <SearchInput placeholder='Type a message'/>
          <MicImage src={"mic.svg"}/>
        </SearchBox>
    </ChatBox>
   </MessageingContainer>
  )
}

export default ChatingComponent
