import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"

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
}

export default function MyModal({ open, handleClose, handleOpen }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-describedby="modal-modal-text"
      >
        <Box sx={style}>
          <Typography id="modal-modal-text" sx={{ mt: 2 }}>
            Employee Created!
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}
