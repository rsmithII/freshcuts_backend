import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

export default function Contact() {
    return (
        // <div>
        //   <h2>Contact Information</h2>
        //   <p>If you ever have any questions about the services. Here is my contact information:</p>
        //   <p>Name: Rodney Smith II</p>
        //   <p>Email: r_smith3@hotmail.com</p>
        //   <p>Phone Number: (337) 555-1345</p>
        // </div>

        <Jumbotron fluid>
          <Container>
            <h1>Contact Information</h1>
            <h3>If you ever have any questions about the services. Here is my contact information:</h3>
            <br></br>
            <p>Name: Rodney Smith II</p>
            <p>Email: r_smith3@hotmail.com</p>
            <p>Phone Number: (337) 555-1345</p>
          </Container>
        </Jumbotron>
    )
}
