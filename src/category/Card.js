import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { withFormik, Field, Form } from 'formik'

import { Input, Button } from 'semantic-ui-react'

const CardStyle = {
	border: '1px solid #BBB',
	borderRadius: '4px',
	boxShadow: '0px 1px #eee',
	padding: '20px 10px',
	margin: '0px 0px 10px 0px'
}
const combinedStyles = styles => ({
	...styles,
	...CardStyle
})

const Card = withFormik({
	mapPropsToValues: props => {
		console.log(props)
		return { catalog: props.title }
	},

	// Custom sync validation
	validate: values => {
		const errors = {}

		if (!values.catalog) {
			errors.catalog = '必填'
		}

		return errors
	},

	handleSubmit: (values, { setSubmitting, props }) => {
		// 文字有更動才更新
		if (values.catalog !== props.title) {
			setTimeout(() => {
				alert(JSON.stringify(values, null, 2))
				setSubmitting(false)
			}, 1000)
		}
	},
	displayName: 'UpdateCatalog'
})(props => {
	const { id, index, title, handleSubmit } = props
	const [toggle, setToggle] = useState(false)

	const CardField = toggle ? (
		<Form>
			<Field
				name="catalog"
				placeholder="新建標籤"
				render={({ field, placeholder, form: { touched, errors } }) => (
					<Input
						fluid
						action={{
							icon: 'trash',
							negative: true,
							content: '刪除',
							type: 'button',
							onClick: () =>
								setTimeout(() => {
									alert('移除')
									setToggle(false)
								}, 1000)
						}}
						{...field}
						onFocus={() => setToggle(true)}
						onBlur={() => {
							handleSubmit()
							setToggle(false)
						}}
						error={touched[field.name] && errors[field.name]}
						placeholder={(touched[field.name] && errors[field.name] && errors[field.name]) || placeholder}
					/>
				)}
			/>
		</Form>
	) : (
		<div onClick={() => setToggle(true)}>{title}</div>
	)
	return (
		<Draggable draggableId={`${id}`} type="CARD" index={index}>
			{(provided, snapshot) => (
				<React.Fragment>
					<div
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						style={combinedStyles(provided.draggableProps.style)}
					>
						{CardField}
					</div>
					{provided.placeholder}
				</React.Fragment>
			)}
		</Draggable>
	)
})

export { Card }
