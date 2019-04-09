import React from 'react'
import { Message, Button } from 'semantic-ui-react'

export const VerifyEmailSuccess = () => {
	return (
		<Message positive>
			<Message.Header>信箱驗證成功</Message.Header>
			<p>點擊跳轉...</p>
		</Message>
	)
}

export const VerifyEmailFail = () => {
	return (
		<Message negative>
			<Message.Header>信箱驗證失敗</Message.Header>
			<p>點擊返回會員資料...</p>
		</Message>
	)
}
