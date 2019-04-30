import React from 'react'
import { storiesOf } from '@storybook/react'
import { Formik, Field } from 'formik'

import { Field as FieldComponent } from '../src/field'
const options = [
	{
		key: 'Lexus Hettinger',
		text: 'Lexus Hettinger',
		value: 'lexus_hettinger'
	},
	{
		key: 'Wilton Zemlak',
		text: 'Wilton Zemlak',
		value: 'wilton_zemlak'
	},
	{
		key: "Rosalia O'Hara",
		text: "Rosalia O'Hara",
		value: 'rosalia_o_hara'
	}
]

storiesOf('表單|欄位', module)
	.addDecorator(story => <Formik>{story()}</Formik>)
	.add('文字', () => <Field name="text" component={FieldComponent.Text} />)
	.add('下拉Dropdown', () => (
		<Field name="dropdown" multiple={false} options={options} component={FieldComponent.Dropdown} />
	))
	.add('選擇', () => <Field name="select" options={options} component={FieldComponent.Select} />)
