import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ComposedChart, Tooltip, BarChart, Bar } from 'recharts'

const renderLegendText = (value, entry) => {
	const { color } = entry
	switch (value) {
		case 'entry':
			return <span style={{ color }}>{`入境人數`}</span>
		case 'departure':
			return <span style={{ color }}>{`出境人數`}</span>
		case 'total':
			const textcolor = '4e4e4e'
			return <span style={{ color }}>{`當日總流量`}</span>
		default:
			return <span style={{ color }}>{value}</span>
	}
}
export const LineChartKaohsiungAiport = props => {
	const { data } = props
	return (
		<LineChart width={800} height={400} data={data}>
			<Line type="monotone" dataKey="entry" stroke="#4798B3" />
			<Line type="monotone" dataKey="departure" stroke="#FF4500" />
			<CartesianGrid stroke="#ccc" />
			<XAxis dataKey="date" />
			<YAxis />
			<Legend formatter={renderLegendText} />
			<Tooltip />
		</LineChart>
	)
}

export const BarChartKaohsiungAiport = props => {
	const { data } = props
	return (
		<BarChart width={800} height={400} data={data}>
			<Bar dataKey="total" barSize={20} fill="#f6e0b3" />
			<XAxis dataKey="date" />
			<YAxis />
			<Legend formatter={renderLegendText} />
			<Tooltip />
		</BarChart>
	)
}

export const ComposeChartKaohsiungAiport = props => {
	const { data } = props

	return (
		<ComposedChart width={730} height={250} data={data}>
			<XAxis dataKey="date" />
			<YAxis />
			<Tooltip />
			<Legend formatter={renderLegendText} />
			<CartesianGrid stroke="#f5f5f5" />
			<Bar dataKey="total" barSize={20} fill="#f6e0b3" />
			<Line type="monotone" dataKey="entry" stroke="#4798B3" />
			<Line type="monotone" dataKey="departure" stroke="#FF4500" />
		</ComposedChart>
	)
}
