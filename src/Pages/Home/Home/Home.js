import React from "react";
import Banner from "../Banner/Banner";
import OtherServices from "../OtherServices/OtherServices";
import Rides from "../Rides.js/Rides";
import UpcomingEvents from "../Upcoming Events/UpcomingEvents";

const Home = () => {
 
  return (
    <div>
      <Banner />
      <Rides />
      <UpcomingEvents />
      <OtherServices />
    </div>
  );
};

export default Home;
