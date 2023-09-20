import React from 'react';
import ContactItemsContainer from './ContactItemsContainer'
import { contactList } from '../../Data';

import{
    ContatContainer,
    ProfileInfoContainer,
    ProfileImg,
    IconsContainer,
    SearchBoxContainer,
    SearchBox,
    SearchIcon,
    SearchInput

} from './StyledComponents'



 const ContactListComponent=()=> {
  return <ContatContainer>
              <ProfileInfoContainer>
                <ProfileImg  src="https://res.cloudinary.com/dsx3dj12i/image/upload/v1684305659/IMG_20221007_171815_1_gpzx0e.jpg" alt=""/>
                <IconsContainer>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M64.12,147.8a4,4,0,0,1-4,4.2H16a8,8,0,0,1-7.8-6.17,8.35,8.35,0,0,1,1.62-6.93A67.79,67.79,0,0,1,37,117.51a40,40,0,1,1,66.46-35.8,3.94,3.94,0,0,1-2.27,4.18A64.08,64.08,0,0,0,64,144C64,145.28,64,146.54,64.12,147.8Zm182-8.91A67.76,67.76,0,0,0,219,117.51a40,40,0,1,0-66.46-35.8,3.94,3.94,0,0,0,2.27,4.18A64.08,64.08,0,0,1,192,144c0,1.28,0,2.54-.12,3.8a4,4,0,0,0,4,4.2H240a8,8,0,0,0,7.8-6.17A8.33,8.33,0,0,0,246.17,138.89Zm-89,43.18a48,48,0,1,0-58.37,0A72.13,72.13,0,0,0,65.07,212,8,8,0,0,0,72,224H184a8,8,0,0,0,6.93-12A72.15,72.15,0,0,0,157.19,182.07Z"></path></svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M92.38,38.05A12,12,0,0,1,101,23.42a108,108,0,0,1,54,0,12,12,0,1,1-6,23.23,84.11,84.11,0,0,0-42,0A12,12,0,0,1,92.38,38.05ZM50.94,52.34a108.1,108.1,0,0,0-27,46.76,12,12,0,0,0,8.37,14.77,12.2,12.2,0,0,0,3.2.43,12,12,0,0,0,11.56-8.8,84,84,0,0,1,21-36.35A12,12,0,1,0,50.94,52.34Zm-3.88,98.14a12,12,0,0,0-23.12,6.42,108,108,0,0,0,27,46.78A12,12,0,0,0,68,186.85,84,84,0,0,1,47.06,150.48ZM149,209.35a84,84,0,0,1-42,0,12,12,0,1,0-6,23.23,108,108,0,0,0,54,0,12,12,0,1,0-6-23.23Zm74.72-67.22A12,12,0,0,0,209,150.5a84,84,0,0,1-21,36.35,12,12,0,0,0,17.12,16.82,108.19,108.19,0,0,0,27-46.77A12,12,0,0,0,223.71,142.13Zm-14.77-36.61a12,12,0,0,0,23.12-6.42,108,108,0,0,0-27-46.78A12,12,0,1,0,188,69.15,84,84,0,0,1,208.94,105.52Z"></path></svg>
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 9h8"></path><path d="M8 13h6"></path><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path></svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M456 231a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 280a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 280a56 56 0 1 0 112 0 56 56 0 1 0-112 0z"></path></svg>
                </IconsContainer>                
              </ProfileInfoContainer>

              <SearchBoxContainer>
                  <SearchBox>
                        <SearchIcon src={"/search-icon.svg"} alt=""/>
                        <SearchInput placeholder='Search or start new chat'/>
                  </SearchBox>
              </SearchBoxContainer>
              {contactList.map((userData)=>(
                <ContactItemsContainer userData={userData} />
              ))}
              
         </ContatContainer>
 }

export default ContactListComponent
