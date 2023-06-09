import React, {useEffect, useState} from 'react'
import LearnLanguageFilter from "../LearnLanguageFilter"
import ConsoleFilter from '../ConsoleFilter';
import ProfileCard from '../ProfileCard';
import "./style.css";


const UserList = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [englishOnly, setEnglishOnly] = useState();
    const [frenchOnly, setFrenchOnly] = useState();
    const [germanOnly, setGermanOnly] = useState();
    const [dutchOnly, setDutchOnly] = useState();
    const [italianOnly, setItalianOnly] = useState();
    const [pcOnly, setPCOnly] = useState();
    const [playstationOnly, setPlaystationOnly] = useState();
    const [xboxOnly, setXboxOnly] = useState();
    
    const username = localStorage.getItem('username')

    useEffect(() => {
        async function loadUsers () {
            const response = await fetch("https://linguaplaya-be.onrender.com/users/getall");
            const userData = await response.json();
            setUsers(userData)
            setIsLoading(false);
        }

        loadUsers();
    }, []);

    const arr = users
    function removeUser(arr) {
      return (arr.username === username)
    }
    const userId = arr.findIndex(removeUser)
    arr.splice(userId, 1)
    function displayUsers() {
        return arr
            .filter((user) => !englishOnly || user.language_known == "English")
            .filter((user) => !frenchOnly || user.language_known == "French")
            .filter((user) => !germanOnly || user.language_known == "German")
            .filter((user) => !dutchOnly || user.language_known == "Dutch")
            .filter((user) => !italianOnly || user.language_known == "Italian")
            .filter((user) => !pcOnly || user.platform == "PC")
            .filter((user) => !playstationOnly || user.platform == "PlayStation")
            .filter((user) => !xboxOnly || user.platform == "Xbox")
            .map((user, id) => (
                <ProfileCard
                key={id}
                bio={user.bio}
                game_name={user.game_name}
                language_known={user.language_known}
                language_learn={user.language_learn}
                platform={user.platform}
                // rating={user.rating}
                username={user.username}
                />
            ))
    }

    return (
        <main>
            {/* <div className='filter-connection'> */}
            <LearnLanguageFilter
                englishOnly={englishOnly}
                frenchOnly={frenchOnly}
                germanOnly={germanOnly}
                dutchOnly={dutchOnly}
                italianOnly={italianOnly}
                setEnglishOnly={setEnglishOnly}
                setFrenchOnly={setFrenchOnly}
                setGermanOnly={setGermanOnly}
                setDutchOnly={setDutchOnly}
                setItalianOnly={setItalianOnly}
            />
            <ConsoleFilter
                pcOnly={pcOnly}
                playstationOnly={playstationOnly}
                xboxOnly={xboxOnly}
                setPCOnly={setPCOnly}
                setPlaystationOnly={setPlaystationOnly}
                setXboxOnly={setXboxOnly}
            />
            {/* </div> */}
            <div className='user-width'>
            <div className="user-holder">{displayUsers()}</div>
            </div>
        </main>
    )
}
// }
export default UserList
