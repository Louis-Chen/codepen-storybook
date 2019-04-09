import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { Container } from 'semantic-ui-react'

import AuthLogin from '../src/auth/Login'
import AuthRegister from '../src/auth/Register'


storiesOf('使用者|表單', module)
	.addDecorator(story => <Container style={{ marginTop: '10vh' }}>{story()}</Container>)
	.add('登入', () => <AuthLogin />)
	.add('註冊', () => <AuthRegister />)
