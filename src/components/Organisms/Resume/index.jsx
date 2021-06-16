import { FaArrowDown, FaUndo } from "react-icons/fa"

const Title = ({ className, name, slogan, scrollTo }) => {
 return (
  <div className={className} id="author">
   <div className="author-name">
    <div className="name">
    <h2>{slogan}</h2>
     <h1>{name}</h1>
    </div>
    <button className="btn-admin" onClick={() => scrollTo('#role')}><FaArrowDown /></button>
   </div>
  </div>
 )
}

const Role = ({ className, role, scrollTo }) => {
 return (
  <div className={className} id="role">
   <div className="author-name">
    <h2>{role}</h2>
    <button className="btn-admin" onClick={() => scrollTo('#aboutme')}><FaArrowDown /></button>
   </div>
  </div>
 )
}

const AboutMe = ({ className, age, name, biography, scrollTo }) => {
 return (
  <div className={className} id="aboutme">
   <div className="author-name">
    <h2>{name}</h2>
    <h2>{age}</h2>
    <h2>{biography}</h2>
    <button className="btn-admin" onClick={() => scrollTo('#skills')}><FaArrowDown /></button>
   </div>
  </div>
 )
}

const Skills = ({ className, skills, scrollTo, errorHandler }) => {
 return (
  <div className={className} id="skills">
   {skills && skills.length > 0 ? skills.map(
    (v, i) => <div key={i} className="author-skills">
     <h2>{v}</h2>
    </div>
   ) : errorHandler}
   <button className="btn-admin" onClick={() => scrollTo('#author')}><FaUndo /></button>
  </div>
 )
}

export {
 Title,
 Role,
 AboutMe,
 Skills
}