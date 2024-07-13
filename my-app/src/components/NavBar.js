import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

export default function NavBar({ onSearch }) {
  return (
    <div className="bg-gradient-to-r from-red-100 to-orange-300 py-[10px] place-content-center px-[20px]">
      <nav className="flex justify-between place-content-center py-[10px]">
        <div>
          <Link to="/">
            <img className="w-[100px]" src="./spacex.png" alt="broken" />
          </Link>
        </div>

        <div className="flex justify-between">
          <div>
            <SearchBar onSearch={onSearch} />
          </div>
        </div>
      </nav>
    </div>
  )
}
