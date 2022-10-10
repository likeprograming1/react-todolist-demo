import { useParams } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import useUpdate from "../hooks/useUpdate";

const UpdateContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Detail = () =>{
  const [title, onChange] = useUpdate();
  const {id} = useParams();
  const [data] = useFetch(`http://localhost:3000/data/${id}`);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:3000/data/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({title})
    })
      .then((response) => response.json())
      .then(() => {
        window.location.href = 'http://localhost:3001/';
      })
      .catch((error) => {
        console.error('실패:', error);
      });
  }

  return (
    <UpdateContainer>
        <input
        value = {title}
        onChange = {(e)=>onChange(e)}
      />
      <button onClick={handleSubmit}>수정</button>
    </UpdateContainer>
  )
}