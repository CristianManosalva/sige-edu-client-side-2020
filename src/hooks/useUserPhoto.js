import { useState, useEffect } from 'react';

const useUserPhoto = (API) => {
  const [photouserurl, setPhotoUserUrl] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    window.fetch(API)
      .then(res => res.json())
        .then(response => {
          setPhotoUserUrl(response)
          // console.log(response);
          setLoading(false)
        });
  }, []);
  return {photouserurl, loading};
}
export default useUserPhoto;