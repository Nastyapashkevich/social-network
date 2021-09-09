import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile(props) {
  return (
      <div className={styles.wrapper}>
        <ProfileInfo/>
        <MyPostsContainer/>
      </div>
  );
}

export default Profile;