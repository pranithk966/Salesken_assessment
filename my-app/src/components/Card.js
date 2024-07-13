import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../features/dataSlice'
import { Tilt } from 'react-tilt'
import Pagination from './Pagination'
import { Link } from 'react-router-dom'

export default function Card({ searchQuery }) {
  const data = useSelector((state) => state.data.data)
  const status = useSelector((state) => state.data.status)
  const error = useSelector((state) => state.data.error)

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  const dispatch = useDispatch()

  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
  }

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData())
    }
  }, [status, dispatch])

  const filteredData = data.filter((item) =>
    item.mission_name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentPageData = filteredData.slice(startIndex, endIndex)

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  let content

  if (status === 'loading') {
    content = <p>Loading...</p>
  } else if (status === 'success') {
    content = (
      <>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-[60px]">
          {currentPageData.map((item) => (
            <Tilt
              key={item.mission_name}
              options={defaultOptions}
              className="hover:bg-gray-100 transition duration-75 ease-in-out group">
              <div className="shadow-lg px-[20px] py-[30px] ">
                <div className="flex place-content-center h-[200px]">
                  <img src={item.links.mission_patch} alt="broken" />
                </div>

                <div>
                  <h1>Mission: {item.mission_name}</h1>
                  <h1>Launch Date: {item.launch_date_local}</h1>
                  <h1>Rocket: {item.rocket.rocket_name}</h1>
                  <h1>Launch Site: {item.launch_site.site_name}</h1>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </>
    )
  } else if (status === 'failed') {
    content = <p>{error}</p>
  }

  return <div>{content}</div>
}
