import styles from '../../../styles/routes-css/edit-css/app.module.css';
import Button from '../../../Components/Helpers/Reusables/Button';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import TopMenu from '../../../Components/Helpers/Reusables/TopMenu';
import ImageEditable from '../../../Components/Helpers/Reusables/PictureEditable';
import SB from '../../../Components/Main/Background/Background';

export default function Choice() {
  const [state, setState] = useState({
    pictureFile: null,
    pictureConverted: null,
    width: 1920,
    x: '',
    y: '',
  });
  const router = useRouter();

  const handlePictureUpload = (e) => {
    const pic = e.target.files[0];
    const fr = new FileReader();
    fr.readAsDataURL(pic);
    fr.onload = () => {
      setState((prev) => {
        return {
          ...prev,
          pictureFile: pic,
          pictureConverted: fr.result,
        };
      });
    };
  };

  const updatePosition = (x, y) => {
    setState((prev) => {
      return {
        ...prev,
        x,
        y,
      };
    });
  };
  const handleChange = (e) => {
    setState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleNext = () => {
    const fd = new FormData();
    fd.append('bgImg', state.pictureFile);
    fd.append('bgX', state.x);
    fd.append('bgY', state.y);
    fd.append('bgWidth', state.width);
    fd.append('id', router.query.picture);
    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_ROUTE}/updateOneApp`, fd)
      .then((doc) => {
        router.push('/edit/app/all');
      });
  };
  const pictureRender =
    state.pictureConverted === null ? '' : state.pictureConverted;
  return (
    <>
      <TopMenu>
        <input
          value={state.width}
          type='text'
          name='width'
          placeholder='width...'
          onChange={handleChange}
        />
        <input
          type='file'
          id={styles.picture}
          name='picture'
          onChange={handlePictureUpload}
        />
        <Button>
          <label id={styles.pictureLabel} htmlFor={styles.picture}>
            <p> Upload a file </p>
          </label>
        </Button>
        <div onClick={handleNext} id={styles.arrowIMG}>
          <img src='/images/previous_option.svg' alt='arrow' />
        </div>
      </TopMenu>
      <ImageEditable
        src={pictureRender}
        style={{
          position: 'absolute',
          top: '0px',
          left: '0px',
          width: state.width + 'px',
          zIndex: 1000,
        }}
        updatePosition={updatePosition}
      />
      <SB zIndex={9999} />
    </>
  );
}
