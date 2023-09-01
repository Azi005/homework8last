import React from "react";

export default function home(){
    const photoUrl = 'https://i.pinimg.com/originals/b4/19/c0/b419c013ba6c6ae1f818dbcb9e0d8d53.jpg'
    return(
        <div>
            <h2>Yamaha</h2>
            <p>best category</p>
            <img width={500} height={280} src={photoUrl}></img>
        </div>
    )
}