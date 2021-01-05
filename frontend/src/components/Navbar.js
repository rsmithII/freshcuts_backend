import React from 'react'

export default function Navbar() {
    return (
        <div class="navbar">
            <a class="active" href="http://localhost:3001">Home</a>
            <a href="http://localhost:3001/about">About</a>
            <a href="http://localhost:3001/contact">Contact</a>
            <a href="http://localhost:3001/signup">Request Service</a>
            <a href="http://localhost:3001/login">Log Out</a>
        </div>
    )
}
