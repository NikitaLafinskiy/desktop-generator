import MenuBar from '../../../Components/Helpers/Options/MenuBar';
import Link from 'next/link';
import Button from '../../../Components/Helpers/Reusables/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Choice() {
  const router = useRouter();
  const [obj, setObj] = useState('');
  useEffect(() => {
    if (router.isReady) {
      const id = router.query.id;
      axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_ROUTE}/findOnePicture/${id}`)
        .then((doc) => {
          const res = doc.data[0];
          setObj(res);
        });
    }
  }, [router.isReady]);
  const src = obj === '' ? '' : obj.pictureFile;
  return (
    <MenuBar>
      <h1>Are you sure you want to delete the image set?</h1>
      <img src={src} alt='image' />
      <div>
        <Link href={`/delete/picture/${obj.id}`}>
          <a>
            <Button
              style={{
                border: '1px solid black',
                backgroundColor: 'rgb(255, 20, 20, 0.9)',
              }}>
              Delete
            </Button>
          </a>
        </Link>

        <Link href={`/view/${obj.id}`}>
          <a>
            <Button style={{ border: '1px solid black' }}>Cancel</Button>
          </a>
        </Link>
      </div>
      <style jsx>{`
        img {
          max-width: 800px;
          max-height:600px;
          border-radius:5px;
          border:1px solid lightgrey;
          position:relative;
          left:50%;
          transform:translate(-50%, 0%)
        }
        h1{
            position:relative;
            transform:translateX(-50%)
            left:50%;
            text-align:center
        }
        div {
            display:flex;
            justify-content:center
        }
      `}</style>
    </MenuBar>
  );
}
