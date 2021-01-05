import React from 'react'

import FavoriteCard from '../Cards/FavoriteCard'

export default function Favorites({favorites}) {

    const showFavorites = () => {
        return favorites.map(favorite => {
            return <FavoriteCard key={favorite.id} favorite={favorite}/>
        })
    }

    return (
        <div className="favorite-container">
            <div className="favorites">
                {showFavorites()}
            </div>
        </div>
    )
}
