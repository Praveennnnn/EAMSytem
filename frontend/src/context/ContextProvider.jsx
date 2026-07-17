import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const ContextProvider = ({ children }) => {
  const stored = JSON.parse(localStorage.getItem("user") || "null")

  const [user, setUser] = useState(stored)

  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData))

    localStorage.setItem("loginTime",Date.now())
    setUser(userData)
  }

  const logout = () => {
    localStorage.removeItem("user")
    setUser(null)
  }

  const authenticated = !!user
  const role = user?.data?.role || null

  // useEffect(()=>{
  //   const checkSession =()=>{
  //     const loginTime =localStorage.getItem("loginTime")
  //     if(!loginTime) return;
  //     const now =Date.now();
  //     const FIFTEEN_MINUTES =15*60*1000;

  //     if(now -loginTime>FIFTEEN_MINUTES){
  //       logout();
  //       alert("session expired. pleace login again")
  //     }
  //   };
  //   checkSession();

  //   const interval =setInterval(checkSession,60000)
  //   return()=>clearInterval(interval)
  // },[]);

  return (
    <UserContext.Provider value={{ user, role, authenticated, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
