import MenuBar from '../../Components/Helpers/Options/MenuBar';
import Link from 'next/link';
import styles from '../../styles/routes-css/menu-css/add_choice.module.css';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

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
      <h2>What do you want to edit?</h2>
      <div id={styles.flex}>
        <Link href={'/edit/' + id}>
          <a>Edit the current image</a>
        </Link>
        <Link href='/edit/app/all'>
          <a>Edit the app positions</a>
        </Link>
        <Link href='/edit/app/choice'>
          <a>Edit individual app's background</a>
        </Link>
      </div>
    </MenuBar>
  );
}
