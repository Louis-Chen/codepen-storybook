import React from 'react'

import { storiesOf } from '@storybook/react'
import { Button } from '../src/ui/Elements/Button'

storiesOf('Elements/按鈕', module)
	.add('Primary', () => <Button.Primary>Primary Button</Button.Primary>)
	.add('Default', () => <Button.Default>Default Button</Button.Default>)
