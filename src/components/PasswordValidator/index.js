import {useState} from 'react'

import {
  MainContainer,
  CardContainer,
  Heading,
  Text,
  Input,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const showErrorMsg = password.length < 8

  const onChangeInput = event => {
    setPassword(event.target.value)
  }
  return (
    <MainContainer>
      <CardContainer>
        <Heading>Password Validator</Heading>
        <Text>check how strong and secure is your password</Text>
        <Input type="password" value={password} onChange={onChangeInput} />
        {showErrorMsg && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </CardContainer>
    </MainContainer>
  )
}
export default PasswordValidator
