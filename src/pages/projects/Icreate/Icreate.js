import IcreateBackGround from 'assets/images/Icreate/IcreateBackGround.png';
import IcreateMode from 'assets/images/Icreate/IcreateMode.png';
import IcreateDemoLight from 'assets/images/Icreate/IcreateDemoLight.png';
import IcreateIntro from 'assets/images/Icreate/IcreateIntro.png';
import ProjVideo from 'assets/images/Icreate/Icreatevideo.mp4';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import { SegmentedControl, SegmentedControlOption } from 'components/SegmentedControl';
import { ThemeProvider, useTheme } from 'components/ThemeProvider';
import { useAppContext } from 'hooks';
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
import dynamic from 'next/dynamic';
import { Fragment, useMemo } from 'react';
import { media } from 'utils/style';
import styles from './Icreate.module.css';

const Earth = dynamic(() => import('../Earth/Earth').then(mod => mod.Earth));
const EarthSection = dynamic(() => import('../Earth/Earth').then(mod => mod.EarthSection));

const title = 'A world where words paint pictures';
const description =
  'Unlock the artistic potential of your words with our groundbreaking web application. Seamlessly transforming text into visually stunning images, our platform empowers you to express ideas creatively.';
const roles = [
  'Visual Creativity',
  'Community Sharing',
  'Prompted Creations',
  'High-Quality Downloads',
  'Effortless Image Generation',
];

export const Icreate = () => {
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
          src={IcreateBackGround}
          srcSet={`${IcreateBackGround.src} 1080w, ${IcreateBackGround.src} 2160w`}
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
              srcSet={[IcreateIntro]
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
            Experience the future of creativity with our website that harnesses 
            the power of AI to generate captivating images from your text input. 
            Unleash your imagination and share the AI-crafted visuals in our 
            vibrant community section, where innovation meets collaboration, 
            transforming ideas into a visual masterpiece for the world to see.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
              key={themeId}
              srcSet={
                isDark
                  ? [IcreateMode]
                  : [IcreateDemoLight]
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
              ICreate empowers you to effortlessly generate images by inputting text or using 
              predefined prompts. Share your creations with the community and download high-quality 
              images. Whether crafting your own narrative or embracing random prompts, iCreate is your 
              go-to platform for unleashing creativity and sharing visually stunning content.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
                raised
                className={styles.video}
                srcSet={[{ src: ProjVideo, width: 400 }]
              }
                alt="A learning designer building and deploying an interactive lesson on volcanism using the app."
                sizes={`(max-width: ${media.mobile}px) 80vw, 50vw`}
              />
            
          </ProjectSectionContent>
        </ProjectSection>

        <ThemeProvider themeId="dark" data-invert>
          <Earth
            className={styles.earth}
            hideMeshes={useMemo(
              () => ['Atmosphere', 'EarthPartial', 'Chunk', 'EarthFull'],
              []
            )}
            position={useMemo(() => [0, 0, 0], [])}
            labels={useMemo(
              () => [
                {
                  position: [0.54, 0.19, 0.18],
                  text: 'Mongo',
                  hidden: true,
                },
                {
                  position: [0.54, 0.10, -0.18],
                  text: 'OpenAI API',
                  hidden: true,
                },
                {
                  position: [0.47, -0.38, 0.04],
                  text: 'Node',
                  hidden: true,
                },
                {
                  position: [0.47, -0.18, 0.04],
                  text: 'JavaScript',
                  hidden: true,
                },
                {
                  position: [0.22, 0.44, -0.35],
                  text: 'React',
                  hidden: true,
                },
                {
                  position: [0.16, -0.06, 0.58],
                  text: 'Express',
                  hidden: true,
                },
                {
                  position: [0.52, 0.2, -0.23],
                  text: 'Html',
                  hidden: true,
                },
                {
                  position: [0.32, 0.0, -0.23],
                  text: 'Css',
                  hidden: true,
                },
              ],
              []
            )}
            scale={0.6}
          >
            <EarthSection
              scrim
              animations={['0:loop']}
              camera={[0, 0, 1.5]}
              meshes={['Atmosphere', 'EarthFull']}
            >
              <ProjectSection>
                <ProjectSectionContent>
                  <ProjectTextRow center>
                    <ProjectSectionHeading>
                      Mern Stack
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      MERN Stack: MERN Stack is a Javascript Stack that is used for easier and
                      faster deployment of full-stack web applications. MERN Stack comprises of
                      4 technologies namely: MongoDB, Express, React and Node.js.
                      It is designed to make the development process smoother and easier.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[0, 0, 2.4]}
              meshes={['Atmosphere', 'EarthFull']}
            />
            <EarthSection
              animations={['0:loop']}
              camera={[1.14, -1.39, 0.94]}
              meshes={['Atmosphere', 'EarthFull']}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="end" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      Mongo DB
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      MongoDB is built on a scale-out architecture that has become popular with
                      developers of all kinds for developing scalable applications with evolving
                      data schemas.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[1.17, 0.69, -1.47]}
              meshes={['Atmosphere', 'EarthFull']}
              labels={[
                'Mongo',
                'Node',
                'Express',
                'React',
                'OpenAI API'
              ]}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="start" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      Express JS
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      Express is a minimal and flexible Node.js web application framework
                      that provides a robust set of features for web and mobile applications.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[1.81, 0.51, 0.43]}
              meshes={['Atmosphere', 'EarthFull']}
              labels={[
                'Html',
                'Css',
                'JavaScript'
              ]}
            />
            <ProjectSection>
              <ProjectSectionContent width="xl">
                <ProjectTextRow justify="start" width="s">
                  <ProjectSectionHeading level={4} as="h3">
                    Node JS
                  </ProjectSectionHeading>
                  <ProjectSectionText>
                    Node.js is a cross-platform, open-source server environment that can run on
                    Windows, Linux, macOS, and more. Node.js is a back-end JavaScript runtime
                    environment, runs on the V8 JavaScript engine, and executes JavaScript code
                    outside a web browser.
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
            </ProjectSection>
            <EarthSection
              animations={['0:loop']}
              camera={[0.37, 1.02, 1.84]}
              meshes={['EarthPartial', 'Chunk']}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="end" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      React JS
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      React is a free and open-source front-end JavaScript library for building
                      user interfaces based on components. React can be used to develop
                      single-page, mobile, or server-rendered applications.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              scrimReverse
              animations={['0:loop']}
              camera={[0.37, 1.02, 1.84]}
              meshes={['Atmosphere', 'EarthFull']}
            />
          </Earth>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>OpenAI API</ProjectSectionHeading>
              <ProjectSectionText>
              OpenAI API revolutionizes AI capabilities, providing developers seamless access 
              to state-of-the-art language models like GPT-3. Unlock advanced natural language 
              understanding, text generation, and problem-solving in your applications effortlessly.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
