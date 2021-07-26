import MenuBar from '../../Components/Helpers/Options/MenuBar';
import Link from 'next/link';
import styles from '../../styles/routes-css/menu-css/add_choice.module.css';
import StyledLink from '../../Components/Helpers/Options/StyledLink';

export default function Choice() {
  return (
    <MenuBar>
      <h2>What do you want to create?</h2>
      <div id={styles.flex}>
        <StyledLink text={'Create a new app icon'} href='/menu/add_app' />
        <StyledLink text={'Upload a new picture'} href='/menu/add_picture' />
      </div>
    </MenuBar>
  );
}
