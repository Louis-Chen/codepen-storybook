import React, { useLayoutEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { withFormik, Form as FormikWrap, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { Form, Header, Button, Input } from 'semantic-ui-react'
import { Field as FieldComponent } from '../field'

const FieldPriceReular = ({ field, form: { isSubmitting, touched, errors } }) => {
	return (
		<Input
			{...field}
			disabled={isSubmitting}
			type="text"
			error={typeof touched.price === 'object' ? true : false}
			placeholder={typeof errors.price === 'object' ? errors.price.regular : ''}
		/>
	)
}

const ProductForm = props => {
	const [options, setOptions] = useState([])

	const catalogs = [
		{ id: '-LaY0q8GBE1uMOR77kt_', text: '標籤1' },
		{ id: '-LaY0rzGsF5VZYIphFLU', text: '標籤2' },
		{ id: 'LaY0u4wAXSYOYYBvc4b', text: '標籤3' }
	]
	useLayoutEffect(() => {
		// options = [
		// 	{ key: 'edit', text: '標題', value: 'edit' },
		// ]
		const coverOption = catalogs.map((catalog, i) => {
			return Object.assign({}, { key: i, text: catalog.text, value: catalog.id })
		})
		setOptions(coverOption)
	}, [])

	return (
		<Form>
			<FormikWrap>
				<Header>商品資料</Header>

				<Form.Group widths="equal">
					<Form.Field>
						<label>商品名稱</label>
						<Field name="name" render={FieldComponent.Text} />
					</Form.Field>
					<Form.Field>
						<label>商品型號</label>
						<Field name="type" render={FieldComponent.Text} />
					</Form.Field>
					<Form.Field>
						<label>國際編號</label>
						<Field name="ean" render={FieldComponent.Text} />
					</Form.Field>
					<Form.Field>
						<label>商品重量</label>
						<Field name="weight" render={FieldComponent.Text} />
					</Form.Field>
					<Form.Field>
						<label>商品庫存</label>
						<Field name="stock" render={FieldComponent.Text} />
					</Form.Field>
				</Form.Group>

				<Form.Group widths="equal">
					<Form.Field>
						<label>商品標籤</label>
						<Field name="tags" options={options} multiple search component={FieldComponent.Dropdown} />
					</Form.Field>
				</Form.Group>
				<Form.Group widths="equal">
					<Form.Field>
						<label>一般售價</label>
						<Field name="price.regular" render={FieldPriceReular} />
					</Form.Field>
					<Form.Field>
						<label>經銷售價</label>
						<Field name="price.company" render={FieldComponent.Text} />
						<ErrorMessage component="div" name="price.company" className="input-feedback" />
					</Form.Field>
					<Form.Field>
						<label>優惠售價</label>
						<Field name="price.sale" render={FieldComponent.Text} />
						<ErrorMessage component="div" name="price.sale" className="input-feedback" />
					</Form.Field>
				</Form.Group>

				<Form.Group widths="equal">
					<Form.Field>
						<label>狀態</label>
						<Field name="status" component={FieldComponent.Select} />
						<ErrorMessage component="div" name="status" className="input-feedback" />
					</Form.Field>
				</Form.Group>

				<Form.Group widths="equal">
					<Form.Field>
						<Field name="remark" component="textarea" />
					</Form.Field>
				</Form.Group>
				<Button fluid color="teal" type="submit" content="送出" />
			</FormikWrap>
		</Form>
	)
}
ProductForm.defaultProps = {
	catalogs: []
}
ProductForm.propTypes = {
	catalogs: PropTypes.array.isRequired
}

const enhancer = withFormik({
	mapPropsToValues: props => ({ ...props.initialValues }),
	validationSchema: () =>
		Yup.object().shape({
			name: Yup.string().required('必填'),
			type: Yup.string().required('必填'),
			ean: Yup.string().required('必填'),
			weight: Yup.string().required('必填'),
			stock: Yup.string().required('必填'),
			price: Yup.object().shape({
				regular: Yup.string().required('必填')
			})
		}),
	handleSubmit: (values, { setSubmitting, props }) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2))
			setSubmitting(false)
		}, 1000)
	},
	displayName: 'ProductForm'
})

export default enhancer(ProductForm)
