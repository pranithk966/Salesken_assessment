import React, { useState } from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function NavBar({ onSearch, onFilter }) {
  var years = Array.from({ length: 19 }, (_, i) => 2000 + i)
  var statuses = ['Success', 'Failure']

  function one() {
    years = ''
    statuses = ''
  }

  return (
    <div className="bg-gradient-to-r from-red-100 to-gray-400 py-[10px] place-content-center px-[20px]">
      <nav className="flex justify-between place-content-center py-[10px]">
        <div>
          <Link to="/">
            <img
              className="w-[100px]"
              src="./spacex.png"
              alt="broken"
              onClick={one}
            />
          </Link>
        </div>

        <div className="flex justify-between flex-col h-[40px]">
          <div>
            <SearchBar onSearch={onSearch} />
          </div>

          <div className="mt-[30px] w-52 text-right ">
            <Menu>
              <MenuButton className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white bg-gray-800">
                Filters
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                    />
                  </svg>
                </span>
              </MenuButton>

              <MenuItems
                transition
                anchor="bottom end"
                className="w-96 h-[300px] origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0  bg-gradient-to-tr from-red-100 to-gray-400">
                <MenuItem>
                  {({ close }) => (
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <MenuButton className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 font-bold  text-black hover:bg-gray-800 hover:text-white">
                          Search by status
                        </MenuButton>
                      </div>
                      <MenuItems className="absolute left-0 w-56 mt-2 origin-top-right bg-gray-700 border border-gray-200 divide-y divide-gray-200 rounded-md shadow-lg outline-none   group-hover:text-white transition duration-150 ease-in-out">
                        {statuses.map((status) => (
                          <MenuItem key={status}>
                            {({ active }) => (
                              <button
                                className={`${
                                  active ? 'bg-gray-300' : ''
                                } group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:text-black hover:font-bold `}
                                onClick={() => {
                                  onFilter('status', status)
                                  close()
                                }}>
                                {status}
                              </button>
                            )}
                          </MenuItem>
                        ))}
                      </MenuItems>
                    </Menu>
                  )}
                </MenuItem>

                <MenuItem>
                  {({ close }) => (
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <MenuButton className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 font-bold  text-black hover:bg-gray-800 hover:text-white">
                          Search by year
                        </MenuButton>
                      </div>
                      <MenuItems className="absolute left-0 w-56 mt-2 origin-top-right  border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none bg-gray-700 group-hover:text-white  transition duration-150 ease-in-out">
                        {years.map((year) => (
                          <MenuItem key={year}>
                            {({ active }) => (
                              <button
                                className={`${
                                  active ? 'bg-gray-300' : ''
                                } group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:text-black hover:font-bold`}
                                onClick={() => {
                                  onFilter('year', year)
                                  close()
                                }}>
                                {year}
                              </button>
                            )}
                          </MenuItem>
                        ))}
                      </MenuItems>
                    </Menu>
                  )}
                </MenuItem>
                <div className="my-1 h-px bg-white/5" />
              </MenuItems>
            </Menu>
          </div>
        </div>
      </nav>
    </div>
  )
}
