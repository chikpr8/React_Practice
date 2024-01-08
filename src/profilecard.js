function ProfileCard({ title, handle, image, description }) {
  return (
    <div>
      <img src={image} />
      <p>{title}</p>
      <p>{handle}</p>
      <div className="content">{description}</div>
    </div>
  );
}
export default ProfileCard;
