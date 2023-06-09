import React from "react";
import ProfileCard from "../../components/ProfileCard";
import { UserList } from "../../components";
import "./style.css";

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
    <div className="user-holder">
      <div className="title-holder">
      <h1>Find a Connection</h1>
      </div>
      <br/>
      <h3>Filter by:</h3>
      <UserList />
    </div>
  );
};
export default ConnectionsPage;
