import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined, MicNoneOutlined } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import "./Chat.css";

function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");


    useEffect(() => {
        setSeed(Math.floor(Math.random() * 4000));
    }, []);

    const sendMessage = (e) => {
      e.preventDefault();
      console.log("you typed >>>", input);
      setInput("");
    };

    return (
        <div className="chat">
            <div className='chat_header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className="chat_headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className="chat_header_right">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>


            </div>


            <div className="chat_body">
                <p className={`chat_messages ${true && `chat_receiver`}`}>
                    <span className="chat_name">
                        Smarth</span>
                    Hey boyy
                    <span className="chat_timeStamp">
                        11:11am
                    </span>
                </p>
            </div>


            <div className="chat_footer">
                <InsertEmoticon />
                <form>
                    <input value={input}
                        onChange={(e) => {
                            setInput(e.target.value)
                        }} type="text" placeholder='Type your message' />
                    <button onClick={sendMessage} type='submit'>Send a message</button>
                </form>
                <MicNoneOutlined />



            </div>
        </div>
    )
}

export default Chat
