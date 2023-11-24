import { Button, Divider, TextField, Typography } from "@mui/material";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="Login">
      <div className="formContainer">
        <div class="login-form">
          <Typography
            className="heading"
            sx={{ marginBottom: "32px", fontWeight: 600 }}
            variant="h4"
            gutterBottom
          >
            Log In
          </Typography>
          <TextField
            sx={{ marginBottom: "32px" }}
            className="field"
            id="filled-error"
            label="e-mail id or username"
            variant="outlined"
            size="small"
          />
          <TextField
            sx={{ marginBottom: "32px" }}
            className="field"
            type="password"
            id="filled-error"
            label="password"
            variant="outlined"
            size="small"
          />
          <Button variant="contained">Sign in</Button>

          <div className="horizontal-bar" />
          <Link className="link" to="/signup">
            Not a member? Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
