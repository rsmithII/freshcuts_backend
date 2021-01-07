import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

export default function LawnRepair() {
    return (
        <Jumbotron>
            <h2>Lawn Care</h2>
            <div className="about-image">
                <p> A nice, green lawn makes for a welcoming home and can even increase home value. Plus, it looks fresh! Our 
                    customers often comment that people ask them for lawn tips, lawn fertilizer suggestions,
                    and seed advice because their yard is visibly greener and healthier. Beautiful and 
                    environmentally sensible—you can’t beat that.
                </p>
                <img className="lawnrepair-image" alt="lawn repair logo" src="https://www.hillsboroughcounty.org/library/hillsborough/watering-restrictions_nr.jpg?h=475&w=845&la=en&hash=0C3EE32FD7C6F9FFAEBD465839FAAFB8"/>
            </div>
            <br/>
            <br/>
            <p>
             <Button variant="primary">Learn more</Button>
            </p>
        </Jumbotron>
    )
}
