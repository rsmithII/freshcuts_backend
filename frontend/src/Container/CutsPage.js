import React, {Component} from 'react'
import Services from './Services'
import CarouselSection from '../Pages/CarouselSection'
import Header from '../components/Header'
import About from '../Pages/About'
import Footer from '../components/Footer'
import FreshCutNavBar from '../components/FreshCutNavBar'
import LawnRepair from '../Pages/LawnRepair'

const serviceURL = 'http://localhost:3000/services'
const dealURL = 'http://localhost:3000/deals'

class CutsPage extends Component {

    state = {
        services: [],
        deals: [],
        favorites: []
    }

    componentDidMount(){
        this.getServices()
        this.getDeals()
    }

    getServices = () => {
        fetch(serviceURL, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => response.json())
            .then(results => this.setState({
                services: results
            }
        ))       
    }

    getDeals = () => {
        fetch(dealURL, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => response.json())
            .then(dealResults => this.setState({
                deals: dealResults
            }))       
    }

    addFavorite = (service) => {
        if(!this.state.favorites.find(task => task === service)){
            this.setState({favorites: [...this.state.favorites, service]})
        }
    }

    removeFavorite = (service) => {
        let newFavorite = this.state.favorites.filter(fav => fav !== service)
        this.setState({favorites: newFavorite})
    }

    logout = () => {
        localStorage.clear()
    }

    render(){
        return (
            <div>
                <FreshCutNavBar />
                <Header />
                <CarouselSection />
                <About />
                <LawnRepair />
                <Services services={this.state.services} addFavorite={this.addFavorite}/>
                <Footer />
            </div>
        );
    }
}
export default CutsPage;