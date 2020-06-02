import { useState, useEffect } from 'react';

const useCoursesStudent = (API) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    window.fetch(API)
      .then(res => res.json())
        .then(response => {
          setCourses(response)
          setLoading(false)
        });
  }, []);
  return {courses, loading};
}
export default useCoursesStudent;