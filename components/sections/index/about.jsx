// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section} id="AboutMe">	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle=""
					subTitle=" diverse skill set that includes  UI design, full stack development, systems design, photography, and branding."
				/>
				<section className={about.content}>
					<div className={about.image}>
						
						 <Image src="/img/mina.png" width={600} height={800} alt='mm'/> 
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Softskills "
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="Driven by a constant desire for exploration and learning, my interest in development and innovation motivates me to continuously expand my skills and optimize my working methods. For me, each challenge is an opportunity for growth and improvement.I am deeply passionate about development and innovation within my field. I constantly strive to learn and enhance my work methods."
						/>
						<BadgesBlock 
							title="Community life" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy=" Actively involved in community life, I deeply value cultural diversity, which I see as an invaluable source of enrichment. With this perspective, I had the honor of participating in the Independent High Authority for Elections and attending an immersive summer university in Rabat, Morocco. This experience offered me a profound insight into a different culture and strengthened my ability to thrive in a multicultural environment."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'User Research', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Digital Strategy', 	type: 'fad' },
	{ key: 'window', 			name: 'Design Systems', 	type: 'fad' },
	{ key: 'cubes', 			name: 'Product Strategy', 	type: 'far' },
	{ key: 'layer-plus', 		name: 'Brand Strategy', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Operations', 		type: 'fad' },
]