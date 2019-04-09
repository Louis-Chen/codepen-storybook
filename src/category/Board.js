import React, { useState } from 'react'
import { map } from 'lodash'
import update from 'immutability-helper'

import { DragDropContext } from 'react-beautiful-dnd'

import { Row } from 'react-styled-flexboxgrid'

import { Lane } from './Lane'
import { Card } from './Card'

const CategoryBlock = ({ categories, catalogs }) => {
	const [lanes, setLanes] = useState(categories)

	const onDragEnd = result => {
		const { draggableId, source, destination } = result
		if (!destination || !draggableId) {
			return
		}

		const sourceLane = lanes.find(l => l.id === source.droppableId)

		const targetLane = lanes.find(l => l.id === destination.droppableId)

		const movingCard = sourceLane.tags.find(t => {
			return t === draggableId
		})

		const newLanes = map(lanes, lane => {
			// rearrange within same lane
			if (lane === sourceLane && sourceLane === targetLane) {
				return update(sourceLane, {
					tags: {
						$splice: [[source.index, 1], [destination.index, 0, movingCard]]
					}
				})
			}

			// other cases
			if (lane === sourceLane) {
				return update(sourceLane, {
					tags: {
						$splice: [[source.index, 1]]
					}
				})
			}

			if (lane === targetLane) {
				return update(targetLane, {
					tags: {
						$splice: [[destination.index, 0, movingCard]]
					}
				})
			}

			// untouched lane
			return lane
		})
		setLanes(newLanes)
	}
	return (
		<Row style={{ height: '100vh', width: '100%' }}>
			<DragDropContext onDragEnd={onDragEnd}>
				{map(lanes, (lane, idx) => (
					<Lane title={lane.title} id={lane.id} key={'lane-' + idx} index={idx}>
						{map(lane.tags, (tag, idx) => {
							const catalog = catalogs.find(c => {
								return c.id === tag
							})
							return <Card title={catalog.title} laneId={lane.id} id={tag} key={'card-' + idx} index={idx} />
						})}
					</Lane>
				))}
			</DragDropContext>
		</Row>
	)
}

export default CategoryBlock
