import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { Container } from 'semantic-ui-react'

import GogoroStationMap from '../src/gogoro/Map'
import StationList from '../src/gogoro/List'

storiesOf('專案|Gogoro', module)
	.addDecorator(story => <Container style={{ marginTop: '10vh' }}>{story()}</Container>)
	.add('地圖', () => <GogoroStationMap />)
	.add('站點列表', () => <StationList />)
