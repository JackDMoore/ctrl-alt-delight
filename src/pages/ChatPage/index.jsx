import { PrettyChatWindow } from 'react-chat-engine-pretty';
import axios from 'axios';

const ChatsPage = () => {
    const user = localStorage.getItem('username');
    const value  = localStorage.getItem('username')
        console.log(value)
        axios.post(
            'http://localhost:3001/authenticate',
            { username: value, secret: value }
        )
    return (
        <div className="background">
            <div className='chat-wrapper'>
                <PrettyChatWindow
                    projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
                    username={user}
                    secret={user}
                />
            </div>
        </div>
    );
}

export default ChatsPage
