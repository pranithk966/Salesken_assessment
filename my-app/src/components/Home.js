import React, { useState } from 'react'
import NavBar from './NavBar'
import Card from './Card'

const Home = ({ searchQuery, handleSearch }) => {
  const [filters, setFilters] = useState({})

  const handleFilter = (type, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [type]: value }))
  }

  return (
    <>
      <NavBar onSearch={handleSearch} onFilter={handleFilter} />
      <Card searchQuery={searchQuery} filters={filters} />
    </>
  )
}

export default Home
