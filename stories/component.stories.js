import React from 'react'

import { storiesOf, addParameters } from '@storybook/react'
import { JumbotronImage, JumbotronText } from '../src/ui/Components/Jumbotron/Jumbotron'

storiesOf('Components/Jumbotron', module)
	.addParameters({
		backgrounds: [{ name: 'white', value: '#ECECE7', default: true }, { name: 'balck', value: '#07070A' }]
	})
	.add('Images', () => <JumbotronImage />)
	.add('TextCard', () => <JumbotronText />)