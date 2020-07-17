import { useState, useEffect } from 'react';

const useUserPhoto = (API) => {
  const [photouserurl, setPhotoUserUrl] = useState([]);
  const [photouserid, setPhotoUserId] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    window.fetch(API)
      .then(res => res.json())
        .then(response => {
          setPhotoUserUrl(response[0].photo)
          setPhotoUserId(response[0].codePhoto)
          console.log(response[0].photo);
          
          setLoading(false)
        });
  }, []);
  return {photouserid, photouserurl, loading};
}
export default useUserPhoto;