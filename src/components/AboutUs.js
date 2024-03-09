import React from "react";
import "./style.css";
import image from "./image.webp"; // Importez votre image ici

const AboutUs = () => {
  return (
    <div>
      <h2>About Us</h2>
      <img src={image} alt="About Us" style={{ width: "40rem" }} />
      <p>
        Welcome to our movie database application! We are passionate about
        movies and wanted to create a platform where users can discover new
        films, read reviews, and share their favorites.
      </p>
      <p>
        Our team is dedicated to providing you with the best movie-watching
        experience possible. Whether you're a casual viewer or a film buff,
        we've got something for everyone.
      </p>
      <p>
        Thank you for visiting our site. We hope you enjoy using it as much as
        we enjoyed creating it!
      </p>
    </div>
  );
};

export default AboutUs;
