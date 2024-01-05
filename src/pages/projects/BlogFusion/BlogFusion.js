import BlogFusionBack from 'assets/images/BlogFusion/BlogFusionBack.png';
import BlogFusionDemo from 'assets/images/BlogFusion/BlogFusionDemo.mp4';
import BlogFusionHome from 'assets/images/BlogFusion/BlogFusionIntro.mp4';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import { useTheme } from 'components/ThemeProvider';
import { useAppContext } from 'hooks';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './BlogFusion.module.css';

const title = 'Welcome to new era of blogging!';
const description =
  'Step into a realm of unparalleled blogging ease where our platform seamlessly integrates intuitive features, providing you with an effortless blogging experiencea.';
const roles = [
  'User Friendly',
  'Blog Management',
  'Content Creation',
  'Travel Community',
  'Secure Authentication'
];

export const BlogFusion = () => {
  const { themeId } = useTheme();
  const { dispatch } = useAppContext();

  const isDark = themeId === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    dispatch({ type: 'setTheme', value: themes[index] });
  };

  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Projects" description={description} />
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={BlogFusionBack}
          srcSet={`${BlogFusionBack.src} 1080w, ${BlogFusionBack.src} 2160w`}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.google.com/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
          <Image
                raised
                className={styles.video}
                srcSet={[{ src: BlogFusionHome, width: 800 }]
              }
                alt="A learning designer building and deploying an interactive lesson on volcanism using the app."
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>About the project</ProjectSectionHeading>
            <ProjectSectionText>
            Explore a dynamic website where users share travel experiences worldwide. Gain valuable insights 
            and recommendations for your next trip. Immerse yourself in a community passionate about global 
            exploration, creating a platform that enriches and inspires travel enthusiasts.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
                raised
                className={styles.video}
                srcSet={isDark?
                  [{ src: BlogFusionDemo, width: 800 }]
                : [{ src: BlogFusionDemo, width: 800 }]
              }
                alt="A learning designer building and deploying an interactive lesson on volcanism using the app."
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            <ProjectTextRow>
              <ProjectSectionHeading>Features and Highlights</ProjectSectionHeading>
              <ProjectSectionText>
              Empower your blogging journey with our user-friendly platform. Seamlessly create, 
              delete, and update blogs. Enjoy secure authentication through Auth0, ensuring a 
              hassle-free experience. Our easy design guarantees a smooth and enjoyable interface 
              for bloggers at every level.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
