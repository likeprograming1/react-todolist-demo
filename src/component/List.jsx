import { Link } from "react-router-dom";
import styled from "styled-components"

const Datamain = styled.main`
background-color: #b3fdb3 ;
  > section {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > section > h2{
    width: 70%;
    margin: 0;
    padding: 10px;
  }
  > section > .cancle {
    cursor: pointer;
    border: none;
    background-color: #333;
    color: #e1e1e1;
    font-size: 14px;
    padding: 5px;
  }
  .update {
    padding: 5px;
    margin: 0 10px;
    cursor: pointer;
    border: none;
    background-color: #333;
    color: #e1e1e1;

  }
`
export const List = ({data}) => {

  const handleCancle = (id) => {
    fetch(`http://localhost:3000/data/`+id , {
      method: "DELETE",
    })
    .then(() => {
      window.location.href = 'http://localhost:3001/';
    })
    .catch((error) => {
      console.error('Error', error);
    })
  }

  return (
    <Datamain>
      {
        data && (data.map((data)=> (
            <section key={data.id}>
              <h2>{data.title}</h2>
              <Link to={`/Detail/${data.id}`}><button className="update" >수정</button></Link>
              <button className="cancle" onClick={()=>handleCancle(data.id)}>-</button>
            </section>
        )))
      }
    </Datamain>
  )
}