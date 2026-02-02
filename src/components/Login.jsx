import { useState } from "react";
import "./Login.css";
import phone from "./phone.png";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }

    alert(`Logging in as ${username}`);
  };

  const handleFacebookLogin = () => {
    alert("Facebook login clicked (API not connected yet)");
  };

  const handleForgotPassword = () => {
    alert("Redirect to forgot password page");
  };

  return (
    <div className="main-container">
      <div className="phone-section">
        <img src={phone} alt="Instagram preview" />
      </div>

      <div className="form-section">
        {/* LOGIN BOX */}
        <div className="login-box">
          <h1 className="logo">Instagram</h1>

          <input
            type="text"
            placeholder="Phone number, username, or email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-btn" onClick={handleLogin}>
            Log in
          </button>

          <div className="divider">
            <span></span>
            <p>OR</p>
            <span></span>
          </div>

          <div className="fb-login" onClick={handleFacebookLogin}>
            <span className="fb-icon">f</span> Log in with Facebook
          </div>

          <p className="forgot" onClick={handleForgotPassword}>
            Forgotten your password?
          </p>
        </div>

        {/* SIGN UP BOX */}
        <div className="signup-box">
          Don&apos;t have an account? <span>Sign up</span>
        </div>

        {/* APP DOWNLOAD */}
        <div className="apps">
          <p>Get the app.</p>
          <div className="store-buttons">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
            />
            <img
              src="https://developer.microsoft.com/store/badges/images/English_get-it-from-MS.png"
              alt="Get it from Microsoft"
            />
          </div>
        </div>

        {/* DISCLAIMER */}
        <p className="disclaimer">
          This is a demo project for educational and learning purposes only.
          Not affiliated with Instagram.
        </p>
      </div>
    </div>
  );
}

export default Login;
