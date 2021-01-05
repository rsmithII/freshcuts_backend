import React from 'react'

export default function ServiceCard({service, addFavorite, removeFavorite}) {
    const {task, image} = service

    const handleClick =() => {
        if(addFavorite){
            addFavorite(service)
        } else {
            removeFavorite(service)
        }
    }

    return (
        <div className="service-card">
            <h3 className="task">{task}</h3>
            <img src={image} alt="logo"/>
            <button onClick={handleClick}>Add to Cart</button>
        </div>
    )
}
