import styles from "../styles/SongRow.module.css";

function SongRow({ url, name, albumName, artists }) {
  return (
    <div className={styles.songRow}>
      <img className={styles.songRow__album} src={url} alt="" />
      <div className={styles.songRow__info}>
        <h1>{name}</h1>
        <p>
          {artists.join(", ")} -{albumName}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
