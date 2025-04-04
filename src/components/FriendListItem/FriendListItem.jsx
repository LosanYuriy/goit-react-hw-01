import s from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  // const classNames = [
  //   css.status,
  //   isOnline ? css.isOnlineClass : css.isOfflineClass,
  // ].join(" ");

  return (
    <>
      <img className={s.img} src={avatar} alt="Avatar" width="48" />
      <p className={s.name}>{name}</p>
      {isOnline ? (
        <p className={s.isOnlineClass}>Online</p>
      ) : (
        <p className={s.isOfflineClass}>Offline</p>
      )}
    </>
  );
}

{
  /* <p className={classNames}>{isOnline ? "Online" : "Offline"}</p>; */
}
