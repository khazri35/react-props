import React from 'react';
import './App.css';
import Profile from './profile/Profile';
import image from  "./assests/avatar.jpg" ;



const handleName = (name) => {
  alert(`${name}`);
};

function App() {
  
  return (
    <div className="App">
    <Profile fullName="Naim Khazri" profession="Student" bio="Age : 35" 
    handleName={handleName}
    >
    <img style={{height: 100}} src={image} alt="img" />
    </Profile>
    </div>

  );
}

export default App;
