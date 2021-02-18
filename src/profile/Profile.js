import React from 'react';
import PropTypes from "prop-types";

 
 const Profile = ({fullName, bio, profession, children, handleName }) => {
  
    return (
        <div className='container' style={{color :"white", backgroundColor:"purple"}}>
           <h2>{fullName}</h2>
           <h2>{bio}</h2>
           <h2>{profession}</h2>
           {children}
           <br/>
           <button style={{color:"white", backgroundColor: "#4CAF50"}} onClick={()=>handleName("Naim")} >Name</button>
        </div>
    )
 };
 Profile.defaultProps = {
   fullName: "Khazri Naim",
   bio: "Age: 35",
   prefession:"Student",
   children: "./assests/avatar.jpg",
 };

 Profile.prototypes = {

   fullName: PropTypes.string,
    bio: PropTypes.string,
    prefession: PropTypes.string,
    children: PropTypes.string,
 };
 
 export default Profile;