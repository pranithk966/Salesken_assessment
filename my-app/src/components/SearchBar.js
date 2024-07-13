import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    onSearch(e.target.value) // Trigger search on input change
  }

  return (
    <div className="flex items-center justify-center h-full w-[500px]">
      {' '}
      {/* Use flexbox to center */}
      <div className="flex items-center max-w-md mx-auto rounded-lg w-full ">
        <div className="w-full">
          <input
            type="search"
            className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none border"
            placeholder="search missions"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div>
          <button
            type="button"
            className="flex items-center bg-blue-500 justify-center text-white rounded-full w-[40px] h-[40px] ml-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
