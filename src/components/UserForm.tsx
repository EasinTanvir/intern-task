import { Typography, Stack, Box, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import TextFields from "./TextFields";
import { useState } from "react";
import { SendData } from "../types";
import { useNavigate } from "react-router-dom";
const UserForm = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState<SendData>({
    userName: "",
    phoneNumber: null,
    email: "",
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const sendData: SendData = {
      userName: input.userName,
      phoneNumber: input.phoneNumber,
      email: input.email,
    };
    localStorage.setItem("user", JSON.stringify(sendData));
    navigate("second-page");
  };

  return (
    <Box
      width="450px"
      marginInline="auto"
      marginTop={20}
      padding={3}
      border={1}
      borderColor="black"
    >
      <form onSubmit={onSubmitHandler}>
        <Typography
          fontWeight={700}
          marginBlock={2}
          textAlign="center"
          variant="h5"
        >
          Insert Your Data
        </Typography>

        <Stack direction="column" spacing={2}>
          <TextFields
            label="Name"
            fullWidth
            variant="filled"
            required
            type="text"
            color="secondary"
            name="userName"
            onChangeHandler={onChangeHandler}
          />
          <TextFields
            label="Phone Number"
            fullWidth
            variant="filled"
            required
            type="number"
            color="secondary"
            name="phoneNumber"
            onChangeHandler={onChangeHandler}
          />{" "}
          <TextFields
            label="Email"
            fullWidth
            variant="filled"
            required
            type="email"
            color="secondary"
            name="email"
            onChangeHandler={onChangeHandler}
          />
        </Stack>
        <Stack width={110} marginTop={2}>
          {" "}
          <Button endIcon={<SendIcon />} type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default UserForm;
