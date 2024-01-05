import ManiaProj from 'assets/images/Mania/Mania1.jpg';
import ManiaProj2 from 'assets/images/Mania/Mania2.jpg';
import InfoSync from 'assets/images/InfoSync/InfosyncHome.png'
import BlogFusionMobo from 'assets/images/BlogFusion/BlogFusionMobo2.jpg'
import BlogFusionMobo2 from 'assets/images/BlogFusion/BlogFusionMobo.jpg'
import sliceTexture from 'assets/slice-app.jpg';
import Proj1Home from 'assets/images/Fintrec/proj1laptop.png';
import IcreateHome from "assets/images/Icreate/Icreatelaptop.jpg"
import TripmateMobo1 from "assets/images/Tripmate/Tripmatemobo1.jpg"
import TripmateMobo2 from "assets/images/Tripmate/Tripmatemobo2.jpg"
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Fullstack', 'Android'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();
  const projectSeven = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, projectFive,projectSix,projectSeven, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="FullStack Developer + Android Developer"
        description=" A Design portfolio of Ankit Anand — a full stack developer working on web & mobile
          apps with a focus on mern stack, flutter , and accessibility."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="ICreate- AI Image Generator"
        description="Transform words into vibrant visuals with our dynamic text-to-image web app. Try it now!"
        buttonText="View project"
        buttonLink="/projects/Icreate"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [IcreateHome],
              placeholder: IcreateHome,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="MoviesMania- A Movie Application"
        description="Escape reality, embrace reel life: Your movie paradise is just clicks away."
        buttonText="View project"
        buttonLink="/projects/Mania"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [ManiaProj2],
              placeholder: ManiaProj2,
            },
            {
              srcSet: [ManiaProj],
              placeholder: ManiaProj2,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Fintrec- A Finance Indicator"
        description="Crypto mastery at your fingertips: Stay ahead with live tracking and analysis."
        buttonText="View project"
        buttonLink="/projects/Fintrec"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [Proj1Home],
              placeholder: Proj1Home,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="BlogFusion- A Blog Application"
        description="Secure, seamless, expressive: Elevate your blogging experience with our curated platform."
        buttonText="View project"
        buttonLink="/projects/BlogFusion"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [BlogFusionMobo],
              placeholder: BlogFusionMobo,
            },
            {
              srcSet: [BlogFusionMobo2],
              placeholder: BlogFusionMobo2,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="InfoSync- DashBoard"
        description="Elevate your operations: A unified dashboard for tracking, optimizing, and winning."
        buttonText="View project"
        buttonLink="/projects/InfoSync"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [InfoSync],
              placeholder: InfoSync,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-6"
        alternate
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={6}
        title="TripMate- Your Trip Buddy"
        description="Adventure starts here: Discover, choose, and book your ideal accommodation."
        buttonText="View website"
        buttonLink="/projects/Tripmate"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [TripmateMobo2],
              placeholder: BlogFusionMobo,
            },
            {
              srcSet: [TripmateMobo1],
              placeholder: BlogFusionMobo2,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-7"
        sectionRef={projectSeven}
        visible={visibleSections.includes(projectSeven.current)}
        index={7}
        title="Biomedical image collaboration"
        description="Increasing the amount of collaboration in Slice, an app for biomedical imaging"
        buttonText="view project"
        buttonLink="/projects/"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [sliceTexture],
              placeholder: sliceTexture,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      
      <Footer />

    </div>
  );
};
