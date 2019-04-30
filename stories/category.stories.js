import React from 'react'
import { storiesOf } from '@storybook/react'

import CategoriesMenu from '../src/category/Menu'
import CategoriesBoard from '../src/category/Board'

const catalogs = [
	{ id: 'asdf', title: 'Card A' },
	{ id: 'agg', title: 'Card B' },
	{ id: '444asg', title: 'Card C' },
	{ id: 'asgsd', title: 'Card D' },
	{ id: 'hdashas', title: 'Card E' },
	{ id: 'qwet', title: 'Card F' },
	{ id: 'zxcv', title: 'Card G' },
	{ id: 'hfdhds', title: 'Card H' }
]
const categories = [
	{
		id: 'asdg',
		title: 'First Lane',
		tags: ['asdf', 'agg', '444asg', 'asgsd']
	},
	{
		id: 'agdg',
		title: 'Second lane',
		tags: []
	},
	{
		id: 'aasdgasdg',
		title: 'Four Lane',
		tags: []
	},
	{
		id: 'asdpopog',
		title: 'Five Lane',
		tags: []
	},

	{
		id: 'asdgsah',
		title: 'Empty lane',
		tags: ['hdashas', 'qwet', 'zxcv', 'hfdhds']
	}
]

storiesOf('DND|分類', module)
	.add('新增類別的導覽列', () => <CategoriesMenu />)
	.add('分類板', () => <CategoriesBoard categories={categories} catalogs={catalogs} />)
