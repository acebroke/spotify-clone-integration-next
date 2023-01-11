import styles from "../styles/Home.module.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Home() {
  const playedMusic = {
    name: "Selfish",
    url: "https://i.scdn.co/image/ab67616d0000b273dce00e7e43c30e326a7fe960",
    album: "Selfish",
    artists: ["Karl Benjamin"],
  };

  return (
    <div className={styles.player}>
      <div className={styles.player__body}>
        <Sidebar />
        <Body />
      </div>
      <Footer item={playedMusic} />
    </div>
  );
}

export default Home;
