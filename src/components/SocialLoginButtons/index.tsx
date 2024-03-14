import Button from "@mui/material/Button";

import { FcGoogle } from "react-icons/fc";

import { GrApple } from "react-icons/gr";
const GoogleButton = () => (
  <Button
    variant="contained"
    startIcon={<FcGoogle />}
    fullWidth
    sx={{
      backgroundColor: "rgb(234, 236, 239)",
      color: "black",
      fontWeight: "bold",
      my: 1,
      p: 1,
      textTransform: "none",
      marginBottom: "8px",
      "&:hover": {
        backgroundColor: "#f5f5f5",
      },
    }}
  >
    Continue com o Google
  </Button>
);

const AppleButton = () => (
  <Button
    variant="contained"
    startIcon={<GrApple />} // Substitua por um ícone SVG personalizado se necessário
    fullWidth
    sx={{
      backgroundColor: "rgb(234, 236, 239)",
      color: "black",
      fontWeight: "bold",
      my: 1,
      p: 1,
      textTransform: "none",
      "&:hover": {
        backgroundColor: "#f5f5f5",
      },
    }}
  >
    Continue com a Apple
  </Button>
);

const SocialLoginButtons = () => {
  return (
    <>
      <GoogleButton />
      <AppleButton />
    </>
  );
};
export { AppleButton, GoogleButton };
export default SocialLoginButtons;
