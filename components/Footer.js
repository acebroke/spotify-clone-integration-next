import styles from "../styles/Footer.module.css";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

function Footer({ item }) {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__left}>
        <img
          className={styles.footer__albumLogo}
          src={item.url}
          alt={item.name}
        />
        <div className={styles.footer__songInfo}>
          <h4>{item.name}</h4>
          <p>{item.artists.join(", ")}</p>
        </div>
      </div>

      <div className={styles.footer__center}>
        <ShuffleIcon className={styles.footer__green} />
        <SkipPreviousIcon className={styles.footer__icon} />

        <PauseCircleOutlineIcon
          fontSize="large"
          className={styles.footer__icon}
        />

        <SkipNextIcon className={styles.footer__icon} />
        <RepeatIcon className={styles.footer__green} />
      </div>
      <div className={styles.footer__right}>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider className={styles.slider} aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
