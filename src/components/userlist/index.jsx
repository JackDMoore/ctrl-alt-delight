import React, {useEffect, useState} from 'react'
//import axios from 'axios';
import SingleUser from './'


const UserList = () => {
    const [isLoading, setLoading] = useState(true);
    const [users,setUsers] = useState()
    const [response, setResponse] = useState([]);
    const username = localStorage.getItem('username')

    //need to splice current user from list
    const loadUsers = async () => {
        await fetch("https://linguaplaya-be.onrender.com/users/all",{
        method:'GET'
        })
        .then((res)=>res.json())
        .then((data)=>{setUsers(data)})
        // try{
        //     setResponse(async () => await fetch(`https://linguaplaya-be.onrender.com/users/all`))
        //     const json = await response.json();
        //     setUser(json.data);
        // }catch (error) {
        //     console.error(error);
        // }
    }
    useEffect(() => {
        // setLoading(() => false);
        loadUsers()
        
    }, []);
    if (users ===undefined){
        return null
    }
   const userarr = Array.from(users)
    function displayUsers() {
        return users.users
                // .filter(user => !LanguageKnown|| user.LanguageKnown)
                // .filter(user => !Platform || user.Platform)
                // .filter(user => !LangLearn || user.LangLearn)
                .map(user => <SingleUser key={user.user_id} user_id={user.user_id} username={user.username}
                            profile_bio={user.profile_bio} />)
    }

//   console.log(users.users)
  const arr = users.users
  function removeUser(arr) {
    return (arr.username === username)
  }
  const userId = arr.findIndex(removeUser)
  arr.splice(userId, 1)
    // console.log(newarr)

  return  <div className="outer-Container" onLoad={loadUsers}>
            <div className="alluser-container">{
            arr.map((user, user_id) => {
                return (
                    <div className = 'singleUsersCards' key ={user_id}>
                         
                        <details>
                        <summary> <h3>{user.username}<span>  {user.rating} Stars </span></h3></summary>
                            <p>{user.profile_bio}</p>
                        </details>
                        {/* <span>{user.lang}</span> */}
                    </div>
                    // <SingleUser key={user_id} user={user} />
                  )})
                }
            </div>
        </div>    

}
export default UserList
