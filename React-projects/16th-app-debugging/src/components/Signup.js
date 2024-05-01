import React, { useRef } from "react";

function Signup() {
  let firstInputRef = useRef();
  let lastInputRef = useRef();
  let userInputRef = useRef();
  let emailInputRef = useRef();
  let passwordInputRef = useRef();
  let confpasswordInputRef = useRef();
  let maleRBRef = useRef();
  let femaleRBRef = useRef();

  let firstResultRef = useRef();
  let lastResultRef = useRef();
  let userResultRef = useRef();
  let emailResultRef = useRef();
  let passwordResultRef = useRef();
  let confpasswordResultRef = useRef();
  let infoRef = useRef();
  let stateSelectRef = useRef();

  let userGender;
  let userMaritalStatus;

  let firstRegExp = /^[A-Z][a-z]{2,10}$/;
  let lastRegExp = /^[A-Z][a-z]{2,30}$/;
  let userRegExp = /^[A-Z][.][A-Z][a-z]{2,70}$/;
  let emailRegExp = /^(?=.*[0-9].*[0-9])[^@\s]+@[^\s@]+\.[^\s@]+$/;
  let passwordRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  let confpasswordRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  let validateName = (inputRef, resultRef, regExp) => {
    let result = regExp.test(inputRef.current.value);

    if (result === true) {
      resultRef.current.innerHTML = "valid";
      resultRef.current.style.backgroundColor = "green";
    } else {
      resultRef.current.innerHTML = "Invalid";
      resultRef.current.style.backgroundColor = "red";
    }
  };
  let languages = {
    html: false,
    css: false,
    js: false,
    reactJs: false,
    nodeJs:false,
    expressJs: false,
    mongodb:false,
    mysql: false,
  };

  let OnClick = () => {
    let salutation;

    if (userGender === "Male") {
      salutation = "Mr.";
    } else {
      if (userMaritalStatus === "single") {
        salutation = "Ms.";
      } else {
        salutation = "Mrs.";
      }
    }

    let skills;
    if (languages.html && languages.css && languages.js && languages.reactJs && languages.nodeJs && languages.expressJs && languages.mongodb && languages.mysql) {
        skills="Mern full stack web developer";
    } else if(languages.html){
        skills="Frontend developer";
    } else if(languages.css && languages.js && languages.reactJs){
        skills="Frontend developer";
    }else if(languages.nodeJs && languages.expressJs && languages.mongodb && languages.mysql ){
        skills="Backend developer";
    }else {
        skills="Full stack developer";
    }

    infoRef.current.innerHTML = `${salutation} ${userInputRef.current.value} is from ${stateSelectRef.current.value} state knowns the
    ${languages.html === true ? "html" : ""}
    ${languages.css === true ? "css" : ""} 
    ${languages.js === true ? "javascript" : ""} 
    ${languages.reactJs === true ? "react.js" : ""} 
    ${languages.nodeJs === true ? "node.js" : ""} ${languages.expressJs === true ? "express.js" : ""} 
    ${languages.mongodb === true ? "mongodb" : ""} 
    ${languages.mysql === true ? "my sql" : ""}  as a ${skills}  `;
  };

  return (
    <div className="App">
      <form className="App1">
        <h2>SIGN UP</h2>
        <div>
          <label htmlFor="name">First Name:</label>
          <input
            type="text"
            id="name"
            placeholder="enter first name"
            ref={firstInputRef}
            onChange={() => {
              validateName(firstInputRef, firstResultRef, firstRegExp);
            }}
          ></input>
          <span ref={firstResultRef}></span>
        </div>
        <div>
          <label htmlFor="last"> Last Name:</label>
          <input
            type="text"
            id="last"
            placeholder="enter last name"
            ref={lastInputRef}
            onChange={() => {
              validateName(lastInputRef, lastResultRef, lastRegExp);
            }}
          ></input>
          <span ref={lastResultRef}></span>
        </div>
        <div>
          <label htmlFor="user"> User Name:</label>
          <input
            type="text"
            id="user"
            placeholder="enter user name"
            ref={userInputRef}
            onChange={() => {
              validateName(userInputRef, userResultRef, userRegExp);
            }}
          ></input>
          <span ref={userResultRef}></span>
        </div>
        <div>
          <label>Gender:</label>
          <input
            type="radio"
            name="gender"
            ref={maleRBRef}
            onChange={() => {
              if (maleRBRef.current.checked === true) {
                userGender = "Male";
              }
            }}
          ></input>
          <label className="gender">Male</label>
          <input
            type="radio"
            name="gender"
            ref={femaleRBRef}
            onChange={() => {
              if (femaleRBRef.current.checked === true) {
                userGender = "Female";
              }
            }}
          ></input>
          <label className="gender">Female</label>
        </div>
        <div>
          <label>Marital status:</label>
          <input
            type="radio"
            name="ms"
            onChange={(eventObject) => {
              if (eventObject.target.checked === true) {
                userMaritalStatus = "single";
              }
            }}
          ></input>
          <label className="gender">Single</label>
          <input
            type="radio"
            name="ms"
            onChange={(eventObject) => {
              if (eventObject.target.checked === true) {
                userMaritalStatus = "married";
              }
            }}
          ></input>
          <label className="gender">Married</label>
        </div>
        <div>
          <label>State:</label>
          <select name="state" ref={stateSelectRef}>
            <option value="">Choose Your State</option>
            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadra and Nagar Haveli">
              Dadra and Nagar Haveli
            </option>
            <option value="Daman and Diu">Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Orissa">Orissa</option>
            <option value="Pondicherry">Pondicherry</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttaranchal">Uttaranchal</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="West Bengal">West Bengal</option>
          </select>
        </div>
        <div className="language1">
          <label >Select languages:</label>
          <input
            type="checkbox" 
            onChange={(eventObj) => {
              if (eventObj.target.checked === true) {
                languages.html = true;
              } else {
                languages.html = false;
              }
            }}
          ></input>
          <label className="skill">Html</label>

          <input
            type="checkbox"  
            onChange={(eventObj) => {
              if (eventObj.target.checked === true) {
                languages.css = true;
              } else {
                languages.css = false;
              }
            }}
          ></input>
          <label className="skill">Css</label>

          <input
            type="checkbox"  id="js"
            onChange={(eventObj) => {
              if (eventObj.target.checked === true) {
                languages.js = true;
              } else {
                languages.js = false;
              }
            }}
          ></input>
          <label className="skill">Javascript</label>

          <input
            type="checkbox"  
            onChange={(eventObj) => {
              if (eventObj.target.checked === true) {
                languages.reactJs = true;
              } else {
                languages.reactJs = false;
              }
            }}
          ></input>
          <label className="skill">React.js</label>

          <input
            type="checkbox" 
            onChange={(eventObj) => {
              if (eventObj.target.checked === true) {
                languages.nodeJs = true;
              } else {
                languages.nodeJs = false;
              }
            }}
          ></input>
          <label className="skill">Node.js</label>

          <input
            type="checkbox" 
            onChange={(eventObj) => {
              if (eventObj.target.checked === true) {
                languages.expressJs = true;
              } else {
                languages.expressJs = false;
              }
            }}
          ></input>
          <label className="skill">Express.js</label>

          <input
            type="checkbox" 
            onChange={(eventObj) => {
              if (eventObj.target.checked === true) {
                languages.mongodb = true;
              } else {
                languages.mongodb = false;
              }
            }}
          ></input>
          <label className="skill">Mongodb</label>

          <input
            type="checkbox"
            onChange={(eventObj) => {
              if (eventObj.target.checked === true) {
                languages.mysql = true;
              } else {
                languages.mysql = false;
              }
            }}
          ></input>
          <label className="skill">My Sql</label>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="enter email"
            ref={emailInputRef}
            onChange={() => {
              validateName(emailInputRef, emailResultRef, emailRegExp);
            }}
          ></input>
          <span ref={emailResultRef}></span>
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="enter password"
            ref={passwordInputRef}
            onChange={() => {
              validateName(passwordInputRef, passwordResultRef, passwordRegExp);
            }}
          ></input>
          <span ref={passwordResultRef}></span>
        </div>
        <div>
          <label htmlFor="password">Confirm Password:</label>
          <input
            type="password"
            id="password"
            placeholder="enter password"
            ref={confpasswordInputRef}
            onChange={() => {
              validateName(
                confpasswordInputRef,
                confpasswordResultRef,
                confpasswordRegExp
              );
            }}
          ></input>
          <span ref={confpasswordResultRef}></span>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="policy"></input>
          <label htmlFor="policy">
            I accept the Terms of Use & Privacy Policy
          </label>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              OnClick();
            }}>
            Signup
          </button>
        </div>
        <h6 ref={infoRef}> </h6>
      </form>
    </div>
  );
}

export default Signup;
