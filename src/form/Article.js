import React from 'react'
import { withFormik, Form, Field } from 'formik'

import { EditorState, convertToRaw, ContentState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'

import { Segment, Button } from 'semantic-ui-react'

const uploadImageCallBack = file => {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest()
		xhr.open('POST', 'https://api.imgur.com/3/image')
		xhr.setRequestHeader('Authorization', 'Client-ID 5b982131a30952e')
		const data = new FormData()
		data.append('image', file)
		xhr.send(data)
		xhr.addEventListener('load', () => {
			const response = JSON.parse(xhr.responseText)
			resolve(response)
		})
		xhr.addEventListener('error', () => {
			const error = JSON.parse(xhr.responseText)
			reject(error)
		})
	})
}

class FieldsEditor extends React.Component {
	constructor(props) {
		super(props)
		const editorState = this.initEditorState()
		this.state = {
			editorState
		}
		this.onEditorStateChange(editorState)
	}

	initEditorState() {
		const { field } = this.props

		const html = field.value || ''
		const contentBlock = htmlToDraft(html)
		const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
		return EditorState.createWithContent(contentState)
	}

	onEditorStateChange = editorState => {
		const { form } = this.props
		// converting to the raw JSON on change
		const value = draftToHtml(convertToRaw(editorState.getCurrentContent()))
		form.setFieldValue('article', value)

		// Set it on the state
		this.setState({ editorState })
	}

	render() {
		return (
			<Editor
				editorState={this.state.editorState}
				onEditorStateChange={editorState => this.onEditorStateChange(editorState)}
				toolbar={{
					inline: { inDropdown: true },
					list: { inDropdown: true },
					textAlign: { inDropdown: true },
					link: { inDropdown: true },
					history: { inDropdown: true },
					image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } }
				}}
			/>
		)
	}
}

const ProductArticle = props => {
	return (
		<Segment>
			<Form>
				<Field name="article" component={FieldsEditor} />
				<Button fluid type="submit" content="送出" />
			</Form>
		</Segment>
	)
}
const enhancer = withFormik({
	mapPropsToValues: props => ({ ...props.initialValue }),
	handleSubmit: (values, { setSubmitting, props }) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2))
			setSubmitting(false)
		}, 1000)
	},
	displayName: 'ProductArticle'
})

export default enhancer(ProductArticle)
