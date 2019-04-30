import React from 'react'

import { Button, Menu, Dropdown } from 'semantic-ui-react'

export const NavDefault = props => {
	return (
		<Menu size="huge">
			<Menu.Menu position="right">
				<Menu.Item>
					<Button primary content="註冊" size="big">
						註冊
					</Button>
				</Menu.Item>

				<Menu.Item>
					<Button content="登入" />
				</Menu.Item>
			</Menu.Menu>
		</Menu>
	)
}

export const NavAuth = props => {
	const { email } = props
	return (
		<Menu size="huge">
			<Menu.Menu position="right">
				<Dropdown item text={email}>
					<Dropdown.Menu>
						<Dropdown.Item>會員資料</Dropdown.Item>
						<Dropdown.Item>登出</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Menu.Menu>
		</Menu>
	)
}
