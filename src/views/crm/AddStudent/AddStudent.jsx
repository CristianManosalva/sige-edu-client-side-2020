import React, { useState, useEffect } from 'react'
import { Row, Label, Input, Spinner, Col } from 'reactstrap'
import styled from 'styled-components'
import { useForm, Controller } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { config } from '_config'
import { userActions } from '_accions'
// import { Modal, UpdateImgUser, FormProfileUser } from 'components'
import useUserPhoto from '../../../hooks/useUserPhoto'
import { useSelector, useDispatch } from 'react-redux'
// import './styles/profile.css'
const axios = require('axios').default

const AlertErrorMessage = styled.p`
  color: #bf1650;
  &::before {
    display: inline;
    content: '⚠ ';
    font-size: 17px;
  }
`

let userFromStorage = JSON.parse(localStorage.getItem('userv2'))

const PatientProfile = (props) => {
  const { register, handleSubmit, errors, control } = useForm()
  let { userData: user, user: rootUser } = useSelector(
    (state) => state.authentication
  )
  const dispatch = useDispatch()
  //   let { user_data } = rootUser
  //   const { user } = user_data
  const idUser = user.documentIdUser
  const API = `${config.apiEndPoint}/users/${idUser}`
  const { photouserurl, loading } = useUserPhoto(API)
  const userProfile = photouserurl
  const [creatingOwner, setLoader] = useState(false)

  const [modalUpdateimg, setModalUpdateimg] = useState(false)
  const togglemodalimg = () => setModalUpdateimg(!modalUpdateimg)
  const [urlphotouser, setUrlphoto] = useState('')
  useEffect(() => {
    getDatauser()
  }, [])
  const getDatauser = async (e) => {
    try {
      const response = await axios.get(`${config.apiEndPoint}/users/${idUser}`)
      setUrlphoto(response.data.profile_picture)
    } catch (e) {}
  }

  /* 
  https://res.cloudinary.com/sigeedu/image/upload/v1594776164/sigedu/1528904524_boy_1_wehjsw.svg
   */

  const onSubmit = async (data) => {
    setLoader(true)
    try {
      await fetch(
        `${config.apiEndPoint}/users/update/${user.documentIdUser}/`,
        {
          method: 'PATCH',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          dispatch(userActions.updateUser(rootUser, data))
          userFromStorage.user_data.user = data
          localStorage.setItem('userv2', JSON.stringify(userFromStorage))
          window.location.reload(true)
          console.log('Respose: ', data)
        })
    } catch (error) {
      console.log('Error al actualizar usuario')
    }
    setLoader(false)
  }

  return (
    <div>
      <div className="content">
        <div className="cui-container">
          <Row>
            <div className="col-8 offset-2 col-xl-6 offset-xl-3">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-row">
                  <div className="form-group col-12">
                    <Label htmlFor="firstNameUser">Nombres</Label>
                    <Controller
                      as={Input}
                      name="firstNameUser"
                      control={control}
                      defaultValue={user.firstNameUser || ''}
                      rules={{ required: 'Ingresa tus nombres' }}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="firstNameUser"
                      as={AlertErrorMessage}
                    />
                  </div>
                  <div className="form-group col-12">
                    <Label htmlFor="lastNameUser">Apellidos</Label>
                    <Controller
                      as={Input}
                      name="lastNameUser"
                      control={control}
                      defaultValue={user.lastNameUser || ''}
                      rules={{ required: 'Ingresa tus apellios' }}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="lastNameUser"
                      as={AlertErrorMessage}
                    />
                  </div>
                  <div className="form-group col-12">
                    <Label htmlFor="phoneUser">Telefono</Label>
                    <Controller
                      as={Input}
                      name="phoneUser"
                      control={control}
                      defaultValue={user.phoneUser || ''}
                      rules={{ required: 'Ingresa un telefono de contacto' }}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="phoneUser"
                      as={AlertErrorMessage}
                    />
                  </div>
                  <div className="form-group col-12">
                    <Label htmlFor="addressUser">Direccion</Label>
                    <Controller
                      as={Input}
                      name="addressUser"
                      control={control}
                      defaultValue={user.addressUser || ''}
                      //   rules={{ required: 'Ingresa tus nombres' }}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="addressUser"
                      as={AlertErrorMessage}
                    />
                  </div>
                  <div className="form-group col-12">
                    <Label htmlFor="emailUser">Email</Label>
                    <input
                      type="emailUser"
                      className="form-control"
                      defaultValue={user.emailUser}
                      name="emailUser"
                      ref={register({
                        pattern: {
                          value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: 'Ingresa un correo valido',
                        },
                      })}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="emailUser"
                      as={AlertErrorMessage}
                    >
                      {({ messages }) =>
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p key={type}>{message}</p>
                        ))
                      }
                    </ErrorMessage>
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <button
                    type="submit"
                    className="btn btn-primary btn-sm  text-center"
                    disabled={creatingOwner}
                    style={{ borderRadius: '6px' }}
                  >
                    {creatingOwner && (
                      <Spinner
                        size="sm"
                        type="grow"
                        color="ligth"
                        className="mr-2"
                      />
                    )}
                    {!creatingOwner && (
                      <strong className="mr-1">
                        <i
                          style={{ fontSize: '12px' }}
                          className="fa fa-save mr-1"
                        />
                        Guardar
                      </strong>
                    )}
                    {creatingOwner && <strong>Guardando...</strong>}
                  </button>
                </div>
              </form>
            </div>
          </Row>
        </div>
      </div>
    </div>
  )
}
export default PatientProfile
