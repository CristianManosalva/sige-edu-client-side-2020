import React, { useState } from 'react'
import { CustomTabs, SubjectActivities, Forum } from 'components'

const CourseGroupManage = (props) => {
  const { codeAcademicCharge } = props.match.params
  const [valueTabs, setValueTabs] = useState(0)

  return (
    <div>
      <div className="content">
        <div className="cui-container mt-3">
          <CustomTabs value={valueTabs} setValue={setValueTabs} />
        </div>
        <div className="cui-container mt-4">
          <HandlerTabToRender
            value={valueTabs}
            codeAcademicCharge={codeAcademicCharge}
          />
        </div>
      </div>
    </div>
  )
}

const HandlerTabToRender = (props) => {
  if (props.value === 0) {
  return <SubjectActivities {...props} />
  }
  return <Forum {...props} />
}

export default CourseGroupManage
