import React, { useState, useEffect } from 'react'
import { Item, Input } from 'semantic-ui-react'
import axios from 'axios'

const StationList = () => {
	const [station, setStation] = useState([])
	const [search, setSearch] = useState('')
	useEffect(() => {
		axios
			.get('https://wapi.gogoro.com/tw/api/vm/list')
			.then(response => {
				// handle success
				const preparation = []
				// 資料格式預處理
				response.data.data.map((d, i) => {
					const LocName = JSON.parse(d.LocName)
					const Address = JSON.parse(d.Address)
					const District = JSON.parse(d.District)
					const City = JSON.parse(d.City)
					return preparation.push({
						Id: d.Id,
						LocName: LocName,
						Latitude: d.Latitude,
						Longitude: d.Longitude,
						ZipCode: d.ZipCode,
						Address: Address,
						District: District,
						State: 1,
						City: City,
						AvailableTime: d.AvailableTime,
						AvailableTimeByte: d.AvailableTimeByte
					})
				})
				return setStation(preparation)
			})
			.catch(function(error) {
				// handle error
				console.log(error)
			})
	}, [])

	const filterList = () => {
		let updatedList = station.filter(item => {
			return item.Address.List[1].Value.indexOf(search) !== -1
		})
		let data = updatedList.map((item, index, array) => {
			return (
				<Item>
					<Item.Image size="tiny" src="https://react.semantic-ui.com/images/wireframe/image.png" />
					<Item.Content verticalAlign="middle">
						<Item.Header as="a" content={item.Address.List[1].Value} />
					</Item.Content>
				</Item>
			)
		})
		return data
	}

	return (
		<React.Fragment>
			<Input value={search} onChange={e => setSearch(e.target.value)} />
			<Item.Group>{filterList()}</Item.Group>
			<pre>{JSON.stringify(station, null, 2)}</pre>
		</React.Fragment>
	)
}
export default StationList
