import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
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

        <div className="signInBar">
          <p className="signInText">
            Sign in
          </p>
          <button className="signInButton">
         <ArrowRightIcon fill="white" width='34' height='34' />
          </button>
        </div>

        </form>

     {/* Goole AUTH */}
  

        <Link to='/signup' className="registerLink">Sign Up instead</Link>
        
      </div>
    </>
  );
};

export default Signin;
