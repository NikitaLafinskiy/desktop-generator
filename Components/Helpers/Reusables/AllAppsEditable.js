import useAllApps from '../../../hooks/useAllApps';
import AppIconEditable from './AppIconEditable';
import { useContext, useEffect } from 'react';
import { AppUploadContext } from '../../../Contexts/AppUploadContext';
import axios from 'axios';
import Btn from './Button';
import { useRouter } from 'next/router';

export default function AllApps() {
  const { apps } = useAllApps();
  const router = useRouter();
  const { apps: appsContext, setApps } = useContext(AppUploadContext);
  useEffect(() => {
    setApps(apps);
  }, [apps]);
  console.log(apps);
  const display = apps
    ? apps?.map((obj) => {
        return (
          <AppIconEditable
            img={obj.imageSrc}
            styleIc={{
              transform: `translate(${obj.xIc}, ${obj.yIc}`,
              width: obj.width,
              position: 'absolute',
              top: '0px',
              left: 0 + 'px',
            }}
            path={obj.appPath}
            x={obj.x}
            y={obj.y}
            id={obj.id}
            key={obj.id}
          />
        );
      })
    : 'Loading...';
  const updateApps = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_ROUTE}/updateAllApps`, {
        apps: appsContext,
      })
      .then((doc) => {
        console.log(doc);
        router.push('/');
      });
  };
  return (
    <>
      <div style={{ position: 'absolute' }}> {display}</div>

      <div>
        <Btn
          style={{
            width: 10 + 'vw',
            position: 'absolute',
            top: '20px',
            right: 20 + 'px',
            color: 'white',
            border: 'white 1px solid',
            backgroundColor: 'black',
          }}
          handleClick={updateApps}>
          Save
        </Btn>
      </div>
    </>
  );
}
