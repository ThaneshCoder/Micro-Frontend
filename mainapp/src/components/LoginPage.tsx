import { useForm, SubmitHandler } from "react-hook-form";
import { Container } from "@mui/material";
import fireflink from "../assets/fireflink.png"

type Inputs = {
  username: string;
  password: string;
};

function LoginPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("username")); // watch input value by passing the name of it

  return (
   <div>
     <img src= {fireflink}></img>
     <Container
    
    style={{
      width: "300px",
      height: "200px",
      padding: "0px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      
    
    }}
  >
   
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="username" {...register("username")}></input>
      {/* {errors.username && <span>This field is required</span>} */}
      <p></p>
      <input
        placeholder="password"
        {...register("password", { required: true })}
      ></input>
      {errors.password && <span>This field is required</span>}
      <p></p>
      <input type="submit" />
    </form>
  </Container>
   </div>
  );
}
export default LoginPage;
