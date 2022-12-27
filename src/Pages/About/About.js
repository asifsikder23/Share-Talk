import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/UserContext";
import "./About.css";
import AboutDetails from "./AboutDetails";

const About = () => {
  const { user } = useContext(AuthContext);

  const [info, setInfo] = useState([]);
  
    useEffect(() => {
     
      fetch(`http://localhost:5000/users?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setInfo(data);
        });
    }, [user.email]);
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />

      {
        info.map(data =>(
            <AboutDetails
            key={data._id}
            data={data}></AboutDetails>
        ))
      }
      
    </div>
  );
};

export default About;
