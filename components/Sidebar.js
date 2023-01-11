import styles from "../styles/Sidebar.module.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img
        className={styles.sidebar__logo}
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} option="Home" />
      <SidebarOption Icon={SearchIcon} option="Search" />
      <SidebarOption Icon={LibraryMusicIcon} option="Your Library" />
      <br />
      <strong className={styles.sidebar__title}>PLAYLISTS</strong>
      <hr />
      <SidebarOption option={"RAP AMOUR TRISTE"} />
      <SidebarOption option={"Rain and Thunder Sounds ⛈"} />
      <SidebarOption option={"Sleep Music, Sleep Rain 💤"} />
      <SidebarOption option={"Chill House | Lounge Relax"} />
      <SidebarOption option={"Chill House 2023"} />
      <SidebarOption option={"Funk Hits"} />
      <SidebarOption option={"Sport"} />
      <SidebarOption option={"Lofi Coders 💻"} />
      <SidebarOption option={"Hits chill"} />
      <SidebarOption option={"Futurs Hits"} />
      <SidebarOption option={"Course"} />
    </div>
  );
}

export default Sidebar;
