"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [task, setTask] = useState("");

  const handleInput = (e) => {
    setTask(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    props.handleUpdate(task);
    handleClose();
  };

  return (
    <div>
      <button
        className="font-bold text-lg items-center py-2 pr-8 pl-4 w-44 mt-[-20px] bg-[#FCA311] flex gap-3 rounded-full"
        onClick={handleOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        New Task
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={submit} className="flex flex-col gap-4 ">
            <div className="flex gap-2">
              <h2>Task:</h2>
              <input
                onChange={handleInput}
                name="task"
                className="border border-slate-500 rounded-full w-full pl-2"
                type="text"
              />
            </div>
            <div className="flex justify-center">
              <input
                className="bg-[#FCA311] font-semibold w-3/4 pr-4 pl-4 pt-2 pb-2 rounded-lg hover:cursor-pointer"
                type="submit"
              ></input>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
