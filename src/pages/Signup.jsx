import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => { 
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
     
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome back!</p>
        </header>

        <form>
        <input
            type="text"
            className="nameInput"
            placeholder="Name"
            id="name"
            value={name}
            onChange={onChange}
          />
          <input
            type="email"
            className="emailInput"
            placeholder="email"
            id="email"
            value={email}
            onChange={onChange}
          />
          <div className="passwordInputDiv">
            <input
              type={showPassword ? "text" : "password"}
              className="passwordInput"
              placeholder="password"
              id="password"
              value={password}
              onChange={onChange}
            />

            <img
              src={visibilityIcon}
              alt="show icon"
              className="showPassword"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          </div> 
        <Link to='/forgot-password'
        className="forgotPasswordLink"> 
         Forgot password
        </Link>

        <div className="signUpBar">
          <p className="signUpText">
            Sign Up
          </p>
          <button className="signUpButton">
         <ArrowRightIcon fill="white" width='34' height='34' />
          </button>
        </div>

        </form>

     {/* Goole AUTH */}
  

        <Link to='/signin' className="registerLink">Sign In</Link>
        
      </div>
    </>
  );
};

export default Signup;
