import React from 'react'

export default function FavoriteCard({favorite}) {
    const {task, image} = favorite

    // const handleClick =() => {
    //     if(addFavorite){
    //         addFavorite(services)
    //     } else {
    //         removeFavorite(services)
    //     }
    // }

    return (
        <div className="favorite-card">
            <h3 className="task">{task}</h3>
            <img src={image} alt="logo"/>
        </div>
    )
}