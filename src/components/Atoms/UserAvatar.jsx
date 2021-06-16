const UserAvatar = ({image, name}) => {
 return (
  <div className="useravatar">
   <div className="avatar">
    <img src={image} alt={name} />
   </div>
   <div className="name">
    {name}
   </div>
  </div>
 )
}

export default UserAvatar
