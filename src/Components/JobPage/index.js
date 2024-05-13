import React, { useEffect, useState } from 'react'
import MultiAutoComplete from '../Dropdowns/MultiAutoComplete'
import FilterSection from '../Filters/FilterSection'
import JobCard from './JobCard'
import { useDispatch, useSelector } from 'react-redux'
import { getJobDetailsRequest } from '../../store/actions/jobDetails'
import { get } from "lodash";
import Skeleton from "@mui/material/Skeleton";


export default function JobComponent() {
  const [selectedRoles, setSelectedRoles] = useState([])
  const [employesCount, setEmployesCount] = useState([])
  const [experience, setExperience] = useState({ value: 0, label: 0 })
  const [workPlace, setWorkPlace] = useState([])
  const [basePay, setBasePay] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getJobDetailsRequest())
  }, [])

  const { jobList, jobDetailsSpinner } = useSelector((state) => {
    return {
      jobList: get(state, ["MyJobDetails", "jobDetails"]),
      jobDetailsSpinner: get(state, ["MyJobDetails", "jobDetailsSpinner"])
    }
  })

  return (
    <div>
      <FilterSection
        selectedRoles={selectedRoles}
        setSelectedRoles={setSelectedRoles}
        employesCount={employesCount}
        setEmployesCount={setEmployesCount}
        experience={experience}
        setExperience={setExperience}
        workPlace={workPlace}
        setWorkPlace={setWorkPlace}
        basePay={basePay}
        setBasePay={setBasePay}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      
        {jobDetailsSpinner ? <div className='job-container' >
          {Array(3)
                ?.fill()
                ?.map((item, ind) => {
                  return (
                    <div style={{
                      margin:"20px 12px"
                    }}>
                      <Skeleton
                        key={ind}
                        variant="rectangular"
                        width="27vw"
                        height="420px"
                        style={{
                          borderRadius: "10px",
                        }}
                      />
                    </div>
                  );
                })}
        </div> :
          (jobList && jobList?.length > 0) ?
            <div className='job-container'>
              {jobList.map((jobDetail, index) => {
                return <JobCard key={`unique_${index}`} jobDetail={jobDetail} />
              })}
            </div>
            :
            <div></div>}
      </div>
  )
}
