import React, { useEffect, useState } from 'react'
import MultiAutoComplete from '../Dropdowns/MultiAutoComplete'
import { basePayOptions, employeeCountOptions, experienceOptions, rolesOptions, workPlaceOptions } from './sampleFiltersData'
import SearchBar from '../Dropdowns/SearchBar'

export default function FilterSection({
  selectedRoles, setSelectedRoles,
  employesCount, setEmployesCount,
  experience, setExperience,
  workPlace, setWorkPlace,
  basePay, setBasePay,
  searchInput, setSearchInput,

}) {
  return (
    <div className='filters-list'>
      <div className='filters-list-child'>
        <MultiAutoComplete
          value={selectedRoles}
          setValue={setSelectedRoles}
          options={rolesOptions}
          placeholder={"Roles"}
          heading={"Roles"}
          groupBy={true}
          multiple={true}
        />
      </div>
      <div className='filters-list-child' >
        <MultiAutoComplete
          value={employesCount}
          setValue={setEmployesCount}
          options={employeeCountOptions}
          placeholder={"Number of Employees"}
          heading={"Number of Employees"}
          multiple={true}
        />
      </div>
      <div className='filters-list-child' >
        <MultiAutoComplete
          value={experience}
          setValue={setExperience}
          options={experienceOptions}
          placeholder={"Experience"}
          heading={"Experience"}
          multiple={false}
        />
      </div>
      <div className='filters-list-child'>
        <MultiAutoComplete
          value={workPlace}
          setValue={setWorkPlace}
          options={workPlaceOptions}
          placeholder={"Work Type"}
          heading={"Work Type"}
          multiple={true}
        />
      </div>
      <div className='filters-list-child'>
        <MultiAutoComplete
          value={basePay}
          setValue={setBasePay}
          options={basePayOptions}
          placeholder={"Min Base Pay"}
          heading={"Min Base Pay"}
          multiple={true}
        />
      </div>
      <div className='filters-list-child'>
        <SearchBar
          value={searchInput}
          setValue={setSearchInput}
          placeholder={"Search Company Name"}
          heading={"Search Company Name"}
        />
      </div>
    </div>
  )
}
