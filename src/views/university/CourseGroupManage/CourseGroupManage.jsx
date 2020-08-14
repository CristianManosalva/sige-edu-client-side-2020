import React, { useState } from 'react'
import { CustomTabs, Activities, Forum, SubjectActivities } from 'components'

const CourseGroupManage = (props) => {
  const { user_data } = props
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
            user_data={user_data}
          />
        </div>
      </div>
    </div>
  )
}

const HandlerTabToRender = (props) => {
  if (props.value === 0) {
    if (props.user_data.student) {
      return <SubjectActivities {...props} />
    }
    return <Activities {...props} />
  }
  return <Forum {...props} />
}

export default CourseGroupManage
