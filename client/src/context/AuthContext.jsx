import { createContext, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const getLocalStorageUser = () => {
    const storedUser = localStorage.getItem("authKey");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  };

  useEffect(() => {
    getLocalStorageUser();
  }, []);

  console.log("My current user: " + currentUser);

  const handleLogin = async (user) => {
    await axios
      .post("http://localhost:3001/login-page", user)
      .then(function (response) {
        console.log(response);
        toast.success(response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        localStorage.setItem("authKey", JSON.stringify(response.data.user));
        setCurrentUser(JSON.parse(localStorage.getItem("authKey")));
        // setCurrentUser(response.data.user);
        // localStorage.setItem(response.data.user);
      })
      .catch(function (error) {
        console.log(error);
        toast.error(error.response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("authKey");
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
