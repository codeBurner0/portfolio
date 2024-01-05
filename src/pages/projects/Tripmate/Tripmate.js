import TripmateBack from 'assets/images/Tripmate/Trip.png';
import TripmateDemo from 'assets/images/Tripmate/TripmateDemo.mp4';
import TripmateHome from 'assets/images/Tripmate/Tripmatehome.jpg';
import TripMateLight from 'assets/images/Tripmate/TripmateLight.jpg';
import TripMateDark from 'assets/images/Tripmate/TripmateDark.jpg';
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
import styles from './Tripmate.module.css';

const title = 'Elevate Your Stay: Welcome to Your Staycation!';
const description =
  'Welcome to our exclusive booking experience! Elevate your stay with deluxe rooms and seamless reservations. Authenticated, authorized, and effortless, cancel and track your bookings with ease.';
const roles = [
  'Admin Panel',
  'Stripe Payments',
  'Booking Tracking',
  'Intuitive Interface',
  'Hassle-Free Booking',
];

export const Tripmate = () => {
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
          src={TripmateBack}
          srcSet={`${TripmateBack.src} 1080w, ${TripmateBack.src} 2160w`}
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
              srcSet={[TripmateHome]
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
            Step into our exclusive booking app, where luxury converges with convenience! Seamlessly integrating 
            state-of-the-art authentication and authorization, our platform effortlessly facilitates reserving deluxe 
            and standard rooms. Enhanced with secure Stripe payment processing, your transactions are not just seamless 
            but also secure. Enjoy the liberty of canceling reservations effortlessly while effortlessly monitoring 
            your bookings. 
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
                  ? [TripMateLight]
                  : [TripMateDark]
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
                Welcome to our exclusive booking application, where luxury meets convenience! Seamlessly 
                blending cutting-edge authentication and authorization features, our platform allows you 
                to reserve both deluxe and standard rooms with ease. With the added layer of secure payment 
                processing through Stripe, your transactions are not only smooth but also safeguarded. Experience 
                the freedom to cancel reservations effortlessly while effortlessly keeping track of your bookings. 
                Elevating the user experience, our intuitive interface is complemented by an admin panel, empowering 
                administrators to oversee all user and room details comprehensively.
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
                [{ src: TripmateDemo, width: 800 }]
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
