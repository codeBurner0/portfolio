import InfosyncBack from 'assets/images/Fintrec/proj1background4.jpg';
import InfoSyncDemo from 'assets/images/InfoSync/InfoSyncDemo.mp4';
import InfosyncHome from 'assets/images/InfoSync/Infosync.png';
import InfosyncLight from 'assets/images/InfoSync/InfosyncLight.jpg';
import InfosyncDark from 'assets/images/InfoSync/InfosyncDark.jpg';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import { useTheme } from 'components/ThemeProvider';
import { useAppContext } from 'hooks';
import { SegmentedControl, SegmentedControlOption } from 'components/SegmentedControl';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './InfoSync.module.css';

const title = 'Revolutionize the Productivity.';
const description =
  'Explore innovation in our InfoSync, designed for modern productivity, delivering an intuitive experience that puts powerful tools at your fingertips for seamless data management.';
const roles = [
  'Item Tracking',
  'Graph Insights',
  'Kanban Board',
  'Modern Productivity',
  'Employee Management'
];

export const InfoSync = () => {
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
          src={InfosyncBack}
          srcSet={`${InfosyncBack.src} 1080w, ${InfosyncBack.src} 2160w`}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.google.com/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={[InfosyncHome]
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>About the project</ProjectSectionHeading>
            <ProjectSectionText>
            Dive into our cutting-edge dashboard designed for contemporary productivity. 
            Effortlessly monitor items and employees with seamless management. Benefit from 
            user-friendly features for employee and item management, visualizing data through 
            graphs and calendars. Streamline organization with note-taking and Kanban board 
            functions, uniting innovation and practicality for an elevated workflow experience.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
              key={themeId}
              className={styles.infosyncMode}
              srcSet={
                isDark
                  ? [InfosyncDark]
                  : [InfosyncLight]
              }
              alt={`A set of ${themeId} themed components for the aero design system`}
              sizes="100vw"
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
                Immerse in innovation with our React dashboard—crafted for modern productivity.
                Track items and employees seamlessly, managing both with ease. Enjoy intuitive
                employee and item management features. Visualize insights through graphs, calendars,
                and organize effortlessly with note-taking and Kanban board functionalities. Elevate
                your workflow, where innovation meets practicality, all at your fingertips.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
              raised
              className={styles.video}
              srcSet={
                 [{ src: InfoSyncDemo, width: 800 }]
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
