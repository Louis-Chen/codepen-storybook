import React from 'react'
import { Menu, Input } from 'semantic-ui-react'

import { Form, Field, withFormik } from 'formik'
import { compose } from 'recompose'

const renderInput = ({ field, placeholder, form: { touched, errors } }) => (
	<Input
		{...field}
		action={{ type: 'submit', content: '新增', color: 'teal' }}
		error={touched[field.name] && errors[field.name]}
		placeholder={touched[field.name] && errors[field.name] && errors[field.name]}
	/>
)

const BoardMenu = props => {
	return (
		<Menu>
			<Menu.Item>
				<Input className="icon" icon="search" placeholder="Search..." />
			</Menu.Item>
			<Menu.Item position="right">
				<Form>
					<Field name="category" placeholder="新建類別" render={renderInput} />
				</Form>
			</Menu.Item>
		</Menu>
	)
}

const enhancer = compose(
	withFormik({
		mapPropsToValues: () => ({ category: '' }),

		// Custom sync validation
		validate: values => {
			const errors = {}

			if (!values.category) {
				errors.category = '必填'
			}

			return errors
		},

		handleSubmit: (values, { setSubmitting }) => {
			setTimeout(() => {
				alert(JSON.stringify(values, null, 2))
				setSubmitting(false)
			}, 500)
		},

		displayName: 'BasicForm'
	})
)

export default enhancer(BoardMenu)
