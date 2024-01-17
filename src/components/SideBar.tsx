import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Checkbox, Stack } from "@mui/material";
import { departmentList } from "../utils/sideBarList";
import { SelectedSubDepartments } from "../types";

const SideBar = () => {
  const [open, setOpen] = useState<boolean>(true);

  const [selectedSubDepartments, setSelectedSubDepartments] =
    useState<SelectedSubDepartments>(
      departmentList.reduce((acc, department) => {
        acc[department.department] = [];
        return acc;
      }, {} as SelectedSubDepartments)
    );

  const handleClick = () => {
    setOpen(!open);
  };

  const onSelectAllHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    department: string
  ) => {
    const isChecked = e.target.checked;

    setSelectedSubDepartments((prevSelected) => ({
      ...prevSelected,
      [department]: isChecked
        ? departmentList.find((item) => item.department === department)
            ?.sub_departments || []
        : [],
    }));
  };

  const onSubDepartmentChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    department: string,
    subDepartment: string
  ) => {
    const isChecked = e.target.checked;

    setSelectedSubDepartments((prevSelected) => ({
      ...prevSelected,
      [department]: isChecked
        ? [...prevSelected[department], subDepartment]
        : prevSelected[department].filter((sub) => sub !== subDepartment),
    }));
  };

  return (
    <div>
      {departmentList.map((item, i) => (
        <List
          key={i}
          sx={{ width: "100%", maxWidth: 340 }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <Stack display="flex" flexDirection="row">
            <div>
              <Checkbox
                value={item.department}
                onChange={(e) => onSelectAllHandler(e, item.department)}
                checked={
                  selectedSubDepartments[item.department]?.length ===
                  item.sub_departments.length
                }
              />
            </div>
            <div style={{ width: "100%" }}>
              <ListItemButton onClick={handleClick}>
                <ListItemText primary={item.department} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </div>
          </Stack>

          {item.sub_departments.map((sub, i) => (
            <Collapse key={i} in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <Checkbox
                    onChange={(e) =>
                      onSubDepartmentChange(e, item.department, sub)
                    }
                    checked={selectedSubDepartments[item.department]?.includes(
                      sub
                    )}
                  />
                  <ListItemText primary={sub} />
                </ListItemButton>
              </List>
            </Collapse>
          ))}
        </List>
      ))}
    </div>
  );
};

export default SideBar;
