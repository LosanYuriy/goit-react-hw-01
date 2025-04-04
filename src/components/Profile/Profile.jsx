import s from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image = "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats,
}) => {
  return (
    <div className={s.container}>
      <div className={s.card}>
        <img src={image} alt={name} className={s.img} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.loc}>{location}</p>
      </div>

      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.stats}>Followers</span>
          <span className={s.value}>{stats.followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.stats}>Views</span>
          <span className={s.value}>{stats.views}</span>
        </li>
        <li className={s.item}>
          <span className={s.stats}>Likes</span>
          <span className={s.value}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
