import styles from "../styles/Header.module.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__left}>
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className={styles.header__right}>
        <Avatar alt={"avatar.jpeg"} src={"avatar.jpeg"} />
        <h4>John Doe</h4>
      </div>
    </div>
  );
}

export default Header;
