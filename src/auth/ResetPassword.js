import React from 'react'
import { Form, Button, Header, Divider } from 'semantic-ui-react'
import { Form as Formik, withFormik, Field, ErrorMessage } from 'formik'
import { Field as Input } from '../field'
import * as yup from 'yup'

const RetsetPassword = props => {
	return (
		<Form>
			<Header as="h1" content="忘記密碼" />
			<Divider />
			<Formik>
				<Form.Field>
					<label>輸入信箱：</label>
					<Field name="email" type="email" placeholder="帳號(信箱)" component={Input.Text} />
					<ErrorMessage name="email" />
				</Form.Field>
				<Button type="submit" fluid content="登入" />
			</Formik>
		</Form>
	)
}

const enhancer = compose(
	withFormik({
		mapPropsToValues: () => ({ email: '' }),

		// Custom sync validation

		validationSchema: () =>
			yup.object().shape({
				email: yup
					.string()
					.email('不符合信箱格式')
					.required('必填')
			}),
		handleSubmit: (values, { setSubmitting }) => {
			setTimeout(() => {
				alert(JSON.stringify(values, null, 2))

				setSubmitting(false)
			}, 1000)
		},

		displayName: 'AuthRetsetPassword'
	})
)

export default enhancer(RetsetPassword)
