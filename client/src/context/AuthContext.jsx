import { createContext, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = async (user) => {
    await axios
      .post("http://localhost:3000/user/login", user)
      .then(function (response) {
        console.log(response);
        toast.success(response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        setCurrentUser(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
        toast.error(error.response.data.error, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  const globalState = {
    user: currentUser,
    handleLogin,
    handleLogout,
  };

  console.log("User state: ", currentUser);
  return (
    <AuthContext.Provider value={globalState}>
      <ToastContainer></ToastContainer>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
