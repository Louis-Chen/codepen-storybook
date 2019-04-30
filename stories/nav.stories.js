import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import { NavDefault, NavAuth } from '../src/layout/nav'

storiesOf('Layout|導覽列', module)
	.addDecorator(centered)
	.add('預設', () => <NavDefault />)
	.add('已登入', () => <NavAuth email="test@gmail.com" />)
