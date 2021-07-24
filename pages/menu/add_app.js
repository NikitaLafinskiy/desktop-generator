import MenuBar from '../../Components/Helpers/Options/MenuBar';
import styles from '../../styles/routes-css/menu-css/add_app.module.css';
import Input from '../../Components/Helpers/Reusables/Input';
import { useState } from 'react';
import Button from '../../Components/Helpers/Reusables/Button';
import ImgEditable from '../../Components/Helpers/Reusables/PictureEditable';
import axios from 'axios';
import router from 'next/router';
import Arrow from '../../Components/Helpers/Reusables/Arrow';

export default function Choice() {
  const [state, setState] = useState({
    appPath: '',
    appImgScale: '',
    appImg: '',
    appImgUTF8: '',
    x: '',
    y: '',
  });

  const handlePictureUpload = (e) => {
    const fr = new FileReader();
    fr.readAsDataURL(e.target.files[0]);
    fr.onload = () => {
      setState((prev) => {
        return {
          ...prev,
          appImgUTF8: fr.result,
          appImg: e.target.files[0],
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
    console.log(state);
    setState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleNext = () => {
    const fd = new FormData();
    const { x, y, appImg, appImgScale, appPath } = state;
    fd.append('xIc', x);
    fd.append('yIc', y);
    fd.append('imageSrc', appImg);
    fd.append('width', appImgScale);
    fd.append('appPath', appPath);
    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_ROUTE}/createNewApp`, fd)
      .then((doc) => {
        router.push('/edit/app/' + doc.data.app.id);
      });
  };

  return (
    <MenuBar>
      <div id={styles.wrapper}>
        <div id={styles.appIcon}>
          <div id={styles.foreground}>
            <ImgEditable
              src={state.appImgUTF8}
              width={state.appImgScale}
              updatePosition={updatePosition}
              style={{ zIndex: 999 }}
            />
          </div>
        </div>
        <div id={styles.flex}>
          <h1>Add a new app icon</h1>
          <Input
            placeholder='Source of the app...'
            val={state.appPath}
            handleChange={handleChange}
            name='appPath'
          />
          <Input
            placeholder='Scale...'
            name='appImgScale'
            val={state.appImgScale}
            handleChange={handleChange}
          />
          <input
            type='file'
            id={styles.picture}
            name='appImg'
            onChange={handlePictureUpload}
          />
          <Button>
            <label id={styles.pictureLabel} htmlFor={styles.picture}>
              <p> Upload a file </p>
            </label>
          </Button>
          <Arrow handleNext={handleNext} />
        </div>
      </div>
    </MenuBar>
  );
}
