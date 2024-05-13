import React, { useState } from 'react'
import MultiAutoComplete from '../Dropdowns/MultiAutoComplete'
import { employeeCountOptions } from './sampleFiltersData'

export default function FilterSection({

}) {
  const [selectedRoles, setSelectedRoles] = useState([])
  const [employesCount, setEmployesCount] = useState([])
  // const [experience, setExperience] = useState([])
  const [workPlace, setWorkPlace] = useState([])
  const [basePay, setBasePay] = useState([])




  return (
    <div>
      <MultiAutoComplete
       value={selectedRoles}
       setValue={setSelectedRoles}
       options={employeeCountOptions}
       placeholder={"sa"}
       heading={"sa"}
      />
    </div>
  )
}
