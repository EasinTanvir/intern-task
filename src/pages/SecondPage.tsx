import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Alert } from "@mui/material";
import { JsonData } from "../types";
import DataTable from "../components/DataTable";
import SideBar from "../components/SideBar";

const SecondPage = () => {
  const navigate = useNavigate();
  const [dataList, setDataList] = useState<JsonData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchData = async () => {
    try {
      setLoading(true);

      const res = await fetch("https://jsonplaceholder.typicode.com/posts");

      const data: JsonData[] = await res.json();
      setDataList(data);
    } catch (err) {
      setError("SomeThing went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const user: string = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")!)
      : "";

    if (!user) {
      localStorage.setItem("login-status", JSON.stringify("unauthorizred"));
      navigate("/");
    } else {
      localStorage.removeItem("login-status");
    }
  }, []);

  return (
    <>
      <Stack spacing={4}>
        <div>
          {error ? (
            <Stack width={500} margin="auto" marginTop={4}>
              <Alert severity="error">{error}</Alert>
            </Stack>
          ) : (
            <>
              {loading ? (
                <Stack textAlign="center" marginTop={4}>
                  <p>Loading.....</p>
                </Stack>
              ) : (
                <DataTable dataList={dataList} />
              )}
            </>
          )}
        </div>
        <div>
          <SideBar />
        </div>
      </Stack>
    </>
  );
};

export default SecondPage;
