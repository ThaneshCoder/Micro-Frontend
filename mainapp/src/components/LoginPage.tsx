import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { Container } from "@mui/material";
import "../App.css";
import "../Style.scss"

type Inputs = {
  username: string;
  password: string;
};

function LoginPage() {
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
    setTimeout(() => {
      setSubmitted(false);
      reset(); // Clear form data
    }, 2000); // Clear message after 3 seconds
  };

  return (
    <div className="myfont" >
      <Container>
        <form onSubmit={handleSubmit(onSubmit)} className="box" >
       <header className="mycolor">Login Page</header>
          <input
            placeholder="username"
            {...register("username", {
              required: "Username is required",
              minLength: { value: 6, message: "Username must be at least 6 characters long" },
            })}
          ></input>
          {errors.username && <span>{errors.username.message} </span>}
          <p></p>
          <input
            placeholder="password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 8, message: "Password must be at least 8 characters long" }
              ,
            })}
          ></input>
          {errors.password && <span>{errors.password.message}</span>}
          <p></p>
          <input type="submit" />
          {submitted && <div style={{color:"green"}}>Form submitted successfully!</div>}
        </form>
       
      </Container>
    </div>
  );
}
export default LoginPage;