import MenuBar from '../../Components/Helpers/Options/MenuBar';
import styles from '../../styles/routes-css/menu-css/add_picture.module.css';
import Button from '../../Components/Helpers/Reusables/Button';
import { useState, useContext } from 'react';
import { PictureUploadContext } from '../../Contexts/PictureUploadContext';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Choice() {
  const [state, setState] = useState({
    pictureFile: null,
    pictureConverted: null,
  });
  const router = useRouter();
  const { updateSource, updateId, updateDimensions, updatePosition } =
    useContext(PictureUploadContext);
  const handlePictureUpload = (e) => {
    const pic = e.target.files[0];
    const fr = new FileReader();
    fr.readAsDataURL(pic);
    fr.onload = () => {
      setState((prev) => {
        return {
          pictureFile: pic,
          pictureConverted: fr.result,
        };
      });
    };
  };
  const handleNext = () => {
    updateSource(state.pictureFile, state.pictureConverted);
    const fd = new FormData();
    fd.append('pictureFile', state.pictureFile);
    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_ROUTE}/createNewPicture`, fd)
      .then((doc) => {
        const result = doc.data.picture;
        router.push('/edit/' + result.id);
        updateId(result.id);
        updatePosition(result.x, result.y);
        updateDimensions(result.width, result.height);
      });
  };
  const pictureRender =
    state.pictureConverted === null
      ? '/images/preview.png'
      : state.pictureConverted;
  const pictureID = styles.picture;
  return (
    <MenuBar>
      <div id={styles.main}>
        <img id={styles.preview} src={pictureRender} alt='picture uploaded' />
        <input
          type='file'
          id={styles.picture}
          name='picture'
          onChange={handlePictureUpload}
        />
        <Button>
          <label id={styles.pictureLabel} htmlFor={pictureID}>
            <p> Upload a file </p>
          </label>
        </Button>
        <div onClick={handleNext} id={styles.arrowIMG}>
          <img src='/images/previous_option.svg' alt='arrow' />
        </div>
      </div>
    </MenuBar>
  );
}
