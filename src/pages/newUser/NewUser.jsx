import React from "react";
import "./NewUser.style.css";
const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>UserName</label>
          <input type="text" placeholder="John" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="nodeh@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="password" placeholder="+231 213" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="USA" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value={"male"} />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="famale" value={"famale"} />
            <label htmlFor="famale">Famale</label>
            <input type="radio" name="gender" id="other" value={"other"} />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label htmlFor="active">Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <button className="newUserButton">Create</button>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
