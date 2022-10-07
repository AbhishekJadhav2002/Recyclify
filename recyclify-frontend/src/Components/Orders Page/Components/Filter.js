import React from 'react'
import { useGlobalContext } from '../../Services/context'
import { FaSearch } from "react-icons/fa";

function Filter() {
  const { updateFilter } = useGlobalContext();

  return (
    <>
      <div className="filter-grid">
        <button className="filter-location"><FaSearch></FaSearch> In My Locality </button>
        <form>
          <label htmlFor="cars">Filter  By </label>
          <select onChange={(e) => {
            updateFilter(e.target.value)
          }} name="cars" id="cars">
            <option value="All">All</option>
            <option value="Plastic">Plastic</option>
            <option value="E-Waste">E-Waste</option>
          </select>
        </form>
      </div>
    </>
  )
}

export default Filter;
