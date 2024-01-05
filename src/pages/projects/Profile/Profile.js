import BannerDark from 'assets/images/Profile/ProfileDark.mp4';
import BannerLight from 'assets/images/Profile/ProfileLight.mp4';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { useTheme } from 'components/ThemeProvider';
import { SegmentedControl, SegmentedControlOption } from 'components/SegmentedControl';
import { useAppContext } from 'hooks';
import {Experience} from './experience'
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
import styles from './Profile.module.css';

export const Profile = () => {
  const { themeId } = useTheme();
  const { dispatch } = useAppContext();

  const isDark = themeId === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    dispatch({ type: 'setTheme', value: themes[index] });
  };

  return (
    <Fragment>
      <ProjectContainer className={styles.profile_container}>

        <Image
          raised
          className={styles.video}
          srcSet={isDark ?
            [{ src: BannerDark, width: 800 }]
            : [{ src: BannerLight, width: 800 }]
          }
          alt="banner"
          sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
        />
        <div className={styles.border_sec2}></div>
        {/* <ProjectTextRow >
          <SegmentedControl
            currentIndex={themes.indexOf(themeId)}
            onChange={handleThemeChange}
          >
            <SegmentedControlOption>Dark theme</SegmentedControlOption>
            <SegmentedControlOption>Light theme</SegmentedControlOption>
          </SegmentedControl>
        </ProjectTextRow> */}
        <div className={styles.prof_sec1}>
          <img className={styles.text_moving} src="https://readme-typing-svg.herokuapp.com?font=comfortaa&bg_color=0D1117&size=30&width=1150&lines=Hii+there+🙋🏻‍♂️;My+name+is+Ankit+Anand+🚀;A+passionate+FullStack+Developer+🧑🏻‍💻" />
          <ul className={styles.prof_ul}>
            <li className={styles.prof_li}>🕵 I’m currently Focusing on <bold>Web3</bold>.</li>
            <li className={styles.prof_li}>💬 Ask me about FullStack Development.</li>
            <li className={styles.prof_li}>🤝 I’m looking for freelancing projects.</li>
            <li className={styles.prof_li}>🔭 I’m currently working on PandaTerminal ( Blockchain, Crypto, Webservices, Sock market, etc ).</li>
            <li className={styles.prof_li}>⚡ Fun Fact: If I were a genius scientist Newton, I would most like to eat that apple rather than to find the science behind it.</li>
          </ul>
        </div>
        <div className={styles.prof_sec2}>
          <h1 className={styles.prof_h1}>💻Tech Stack:</h1>
          <div className={styles.border_sec}></div>
          <div className={styles.languages}>
            <center>
              <p className={styles.prof_para}>Languages</p>
              <img className={styles.badges} src="https://img.shields.io/badge/java-%23ED8B00.svg?style=flat&logo=openjdk&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E" />
              <img className={styles.badges} src="https://img.shields.io/badge/c-%2300599C.svg?style=flat&logo=c&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/dart-%230175C2.svg?style=flat&logo=dart&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/python-3670A0?style=flat&logo=python&logoColor=ffdd54" />
              <img className={styles.badges} src="https://img.shields.io/badge/markdown-%23000000.svg?style=flat&logo=markdown&logoColor=white" />
            </center>
            <center>
              <p className={styles.prof_para}>Frameworks, Platforms & Libraries</p>
              <img className={styles.badges} src="https://img.shields.io/badge/angular.js-%23E23237.svg?style=flat&logo=angularjs&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/bootstrap-%238511FA.svg?style=flat&logo=bootstrap&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/chart.js-F5788D.svg?style=flat&logo=chart.js&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/flask-%23000.svg?style=flat&logo=flask&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB" />
              <img className={styles.badges} src="https://img.shields.io/badge/django-%23092E20.svg?style=flat&logo=django&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/Bun-%23000000.svg?style=flat&logo=bun&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/Flutter-%2302569B.svg?style=flat&logo=Flutter&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/Insomnia-black?style=flat&logo=insomnia&logoColor=5849BE" />
              <img className={styles.badges} src="https://img.shields.io/badge/jquery-%230769AD.svg?style=flat&logo=jquery&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/JWT-black?style=flat&logo=JSON%20web%20tokens" />
              <img className={styles.badges} src="https://img.shields.io/badge/Anaconda-%2344A833.svg?style=flat&logo=anaconda&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=flat&logo=npm&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/Socket.io-black?style=flat&logo=socket.io&badgeColor=010101" />
              <img className={styles.badges} src="https://img.shields.io/badge/NODEMON-%23323330.svg?style=flat&logo=nodemon&logoColor=%BBDEAD" />
              <img className={styles.badges} src="https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB" />
              <img className={styles.badges} src="https://img.shields.io/badge/-React%20Query-FF4154?style=flat&logo=react%20query&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/redux-%23593d88.svg?style=flat&logo=redux&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/styled--components-DB7093?style=flat&logo=styled-components&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=flat&logo=webpack&logoColor=black" />
              <img className={styles.badges} src="https://img.shields.io/badge/spring-%236DB33F.svg?style=flat&logo=spring&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/MUI-%230081CB.svg?style=flat&logo=mui&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=flat&logo=reacthookform&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/yarn-%232C8EBB.svg?style=flat&logo=yarn&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=postman&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/Notion-%23000000.svg?style=flat&logo=notion&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/Babel-F9DC3e?style=flat&logo=babel&logoColor=black" />
            </center>
            <center>
              <p className={styles.prof_para}>Hosting/SaaS</p>
              <img className={styles.badges} src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=flat&logo=amazon-aws&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=flat&logo=firebase" />
              <img className={styles.badges} src="https://img.shields.io/badge/github%20pages-121013?style=flat&logo=github&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/heroku-%23430098.svg?style=flat&logo=heroku&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/netlify-%23000000.svg?style=flat&logo=netlify&logoColor=#00C7B7" />
              <img className={styles.badges} src="https://img.shields.io/badge/Render-%46E3B7.svg?style=flat&logo=render&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/vercel-%23000000.svg?style=flat&logo=vercel&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=flat&logo=google-cloud&logoColor=white" />
            </center>
            <center>
              <p className={styles.prof_para}>Databases & Design</p>
              <img className={styles.badges} src="https://img.shields.io/badge/Firebase-039BE5?style=flat&logo=Firebase&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/MariaDB-003545?style=flat&logo=mariadb&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=flat&logo=microsoft%20sql%20server&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat&logo=mongodb&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/mysql-%2300000f.svg?style=flat&logo=mysql&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/Canva-%2300C4CC.svg?style=flat&logo=Canva&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=flat&logo=figma&logoColor=white" />
              <img className={styles.badges} src="https://img.shields.io/badge/Framer-black?style=flat&logo=framer&logoColor=blue" />
            </center>
          </div>
        </div>


        <div className={styles.prof_sec2}>
          <h1 className={styles.prof_h12}>💻Experience:</h1>
          <div className={styles.border_sec2}></div>
          {
            Experience.map((item,ind) => {
              return (
                <div className={styles.exp_container} key={ind}>
                  <div className={styles.exp_sec1}>
                    <Image className={styles.exp_logo} src={item.image} alt="roni" />
                    <div className={styles.dot}></div>
                    <div className={styles.vertical_line}></div>
                    <div className={styles.dot}></div>
                  </div>
                  <div className={styles.exp_sec1}>
                    <h3 className={styles.exp_h3}>{item.companyName}</h3>
                    <p className={styles.exp_p}>{item.location}</p>
                    <h3 className={styles.exp_h3}>{item.position}</h3>
                    <p className={styles.exp_p}>{item.timePeriod}</p>
                    <h4 className={styles.exp_h4}>Skills:</h4>
                    <p className={styles.exp_p}>{item.skills}</p>
                    <h4 className={styles.exp_h4}>About:</h4>
                    {
                      item.about.map((about)=>{
                        return (
                          <>
                             <p className={styles.exp_p2}>- {about}</p>
                          </>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>

      </ProjectContainer>

      <Footer />
    </Fragment>
  );
};
