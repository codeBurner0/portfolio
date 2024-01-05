import backgroundMania from 'assets/images/Mania/Maniabg.jpg';
import AboutProj from 'assets/images/Mania/ManiaDark.mp4';
import AboutProjLight from 'assets/images/Mania/ManiaLight.mp4';
import ManiaHome from 'assets/images/Mania/ManiaHome.mp4';
import ProjVideo from 'assets/images/Mania/ManiaVideo.mp4';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import { SegmentedControl, SegmentedControlOption } from 'components/SegmentedControl';
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
import styles from './Mania.module.css';

const title = 'Enter a realm of movies';
const description =
  'Dive into a cinematic universe where every click unfolds gripping narratives. Our platform immerses you in a world of movies, offering endless tales at your fingertips.';
const roles = [
  'Top Picks',
  'Rating Viewer',
  'Cast Insights',
  'Popular Picks',
  'Summary Snapshot'
];

export const Mania = () => {
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
          src={backgroundMania}
          srcSet={`${backgroundMania.src} 1080w, ${backgroundMania.src} 2160w`}
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
                srcSet={[{ src: ManiaHome, width: 800 }]
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
            Embark on a cinematic journey with our comprehensive movie guide. Curate wish 
            lists effortlessly, using ratings to explore a diverse selection of films. 
            Discover top-rated movies tailored to your preferences, ensuring an enriched 
            and personalized cinematic experience that transcends the ordinary. Elevate 
            your movie-watching adventure with us.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
                raised
                className={styles.video}
                srcSet={isDark?
                  [{ src: AboutProj, width: 800 }]
                : [{ src: AboutProjLight, width: 800 }]
              }
                alt="A learning designer building and deploying an interactive lesson on volcanism using the app."
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            <ProjectTextRow>
              <SegmentedControl
                currentIndex={themes.indexOf(themeId)}
                onChange={handleThemeChange}
              >
                <SegmentedControlOption>Dark theme</SegmentedControlOption>
                <SegmentedControlOption>Light theme</SegmentedControlOption>
              </SegmentedControl>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>Features and Highlights</ProjectSectionHeading>
              <ProjectSectionText>
              Explore movie details effortlessly, including ratings, cast information, a 
              curated selection of top-rated movies, a dedicated section for popular films, 
              and concise summaries for each movie. Immerse yourself in a comprehensive 
              cinematic experience, where every detail enhances your journey into the world of film.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>



        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
                raised
                className={styles.video}
                srcSet={[{ src: ProjVideo, width: 800 }]
              }
                alt="A learning designer building and deploying an interactive lesson on volcanism using the app."
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
