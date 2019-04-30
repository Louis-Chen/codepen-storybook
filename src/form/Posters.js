import React from 'react'
import _ from 'lodash'

import { Button, Card, Image, Label, Modal } from 'semantic-ui-react'

export const ProductsCard = ({ product, handleDelete }) => {
	const { id, name, ean, status, avatar } = product
	let cover_image = 'https://react.semantic-ui.com/images/wireframe/image.png'

	return (
		<Card image>
			<Image src={cover_image} />
			<Card.Content>
				<Card.Header>{name}</Card.Header>
				<Card.Meta>
					{status === 0 ? <Label color="green">已上架</Label> : null}
					{status === 1 ? <Label color="red">已下架</Label> : null}
					{status === 2 ? <Label color="orange">特價中</Label> : null}
				</Card.Meta>
			</Card.Content>
			<Card.Content extra>
				<Modal
					trigger={<Button floated="left" compact content="刪除" basic />}
					header="刪除!!"
					content="刪除所有資料"
					actions={[
						'取消',
						{
							key: 'done',
							content: '確定',
							negative: true,
							onClick: () => handleDelete(id)
						}
					]}
				/>
				<Button floated="right" compact basic content="修 改" />
			</Card.Content>
		</Card>
	)
}
