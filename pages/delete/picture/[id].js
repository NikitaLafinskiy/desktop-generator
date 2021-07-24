import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function EditPicture() {
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_BACKEND_ROUTE}/deleteOnePicture/${router.query.id}`
        )
        .then((doc) => {
          router.push('/');
        });
    }
  }, [router.isReady]);
  return <div></div>;
}
