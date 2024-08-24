// import React, { useState, useContext } from "react";
// import axios from "axios";
// import { AiOutlineLoading } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "./AuthProvider";

// const SignIn: React.FC = () => {
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const navigate = useNavigate();
//   const { currentUser, login, logout } = useContext(AuthContext);

//   const handleLogin = async () => {
//     try {
//       setLoading(true);
//       const userData = await login();
//       const response = await axios.post("http://localhost:8080/api/register", {
//         email: userData.email,
//         token: userData.accessToken,
//         firebaseId: userData.uid,
//       });

//       if (
//         response.data.userExists ||
//         response.data.message === "User registered successfully"
//       ) {
//         navigate("/dashboard");
//       } else {
//         setError(response.data.message);
//       }
//     } catch (error) {
//       setError("An error occurred. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       await logout();
//       console.log("User logged out");
//     } catch (error) {
//       setError("An error occurred. Please try again later.");
//     }
//   };

//   return (
//     <>
//       {error && <p className="text-red-500 mb-2">{error}</p>}
//       {currentUser ? (
//         <button
//           disabled={loading}
//           onClick={handleLogout}
//           className="flex items-center justify-center px-5 py-2 bg-blue-600 text-white font-semibold rounded shadow disabled:opacity-70 disabled:cursor-not-allowed"
//         >
//           {loading ? (
//             <AiOutlineLoading className="animate-spin" />
//           ) : (
//             <span className="text-lg">Log Out</span>
//           )}
//         </button>
//       ) : (
//         <button
//           disabled={loading}
//           onClick={handleLogin}
//           className="flex items-center justify-center px-5 py-2 bg-blue-600 text-white font-semibold rounded shadow disabled:opacity-70 disabled:cursor-not-allowed"
//         >
//           {loading ? (
//             <AiOutlineLoading className="animate-spin" />
//           ) : (
//             <span className="text-lg">Get Started</span>
//           )}
//         </button>
//       )}
//     </>
//   );
// };

// export default SignIn;

import React, { useState } from "react";
import axios from "axios";
import { AiOutlineLoading } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const SocialLogin: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { user, signInWithGoogle, signOut } = useAuth();

  const handleLogin = async () => {
    try {
      setLoading(true);
      await signInWithGoogle();
      const response = await axios.post("http://localhost:8080/api/register", {
        email: user?.email,
        firebaseId: user?.uid,
      });

      if (
        response.data.userExists ||
        response.data.message === "User registered successfully"
      ) {
        navigate("/dashboard");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut();
      console.log("User logged out");
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {user ? (
        <button
          disabled={loading}
          onClick={handleLogout}
          className="flex items-center justify-center px-5 py-2 bg-blue-600 text-white font-semibold rounded shadow disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <AiOutlineLoading className="animate-spin" />
          ) : (
            <span className="text-lg">Log Out</span>
          )}
        </button>
      ) : (
        <button
          disabled={loading}
          onClick={handleLogin}
          className="flex items-center justify-center px-5 py-2 bg-blue-600 text-white font-semibold rounded shadow disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <AiOutlineLoading className="animate-spin" />
          ) : (
            <span className="text-lg">Get Started</span>
          )}
        </button>
      )}
    </>
  );
};

export default SocialLogin;
