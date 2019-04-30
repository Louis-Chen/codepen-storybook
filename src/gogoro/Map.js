import React, { useState, useEffect } from 'react'
import { isEmpty } from 'lodash'
import axios from 'axios'

import { GoogleMap, LoadScript, MarkerClusterer, Marker, InfoWindow } from '@react-google-maps/api'

import { compose } from 'recompose'
import { Header, Divider, List } from 'semantic-ui-react'

const GOOGLEAPIKEY = 'AIzaSyAkdvJpmaNSRVqu35dqpgqcEHVso3OilEc'

const GogoroStationMap = props => {
	const [station, setStation] = useState([])
	const [center, changeCenter] = useState({ lat: 23.5, lng: 121 })
	const [infoWindow, openInfoWindow] = useState('')
	const fetchAPI = axios
		.get('https://webapi.gogoro.com/api/vm/list')
		.then(response => {
			// handle success
			const preparation = []
			// 資料格式預處理
			response.data.map((d, i) => {
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

	return (
		<React.Fragment>
			<LoadScript id="script-loader" googleMapsApiKey={GOOGLEAPIKEY}>
				<GoogleMap
					id="example-map"
					mapContainerStyle={{
						height: '400px',
						width: '800px'
					}}
					zoom={7}
					center={center}
				>
					<MarkerClusterer
						options={{
							imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
						}}
					>
						{clusterer =>
							!isEmpty(station) &&
							station.map((s, i) => {
								return (
									<Marker
										key={i}
										position={{ lat: s.Latitude, lng: s.Longitude }}
										onClick={async () => {
											await changeCenter({ lat: s.Latitude, lng: s.Longitude })
											await openInfoWindow(s.Id)
										}}
										clusterer={clusterer}
									>
										{infoWindow === s.Id && (
											<InfoWindow
												onLoad={infoWindow => {
													console.log('infoWindow: ', infoWindow)
												}}
												position={center}
											>
												<React.Fragment>
													<Header content={s.LocName.List[1].Value} />
													<Divider />
													<List>
														<List.Item>{s.Address.List[1].Value}</List.Item>
													</List>
												</React.Fragment>
											</InfoWindow>
										)}
									</Marker>
								)
							})
						}
					</MarkerClusterer>
				</GoogleMap>
			</LoadScript>
			<pre>{JSON.stringify(station, null, 2)}</pre>
		</React.Fragment>
	)
}

const enhancer = compose()

export default enhancer(GogoroStationMap)
