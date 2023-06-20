import {useRef, useState} from 'react';
import { PrettyChatWindow } from 'react-chat-engine-pretty';
import axios from 'axios';

const ChatsPage = () => {
    const user = localStorage.getItem('username');
    const value  = localStorage.getItem('username')
        axios.post(
            'http://localhost:3001/authenticate',
            { username: value, secret: value }
        )
    const inputRef = useRef(null)
    const [input, setInput] = useState('')
    const handleClick =() => {

        setInput('Dad')
    }
    return (
        <div className="background">
            <div className='chat-wrapper' >   
                <PrettyChatWindow
                    projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
                    username={user}
                    secret={user}
                />
                <div>
                    <span
                    id='react-select-3-input'>
                    value={'Dad'}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ChatsPage
