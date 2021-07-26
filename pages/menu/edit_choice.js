import MenuBar from '../../Components/Helpers/Options/MenuBar';
import Link from 'next/link';
import styles from '../../styles/routes-css/menu-css/add_choice.module.css';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import StyledLink from '../../Components/Helpers/Options/StyledLink';

export default function Choice() {
  const [id, setId] = useState(null);
  const router = useRouter();
  useEffect(() => {
    if (router.query) {
      setId(router.query.id);
    }
  }, [router.query]);
  return (
    <MenuBar>
      <h2 style={{ textAlign: 'center' }}>What do you want to edit?</h2>
      <div id={styles.flex}>
        <StyledLink text={'Edit the current image'} href={'/edit/' + id} />

        <StyledLink text={'Edit the app positions'} href='/edit/app/all' />

        <StyledLink
          text={"Edit individual app's background"}
          href='/edit/app/choice'
        />
      </div>
    </MenuBar>
  );
}
