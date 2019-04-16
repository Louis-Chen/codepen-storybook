import React, { useState, useEffect } from 'react'
import { map } from 'lodash'
import { Item, Input, Select } from 'semantic-ui-react'
import axios from 'axios'

const cities = [
	'台北市',
	'基隆市',
	'新北市',
	'宜蘭縣',
	'桃園市',
	'新竹市',
	'新竹縣',
	'苗栗縣',
	'台中市',
	'彰化縣',
	'南投縣',
	'雲林縣',
	'嘉義縣',
	'嘉義市',
	'台南市',
	'高雄市',
	'屏東縣',
	'台東縣',
	'花蓮縣',
	'連江縣'
]

const cityOptions = map(cities, city => ({
	key: city,
	text: city,
	value: city
}))

const StationList = () => {
	const [station, setStation] = useState([])
	const [search, setSearch] = useState('')
	const [city, setCity] = useState(null)
	const fetchAPI = axios
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
	useEffect(() => {
		return () => {
			fetchAPI
		}
	}, [])

	const filterList = () => {
		let updatedList = station.filter(item => {
				console.log(city)
			if (city) {
				return item.District.List[1].Value === city
			} else {
				return item.Address.List[1].Value.indexOf(search) !== -1
			}
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
			<Select value={city} onChange={e => setCity(e.target.value)} placeholder="選擇縣市" options={cityOptions} />
			<Item.Group>{filterList()}</Item.Group>
			<pre>{JSON.stringify(station, null, 2)}</pre>
		</React.Fragment>
	)
}
export default StationList
