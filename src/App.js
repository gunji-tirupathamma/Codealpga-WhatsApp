import React from 'react'
import ContactListComponent from './components/ContactListContainer/ContactList';
import ChatingComponent from './components/ChatingContainer/Chating'
import styled from 'styled-components'

export const Container=styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100%;
    background-color: #f8f9fb;
    background-size: cover;

    @media screen and (max-width: 576px){
      justfy-content: center;
      padding-left: 20px;
    }
`



const App=()=>(
  <Container>
    <ContactListComponent />
    <ChatingComponent />
  </Container>
)

export default App;
