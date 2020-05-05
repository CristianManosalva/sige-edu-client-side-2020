import React, { useState, useEffect } from 'react'
import {

    Row, Col,
} from 'reactstrap';

import {
    SubjectList
} from 'components';

import { courses } from 'variables/university/courses.jsx';

const Course = () =>{


        const [subject, setSubject] = useState(
            [
                {
                  codeAcademicCharge: 1,
                  groupDictate: {
                    nameGroup: '10-01-1-2020',
                    journeyGroup: 1,
                    headquarter: 1,
                    managerGroup: 28,
                  },
                  courseDictate: {
                    codeCourse: 1,
                    nameCourse: 'Ciencias Naturales Biología',
                    areaCourse: 1,
                  },
                  teacherDictate: 26,
                },
                {
                  codeAcademicCharge: 2,
                  groupDictate: {
                    nameGroup: '10-02-1-2020',
                    journeyGroup: 1,
                    headquarter: 1,
                    managerGroup: 41,
                  },
                  courseDictate: {
                    codeCourse: 1,
                    nameCourse: 'Ciencias Naturales Biología',
                    areaCourse: 1,
                  },
                  teacherDictate: 26,
                },
              ]
          );
          return(
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Cursos</h1>
                        </div>
                    </div>





                    <div className="col-xl-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Todos los Cursos</h2>
                            </header>
                            <div className="content-body">


                            <div className="row">
                                    <div className="col-12">


                                <SubjectList courses={subject} />

                                    </div>
                                </div>
                            </div>
                        </section></div>





                        </Col>

                    </Row>
                </div>
            </div>
        );
    
}

export default Course;
