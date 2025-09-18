import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../config";

const Signin = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [message, setMessage] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);

  const signinUsernameRef = useRef(null);
  const signinPasswordRef = useRef(null);
  const signinEmailRef = useRef(null);
  const signupUsernameRef = useRef(null);
  const signupPasswordRef = useRef(null);
  const signupEmailRef = useRef(null);

  const navigate = useNavigate();

  const handleSignin = async () => {
    setMessage("");
    const username = signinUsernameRef.current?.value.trim();
    const email = signinEmailRef.current?.value.trim();
    const password = signinPasswordRef.current?.value.trim();

    if (!username || !email || !password) {
      setMessage("Please fill in all fields.");
      return;
    }

    setIsSigningIn(true);
    try {
      // NOTE: `BACKEND_URL` is assumed to be defined globally or imported from a configuration file.
      // If running locally, you might need to hardcode the URL or provide a placeholder.
      const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
        username,
        email,
        password,
      });

      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      setMessage("Sign in successful!");
      navigate("/dashboard");
    } catch (error) {
      setMessage("Sign in failed. Please try again.");
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleSignup = async () => {
    setMessage("");
    const username = signupUsernameRef.current?.value.trim();
    const email = signupEmailRef.current?.value.trim();
    const password = signupPasswordRef.current?.value.trim();

    if (!username || !email || !password) {
      setMessage("Please fill in all fields.");
      return;
    }

    setIsSigningUp(true);
    try {
      await axios.post(`${BACKEND_URL}/api/v1/signup`, {
        username,
        email,
        password,
      });
      setMessage("Sign up successful! You can now sign in.");
      setIsSignUp(false);
    } catch (error) {
      setMessage("Sign up failed. Please try again.", error);
    } finally {
      setIsSigningUp(false);
    }
  };

  const socialIcons = [
    {
      label: "Facebook",
      icon: (
        <svg
          className="w-5 h-5 fill-current text-blue-600"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-2.5v-1.5c0-.827.673-1.5 1.5-1.5h1c.827 0 1.5.673 1.5 1.5v2.5h2.5c.827 0 1.5.673 1.5 1.5v1.5c0 .827-.673 1.5-1.5 1.5h-2.5v7c0 .827-.673 1.5-1.5 1.5h-2.5c-.827 0-1.5-.673-1.5-1.5v-7h-2.5c-.827 0-1.5-.673-1.5-1.5v-1.5c0-.827.673-1.5 1.5-1.5h2.5v-2.5c0-1.381 1.119-2.5 2.5-2.5h2.5c1.381 0 2.5 1.119 2.5 2.5v2.5h2.5z" />
        </svg>
      ),
    },
    {
      label: "Google Plus",
      icon: (
        <svg
          className="w-5 h-5 fill-current text-red-600"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.001 24c-6.626 0-11.999-5.372-11.999-12s5.373-12 11.999-12c6.627 0 12 5.372 12 12s-5.373 12-12 12zm0-22c-5.519 0-9.999 4.48-9.999 10s4.48 10 9.999 10 10-4.48 10-10-4.481-10-10-10zm-3 15h6v2h-6v-2zm-3-3h12v2h-12v-2zm0-3h12v2h-12v-2zm0-3h12v2h-12v-2zM12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zM7 11h2v-2h-2v2zm0 3h2v-2h-2v2zm0 3h2v-2h-2v2zm3-6h2v-2h-2v2zm3 0h2v-2h-2v2zm3 0h2v-2h-2v2zm0 3h2v-2h-2v2zm0 3h2v-2h-2v2zm-6-6h2v-2h-2v2zm0 3h2v-2h-2v2zm0 3h2v-2h-2v2z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      icon: (
        <svg
          className="w-5 h-5 fill-current text-blue-800"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.766s.784-1.766 1.75-1.766 1.75.79 1.75 1.766-.783 1.766-1.75 1.766zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 p-4 font-sans">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col md:flex-row min-h-[500px]">
        {/* Form Container */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col items-center justify-center">
          {isSignUp ? (
            // Sign Up Form
            <>
              <h1 className="text-3xl font-extrabold mb-4 text-gray-900">
                Create Account
              </h1>
              <div className="flex space-x-4 mb-6">
                {socialIcons.map((item, i) => (
                  <a
                    key={i}
                    href="#"
                    className="border border-gray-300 rounded-full p-3 text-gray-600 hover:text-blue-600 transition"
                    aria-label={`Sign up with ${item.label}`}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
              <input
                ref={signupUsernameRef}
                type="text"
                placeholder="Username"
                className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
                autoComplete="username"
              />
              <input
                ref={signupEmailRef}
                type="email"
                placeholder="Email"
                className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
                autoComplete="email"
              />
              <input
                ref={signupPasswordRef}
                type="password"
                placeholder="Password"
                className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
                autoComplete="new-password"
              />
              <button
                onClick={handleSignup}
                className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition"
                disabled={isSigningUp}
              >
                {isSigningUp ? "Creating..." : "Sign Up"}
              </button>
            </>
          ) : (
            // Sign In Form
            <>
              <h1 className="text-3xl font-extrabold mb-4 text-gray-900">
                Sign In
              </h1>
              <div className="flex space-x-4 mb-6">
                {socialIcons.map((item, i) => (
                  <a
                    key={i}
                    href="#"
                    className="border border-gray-300 rounded-full p-3 text-gray-600 hover:text-blue-600 transition"
                    aria-label={`Sign in with ${item.label}`}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
              <input
                ref={signinUsernameRef}
                type="text"
                placeholder="Username"
                className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
                autoComplete="username"
              />
              <input
                ref={signinEmailRef}
                type="email"
                placeholder="Email"
                className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
                autoComplete="email"
              />
              <input
                ref={signinPasswordRef}
                type="password"
                placeholder="Password"
                className="w-full mb-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
                autoComplete="current-password"
              />
              <a
                href="#"
                className="self-start text-blue-600 text-sm mb-6 hover:underline"
              >
                Forgot your password?
              </a>
              <button
                onClick={handleSignin}
                className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition"
                disabled={isSigningIn}
              >
                {isSigningIn ? "Signing In..." : "Sign In"}
              </button>
            </>
          )}
          {message && (
            <div className="mt-4 text-sm text-red-600">{message}</div>
          )}
        </div>

        {/* Static Panel */}
        <div className="hidden md:flex w-1/2 p-8 md:p-12 bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-700 text-white flex-col items-center justify-center text-center">
          {isSignUp ? (
            <>
              <h2 className="text-3xl font-extrabold mb-4">Welcome Back!</h2>
              <p className="mb-8 max-w-xs font-light">
                To keep connected with us, please login with your personal info.
              </p>
              <button
                onClick={() => setIsSignUp(false)}
                className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition"
              >
                Sign In
              </button>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-extrabold mb-4">Hello, Friend!</h2>
              <p className="mb-8 max-w-xs font-light">
                Enter your personal details and start your journey with us.
              </p>
              <button
                onClick={() => setIsSignUp(true)}
                className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signin;
