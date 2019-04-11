import React from 'react'

import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps'
import { compose, withProps } from 'recompose'

const SimpleMap = props => {
	return (
		<GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
			<Marker position={{ lat: -34.397, lng: 150.644 }} />
		</GoogleMap>
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

export default enhancer(SimpleMap)
