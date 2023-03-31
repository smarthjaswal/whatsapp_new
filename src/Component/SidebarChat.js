import { Avatar } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './SidebarChat.css';
import db from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function SidebarChat({id, name, addNewChat}) {
    const [seed, setSeed] = useState("");
    const roomCollectionreff = collection(db,"rooms");
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 4000));


    }, []);
    const setRoomName = async (newChat)=>{
        try{
            await addDoc(roomCollectionreff,{name:[newChat]});
            addNewChat();
            console.log("one Chat added");
        } catch(err){
            console.log(err);
        }
    };



    const createChat = () => {
        const roomName = prompt("Please enter name for chat");

        if(roomName){
            // do some database stuff
            setRoomName(roomName);
            
        }
    };
     
    return !addNewChat ? (
        <Link to={`rooms/${id}`}>

        <div className="Sidebar_Chat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div  className="SidebarChat_info">
                <h2>{name}</h2>
                <p>Last message...</p>
            </div>
        </div>
         </Link>
        
    ) : (
        <div onClick={createChat} className="Sidebar_Chat">
            <h2>Add new Chat</h2>
        </div>
    );
}

export default SidebarChat