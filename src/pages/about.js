import React from "react";
export default function about(){
    const photoUrl = 'https://i.pinimg.com/originals/f2/2d/00/f22d00c586375e015d2d62fc9136a0d6.jpg'
    return(
        <div>
            <h2>Kawasaki</h2>
            <img src={photoUrl} width={500} height={280}></img>
        </div>
    )
}