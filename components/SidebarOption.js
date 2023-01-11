import styles from "../styles/SidebarOption.module.css";

function SidebarOption({ option = "test", Icon }) 
{
  return (
    <div className={styles.sidebarOption}>
      {Icon && <Icon className={styles.sidebarOption__icon} />}
      {Icon ? <h4>{option}</h4> : <p>{option}</p>}
    </div>
  );
}

export default SidebarOption;
