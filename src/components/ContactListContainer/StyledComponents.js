import styled from 'styled-components'

export const ContatContainer=styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 0.8;

    
    
`

export const ProfileInfoContainer=styled.div`
    display: flex;
    flex-direction: row;
    background-color: #ededed;
    padding: 10px;
   
`

export const ProfileImg=styled.img`
    height: 35px;
    width: 35px;
    border-radius: 50%;
`
export const IconsContainer=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;    
    margin-left: auto;
    padding: 10px;

    & svg:not(:last-child) {
        margin-right: 25px;
    }
`

export const SearchBoxContainer=styled.div`
    background-color: #f6f6f6;
    padding: 10px;
`

export const SearchBox=styled.div`
    display: flex;
    flex-direction: row;
    background-color: #b5f5ec;
    border-radius: 15px;
    width: 95%;
    padding: 15px;
`

export const SearchIcon=styled.img`
    width: 18px;
    height: 18px;
`
export const SearchInput=styled.input`
width: 100%;
border: 0;
outline: 0;
background-color: transparent;
margin-left: 15px;
`