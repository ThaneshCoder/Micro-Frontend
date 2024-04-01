import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { Container } from "@mui/material";
import "../App.css";
import "../Style.scss";
import { useNavigate } from "react-router";

type Inputs = {
  username: string;
  password: string;
};

function LoginPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const [submitted, setSubmitted] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    setSubmitted(true);
    navigate("./servicelist");
    setTimeout(() => {
      setSubmitted(false);
      reset(); // Clear form data
    }, 2000); // Clear message after 3 seconds
  };

  return (
    <div className="myfont">
      <Container>
        <form className="box">
          <header className="mycolor">Login Page</header>
          <input
            placeholder="username"
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
            className="mytext1"
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
      </Container>
    </div>
  );
}
export default LoginPage;
