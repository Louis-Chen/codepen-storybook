import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { Container } from 'semantic-ui-react'

import GogoroStationMap from '../src/gogoro/Map'

storiesOf('專案|Gogoro', module)
	.addDecorator(story => <Container style={{ marginTop: '10vh' }}>{story()}</Container>)
	.add('地圖', () => <GogoroStationMap />)
