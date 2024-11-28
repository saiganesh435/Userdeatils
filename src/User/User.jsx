import React from 'react';
import styles from './User.module.css'; // Assuming your CSS file is named User.module.css

export const User = (props) => {
  const { avatar, first_name, last_name, address, karma, followers, posts, is_following } = props;

  return (
     
    <div className={styles.container}>
      <img
        className={styles.avatar}
        src={avatar}
        alt={`${first_name} ${last_name}'s avatar`}
      />
      <div className={styles.details}>
        <div>
        <span>{first_name} {last_name}</span>
        <p>{address}</p>
        </div>
      {/* </div> */}
      {/* <div className={styles.stats}> */}
        <div>
          <span className={styles.value}>{followers}</span>
          <p>Followers</p>
        </div>
        <div>
          <span className={styles.value}>{posts}</span>
          <p>Posts</p>
        </div>
        <div>
        <button
            className={is_following ? styles.unfollowButton : styles.followButton}
          >
            {is_following ? 'Unfollow' : 'Follow'}
          </button>
        </div>
       </div>
    </div>
  );
};
