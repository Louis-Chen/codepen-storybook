import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { Container } from 'semantic-ui-react'

import LineChart from '../src/chart/Default'
import { LineChartKaohsiungAiport, BarChartKaohsiungAiport, ComposeChartKaohsiungAiport } from '../src/chart/AirPort'

import kaohsiungAiport from '../data/airport/kaohsiung.json'

const defaultData = [
	{ name: 'Page A', uv: 500, pv: 2400, amt: 2400 },
	{ name: 'Page B', uv: 400, pv: 2400, amt: 2400 },
	{ name: 'Page C', uv: 300, pv: 2400, amt: 2400 },
	{ name: 'Page D', uv: 200, pv: 2400, amt: 2400 },
	{ name: 'Page E', uv: 100, pv: 2400, amt: 2400 },
	{ name: 'Page F', uv: 800, pv: 2400, amt: 2400 }
]

storiesOf('視覺化|圖表', module)
	.addDecorator(story => <Container style={{ marginTop: '10vh' }}>{story()}</Container>)
	.add('預設', () => <LineChart data={defaultData} />)
	.add('20192月高雄機場出入境/比較表', () => <LineChartKaohsiungAiport data={kaohsiungAiport} />)
	.add('20192月高雄機場出入境/統計圖', () => <BarChartKaohsiungAiport data={kaohsiungAiport} />)
	.add('20192月高雄機場出入境/疊圖', () => <ComposeChartKaohsiungAiport data={kaohsiungAiport} />)
