import React, { useState, useEffect } from 'react'
import { isEmpty } from 'lodash'
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps'
import { compose, withProps } from 'recompose'

const GogoroStationMap = props => {
	const [station, setStation] = useState([])
	const fetchAPI = fetch('https://wapi.gogoro.com/tw/api/vm/list')
		.then(response => {
			return response.json()
		})
		.then(data => {
			const preparation = []
			// 資料格式預處理
			data.data.map((d, i) => {
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
	useEffect(() => {
		return () => {
			fetchAPI
		}
	}, [])

	return (
		<React.Fragment>
			<pre>{JSON.stringify(station, null, 2)}</pre>
			<GoogleMap defaultZoom={7} defaultCenter={{ lat: 23.5, lng: 120 }}>
				{!isEmpty(station) && station.map((s, i) => <Marker position={{ lat: s.Latitude, lng: s.Longitude }} />)}
			</GoogleMap>
		</React.Fragment>
	)
}

const enhancer = compose(
	withProps({
		/**
		 * Note: create and replace your own key in the Google console.
		 * https://console.developers.google.com/apis/dashboard
		 * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
		 */
		googleMapURL:
			'https://maps.googleapis.com/maps/api/js?key=AIzaSyAkdvJpmaNSRVqu35dqpgqcEHVso3OilEc&v=3.exp&libraries=geometry,drawing,places',
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <div style={{ height: `400px` }} />,
		mapElement: <div style={{ height: `100%` }} />
	}),
	withScriptjs,
	withGoogleMap
)

export default enhancer(GogoroStationMap)
