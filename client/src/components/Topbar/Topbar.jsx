import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
function Topbar() {

  const {user,dispatch}= useContext(Context);
  
  const handleLogOut = ()=>{
    dispatch({type:"LOGOUT"})
  }
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <Link to="/">
            <li className="topListItem">HOME</li>{" "}
          </Link>
          <Link to="/about">
            <li className="topListItem">ABOUT</li>
          </Link>
          <Link to="/contact">
            <li className="topListItem">CONTACT</li>
          </Link>
          <Link to="/write">
            <li className="topListItem">WRITE</li>
          </Link>
          
          <Link to="/login">
           
          <li className="topListItem" onClick={handleLogOut}>{user&&"LOGOUT"}</li>
            
          </Link>
        </ul>
      </div>
      <div className="topRight">
        
       {  user ? <img
          className="topImg"
          src={user.profilePic|| "https://png.pngtree.com/png-clipart/20200701/original/pngtree-cat-default-avatar-png-image_5416936.jpg" }
          alt=""
        /> 
        :
        <ul className="topList">
        <li className="topListItem"><Link className="link" to="/login">Login </Link></li> 
        <li className="topListItem"><Link className="link" to="/register">Register </Link></li> 
        </ul>
}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default Topbar;
