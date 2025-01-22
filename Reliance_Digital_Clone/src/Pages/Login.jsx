import React, { useState } from 'react';
import{useNavigate} from 'react-router-dom'

function LoginRegister() {
  const [isRegister, setIsRegister] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();

    // Retrieve existing users from localStorage or initialize an empty array
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the email is already registered
    const existingUser = users.find((user) => user.email === registerEmail);
    if (existingUser) {
      setMessage(
        "Email is already registered. Please log in or use a different email."
      );
      return;
    }

    // Store user data in localStorage
    const newUser = {
      name: registerName,
      email: registerEmail,
      password: registerPassword,
    };


    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    setMessage("Registration successful! Please log in.");
    setRegisterName("");
    setRegisterEmail("");
    setRegisterPassword("");
    setIsRegister(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve users array from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check for matching user
    const user = users.find(
      (user) => user.email === loginEmail && user.password === loginPassword
    );

    if (user) {
      setMessage(`Welcome back, ${user.name}!`);
    } else {
      setMessage("Invalid email or password. Please try again.");
    }

    setLoginEmail("");
    setLoginPassword("");

    
  };

  return (
    <>
      <div className="flex gap-8 pt-10 pb-10">
        {/* Banner */}
        <img
          className="w-[867px] h-[165px] pl-6"
          src="https://www.reliancedigital.in/akamai/images/web/LoginWebBanner.jpeg"
          alt="Login Banner"
        />

        {/* Form Section */}
        <div className="shadow-md h-fit py-4 px-6 rounded-md bg-white">
          {/* Toggle Buttons */}
          <div className="flex items-center justify-center space-x-4 pb-4 border-b-2 border-gray-200">
            <button
              className={`text-[18px] font-semibold ${
                !isRegister ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'
              }`}
              onClick={() => setIsRegister(false)}
            >
              Login
            </button>
            <button
              className={`text-[18px] font-semibold ${
                isRegister ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'
              }`}
              onClick={() => setIsRegister(true)}
            >
              Register
            </button>
          </div>

          {/* Login Form */}
          {!isRegister && (
            <form onSubmit={handleLogin} className="w-[420px] text-center">
              <input
                className="border p-2 outline-blue-800 w-[369px] border-[#D8E2EF] mb-4 mt-4"
                type="email"
                placeholder="Enter Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
              <br />
              <input
                className="border p-2 outline-blue-800 w-[369px] border-[#D8E2EF] mb-4"
                type="password"
                placeholder="Enter Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
              <br />
              <button
                
                className="bg-[#E42529] text-white font-semibold uppercase rounded-sm w-[369px] p-2"
                type="submit"
                onClick={()=>navigate('/')}
              >
                Login
              </button>
            </form>
          )}

          {/* Register Form */}
          {isRegister && (
            <form onSubmit={handleRegister} className="w-[420px] text-center">
              <input
                className="border p-2 outline-blue-800 w-[369px] border-[#D8E2EF] mb-4 mt-4"
                type="text"
                placeholder="Enter Name"
                value={registerName}
                onChange={(e) => setRegisterName(e.target.value)}
                required
              />
              <br />
              <input
                className="border p-2 outline-blue-800 w-[369px] border-[#D8E2EF] mb-4"
                type="email"
                placeholder="Enter Email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                required
              />
              <br />
              <input
                className="border p-2 outline-blue-800 w-[369px] border-[#D8E2EF] mb-4"
                type="password"
                placeholder="Enter Password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                required
              />
              <br />
              <button
                className="bg-[#E42529] text-white font-semibold uppercase rounded-sm w-[369px] p-2"
                type="submit"
              >
                Register
              </button>
            </form>
          )}

          {/* Message Section */}
          {message && <p className="text-center text-green-600 mt-4">{message}</p>}
        </div>
      </div>
    </>
  );
}

export default LoginRegister;
