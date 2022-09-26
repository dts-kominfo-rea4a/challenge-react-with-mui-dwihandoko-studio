// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import { Divider, Typography } from "@mui/material";
import React from "react";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <>
      <div className="Custom-contact-list">
        <img
          src={data.photo}
          alt="gambar"
          width={80}
          height={80}
          className="Custom-img-contact-list"
        />
        <div className="Custom-content-contact-list">
          <Typography variant="body1" component="div">
            {data.name}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            color="text.secondary"
          >
            {data.phone}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {data.email}
          </Typography>
        </div>
      </div>
      <Divider className="Mb-2" />
    </>
  );
};

export default Contact;
