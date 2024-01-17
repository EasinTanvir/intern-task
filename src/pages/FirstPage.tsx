import { useEffect, useState } from "react";
import { Stack, Alert } from "@mui/material";
import UserForm from "../components/UserForm";

const FirstPage = () => {
  const [authStatus, setAuthStatus] = useState<boolean>(false);

  useEffect(() => {
    const loginStatus: string = localStorage.getItem("login-status")
      ? JSON.parse(localStorage.getItem("login-status")!)
      : "";
    if (loginStatus) {
      setAuthStatus(false);
    } else {
      setAuthStatus(true);
    }
  }, []);

  return (
    <>
      <UserForm />
      {!authStatus && (
        <Stack width={500} margin="auto" marginTop={4}>
          <Alert severity="error">
            You must enter their details before accessing the page.
          </Alert>
        </Stack>
      )}
    </>
  );
};

export default FirstPage;
