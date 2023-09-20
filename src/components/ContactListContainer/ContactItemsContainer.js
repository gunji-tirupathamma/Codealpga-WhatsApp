import React from 'react'
import styled from 'styled-components'

const ContactItem=styled.div`
    display: flex;
    flex-direction: row; 
    background-color: white;
    border-bottom: 10px solid #f2f2f2;
    cursor: pointer;
    padding: 15px;
`
const ProfileIcon=styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
`

const ContactInfo=styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 12px;
`

const ContactName=styled.span`
    width: 100%;
    font-size: 16px;
    color: #000;
`

const MessageText=styled.span`
    width: 30%;
    font-size: 14px;
    color: rgba(0,0,0,0.8);
    margin-top: 3px;
`

const ContactItemsContainer=(props) =>{
  const {userData}=props

  return (
    <ContactItem>
      <ProfileIcon src={userData.profilePic} alt=""/>
      <ContactInfo>
        <ContactName>{userData.name}</ContactName>
        <MessageText>Hello!</MessageText>
      </ContactInfo>
      <MessageText>10.40 pm</MessageText>
    </ContactItem>
  )
}

export default ContactItemsContainer
