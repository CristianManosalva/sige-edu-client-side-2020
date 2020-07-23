import React, { Fragment, useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap';
import { config } from '_config'
import { Modal, AvatarProfile, UpdateImgUser, FormProfileUser } from 'components';
import useUserPhoto from '../../../hooks/useUserPhoto'
import { useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import './styles/profile.css'
const axios = require('axios').default;


const PatientProfile = (props) => {
    const { user } = useSelector(
        (state) => state.authentication
    )
    const idUser = user.user_data.user.documentIdUser
    const API = `${config.apiEndPoint}/users/${idUser}`
    const { photouserurl, loading } = useUserPhoto(API);
    const userProfile = photouserurl

    const [modalUpdateimg, setModalUpdateimg] = useState(false);
    const togglemodalimg = () => setModalUpdateimg(!modalUpdateimg);
    const [urlphotouser, setUrlphoto] = useState('')
    useEffect(() => {
        getDatauser()
    }, []);
    const getDatauser = async e => {
        try {
            const response = await axios.get(`${config.apiEndPoint}/users/${idUser}`);
            setUrlphoto(response.data.profile_picture)
        } catch (e) {
        }
    }
    const ProfileUser = () => {
        console.log(urlphotouser);

        const getUserPhotoUser = (
            urlImgUser
        ) => {
            getDatauser()
            setModalUpdateimg(false)
        }
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
                        userId={idUser}
                        getUserPhotoUser={getUserPhotoUser}
                    />
                </Modal>
                <div className="content">
                        <Row>
                            <Col xs={12} md={12}>
                                <div className="col-xl-12" style={{ paddingTop: '15px' }}>
                                    <div className="container" style={{ paddingTop: '15px', width: "100%" }}>
                                        <div className="panel profile-cover">
                                            {urlphotouser == 'https://res.cloudinary.com/sigeedu/image/upload/v1594776164/sigedu/1528904524_boy_1_wehjsw.svg' ? (
                                                <div className="profile-cover__img" onClick={togglemodalimg}>
                                                    <img src={'https://res.cloudinary.com/sigeedu/image/upload/v1595432004/userphoto_lxksb1.png'} />
                                                </div>
                                            ) : (
                                                    <div className="profile-cover__img" onClick={togglemodalimg}>
                                                        <img src={urlphotouser} />
                                                    </div>
                                                )}

                                            <div className="profile-cover__action" data-overlay="0.3">
                                                {/* {firstNameUser + ' ' + lastNameUser} */}
                                            </div>
                                        </div>
                                        <section>
                                            <div>
                                                <FormProfileUser user={userProfile} idDocUser={idUser} />
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
            {ProfileUser()}
        </Fragment>
    )
}
export default PatientProfile;