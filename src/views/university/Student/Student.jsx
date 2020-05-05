import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import {
    Studentslist
} from 'components';

import { students } from 'variables/university/students.jsx';

class Student extends React.Component{
<<<<<<< HEAD
   
    
=======


>>>>>>> master
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
<<<<<<< HEAD
                            <h1 className="title">Student</h1>
=======
                            <h1 className="title">Estudiantes</h1>
>>>>>>> master
                        </div>
                    </div>


<<<<<<< HEAD
                            
           
=======


>>>>>>> master

                    <div className="col-xl-12">
                        <section className="box ">
                            <header className="panel_header">
<<<<<<< HEAD
                                <h2 className="title float-left">All Students</h2>
                            </header>
                            <div className="content-body">    
=======
                                <h2 className="title float-left">Todos los Estudiantes</h2>
                            </header>
                            <div className="content-body">
>>>>>>> master


                            <div className="row">
                                    <div className="col-12">


                                <Studentslist students={students} />

                                    </div>
                                </div>
                            </div>
                        </section></div>



<<<<<<< HEAD
           
                                
=======


>>>>>>> master
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default Student;
