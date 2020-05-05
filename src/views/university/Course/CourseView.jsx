<<<<<<< HEAD
import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

var IMGDIR = process.env.REACT_APP_IMGDIR;

class CourseProfile extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">View Course</h1>
                        </div>
                    </div>


                            



                    <div className="col-xl-12">
                        <section className="box profile-page">
                            <div className="content-body">
                                    <div className="col-12">
                                    <div className="row uprofile">
                                        <div className="uprofile-image col-xl-2 col-lg-3 col-md-3 col-sm-4 col-12">
                                            <img alt="" src={IMGDIR+"/images/university/courses/course-1.jpg"} className="img-fluid" />
                                        </div>
                                        <div className="uprofile-name col-xl-10 col-lg-9 col-md-9 col-sm-8 col-12">
                                            <h3 className="uprofile-owner">
                                                <a href="#!">Web Development</a>
                                            </h3>
                                            <button className="btn btn-primary btn-sm profile-btn">Message</button>
                                            <button className="btn btn-primary btn-sm profile-btn">Subscribe</button>
                                            <div className="clearfix"></div>
                                            <p className="uprofile-title">Computer Engg.</p>
                                            <div className="clearfix"></div>
                                            <p>Humans can evaluate these visual elements in several situations to find a sense of balance. Humans can evaluate these visual elements in several situations to find a sense of balance.</p>
                                            <p className="uprofile-list">
                                                <span><i className='i-home'></i> New York, USA</span> 
                                                <span><i className='i-user'></i> 340 Contacts</span>
                                                <span><i className='i-briefcase'></i> Tech Lead, YIAM</span>

                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                    
                                    <div className="col-12">
                                        <hr/>
                                        <h4>Course Details:</h4>
                                        <p>Education is free in Brunei Darussalam not limited to government educational institutions but private educational institutions too. There are mainly two types of educational institutions namely government or public as well as private institutions. Several stages have to be undergone by the prospective students leading to higher qualifications such as Bachelors Degree.</p>
                                        <ul>
                                            <li>Primary School (Year 1 to 6)</li>
                                            <li>Secondary School (Year 7 to 11)</li>
                                            <li>High School [or also known as the Sixth Form Centers] (Year 12 to 13)</li>
                                            <li>Colleges (Pre-University to Diploma)</li>
                                            <li>University Level (Undergraduate, Postgraduate and Professional)</li>
                                        </ul>
                                        <p>It takes six and five years to complete the primary and secondary levels respectively. Upon completing these two crucial stages, students have freedom to progress to sixth-form centers, colleges or probably straight to employment. Ahead of times, these students will be led to undertake the university level programs in both, government and private university colleges.</p>
                                        <p>Education is free in Brunei Darussalam not limited to government educational institutions but private educational institutions too. There are mainly two types of educational institutions namely government or public as well as private institutions. Several stages have to be undergone by the prospective students leading to higher qualifications such as Bachelors Degree.</p>
                                        <ul>
                                            <li>Primary School (Year 1 to 6)</li>
                                            <li>Secondary School (Year 7 to 11)</li>
                                            <li>High School [or also known as the Sixth Form Centers] (Year 12 to 13)</li>
                                            <li>Colleges (Pre-University to Diploma)</li>
                                            <li>University Level (Undergraduate, Postgraduate and Professional)</li>
                                        </ul>
                                        <p>It takes six and five years to complete the primary and secondary levels respectively. Upon completing these two crucial stages, students have freedom to progress to sixth-form centers, colleges or probably straight to employment. Ahead of times, these students will be led to undertake the university level programs in both, government and private university colleges.</p>
                                        <div className="clearfix"></div>
                                        <hr/>
                                        <h4>Subjects:</h4>
                                        <ul>
                                            <li>Integer tincidunt.</li>
                                            <li>Praesent vestibulum dapibus nibh.</li>
                                            <li> Phasellus consectetuer vestibulum elit.</li>
                                            <li>M.B.B.S from Ski University</li>
                                            <li>Praesent vestibulum dapibus nibh.</li>
                                            <li>Proin pretium, leo ac pellentesque mollis justo.</li>
                                            <li>unc ultrices eros, sed gravida augue augue</li>
                                        </ul>
                                        <div className="clearfix"></div>
                                        <hr/>
                                        <div className="clearfix"></div>

                                    </div>

                            </div>
                            </section>
                            </div>
           



                                
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default CourseProfile;
=======
import React, { useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap'

import { ActivityItem } from 'components'

var IMGDIR = process.env.REACT_APP_IMGDIR

const CourseProfile = (props) => {
  const { id_teacher, id_group, id_materia } = props.match.params
  console.log('Los params: ', props.match.params)
  const [secctions, setSecctions] = useState([
    {
      codeSecction: 1,
      nameSecction: 'El renacimiento',
      descriptionSecction: 'Leer el documento adjunto y resolver las preguntas',
      uploadOnSecction: '2020-01-01',
      workspaceSecction: 17,
    },
    {
      codeSecction: 1,
      nameSecction: 'El renacimiento',
      descriptionSecction: 'Leer el documento adjunto y resolver las preguntas',
      uploadOnSecction: '2020-01-01',
      workspaceSecction: 17,
    },
  ])

  function removeDuplicityWork(array, codeMateria) {
    let hash = Object.create(null)
    let filter = array.reduce((result, value) => {
      if (!hash[value.nameWorkSpace]) {
        console.log(value.nameWorkSpace)
        hash[value.nameWorkSpace] = true
        result.push(value)
      }
      return result
    }, [])

    return filter.reduce((result, value) => {
      if (value.academicCharge.courseDictate.codeCourse == codeMateria) {
        result.push(value)
      }
      return result
    }, [])
  }

  function getWorkSpaces(teacher_id, grupo_id, codeMateria) {
    fetch(
      `http://api.sige-edu.com:8000/api/workspaces/courses/${teacher_id}/${grupo_id}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        let depuredData = removeDuplicityWork(data, codeMateria)
        let codeWorkSpace = depuredData && depuredData[0].secctions
        // setSecctions((selected) => ({ ...selected, sWorkSpace: codeWorkSpace }))
        setSecctions(codeWorkSpace)
      })
      .catch((error) => console.log(error))
      .finally(() => {})
  }

  useEffect(() => {
    getWorkSpaces(id_teacher, id_group, id_materia)
  }, [])

  return (
    <div>
      <div className="content">
        <Row>
          <Col xs={12} md={12}>
            <div className="page-title">
              <div className="float-left">
                <h1 className="title">Actividades</h1>
              </div>
            </div>
            {secctions.map((value, key) => {
              return <ActivityItem activity={value} key={key} />
            })}
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default CourseProfile
>>>>>>> master
