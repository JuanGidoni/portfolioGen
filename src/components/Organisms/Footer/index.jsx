const Footer = ({ author, web, year }) => {

 return (
  <footer className="footer">
   Copyright @ {year} - <a href={`${web}`} target="_BLANK" rel="noreferrer">{author.name}</a>
  </footer>
 )
}

export default Footer
