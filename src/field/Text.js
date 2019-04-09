import React from 'react'
import { Input } from 'semantic-ui-react'

export const FieldText = ({ field, form: { isSubmitting, touched, errors } }) => {
	return (
		<Input
			{...field}
			disabled={isSubmitting}
			type="text"
			error={touched[field.name] && errors[field.name]}
			placeholder={touched[field.name] && errors[field.name]}
		/>
	)
}
