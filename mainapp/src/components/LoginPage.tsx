import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import "../App.css";
import "../Style.scss";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../redux/Store";
import { storeUser } from '../redux/UserSlicer';

type Inputs = {
  username: string;
  password: string;
};

type AllUser = {
  username: string;
  password: string;
};

const LoginPage = () => {
  let allUser = useSelector((state: RootStore) => state.user.allUser);

  let dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const [submitted, setSubmitted] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    let flag=false;
    allUser.forEach((e:AllUser)=>{
      if(e.username===data.username && e.password===data.password){
        setSubmitted(true);
        dispatch(storeUser(e))
        flag=true
        navigate("./servicelist");
      }
    });
    flag?console.log("User Logged In"):console.log("Invalid Data")
    
    setTimeout(() => {
      setSubmitted(false);
      reset(); // Clear form data
    }, 2000); // Clear message after 3 seconds
  };

  return (
    <div className="myfont h-screen flex justify-center align-middle ">
        <form className="border-2 border-white p-5 w-72 h-64 mt-40">
          <header className="mycolor pb-2">Login Page</header>
          <input
            placeholder="username"
            className="p-2 rounded-md"
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 6,
                message: "Username must be at least 6 characters long",
              },
            })}
          ></input>
          <div className="mytext1">
            {" "}
            {errors.username && <span>{errors.username.message} </span>}
          </div>
          <p className="h-5"></p>
          <input
            className="mytext1 p-2 rounded-md "
            placeholder="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            })}
          ></input>
          <div className="mytext1">
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <button onClick={handleSubmit(onSubmit)} className="bg-white p-2 mt-4 text-cyan-700 rounded-md" >
            Submit
          </button>
          {submitted && (
            <div style={{ color: "green" }}>Form submitted successfully!</div>
          )}
        </form>
    
    </div>
  );
}
export default LoginPage;
