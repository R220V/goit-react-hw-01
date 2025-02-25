import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({
  friends: { avatar, name, isOnline },
}) {

  const statusClsx = clsx(css.textStatus, isOnline ? css.online : css.offline);

  return (
    <>
      <img className={css.img} src={avatar} alt="Avatar" width="48" />
      <p className={css.text}>{name}</p>
    
      <p className={statusClsx}>{isOnline ? 'Online' : 'Offline'}</p>
    </>
  );
}
