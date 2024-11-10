// Core packages
import { useEffect, useState } from 'react'

// Font Awesome packages
const { library, config } = require('@fortawesome/fontawesome-svg-core')
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { fab } from '@fortawesome/free-brands-svg-icons'

// Load icons into
library.add( fab)

/**
 * 
 *
 * @param 	{array} icon request props [ iconType, iconKey ]
 * @returns {jsx} 	<Icon />
 */
export default function Icon({ icon }) {

	const [ iconType, iconKey ] = icon

	const [ stateIconKey, setIconKey ] = useState('circle-notch')

	useEffect( () => setIconKey( iconKey ), [ iconKey ] )

	return (
		<FontAwesomeIcon icon={[ iconType, stateIconKey ]} />
	)
}
