import React from 'react'
import { storiesOf } from '@storybook/react'

import ProductForm from '../src/product/Form'
import ProductArticle from '../src/product/Article'
import ProductImages from '../src/product/Images'
import { ProductsCard } from '../src/product/Posters'

/**
 * 商品表單
 */

const initialValue = {
	name: '測試名稱',
	type: '商品型號',
	ean: '國際編碼',
	weight: '重量',
	stock: '庫存',
	tags: ['-LaY0q8GBE1uMOR77kt_', '-LaY0rzGsF5VZYIphFLU', 'LaY0u4wAXSYOYYBvc4b'],
	price: { regular: '1232' },
	status: 1,
	remark: '建議'
}

const defaultValue = {
	name: '',
	type: '',
	ean: '',
	weight: '',
	stock: '',
	tags: [],
	price: { regular: '', company: '', sale: '' },
	status: 0,
	remark: ''
}
storiesOf('表單|商品', module)
	.add('預設', () => <ProductForm initialValues={defaultValue} />)
	.add('有資料', () => <ProductForm initialValues={initialValue} />)

/**
 * 網頁編輯器
 */
const articlaValue = {
	article: '<p>Hey this <strong>editor</strong> rocks 😀</p>'
}

storiesOf('表單|頁面編輯器', module)
	.add('預設', () => <ProductArticle />)
	.add('有資料', () => <ProductArticle initialValue={articlaValue} />)

/**
 * 圖片上傳
 */
const onFileDrop = acceptedFiles => {
	setFiles(
		acceptedFiles.map(file =>
			Object.assign(file, {
				preview: URL.createObjectURL(file)
			})
		)
	)
}

storiesOf('表單|特寫照', module).add('圖片上傳', () => <ProductImages onFilesDrop={onFileDrop} />)
