import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

export default function About() {
    return (
        <Jumbotron>
            <h2>Lawn Maintenance</h2>
            <div className="about-image">
                <p>Professional lawn care performed by certified lawn specialists and highly trained crews that can help you 
                    achieve the lawn you've always wanted. Our team specializes in not only keeping your yard fresh, but also
                    making your lawn naturally more resistant to disease, insects and weeds. Soil and turf 
                    analysis with proactive aeration and seeding improve root systems and lawn genetics. We have
                    experts ready to help, whether you need to treat your existing lawn, have problems growing grass,
                    or just want to learn more about your options.
                </p>
                <img className="maintenance-image" alt="maintenance-logo" src="https://d3fpcon17n0eur.cloudfront.net/lawn-mowing-guide-1.jpg"/>
            </div>
            <br/>
            <br/>
            <p>
             <Button variant="primary">Learn more</Button>
            </p>
        </Jumbotron>
    )
}
