import React, { Fragment, useState } from 'react'
import { Row, Col } from 'reactstrap';
import { Modal, AvatarProfile, UpdateImgUser, FormProfileUser } from 'components';
import { useSelector } from 'react-redux'
import './styles/profile.css'

const PatientProfile = (props) => {
    const { user } = useSelector(
        (state) => state.authentication.user.user_data
    )
    const idUser = user.documentIdUser
    // const firstNameUser = user.firstNameUser
    // const lastNameUser = user.lastNameUser
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
                    user={idUser}
                    />
                </Modal>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                            <div className="col-xl-12" style={{ paddingTop: '15px' }}>

                                <div className="container" style={{ paddingTop: '15px', width: "100%" }}>
                                    <div className="panel profile-cover">
                                        <div className="profile-cover__img" onClick={togglemodalimg}>
                                        {/* <button type="submit" className="button_update" onClick={togglemodalimg}>Actualizar</button> */}
                                            {/* <img src="https://images.pexels.com/photos/4623636/pexels-photo-4623636.jpeg" alt="" width="150px" height="150px" /> */}
                                            <AvatarProfile 
                                            documentIdUser={idUser} />
                                        </div>
                                        {/* <div className="profile-cover__action" data-overlay="0.3">
                                            {firstNameUser + ' ' + lastNameUser}
                                        </div> */}
                                        {/* <div className="profile-cover__info">
                                            <ul className="nav">
                                                <li><strong>0</strong>Mensajes</li>
                                            </ul>
                                        </div> */}
                                    </div>
                                    <section>
                                        <div>
                                            <FormProfileUser user={user}/>

                                        </div>
                                        <div>&nbsp;&nbsp;&nbsp;<br /> &nbsp;&nbsp;<br /> &nbsp;&nbsp;</div>
                                    </section>
                                </div>
                            </div>
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
