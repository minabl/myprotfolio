import Image from 'next/image'
import { useState, useEffect } from 'react'
import { m, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

import Badges from '../../utils/badge.list.util'
import Icon from '../../utils/icon.util'

import css from '../../../styles/sections/projects/featured.module.scss'
import content from '../../../content/projects/featured.json'

export default function FeaturedProject({ content, index }) { // Corrigé: ajouté 'index' dans les paramètres
  const { project, url, repo, descriptionTitle, description, stack, imageOptions, images } = content
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: false
  });

  // State to toggle iframe visibility
  const [isIframeVisible, setIframeVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Fonction pour vérifier si l'URL est une vidéo YouTube
  const isYouTubeUrl = url.includes('youtube.com') || url.includes('youtu.be');

  // Toggle iframe visibility on icon click
  const handleIconClick = () => {
    setIframeVisible(prevState => !prevState);
  };

  return (
    <m.section
      key={index}
      className={css.project}
      ref={ref}
      variants={container}
      initial={["rest", "hidden"]}
      whileHover="hover"
      animate={controls}
    >
      <div className={css.details}>
        <div className={css.projectHeader}>
          <div className={css.header}>
            <h3 className="highlight">{project}</h3>
            <span className={css.privateOr}>
              <i className="devicon-github-plain"></i>{repo}
            </span>
          </div>
          <div className={css.description}>
            <strong>{descriptionTitle}</strong>
            <ul>
              {description.split('\n').map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          </div>
          <div className={css.stackContainer}>
            <Badges list={stack} block="stack" fullContainer={false} color={false} />
          </div>

          <m.div variants='' className={css.viewProject}>
            {/* Display iframe if it's visible */}
            {isIframeVisible ? (
              <div className={css.iframeContainer}>
                {isYouTubeUrl ? (
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${url.split('v=')[1]}`}  // Extraire l'ID de la vidéo YouTube
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <Icon icon={['fa', 'play-circle']} />
                  </a>
                )}
              </div>
            ) : (
              <div onClick={handleIconClick} className={css.iconClick}>
                <Icon icon={['fas', 'play-circle']} /> {/* Example icon for showing iframe */}
              </div>
            )}
          </m.div>
        </div>
      </div>

      <div className={css.imageContainer}>
				<span className={`${css.imageAnimationContainer}`}>
					{ images.map( ({key, url, hover, h, w }, index) => {
						hover = ( hover === 'left' ) ? hoverLeft : hoverRight
						return (
							<m.div key={`${index}-${key}`} variants={item}>
								<m.div variants={hover}>
									<Image src={url} alt="x" height={h} width={w} />
								</m.div>
							</m.div>
						)}
					) }
				</span>
			</div>
    </m.section>
  );
}

const container = {
	hidden: { 
		transition: {
			delayChildren: 0.125,
			staggerChildren: 0.0625
		}
	},
	visible: {
		transition: {
			delayChildren: 0.125,
			staggerChildren: 0.25,
		}
	},
	rest: {
		transition: {
			delayChildren: 0,
			staggerChildren: 0,
		}
	},
	hover: {
		transition: {
			delayChildren: 0,
			staggerChildren: 0,
		}
	}
}

const item = {
  hidden: {
    y: 75,
    opacity: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
      duration: .35,
    }
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: .5,
    }
  },
};

const hoverLeft = {
  rest: {
    x: 0
  },
  hover: {
    x: -20
  }
};

const hoverRight = {
  rest: {
    x: 0
  },
  hover: {
    x: 20
  }
};
