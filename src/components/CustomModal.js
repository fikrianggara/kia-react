import React, { useState } from "react";

import { Modal, Box } from "@mui/material";

const CustomModal = ({ children, btn }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen}>{btn}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] shadow bg-white h-fit w-96 rounded-lg p-4">
          {children}
        </Box>
      </Modal>
    </div>
  );
};

export { CustomModal };
