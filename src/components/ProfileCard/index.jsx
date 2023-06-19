import React from "react";

const ProfileCard = (onConnect) => {
  const handleConnectClick = () => {
    // call the onConnect prop
    onConnect(profileId);
  };

  return (
    <div className="profile-card">
      {/* Additional profile information */}
    </div>
  );
};
export default ProfileCard;
