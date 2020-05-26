import { useState, useEffect } from 'react';

const useStudents = (API) => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    window.fetch(API)
      .then(res => res.json()
        .then(response => setStudents(response)));
  }, []);
  return students;
}
export default useStudents;