import React, { useState, useEffect } from 'react'
import { compose } from 'recompose'

import { useDropzone } from 'react-dropzone'
import { Segment, Header, Icon, Button, Image } from 'semantic-ui-react'

const ProductImages = ({ images, onFilesDrop, onFileDelete }) => {
	const [files, setFiles] = useState([])

	const { getRootProps, getInputProps } = useDropzone({
		accept: 'image/*',
		onDrop: acceptedFiles => {
			setFiles(
				acceptedFiles.map(file =>
					Object.assign(file, {
						preview: URL.createObjectURL(file)
					})
				)
			)
		}
	})

	const thumbs = files.map(file => <Image size="small" src={file.preview} key={file.name} />)

	useEffect(
		() => () => {
			// Make sure to revoke the data uris to avoid memory leaks
			files.forEach(file => URL.revokeObjectURL(file.preview))
		},
		[files]
	)

	return (
		<React.Fragment>
			<Image.Group size="small">{thumbs}</Image.Group>
			<Segment placeholder {...getRootProps()}>
				<Header icon>
					<Icon name="picture" />
					<input hidden {...getInputProps()} />
					上傳圖片
				</Header>
				<Segment.Inline>
					<Button primary content="選擇檔案" />
				</Segment.Inline>
			</Segment>
		</React.Fragment>
	)
}

export default ProductImages
