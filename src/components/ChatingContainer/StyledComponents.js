import styled from'styled-components'

export const MessageingContainer=styled.div`
    display: flex;
    flex-direction: column;    
    height: 100%;
    flex: 2;
    background-color: #f6f7f8;

    @media screen and (max-width: 576px){
        display: none;
    }
`

export const ProfileHeader=styled.div`
    display: flex;
    flex-direction: row;
    background-color: #ededed;    
    padding: 15px;   
    gap: 10px;
    
    `

export const ProfileImage=styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
`

export const ChatBox=styled.div`
    display: flex;
    background-color: #f0f0f0;
    padding: 10px;   
    bottom: 0;
`

export const SearchBox=styled.div`
    display: flex;
    flex-direction: row;
    background-color: ##97a19a;
    border-radius: 15px;
    width: 95%;
    padding: 15px;
`
export const SearchInput=styled.input`
width: 100%;
border: 0;
outline: 0;
background-color: transparent;
margin-left: 15px;

`

export const EmojiImage=styled.img`
    width: 25px;
    height: 25px;
    opacity: 0.4;
    cursor: pointer;
`
export const MessageContainer=styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const MessageDiv=styled.div`
    display: flex;
    margin: 5px 16px;
    justify-content: ${props=>props.isYours?'flex-end':'flex-start'}; 
`

export const Message=styled.div`
    max-width: 50%;
    background-color: ${props=>props.isYours?'#daf8cb' : '#fcbdf8'};
    color: #303030;
    font-size: 18px;
    padding: 8px 10px;
`
export const MicImage=styled.img`
width: 28px;
height: 28px;
opacity: 0.4;
cursor: pointer;

`
export const MoreImg=styled.img`
width: 28px;
height: 28px;
opacity: 0.4;
cursor: pointer;
align-self: flex-end;
margin-left: auto;
`
