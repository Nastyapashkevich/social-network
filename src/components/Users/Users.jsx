import styles from './Users.module.css';
import * as axios from "axios";
import userPhoto from './../../assets/images/user.png'

function Users(props) {

  if (props.users.length === 0) {

    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      props.setUsers(response.data.items)
    });
  }

  return (
      <div className={styles.users}>
        {
          props.users.map(u => <div className={styles.user} key={u.id}>
            <div className={styles.photoButton}>
              <div>
                <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" className={styles.userPhoto}/>
              </div>
              <div>
                {u.followed
                    ? <button className={`${styles.button} ${styles.buttonUnfollow}`} onClick={() => {
                      props.unfollow(u.id)
                    }}>Unfollow</button>
                    : <button className={styles.button} onClick={() => {
                      props.follow(u.id)
                    }}>Follow</button>}
              </div>
            </div>

            <div className={styles.userInfo}>
              <div>
                <div>{u.name}</div>
                <div className={styles.userStatus}>{u.status}</div>
              </div>
              <div>
                <div>{"u.location.country"}</div>
                <div className={styles.userCity}>{"u.location.city"}</div>
              </div>
            </div>
          </div>)
        }
      </div>
  );
}

export default Users;