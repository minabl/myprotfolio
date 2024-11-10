import Section from '../../structure/section';
import Container from '../../structure/container';
import Image from 'next/image';
import Icon from '../../utils/icon.util';
import css from '../../../styles/sections/projects/recent.module.scss';
import content from '../../../content/projects/UI.json';

export default function GitProjects({ repos, user }) {
  return (
    <Section classProp={css.section}>	
      <Container classProp={css.container} spacing={'verticalXXXLrg'}>
        <h3>Other Projects</h3>
        
        <div className={css.projects}>
          {content.map(({ project, description, url, images, stack }, index) => (
            <article key={index} className={css.project}>
              <span className={css.header}>
                <a href={url} rel="noreferrer" target="_blank">
                  {project} <Icon icon={['fad', 'arrow-up-right-from-square']} />
                </a>
                <p className={css.homepage}>{project}</p>
              </span>

              {/* Render multiple images if they exist */}
              <div className={css.imageContainer}>
			  {images && images.map((image, imgIndex) => {
				
				return (
					<Image
					key={imgIndex}
					src={image.url}
					alt={`${project} image ${imgIndex + 1}`}
					width={image.w}
					height={image.h}
					
					
					/>
				);
				})}
              </div>

              <span className={css.descriptionContainer}>
                <p className={css.description}>{description}</p>
              </span>

              <span className={css.topicsContainer}>
                {stack.map((tech, techIndex) => (
                  <span key={techIndex} className={css.topics}>
                    <i className={`devicon-${tech.key}-plain colored`}></i> {tech.name}
                  </span>
                ))}
              </span>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
