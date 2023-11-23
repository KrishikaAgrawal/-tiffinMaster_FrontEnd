import {
  Button,
  FormControlLabel,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import "./signup.css";

function Signup() {
  return (
    <div className="signup">
      <div class="form">
        <Typography
          className="heading"
          sx={{ marginBottom: "16px", fontWeight: 600 }}
          variant="h4"
          gutterBottom
        >
          Sign Up
        </Typography>
        <TextField
          size="small"
          sx={{ marginBottom: "16px" }}
          className="field"
          id="filled-error"
          label="Name"
          variant="outlined"
        />
        <TextField
          size="small"
          sx={{ marginBottom: "16px" }}
          className="field"
          id="filled-error"
          label="Username"
          variant="outlined"
        />
        <TextField
          size="small"
          sx={{ marginBottom: "16px" }}
          className="field"
          id="filled-error"
          type="email"
          label="E-mail"
          variant="outlined"
        />
        <TextField
          size="small"
          //   sx={{ marginBottom: "16px" }}
          className="field"
          type="password"
          id="filled-error"
          label="Password"
          variant="outlined"
        />
        <div className="type">
          <FormControlLabel value="Seller" control={<Radio />} label="Seller" />
          <FormControlLabel
            value="Costumer"
            control={<Radio />}
            label="Costumer"
          />
        </div>
        <TextField
          size="small"
          sx={{ marginBottom: "16px" }}
          className="field"
          id="filled-error"
          label="Address"
          variant="outlined"
        />
        <TextField
          size="small"
          sx={{ marginBottom: "32px" }}
          className="field"
          id="filled-error"
          label="Phone Number"
          variant="outlined"
        />
        <Button className="button" variant="contained">Sign Up</Button>
      </div>
    </div>
  );
}

export default Signup;
