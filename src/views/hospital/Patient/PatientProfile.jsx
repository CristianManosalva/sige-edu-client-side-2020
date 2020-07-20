import React, { Fragment, useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap';
import { config } from '_config'
import { Modal, AvatarProfile, UpdateImgUser, FormProfileUser } from 'components';
import useUserPhoto from '../../../hooks/useUserPhoto'
import { useSelector } from 'react-redux'
import './styles/profile.css'



const PatientProfile = (props) => {
    const { user } = useSelector(
        (state) => state.authentication
    )
    
    // const idPhoto = ''
    // const [codephotouser, setCodephoto] = useState('')
    const idUser = user.user_data.user.documentIdUser
    const API = `${config.apiEndPoint}/users/${idUser}`
    const { photouserurl, loading } = useUserPhoto(API);
    console.log(photouserurl.profile_picture);
    


    const userProfile = photouserurl
    const [modalUpdateimg, setModalUpdateimg] = useState(false);
    const togglemodalimg = () => setModalUpdateimg(!modalUpdateimg);
    // const [codephotouser, setCodephoto] = useState('')

    // function getPhotoUser() {
    //     const { photouserurl, photouserid, loading } = useUserPhoto(API);
        
    // }



    const ProfileUser = () => {


        // function getUserPhotoUser({
        //     userId,
        // }) {
        //     getPhotoUser();
        // }
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
                        // userId={idUser}
                        // idPhoto={idPhoto}
                        // getUserPhotoUser={getUserPhotoUser}
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
                                            {/* <AvatarProfile
                                                documentIdUser={idUser}
                                                photouser={photouser}
                                                getUserPhotoUser={getUserPhotoUser}
                                                /> */}
                                            <img src="https://res.cloudinary.com/sigeedu/image/upload/v1595252589/sigedu/SIGEBird_k7wgqh.png" />
                                        </div>
                                        <div className="profile-cover__action" data-overlay="0.3">
                                            {/* {firstNameUser + ' ' + lastNameUser} */}
                                        </div>
                                        {/* <div className="profile-cover__info">
                                            <ul className="nav">
                                                <li><strong>0</strong>Mensajes</li>
                                            </ul>
                                        </div> */}
                                    </div>
                                    <section>
                                        <div>
                                            <FormProfileUser user={userProfile} />

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
