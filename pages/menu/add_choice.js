import MenuBar from '../../Components/Helpers/Options/MenuBar';
import Link from 'next/link';
import styles from '../../styles/routes-css/menu-css/add_choice.module.css';

export default function Choice() {
  return (
    <MenuBar>
      <h2>What do you want to create?</h2>
      <div id={styles.flex}>
        <Link href='/menu/add_app'>
          <a>An app icon</a>
        </Link>
        <Link href='/menu/add_picture'>
          <a>Upload a new picture</a>
        </Link>
      </div>
    </MenuBar>
  );
}
