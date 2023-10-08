import React, { useEffect, useState } from "react";

//Pngs
import UserPng from "../../assets/Vector.png";
import PasswordPng from "../../assets/hidden pass.png";
import LanguageButton from "./LanguageButton";

//utils
import { validate } from "../../utils/validateForm";
//services
import { toastify } from "../../services/tostify";


const LoginForm = () => {
  const [form, setForm] = useState({
    name: "",
    password: "",
  });

  const [hiddenPas, setHiddenPas] = useState(false);

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({
    name: false,
    password: false,
  });

  useEffect(() => {
    setErrors(validate(form));
  }, [form]);



  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const fucosHandler = (e) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  //send information for login
  const submitHandler = (e) => {
    e.preventDefault()
   if(Object.keys(validate(form)).length){
    toastify("error" , "اطلاعات را به صورت کامل وارد کنید")
   }else {
    toastify("success" , "ورود با موفقیت انجام شد")
   }
  };

  return (
    <form className="w-10/12 sm:w-8/12 mx-auto  min-h-[calc(100vh-200px)] flex justify-between flex-col">
      <div>
        <LanguageButton />
      </div>
      <h1 className="uppercase text-[65px] text-primary-main text-center">
        rahad
      </h1>
      <p className="font-[500] text-[18px] text-text-blue text-center">
        اطلاعات حساب کاربری خود را وارد کنید
      </p>
      <div className="w-full  flex flex-col items-start">
        <label htmlFor="userName" className=" my-2 mr-1 text-text-blue ">
          نام کاربری{" "}
        </label>
        <div
          className={`border 
          ${
            errors.name && !touched.name && "border-gray-dark"
          } 
          ${
            !errors.name && touched.name && "border-secondary-main"
          } 
          ${
            errors.name && touched.name && "border-error-main"
          } rounded-[10px] w-full flex justify-end items-center p-3`}
        >
          <input
            onFocus={fucosHandler}
            name="name"
            onChange={changeHandler}
            type="text"
            id="userName"
            className="bg-transparent border-none outline-none flex-1 placeholder:text-[12px] text-gray-dark"
            placeholder="نام کاربری خود را وارد کنید"
          />
          <span>
            <img src={UserPng} alt="icon" />
          </span>
        </div>
        {errors.name && touched.name && (
          <span className="text-[12px] text-error-main ">{errors.name}</span>
        )}
      </div>
      <div className="w-full  flex flex-col items-start">
        <label htmlFor="Password" className=" my-2 mr-1 text-text-blue ">
          رمز عبور
        </label>
        <div
          className={`border 
          ${
            errors.password && !touched.password && "border-gray-dark"
          } 
          ${
            !errors.password && touched.password && "border-secondary-main"
          } 
          ${
            errors.password && touched.password && "border-error-main"
          } rounded-[10px] w-full flex justify-end items-center p-3`}
        >
          <input
            onFocus={fucosHandler}
            name="password"
            onChange={changeHandler}
            type={hiddenPas ? "text" : "password"}
            id="Password"
            className="bg-transparent border-none outline-none flex-1 placeholder:text-[12px] text-gray-dark"
            placeholder="رمز عبور خود را وارد کنید"
          />
          <span className="cursor-pointer">
            <img
              src={PasswordPng}
              alt="icon"
              onClick={() => setHiddenPas(!hiddenPas)}
            />
          </span>
        </div>
        {errors.password && touched.password && (
          <span className="text-[12px] text-error-main ">
            {errors.password}
          </span>
        )}
        <a href="#" className="w-full text-left text-primary-main">
          فراموشی رمز
        </a>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="btn btn-primary "
          onClick={submitHandler}
        >
          ورود
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
