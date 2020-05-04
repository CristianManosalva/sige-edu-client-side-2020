import React from 'react';
import {
    Row, Col, Label, Input,
} from 'reactstrap';

// import InputMask from 'react-input-mask';

import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class AddCourse extends React.Component{
    constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Añadir Actividad Online</h1>
                        </div>
                    </div>





                    <div className="row margin-0">
                        <div className="col-12">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Datos Básicos</h2>

                                </header>
                                <div className="content-body">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">

                                            <form>
                                                <div className="form-row">
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname4">Nombre de la Actividad</label>
                                                        <input type="text" className="form-control" id="inputname4" placeholder="" />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label>Fecha de Inicio de la Actividad</label>
                                                        <div className="controls">
                                                            <DatePicker selected={this.state.startDate} onChange={this.handleChange} />
                                                        </div>
                                                   </div>

                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname45">Duración de la Actividad</label>
                                                        <input type="text" className="form-control" id="inputname45" placeholder="" />
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleSelect3">Grupo</Label>
                                                      <Input type="select" name="select" id="exampleSelect3">
                                                        <option>Selecciones</option>
                                                            <option value="Computer Engineering">6-1 mañana</option>
                                                            <option value="Architecture">7-1 mañana</option>
                                                            <option value="MBA">8-2 tarde</option>
                                                            <option value="Automobile Engg.">Preescolar</option>
                                                            <option value="Civil Engg.">3-1 mañana</option>
                                                            <option value="Mechanical Engg.">5-2 Tarde</option>
                                                            <option value="BBA">BBA</option>
                                                      </Input>
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleFile">Cargar Archivo</Label>
                                                      <Input type="file" name="file" id="exampleFile" />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="input4">Enlace</label>
                                                        <input type="text" className="form-control" id="input4" placeholder="" />
                                                    </div>

                                                </div>
                                                <button type="submit" className="btn btn-primary">Guardar</button>
                                            </form>

                                        </div>
                                    </div>

                                </div>
                            </section></div>



                    </div>







                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default AddCourse;
