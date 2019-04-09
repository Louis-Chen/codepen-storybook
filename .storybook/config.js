import { configure, addParameters, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { setConsoleOptions } from '@storybook/addon-console'

import 'semantic-ui-css/semantic.min.css'

// import Docs
// Global configuration for the info addon across all of your stories.,
addDecorator(
	withInfo()
)


/**
 * console
 */
setConsoleOptions({
	panelExclude: []
})

addParameters({
	options: {
		name: 'Louis-Chen Book',
		url: 'https://github.com/storybooks/storybook/tree/master/examples/cra-kitchen-sink',
		goFullScreen: false,
		showAddonsPanel: true,
		showSearchBox: false,
		addonPanelInRight: false,
		panelPosition: 'bottom',
		sortStoriesByKind: true,
		hierarchySeparator: /\//,
		hierarchyRootSeparator: /\|/,
		enableShortcuts: true
	}
})

function loadStories() {
	// put welcome screen at the top of the list so it's the first one displayed
	// require('../stories/welcome');

	// automatically import all story js files that end with *.stories.js
	const req = require.context('../stories', true, /\.stories\.js$/)
	req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
