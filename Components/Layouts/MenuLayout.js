import Background from '../Main/Background/Background';
import SecondaryBackground from '../Main/Background/SecondaryBackground';
import DefaultOptions from '../Main/Options/Default';
import styles from '../../styles/components-css/main-components-css/add-option.module.css';
import { useRouter } from 'next/router';

export default function DefaultLayout() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  };
  return (
    <>
      <Background backgroundColor='white' />
      <SecondaryBackground backgroundColor='black' />
      <DefaultOptions link='/menu/add_choice' />
      <div onClick={handleClick} id={styles.add}>
        1
      </div>
    </>
  );
}
