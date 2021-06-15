import {
 Title,
 Role,
 AboutMe,
 Skills
} from "../../Organisms/Resume"
import { useRef } from 'react';
import useSmoothScroll from 'react-smooth-scroll-hook';

const Home = ({ config }) => {

 const ref = useRef(null);

 const { scrollTo } = useSmoothScroll({
  ref,
  speed: 50,
  direction: 'y',
 });



 return (
  <div className="content-resume" ref={ref}>
   <Title name={config.author.name} className="resume" scrollTo={scrollTo} />
   <Role role={config.author.role} className="resume" scrollTo={scrollTo} />
   <AboutMe
    age={config.author.age}
    name={config.author.name}
    biography={config.author.biography}
    className="resume" scrollTo={scrollTo} />
   <Skills skills={config.author.skills} className="resume" scrollTo={scrollTo} />
  </div>
 )
}

export default Home
