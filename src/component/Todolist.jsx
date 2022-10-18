import styled from 'styled-components';
import {List} from './List';
import useUpdate from '../hooks/useUpdate';
import React, { useCallback } from 'react';
import useFetch from '../hooks/useFetch';
const MainContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`
const Container = styled.main`
  width: 400px;
  text-align: center;
`
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  height: 60px;
  background-color: #333;
  color: #e1e1e1;
`
const Navbar = styled.nav`
  display: flex;
  height: 30px;
`
const InputTodo = styled.input`
  width: 90%;
  height: 20px;
  padding: 5px;
  display: flex;
  outline: none;
  background-color: #333;
  color: white;
`
const ButtonTodo = styled.button`
  width: 10%;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border: none;
  background-color: white;
  background-color: #e6e6e6;
  cursor: pointer;
`
const Listtodo = styled.section`
`
export const Todolist = React.memo(() => {
  
  const [title, onChange] = useUpdate();
  const [data] = useFetch("http://localhost:3000/data");

  const handleSubmit = useCallback(() => {
     fetch('http://localhost:3000/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({title})
      })
      .then((response) => response.json())
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error('실패:', error);
      });
  },[title]);

  return (
    <MainContainer>
      <Container>
        <Header>일정관리</Header>
        <Navbar>
          <InputTodo
            placeholder='할 일을 입력하세요.'
            value={title || ''}
            onChange={(event) => { onChange(event) }}
          ></InputTodo>
          <ButtonTodo onClick={handleSubmit}>+</ButtonTodo>
        </Navbar>
        <Listtodo>
          <List data={data} setTitle={onChange}/>
        </Listtodo>
      </Container>
    </MainContainer>
  );
})