import React, { Fragment, useState } from 'react'
import { Row, Col } from 'reactstrap';
import { Modal, AvatarProfile, UpdateImgUser } from 'components';
import { useSelector } from 'react-redux'
import EdiText from 'react-editext';
import './styles/profile.css'

const PatientProfile = (props) => {
    
    const { user } = useSelector(
        (state) => state.authentication.user.user_data
      )
    const firstNameUser = user.firstNameUser
    const lastNameUser  = user.lastNameUser
      console.log('userProfile', user)
    //   const student_id = userProfile.codeStudent
    var IMGDIR = process.env.REACT_APP_IMGDIR;
    const [modalUpdateimg, setModalUpdateimg] = useState(false);
    const togglemodalimg = () => setModalUpdateimg(!modalUpdateimg);

const ProfileUser = () => {

        return (

            <div>
                <Modal
                    title="Cambiar foto de perfil!!"
                    show={modalUpdateimg}
                    backdrop="static"
                    keyboard={false}
                    toggle={togglemodalimg}
                >
                    <UpdateImgUser
                    // loader={creating}
                    // createResponseCourse={createResponseCourse}
                    // toggle={togglemodal}
                    // student_id={student_id}
                    // codeSecction={codeSecction}
                />
                </Modal>
                <div className="content">
                    <Row>
                        <Col xs={1} md={1}>

                            <div className="col-xl-12 col-xl-6" style={{ paddingTop: '15px' }}>

                                <div className="container" style={{ paddingTop: '15px' }}>
                                    <div className="panel profile-cover">
                                        <div className="profile-cover__img">
                                            {/* <img src="https://images.pexels.com/photos/4623636/pexels-photo-4623636.jpeg" alt="" width="150px" height="150px" /> */}
                                            <AvatarProfile width="150px" height="150px" />
                                            {/* <button type="submit" className="button_update" onClick={togglemodalimg}>Actualizar imagén</button> */}
                                        </div>
                                        <div className="profile-cover__action" data-overlay="0.3">
                                            
                                                <h3  className="h3" style={{ fontSize: '3.0em', color: '#ffffff' }}>{firstNameUser + ' ' + lastNameUser }</h3>
                                                
                                                {/* <h3 className="group" style={{ fontSize: '1.5em', color: '#ffffff', paddingLeft: '10px' }}>Grupo: 8-1</h3> */}
                                            
                                            {/* <button className="btn btn-rounded btn-info" >
                                                <i className="fa fa-plus"></i>
                                                <span>Follow</span>
                                            </button> */}
                                            {/* <button className="btn btn-rounded btn-info">
                                                <i className="fa fa-comment"></i>
                                                <span>Mensaje</span>
                                            </button> */}
                                        </div>
                                        {/* <div className="profile-cover__info">
                                            <ul className="nav">
                                                <li><strong>0</strong>Mensajes</li>
                                            </ul>
                                        </div> */}
                                    </div>
                                    <div className="view-account">
                                        <section className="module">
                                            {/* <div>
                                                <form className="form-horizontal">
                                                    <fieldset className="fieldset">
                                                        <div className="form-group">
                                                            <label className="col-md-2 col-sm-3 col-xs-12 control-label" style={{ color: '#000000' }}>Nombre</label>
                                                            <div className="col-md-10 col-sm-9 col-xs-12">
                                                            <EdiText
                                                                type="text"
                                                                value={value}
                                                                onSave={handleSave}
                                                            />
                                                                {/* <input type="text" className="form-control" defaultValue="" /> 
                                                                
                                                            </div>
                                                        </div>

                                                        <div className="form-group">
                                                            <label className="col-md-2 col-sm-3 col-xs-12 control-label" style={{ color: '#000000' }}>Apellido</label>
                                                            <div className="col-md-10 col-sm-9 col-xs-12">
                                                                <input type="text" className="form-control" defaultValue="" > {lastNameUser}</input>
                                                            </div>
                                                        </div>
                                                     <div className="form-group">
                                                            <label className="col-md-2 col-sm-3 col-xs-12 control-label" style={{ color: '#000000' }}>Last Name</label>
                                                            <div className="col-md-10 col-sm-9 col-xs-12">
                                                                <input type="text" className="form-control" defaultValue="Sanders" />
                                                            </div>
                                                        </div>  
                                                    </fieldset>
                                                    {/* <fieldset className="fieldset">
                                                        <h3 className="fieldset-title">Contact Info</h3>
                                                        <div className="form-group">
                                                            <label className="col-md-2  col-sm-3 col-xs-12 control-label">Email</label>
                                                            <div className="col-md-10 col-sm-9 col-xs-12">
                                                                <input type="email" className="form-control" defaultValue="Rebecca@website.com" />
                                                                <p className="help-block">This is the email </p>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-md-2  col-sm-3 col-xs-12 control-label">Twitter</label>
                                                            <div className="col-md-10 col-sm-9 col-xs-12">
                                                                <input type="text" className="form-control" defaultValue="SpeedyBecky" />
                                                                <p className="help-block">Your twitter username</p>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-md-2  col-sm-3 col-xs-12 control-label">Linkedin</label>
                                                            <div className="col-md-10 col-sm-9 col-xs-12">
                                                                <input type="url" className="form-control" defaultValue="https://www.linkedin.com/in/lorem" />
                                                                <p className="help-block">eg. https://www.linkedin.com/in/yourname</p>
                                                            </div>
                                                        </div>
                                                    </fieldset>  
                                                    <hr />
                                                    <div className="form-group">
                                                        <div className="col-md-10 col-sm-9 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0">
                                                            <input className="button_send" type="submit" defaultValue="Update Profile" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div> */}
                                            <div>&nbsp;&nbsp;&nbsp;<br /> &nbsp;&nbsp;<br /> &nbsp;&nbsp;</div>
                                        </section>
                                    </div>
                                </div>

                            </div >
                        </Col >

                    </Row >
                </div >
            </div >
        );
    }

    return (
        <Fragment>
            {/* {ScrollCourses()} */}
            {ProfileUser()}
        </Fragment>
    )
}

export default PatientProfile;

// api/profilepictures/
// api/profilepictures/create/
// api/profilepictures/update/
// api/profilepictures/delete/
// para la foto de perfil
// es igual que mandar arhivo
// pero recibe
// photo = imagen
// user = codeuser (docuemento id)
