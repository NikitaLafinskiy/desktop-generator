import { useRouter } from 'next/router';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import ImageEditable from '../../Components/Helpers/Reusables/PictureEditable';
import PictureEditMenu from '../../Components/Helpers/Reusables/PictureEditMenu';
import styles from '../../styles/routes-css/edit-css/picture.module.css';
import { PictureUploadContext } from '../../Contexts/PictureUploadContext';

export default function EditPicture() {
  const { width, height, updatePosition } = useContext(PictureUploadContext);

  const router = useRouter();
  const [pic, setPic] = useState('');
  useEffect(() => {
    if (router.isReady) {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_BACKEND_ROUTE}/findOnePicture/${router.query.picture}`
        )
        .then((doc) => {
          console.log(doc);
          setPic(doc.data[0]);
        });
    }
  }, [router.isReady]);
  return (
    <div id={styles.canvas}>
      <PictureEditMenu image={pic} />
      <ImageEditable
        width={width}
        height={height}
        updatePosition={updatePosition}
        src={pic.pictureFile}
      />
    </div>
  );
}
