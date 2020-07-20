import React, { useState, useEffect } from "react";
import { config } from '_config'
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import AssignmentIcon from '@material-ui/icons/Assignment';
import './styles/styleUpdateImg.css'
const CLOUDINARY_URL='https://api.cloudinary.com/v1_1/sigeedu/image/upload'
const UPLOAD_PRESET = 'jf6wa5jo'
const axios = require('axios').default;

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
    // deleteImageUser();
    const formData = new FormData();
    formData.append("file", image.raw);
    formData.append("upload_preset", UPLOAD_PRESET);

    const res = await axios.post(CLOUDINARY_URL, formData, {
      headers:{
        'Content_Type': 'multipart/form-data'
      }
    })
    console.log('res', res);
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