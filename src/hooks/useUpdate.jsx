import { useState } from 'react';

const useFetch = () => {

  const [title, setTitle] = useState('');
  
  const onChange = (e) => {
    return setTitle(e.target.value)
  }

  return [title, onChange];
}

 
export default useFetch;