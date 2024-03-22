import React, { ReactNode, useState } from "react";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import { MuiTelInput } from "mui-tel-input";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./style.css";
interface LoginContainerProps {
  children: ReactNode;
  backgroundColor: string;
}
interface LoginDivisorProps {
  children: ReactNode;
  percentage: string;
  backgroundColor: string;
  customClass?: string;
}
interface StyledTabProps {
  label: string;
  value: string;
}
interface PasswordFieldProps {
  label: string;
  name: string;
  id: string;
  required?: boolean;
}

interface PhoneFieldProps {
  label: string;
  name: string;
  id: string;
  required?: boolean;
}
export const PasswordField: React.FC<PasswordFieldProps> = ({
  label,
  name,
  id,
  required,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextField
      size="small"
      type={showPassword ? "text" : "password"}
      label={label}
      required={required}
      name={name}
      id={id}
      margin="normal"
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              className="password-button"
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
export const PhoneField: React.FC<PhoneFieldProps> = ({
  label,
  name,
  id,
  required,
}) => {
  const [value, setValue] = React.useState("+55");

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <MuiTelInput
      size="small"
      margin="normal"
      required={required}
      fullWidth
      id={id}
      label={label}
      name={name}
      autoComplete="phone"
      value={value}
      onChange={handleChange}
    />
  );
};
export const LoginContainer: React.FC<LoginContainerProps> = ({
  children,
  backgroundColor,
}) => {
  return (
    <div style={{ width: "100%", backgroundColor: backgroundColor }}>
      {children}
    </div>
  );
};
export const LoginDivisor: React.FC<LoginDivisorProps> = ({
  children,
  percentage,
  backgroundColor,
  customClass,
}) => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: percentage,
        backgroundColor: backgroundColor,
      }}
      className={customClass}
    >
      {children}
    </div>
  );
};

export const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(20),
  marginRight: theme.spacing(1),
  color: "rgba(255, 255, 255, 0.7)",
  "&.Mui-selected": {
    color: "#fff",
    outline: "none ",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "rgba(100, 95, 228, 0.32)",
  },
}));
