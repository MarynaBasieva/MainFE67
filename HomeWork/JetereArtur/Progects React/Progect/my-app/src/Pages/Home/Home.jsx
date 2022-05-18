import React from 'react'
import Featured from '../../components/Featured/Featured'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import PropertyList from '../../components/PropertyList/PropertyList'
import "./Home.css"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='homeContainer'>
        <Featured />
        <h1 className="homeTitle">Пошук за типом помешкання</h1>
        <PropertyList />
      </div>
    </div>
  )
}

export default Home

