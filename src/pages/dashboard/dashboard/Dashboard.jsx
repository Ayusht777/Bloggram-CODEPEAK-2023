import React from "react";
import { Fab, Tooltip } from "@mui/material";
import MyBlogs from "../components/MyBlogs";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="container pt-4">
        <div className="row">
          <div className="col-md-12">
            <h2 className="display-3" style={{ fontWeight: 600 }}>
              Write Something Today !
            </h2>
            <MyBlogs />
          </div>
        </div>
      </section>
      <div style={editstyle}>
        <Tooltip title="Start Writing Blog Now">
          <Fab
            color="primary"
            aria-label="add"
            onClick={() => navigate("/dashboard/add-blog")}
            variant="extended"
            className="text-capitalize"
          >
            <EditIcon sx={{ mr: 1, fontSize: "1rem" }} /> Write
          </Fab>
        </Tooltip>
      </div>
    </>
  );
};

export default Dashboard;

const editstyle = {
  margin: 0,
  top: "auto",
  transform: "translateX(50%)",
  bottom: 20,
  right: 100,
  left: "auto",
  position: "fixed",
};
