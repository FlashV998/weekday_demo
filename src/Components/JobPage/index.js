import React from 'react'
import MultiAutoComplete from '../Dropdowns/MultiAutoComplete'
import FilterSection from '../Filters/FilterSection'
import JobCard from './JobCard'

export default function JobComponent() {
  return (
    <div>
    Welcome to Job Page 
    <FilterSection/>
    <JobCard/>
    </div>
  )
}
