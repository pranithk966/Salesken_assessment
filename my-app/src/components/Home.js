import React, { useState } from 'react'
import NavBar from './NavBar'
import Card from './Card'
import Details from './Details'

const Home = ({ searchQuery, handleSearch }) => {
  return (
    <>
      <NavBar onSearch={handleSearch} />
      <Card searchQuery={searchQuery} />
      {/* <Details /> */}
    </>
  )
}

export default Home
