import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { Container } from 'semantic-ui-react'

import AuthLogin from '../src/auth/Login'
import AuthRegister from '../src/auth/Register'
import AuthResetPassword from '../src/auth/ResetPassword'

import { VerifyEmailFail, VerifyEmailSuccess } from '../src/auth/verify/Email'
import VerifyResetPassword from '../src/auth/verify/ResetPassword'

storiesOf('權限|表單', module)
	.addDecorator(story => <Container style={{ marginTop: '10vh' }}>{story()}</Container>)
	.add('登入', () => <AuthLogin />)
	.add('註冊', () => <AuthRegister />)
	.add('忘記密碼', () => <AuthResetPassword />)

storiesOf('權限|驗證', module)
	.addDecorator(story => <Container style={{ marginTop: '10vh' }}>{story()}</Container>)
	.add('忘記密碼', () => <VerifyResetPassword />)
	.add('信箱驗證/成功', () => <VerifyEmailSuccess />)
	.add('信箱驗證/失敗', () => <VerifyEmailFail />)
