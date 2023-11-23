import { Button, TextField, Typography } from "@mui/material";
import "./login.css";

function Login() {
  return (
    <div className="Login">
      <div className="formContainer">
        <div class="form">
          <Typography
            className="heading"
            sx={{ marginBottom: "32px", fontWeight: 600 }}
            variant="h4"
            gutterBottom
          >
            Log in
          </Typography>
          <TextField
            sx={{ marginBottom: "32px" }}
            className="field"
            id="filled-error"
            label="e-mail id or username"
            variant="outlined"
          />
          <TextField
            sx={{ marginBottom: "32px" }}
            className="field"
            type="password"
            id="filled-error"
            label="password"
            variant="outlined"
          />
          <Button variant="contained">Sign in</Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
