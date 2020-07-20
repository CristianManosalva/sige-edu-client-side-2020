import React, { useState, useEffect } from "react";
import { config } from '_config'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import AssignmentIcon from '@material-ui/icons/Assignment';
import './styles/styleUpdateImg.css'
import swal from 'sweetalert';
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/sigeedu/image/upload'
const UPLOAD_PRESET = 'jf6wa5jo'
const axios = require('axios').default;


const UpdateImgUser = ({ userId, getUserPhotoUser }) => {
  const [progressimage, setProgressImg] = useState(-1); 
  const [image, setImage] = useState({ preview: "", raw: "" });
  const handleChange = e => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  };
  const updatePhotoUser = async (documentIdUser, profile_picture_url) => {
    
    try {
      const response = await axios.patch(`${config.apiEndPoint}/users/update/${documentIdUser}/`, { profile_picture: `${profile_picture_url}`});
      getUserPhotoUser(profile_picture_url)
      swal("listo!!", "Imagen actualizada con exito", "success");

    } catch (e) {
      swal("ups!!", "Algo sucedió, intenta más tarde", "error");
    }
    
  }

  const handleUpload = async e => {
    e.preventDefault();
    // deleteImageUser();
    const formData = new FormData();
    formData.append("file", image.raw);
    formData.append("upload_preset", UPLOAD_PRESET);

    const res = await axios.post(
      CLOUDINARY_URL,
      formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress(e){
        let progress = Math.round((e.loaded * 100.0) / e.total);
        setProgressImg(progress)
        console.log(progress);
      }
    })
    updatePhotoUser(userId, res.data.secure_url)
    // console.log('res', res.data.secure_url);
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
          <img src={image.preview} alt="img" width="150px" className="img_upload" />

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
        <br />
        <br />
        <ProgressBar  now={progressimage} variant="success"/>
        <br />
      </>
    </div>
  );
}
export default UpdateImgUser