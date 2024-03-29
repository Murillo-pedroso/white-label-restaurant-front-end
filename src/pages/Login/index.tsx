import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import "./style.css";
import SocialLoginButtons from "@/components/SocialLoginButtons";
import { Typography } from "@mui/material";
import {
  LoginContainer,
  LoginDivisor,
  PasswordField,
  PhoneField,
  StyledTab,
} from "@/components/LoginUtils";
interface ImageComponentProps {
  bucketName: string;
  objectKey: string;
}
const ImageComponent: React.FC<ImageComponentProps> = ({
  bucketName,
  objectKey,
}) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const REGION = "us-east-1"; // e.g., "us-west-2"
    const s3Client = new S3Client({
      region: REGION,
      credentials: {
        accessKeyId: import.meta.env.VITE_REACT_APP_ACCESS_TOKEN || "",
        secretAccessKey: import.meta.env.VITE_REACT_APP_SECRET_TOKEN || "",
      },
    });

    const fetchImageUrl = async () => {
      const command = new GetObjectCommand({
        Bucket: bucketName,
        Key: objectKey,
      });

      try {
        const signedUrl = await getSignedUrl(s3Client, command, {
          expiresIn: 3600,
        });
        setImageUrl(signedUrl);
      } catch (error) {
        console.error("Error fetching signed URL", error);
      }
    };

    fetchImageUrl();
  }, [bucketName, objectKey]);

  return imageUrl ? (
    <img
      src={imageUrl}
      alt={"logo"}
      width={104}
      loading="lazy"
      style={{ margin: "auto" }}
    />
  ) : (
    <div>Loading...</div>
  );
};
export default function Login() {
  const pageProps = {
    "primary-color": "#675997",
    "secondary-color": "#F0F0F0",
    "logo-path": "src/assets/images/logo.png",
    "restaurant-name": "restaurant-name",
  };

  const [resolveMenu, setResolveMenu] = useState("1");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <LoginContainer backgroundColor={pageProps["secondary-color"]}>
      <TabContext value={resolveMenu}>
        <LoginDivisor
          backgroundColor={pageProps["primary-color"]}
          percentage="25vh"
          customClass="sign-up-menu"
        >
          <ImageComponent
            bucketName={pageProps["restaurant-name"]}
            objectKey="images/logo/logo.png"
          />

          <Box sx={{ marginTop: "auto" }}>
            <TabList
              onChange={(_, newValue) => setResolveMenu(newValue)}
              aria-label="lab API tabs example"
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#D97D54",
                },
              }}
              centered
            >
              <StyledTab label="Login" value="1" />
              <StyledTab label="Cadastre-se" value="2" />
            </TabList>
          </Box>
        </LoginDivisor>
        <LoginDivisor
          percentage="75vh"
          backgroundColor={pageProps["secondary-color"]}
        >
          <TabPanel value="1" sx={{ py: "8px", px: "24px" }}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 1 }}
                >
                  <TextField
                    size="small"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    size="small"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Senha"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox value="remember" color="primary" size="small" />
                    }
                    label="Lembrar-me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      my: 1.5,
                      p: 1.5,
                      backgroundColor: pageProps["primary-color"],
                    }}
                  >
                    Entrar
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="forgot-password" variant="body2">
                        Esqueceu a senha?
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  my: 2,
                }}
              >
                <Box sx={{ flexGrow: 1, height: "1px", bgcolor: "grey.500" }} />
                <Box sx={{ mx: 2 }}>
                  <Typography variant="caption" sx={{ px: 1 }}>
                    OU
                  </Typography>
                </Box>
                <Box sx={{ flexGrow: 1, height: "1px", bgcolor: "grey.500" }} />
              </Box>
              <SocialLoginButtons />
            </Container>
          </TabPanel>
          <TabPanel value="2" sx={{ py: "8px", px: "24px" }}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{
                    mt: 1,
                  }}
                >
                  <TextField
                    size="small"
                    margin="normal"
                    required
                    fullWidth
                    id="full_name"
                    label="Nome completo"
                    name="full_name"
                    autoComplete="full_name"
                    autoFocus
                  />
                  <TextField
                    size="small"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                  />
                  <PhoneField />
                  <PasswordField
                    id="password"
                    name="password"
                    label="Senha"
                    required
                  />
                  <PasswordField
                    id="confirm-password"
                    name="confirm-password"
                    label="Confirme a senha"
                    required
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      my: 1.5,
                      p: 1.5,
                      backgroundColor: pageProps["primary-color"],
                    }}
                  >
                    Cadastrar
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  my: 2,
                }}
              >
                <Box sx={{ flexGrow: 1, height: "1px", bgcolor: "grey.500" }} />
                <Box sx={{ mx: 2 }}>
                  <Typography variant="caption" sx={{ px: 1 }}>
                    OU
                  </Typography>
                </Box>
                <Box sx={{ flexGrow: 1, height: "1px", bgcolor: "grey.500" }} />
              </Box>
              <SocialLoginButtons />
            </Container>
          </TabPanel>
        </LoginDivisor>
      </TabContext>
    </LoginContainer>
  );
}
