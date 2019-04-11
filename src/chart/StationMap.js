import React, { Fragment } from 'react'
import GoogleMapReact from 'google-map-react'
import { isEmpty } from 'lodash'

const GoogleAPIKey = 'AIzaSyAkdvJpmaNSRVqu35dqpgqcEHVso3OilEc'

const AnyReactComponent = ({ text }) => <div>{text}</div>

export const SimpleMap = () => {
	return (
		// Important! Always set the container height explicitly
		<div style={{ height: '100vh', width: '100%' }}>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: GoogleAPIKey
				}}
				defaultCenter={{
					lat: 59.95,
					lng: 30.33
				}}
				defaultZoom={10}
			>
				<AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
			</GoogleMapReact>
		</div>
	)
}

// Return map bounds based on list of places
const getMapBounds = (map, maps, places) => {
	const bounds = new maps.LatLngBounds()

	places.forEach(place => {
		bounds.extend(new maps.LatLng(place.geometry.location.lat, place.geometry.location.lng))
	})
	return bounds
}

// Re-center map when resizing the window
const bindResizeListener = (map, maps, bounds) => {
	maps.event.addDomListenerOnce(map, 'idle', () => {
		maps.event.addDomListener(window, 'resize', () => {
			map.fitBounds(bounds)
		})
	})
}

// Fit map to its bounds after the api is loaded
const apiIsLoaded = (map, maps, places) => {
	// Get bounds by our places
	const bounds = getMapBounds(map, maps, places)
	// Fit map to bounds
	map.fitBounds(bounds)
	// Bind the resize listener
	bindResizeListener(map, maps, bounds)
}

const Marker = props => {
	const { text, onClick } = props
	return <div alt={text} {...(onClick ? { onClick } : {})} />
}

export class GogoroStationMap extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			station: []
		}
	}

	componentDidMount() {
		fetch('https://wapi.gogoro.com/tw/api/vm/list')
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
				this.setState({ station: preparation })
			})
	}
	render() {
		const { station } = this.state
		return (
			<Fragment>
				<GoogleMapReact
					bootstrapURLKeys={{
						key: GoogleAPIKey
					}}
					defaultCenter={{
						lat: 23.5,
						lng: 121
					}}
				>
					<AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
				</GoogleMapReact>
			</Fragment>
		)
	}
}
