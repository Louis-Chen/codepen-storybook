import React from 'react'
import { LineChart, Line, XAxis, YAxis,CartesianGrid } from 'recharts'


const CartDefault = (props) => {
	const {data} =props
	return (
		<LineChart width={800} height={400} data={data}>
			<Line type="monotone" dataKey="uv" stroke="#8884d8" />
			<CartesianGrid stroke="#ccc" />
			<XAxis dataKey="name" />
			<YAxis />
		</LineChart>
	)
}

export default CartDefault
