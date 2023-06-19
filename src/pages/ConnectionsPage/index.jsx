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

  const handleMessage = (profileId) => {
    // add the connected profile to the state
    console.log(`Sending message to ${profileId}`);
  };

  return (
    <div>
      <h1>Find a Connection</h1> 
      <UserList />
      <LHNavbar />
    </div>
  );
};
export default ConnectionsPage;
