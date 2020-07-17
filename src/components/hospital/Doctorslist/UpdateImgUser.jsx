import React, { useState, useEffect } from "react";
import { config } from '_config'
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import AssignmentIcon from '@material-ui/icons/Assignment';
import './styles/styleUpdateImg.css'

const UpdateImgUser = ( {userId, idPhoto, getUserPhotoUser}) => {
  const [idphotouser, setIdPhotoUser] = useState(idPhoto)
  var codephoto
  const [image, setImage] = useState({ preview: "", raw: "" });
  const handleChange = e => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  };

  function deleteImageUser() {
    // setUser(props.user)
    fetch(`${config.apiEndPoint}/profilepictures/delete/${idPhoto}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('DELETE', data);
        
        // setUser(data)
      })
      .catch((error) => console.log(error))
      .finally(() => {
        // setLoaders((loaders) => ({
        //   ...loaders,
        //   cargaLoad: false,
        // }))
      })
  }

  const handleUpload = async e => {
    e.preventDefault();
    deleteImageUser();
    const formData = new FormData();
    formData.append("photo", image.raw);
    formData.append("user", userId);

    await fetch(`${config.apiEndPoint}/profilepictures/create/`, {
      method: 'POST',
      body: formData,
    })
    .then((response) => {
      console.log('response.status',response.status);
      
      if (response.status == 201) {
        console.log('201', response.status);
        
        // setModal(!modal)
        // swal('Excelente!!', 'Todo salió bien!! :)', 'success')
      }
      return response.json()
    })
    .then((data) => {
      setIdPhotoUser(data.codePhoto)
      codephoto = data.codePhoto
      console.log('data', userId);
      
    })
    .catch((error) => {
      console.log('El error: ', error)
      // swal('UPSS..!!', 'Algo Sucedió, Intenta mas tarde!! :)', 'warning')
    })
    .finally(() => {})
    getUserPhotoUser({
      userId,
    })
    console.log('idphotouser: **', userId)
  };
  // function getUserPhoto() {
  //   // setUser(props.user)
  //   fetch(`${config.apiEndPoint}/profilepictures/${idPhoto}`, {
  //     method: 'GET',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       var codephoto = data.codePhoto
  //       getUserPhotoUser({
  //         codephoto,
  //       })
  //       console.log('dataprofilepictures', codephoto);
        
  //       // setUser(data)
  //     })
  //     .catch((error) => console.log(error))
  //     .finally(() => {
  //       // setLoaders((loaders) => ({
  //       //   ...loaders,
  //       //   cargaLoad: false,
  //       // }))
  //     })
  // }
  
 
  
  return (
    
    <div className="container">
      <label htmlFor="upload-button">
        {image.preview ? (
          <img src={image.preview} alt="dummy" width="150px" className="img_upload" />

        ) : (
            <>
            <div>
                  <Avatar />
                    
            </div>
              {/* <Icon style={{ fontSize: 300 }}>add_circle</Icon> */}
              <h5 className="text-center">Selecciona una Imagén. </h5>
            </>
          )}
      </label>
      <>
      <input
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleUpload} className="button_update">Actualizar</button>
      </>
    </div>
  );
}
export default UpdateImgUser