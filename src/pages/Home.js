import React from 'react'
import Header from '../components/Header'
import HorizontalImageGrid from '../components/HorizontalImageGrid'
import MainSlider from '../components/MainSlider'
import Navbar from '../components/Navbar'
import OfferGrid from '../components/OfferGrid'

function Home() {
    return (
        <>
            <Header />
            <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>

                <Navbar />
                <MainSlider />
                <OfferGrid />
                <HorizontalImageGrid />
            </div>
        </>
    )
}

export default Home
