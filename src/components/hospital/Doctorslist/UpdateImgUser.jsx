import React, { useState } from "react";
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import { green, pink } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import AssignmentIcon from '@material-ui/icons/Assignment';
import './styles/styleUpdateImg.css'


export default function App() {
  
  const [image, setImage] = useState({ preview: "", raw: "" });

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
    formData.append("image", image.raw);

    await fetch("YOUR_URL", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: formData
    });
  };
 
  
  return (
    
    <div className="container">
      <label htmlFor="upload-button">
        {image.preview ? (
          <img src={image.preview} alt="dummy" width="150px" className="img_upload" />

        ) : (
            <>
            <div>
                  <Avatar>
                    <FolderIcon width='300px' height='300px'/>
                  </Avatar>
            </div>
              {/* <Icon style={{ fontSize: 300 }}>add_circle</Icon> */}
              <h5 className="text-center">Selecciona una Imagén. </h5>
            </>
          )}
      </label>
      {/* <>
      <input
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleUpload} className="button_update">Actualizar</button>
      </> */}
    </div>
  );
}
