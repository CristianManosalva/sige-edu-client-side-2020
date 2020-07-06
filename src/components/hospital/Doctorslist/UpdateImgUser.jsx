import React, { useState, useEffect } from "react";
import { config } from '_config'
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import AssignmentIcon from '@material-ui/icons/Assignment';
import './styles/styleUpdateImg.css'


const UpdateImgUser = (props) => {
  const userID = props.user
  const user = props
  const [image, setImage] = useState({ preview: "", raw: "" });
  // console.log('image', image);
  

  const handleChange = e => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  };
  const handleUpload = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", image.raw);
    formData.append("user", userID);

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
      console.log('Data resource: ', data)
    })
    .catch((error) => {
      console.log('El error: ', error)
      // swal('UPSS..!!', 'Algo Sucedió, Intenta mas tarde!! :)', 'warning')
    })
    .finally(() => {})
  };
  function getUserPhoto() {
    // setUser(props.user)
    fetch(`${config.apiEndPoint}/profilepictures/picture/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
        
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
  useEffect(() => {
    getUserPhoto()
  }, [])
 
  
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