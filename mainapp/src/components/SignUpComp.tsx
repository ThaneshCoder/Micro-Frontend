import Sheet from "@mui/joy/Sheet";
import { AssignmentIcon } from "./imports/AllImports";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import { userName, mailId, password } from "./reusables/ValidationForm";
import {
  Button,
  CssBaseline,
  FormControl,
  FormLabel,
  Input,
  Typography,
} from "@mui/material";

export default function SignUpComp(props) {
  const [loginInfo, setLoginInfo] = useState({
    userName: "",
    email: "",
    password: "",
  });

  let handleChange = (e) => {
    let { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };
  let handleSubmit = () => {
    console.log("Data should get Save");
  };
  return (
    <main elevation={5}>
      <CssBaseline />
      <Sheet
        sx={{
          width: 300,
          mx: "auto",
          my: 4,
          py: 3,
          px: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: "sm",
          boxShadow: "md",
        }}
        variant="outlined"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Avatar sx={{ bgcolor: "#239429" }}>
            <AssignmentIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
        </div>

        <FormControl>
          <FormLabel>User Name</FormLabel>
          <Input
            name="userName"
            type="text"
            placeholder="Enter your Name"
            value={loginInfo.userName}
            onChange={(e) => {
              handleChange(e);
            }}
            autoComplete="off"
          />
          <div style={{ color: "red", textAlign: "center" }}>
            {loginInfo.userName ? userName(loginInfo.userName) : null}
          </div>
        </FormControl>

        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            type="email"
            placeholder="Enter your MailId"
            value={loginInfo.email}
            onChange={(e) => {
              handleChange(e);
            }}
            autoComplete="off"
          />
          <div style={{ color: "red", textAlign: "center" }}>
            {loginInfo.email ? mailId(loginInfo.email) : null}
          </div>
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            placeholder="password"
            value={loginInfo.password}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <div style={{ color: "red", textAlign: "center", fontSize: "15px" }}>
            {loginInfo.password ? password(loginInfo.password) : null}
          </div>
        </FormControl>
        <Button
          sx={{ mt: 1 }}
          onClick={() => {
            handleSubmit();
          }}
        >
          Sign Up
        </Button>
      </Sheet>
    </main>
  );
}
