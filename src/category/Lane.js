import React from 'react'

import { Droppable } from 'react-beautiful-dnd'
import { withFormik, Field, Form } from 'formik'

import { Input } from 'semantic-ui-react'
import { Col } from 'react-styled-flexboxgrid'

const LaneStyle = {
	display: 'flex',
	flexDirection: 'column',
	width: '300px',
	padding: '1em',
	height: 'auto'
}

const OuterWrapperStyle = {
	height: '100%',
	marginTop: '10px'
}

const InnerWrapperStyle = {
	height: '100%'
}

const HeaderStyle = {
	fontSize: '0.8em',
	textTransform: 'uppercase',
	fontFamily: 'sans-serif',
	color: '#888'
}

const Lane = withFormik({
	mapPropsToValues: () => ({ catalog: '' }),

	// Custom sync validation
	validate: values => {
		const errors = {}

		if (!values.catalog) {
			errors.catalog = '必填'
		}

		return errors
	},

	handleSubmit: (values, { setSubmitting, props }) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2))
			setSubmitting(false)
		}, 1000)
	},
	displayName: 'CreateCatalog'
})(props => {
	const { id, children, title } = props
	return (
		<Col style={LaneStyle}>
			<h1 style={HeaderStyle}>{title}</h1>
			<Form>
				<Field
					name="catalog"
					placeholder="新建標籤"
					render={({ field, placeholder, form: { touched, errors } }) => (
						<Input
							fluid
							{...field}
							action={{ type: 'submit', content: '新增', basic: true }}
							error={touched[field.name] && errors[field.name]}
							placeholder={(touched[field.name] && errors[field.name] && errors[field.name]) || placeholder}
						/>
					)}
				/>
			</Form>
			<div style={OuterWrapperStyle}>
				<Droppable droppableId={`${id}`}>
					{(provided, snapshot) => (
						<div ref={provided.innerRef} style={InnerWrapperStyle}>
							{children}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</div>
		</Col>
	)
})

export { Lane }
