import React from "react";
import ProfileCard from "../../components/ProfileCard";
import LHNavbar from "../../components/LHNavbar";
import { UserList } from "../../components";

const ConnectionsPage = () => {
  //Stae to store connected profiles
  const [connectedProfiles, setConnectedProfiles] = React.useState([]);

  //Function to get connected profiles
  const connectProfiles = (profileId) => {
    // add the connected profile to the state
    setConnectedProfiles([...connectedProfiles, profileId]);
  };

  return (
    <div>
      <h1>Connections Page</h1> 
      <UserList />
      <ProfileCard onConnect={connectProfiles} />
     
      <LHNavbar />
    </div>
  );
};
export default ConnectionsPage;
