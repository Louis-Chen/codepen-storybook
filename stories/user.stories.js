import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { Container } from 'semantic-ui-react'

import UserProfile from '../src/user/Profile'

const initailValue = {
	email: 'test@gmail.com',
	user: '測試者',
	phone: '0912345667'
}
storiesOf('使用者|個人資料', module)
	.addDecorator(story => <Container style={{ marginTop: '10vh' }}>{story()}</Container>)
	.add('預設', () => <UserProfile />)
	.add('有資料', () => <UserProfile initailValue={initailValue} isVerify={true} />)
