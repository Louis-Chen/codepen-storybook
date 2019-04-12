import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { Container } from 'semantic-ui-react'

import { LineChartKaohsiungAiport, BarChartKaohsiungAiport, ComposeChartKaohsiungAiport } from '../src/chart/AirPort'

import kaohsiungAiport from '../data/airport/kaohsiung.json'

import SimpleMap from '../src/map/default'

storiesOf('視覺化|圖表', module)
	.addDecorator(story => <Container style={{ marginTop: '10vh' }}>{story()}</Container>)
	.add('20192月高雄機場出入境/比較表', () => <LineChartKaohsiungAiport data={kaohsiungAiport} />)
	.add('20192月高雄機場出入境/統計圖', () => <BarChartKaohsiungAiport data={kaohsiungAiport} />)
	.add('20192月高雄機場出入境/疊圖', () => <ComposeChartKaohsiungAiport data={kaohsiungAiport} />)

storiesOf('視覺化|地圖', module)
	.addDecorator(story => <Container style={{ marginTop: '10vh' }}>{story()}</Container>)
	.add('範本', () => <SimpleMap />)
