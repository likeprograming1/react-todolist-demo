import { Link } from "react-router-dom";
import styled from "styled-components"
import React from 'react';
const Datamain = styled.main`
border: solid 1px black;
  > .check {
    background-color: #b3fdb3 ;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > .uncheck {
    background-color: #fff ;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > .uncheck > h2,
  > .check > h2{
    width: 70%;
    margin: 0;
    padding: 10px;
  }
  > .uncheck > .cancle,
  > .check > .cancle {
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
export const List = React.memo(({data}) => {
  
  const handleCancle = (id) => {
    fetch(`http://localhost:3000/data/` + id , {
      method: "DELETE",
    })
    .then(() => {
      window.location.href = 'http://localhost:3001/';
    })
    .catch((error) => {
      console.error('Error', error);
    })
  }
  const handleChecked = async(e,data) => {
    await fetch(`http://localhost:3000/data/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: data.title,
        checked : e.target.checked,
      })
    })
      .then((response) => response.json())
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error('실패:', error);
      });
  }

  return (
    <Datamain>
      {
        data && (data.map((data)=> (
            <section key={data.id} className={data.checked ? "check" : "uncheck"}>
              <input type='checkbox' checked={data.checked} onChange={(e)=>handleChecked(e,data)}></input>
              <h2>{data.title}</h2>
              <Link to={`/Detail/${data.id}`}><button disabled={data.checked} className={"update"} >수정</button></Link>
              <button className="cancle" onClick={()=>handleCancle(data.id)}>-</button>
            </section>
        )))
      }
    </Datamain>
  )
})