import { useForm, SubmitHandler } from "react-hook-form";
import "../App.css";
import "../Style.scss";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../redux/Store";
import { storeUser } from '../redux/UserSlicer';
import { useState } from 'react';
import WordRenderer from './WordRenderer';


type Inputs = {
  username: string;
  password: string;
};

type AllUser = {
  username: string;
  password: string;
};

export default function LoginComp() {
  let allUser = useSelector((state: RootStore) => state.user.allUser);
  const [toast, setToast] = useState({ open: false, type: "", msg: "" })

  let dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    let flag = false;
    allUser.forEach((e: AllUser) => {
      if (e.username === data.username && e.password === data.password) {
        setToast({ open: true, type: "green", msg: "User Logged In" }) 
        dispatch(storeUser(e))
        flag = true
        setTimeout(() => {
          navigate("./servicelist");
        }, 2000); // Clear message after 3 seconds

      }
    });
    flag ? null: setToast({ open: true, type: "red", msg: "User Data is not Available" })

    setTimeout(() => {
      reset(); // Clear form data
      setToast({ open: false, type: "green", msg: "User Logged In" })
    }, 2000); // Clear message after 3 seconds
  };

  const words: string[] = ["Dress", "Laptop", "Mobile", "Games", "Food"];

  let ToasterComp = () => {
    return <div className='flex justify-center'>
      <div className={`text-white rounded-xl p-2 w-72 m-5 text-center text-xl transition-transform animate-bounce`}
      style={{backgroundColor:toast.type}}
      >{toast.msg}</div>
    </div>
  }
  return (
    <>
      <div className="flex justify-center ">

        {
          toast.open ? ToasterComp() : null
        }
      </div>


      <div className="flex justify-end flex-wrap">
        <div className='flex flex-col justify-center text-3xl  items-center w-6/12 text-white'>
          <div className=' text-white text-5xl text-center my-5'>Shop your Products here.</div>
          <WordRenderer words={words} />
        </div>
        <div className=" bg-slate-100 p-10 m-16 bg-opacity-75 rounded-lg">
          <h2 className="my-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Log in to your account
          </h2>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="userName" className="block text-sm font-medium leading-6 text-gray-900">
                User Name
              </label>
              <div className="mt-2">
                <input
                  id="userName"
                  type="text"
                  autoComplete="userName"
                  required
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("username", {
                    required: "Username is required",
                    minLength: {
                      value: 6,
                      message: "Username must be at least 6 characters long",
                    },
                  })}
                />
              </div>
            </div>
            <div className="mytext1">
              {" "}
              {errors.username && <span>{errors.username.message} </span>}
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>

              </div>
              <div className="mt-2">
                <input
                  id="password"

                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                  })}
                />
              </div>
            </div>
            <div className="mytext1">
              {errors.password && <span>{errors.password.message}</span>}
            </div>
            <div >
              <button
                type="submit"
                onClick={handleSubmit(onSubmit)}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

              >
                Sign in
              </button>
            </div>
          </form>


        </div>

      </div>
    </>
  )
}
