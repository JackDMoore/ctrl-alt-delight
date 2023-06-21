import React, { useEffect, useState } from 'react';
import FriendCard from '../FriendCard';

const FriendList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadUsers() {
      const response = await fetch(`https://linguaplaya-be.onrender.com/users/get_connections/${localStorage.getItem("username")}`);
      const userData = await response.json();
      setUsers(userData);
      setIsLoading(false);
    }

    loadUsers();
  }, []);

  function displayUsers() {
    return users.map((user, id) => (
      <FriendCard key={id} username={user.child_user} />
    ));
  }

  return (
    <main>
      <h1>Connections</h1>
      <div className="user-holder">{displayUsers()}</div>
    </main>
  );
};

export default FriendList;
