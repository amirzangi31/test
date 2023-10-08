import React from "react";
import HeroLoginPage from "../modules/HeroLoginPage";
import LoginForm from "../modules/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex justify-between items-start ">
         <div className=" w-full md:w-6/12 min-h-screen flex justify-center items-center">
        <LoginForm /> 
      </div>
      <div className="bg-primary-dark min-h-screen w-6/12 rounded-tr-full rounded-br-full hidden md:block">
        <div className="flex justify-start items-center">
          <HeroLoginPage />
        </div>
      </div>
     
    </div>
  );
};

export default LoginPage;
