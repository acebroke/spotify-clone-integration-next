import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";
import Header from "./Header";
import styles from "../styles/Body.module.css";

function Body() {
  const trackItems = [
    {
      name: "No Need",
      url: "https://i.scdn.co/image/ab67616d0000b2731c570021e009272cf4c19b74",
      album: "7",
      artists: ["Ash"],
    },
    {
      name: "True Friend",
      url: "https://i.scdn.co/image/ab67616d0000b2730cdfcd5dab9d0b75c58e7dc8",
      album: "True Friend",
      artists: ["Koffee K"],
    },
    {
      name: "Drip",
      url: "https://i.scdn.co/image/ab67616d0000b2736afacace6087ccb4ffab4cc9",
      album: "Drip",
      artists: ["Oliver Cronin"],
    },
    {
      name: "Nachna",
      url: "https://i.scdn.co/image/ab67616d0000b273609aa0586e4914b9e544b121",
      album: "Nachna",
      artists: ["Shide Boss", "Mazza On The Track"],
    },
    {
      name: "Latest Song",
      url: "https://i.scdn.co/image/ab67616d0000b2731913f3eae195810a4f261883",
      album: "Latest Song",
      artists: ["IRFXXN"],
    },
    {
      name: "Slide - MENTIS Remix",
      url: "https://i.scdn.co/image/ab67616d0000b2734b108a58d047eebd0731d4c7",
      album: "Slide (MENTIS Remix)",
      artists: ["Junior Andre", "MENTIS"],
    },
    {
      name: "Body Different",
      url: "https://i.scdn.co/image/ab67616d0000b273183151ae8899c9aad30dc477",
      album: "Body Different",
      artists: ["Trump Turner", "Remo the Hitmaker"],
    },
    {
      name: "What It Is",
      url: "https://i.scdn.co/image/ab67616d0000b273de5b58b166ed0b2afa56c539",
      album: "What It Is",
      artists: ["Robin Knightz"],
    },
    {
      name: "Do You Mind?",
      url: "https://i.scdn.co/image/ab67616d0000b273a8a09d80e04c236bc777155e",
      album: "Do You Mind?",
      artists: ["NOURI"],
    },
    {
      name: "Popstar",
      url: "https://i.scdn.co/image/ab67616d0000b2739957ea387d70977cc839f65d",
      album: "Popstar",
      artists: ["3 AM"],
    },
    {
      name: "I Got U",
      url: "https://i.scdn.co/image/ab67616d0000b273bbc8bc39abb7f32d8146c2d6",
      album: "I Got U",
      artists: ["NIGHTCAP", "Vicki Vox"],
    },
    {
      name: "Memories",
      url: "https://i.scdn.co/image/ab67616d0000b27383045d932fdbc60ae9713ce3",
      album: "Memories",
      artists: ["Luke Goliath", "Lloyiso"],
    },
    {
      name: "Honest (Remix)",
      url: "https://i.scdn.co/image/ab67616d0000b2739fe37da31820361891be3efa",
      album: "Before It's Too Late (Deluxe)",
      artists: ["NR", "Neno Calvin"],
    },
    {
      name: "Blackjack",
      url: "https://i.scdn.co/image/ab67616d0000b273197c2167aa44b9f75f98d4fb",
      album: "Blackjack",
      artists: ["King Quice"],
    },
    {
      name: "Selfish",
      url: "https://i.scdn.co/image/ab67616d0000b273dce00e7e43c30e326a7fe960",
      album: "Selfish",
      artists: ["Karl Benjamin"],
    },
    {
      name: "Call Me Out",
      url: "https://i.scdn.co/image/ab67616d0000b2737c1babe87342141bd6193765",
      album: "Call Me Out",
      artists: ["Sarah Close", "Alex Hobson"],
    },
    {
      name: "Go",
      url: "https://i.scdn.co/image/ab67616d0000b27370506edbe6fcee35f4e4b0dc",
      album: "Go",
      artists: ["Luke Baker"],
    },
    {
      name: "Back To Summer",
      url: "https://i.scdn.co/image/ab67616d0000b2732af4393595bb562d3a688866",
      album: "Back To Summer",
      artists: ["Shift K3Y"],
    },
    {
      name: "2 much - Justin Bieber - Remix",
      url: "https://i.scdn.co/image/ab67616d0000b2739d5fa9c7f83c8b4e02b289c8",
      album: "2 much - Justin Bieber (Remix)",
      artists: ["Trinix Remix"],
    },
    {
      name: "Body",
      url: "https://i.scdn.co/image/ab67616d0000b273252325f3301ef1fc06070d6a",
      album: "Body",
      artists: ["Ocean", "Amvis"],
    },
    {
      name: "Take Me Back",
      url: "https://i.scdn.co/image/ab67616d0000b2735dd635542e559cd368d6966a",
      album: "Take Me Back",
      artists: ["Lewis Thompson", "David Guetta"],
    },
    {
      name: "Last Last - Remix",
      url: "https://i.scdn.co/image/ab67616d0000b2731973069aa44eb0b3400028a7",
      album: "Last Last (Remix)",
      artists: ["Pharroh"],
    },
    {
      name: "Ocean Drive",
      url: "https://i.scdn.co/image/ab67616d0000b273871b91414b0a88c845d17757",
      album: "Ocean Drive",
      artists: ["O a k $"],
    },
    {
      name: "WDWLT",
      url: "https://i.scdn.co/image/ab67616d0000b273758b48ec1b3b1a8ea97ad9f4",
      album: "WDWLT",
      artists: ["Rico Vina"],
    },
    {
      name: "Body",
      url: "https://i.scdn.co/image/ab67616d0000b2733bef4901756673f603b5c148",
      album: "Body",
      artists: ["Purpleheart", "Adrian Daniel"],
    },
    {
      name: "Talk",
      url: "https://i.scdn.co/image/ab67616d0000b27369f6dfb8758e833e6fe3bad4",
      album: "Talk",
      artists: ["Taura Lamb"],
    },
    {
      name: "For Me - Remix",
      url: "https://i.scdn.co/image/ab67616d0000b2735a9564a5edebe5c09ea9cc3e",
      album: "For Me (Remix)",
      artists: ["JC", "Samuel G"],
    },
    {
      name: "Where Did You Go",
      url: "https://i.scdn.co/image/ab67616d0000b2731c1270ba84a121b71df05b62",
      album: "Where Did You Go",
      artists: ["SLMN", "Kvn Rose", "anders"],
    },
    {
      name: "All In",
      url: "https://i.scdn.co/image/ab67616d0000b273e3c66f6bcc0dbfd0b57030cf",
      album: "All In",
      artists: ["Austin Awake"],
    },
    {
      name: "Queen",
      url: "https://i.scdn.co/image/ab67616d0000b273b26a703918a64f99803d5ee9",
      album: "Queen",
      artists: ["Goweety", "Domo Genesis", "Tone Stith", "One Acen"],
    },
  ];

  return (
    <div className={styles.body}>
      <Header />

      <div className={styles.body__info}>
        <img src={"discover_weekly.png"} alt="" />
        <div className={styles.body__infoText}>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>
            Your weekly compilation of unreleased tracks. New releases and rare
            gems selected for you. Every Monday.
          </p>
        </div>
      </div>

      <div className={styles.Bodybody__songs}>
        <div className={styles.body__icons}>
          <PlayCircleFilledIcon className={styles.body__shuffle} />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {trackItems.map((item, i) => (
          <SongRow
            key={i}
            url={item.url}
            name={item.name}
            albumName={item.album}
            artists={item.artists}
          />
        ))}
      </div>
    </div>
  );
}

export default Body;
