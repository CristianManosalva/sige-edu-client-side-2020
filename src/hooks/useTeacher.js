import { useState, useEffect } from 'react';

const useTeacher = (API) => {
  const [teacher, setTeacher] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    window.fetch(API)
      .then(res => res.json())
        .then(response => {
          setTeacher(response)
          setLoading(false)
        });
  }, []);
  return {teacher, loading};
}
export default useTeacher;