const Icon = ({
 image, title, style
}) => {
 return (
   <img src={image} style={style} alt={title} title={title} />
 )
}

export default Icon
