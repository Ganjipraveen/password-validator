import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #24263c;
  min-height: 100vh;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #383a4e;
  padding: 30px;
  border-radius: 10px;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 26px;
`

export const Text = styled.p`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 14px;
  margin-bottom: 30px;
`

export const Input = styled.input`
  background-color: #edeeff;
  width: 85%;
  height: 33px;
  border-radius: 4px;
  border: none;
  outline: none;
`

export const ErrorMsg = styled.p`
  color: #ef4444;
  font-family: 'Roboto';
  font-size: 10px;
`
