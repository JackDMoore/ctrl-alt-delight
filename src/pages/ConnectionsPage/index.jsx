import React from "react";
import ProfileCard from "../../components/ProfileCard";
import LHNavbar from "../../components/LHNavbar";
import { UserList } from "../../components";

const ConnectionsPage = () => {
  return (
    <div>
      <h1>Connections Page</h1> 
      <UserList />
      {/* <ProfileCard /> */}
     
      <LHNavbar />
    </div>
  );
};
export default ConnectionsPage;
