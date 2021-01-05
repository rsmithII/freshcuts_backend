import React from 'react'

import ServiceCard from '../Cards/ServiceCard';

export default function Services({services, addFavorite}) {

    const showServices = () => {
        return services.map(service => {
            return <ServiceCard key={service.id} service={service} addFavorite={addFavorite}/>
        })
    }

    return (
        <div className="service-container">
            <h2>Available Services</h2>
            <div className="services">
                {showServices()}
            </div>
        </div>
    )
}
