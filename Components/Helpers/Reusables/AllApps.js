import useAllApps from '../../../hooks/useAllApps';
import AppIcon from './AppIcon';

export default function AllApps() {
  const { apps } = useAllApps();
  const display = apps
    ? apps?.map((obj) => {
        console.log(obj);
        return (
          <AppIcon
            img={obj.imageSrc}
            styleIc={{
              transform: `translate(${obj.xIc}, ${obj.yIc}`,
              width: obj.width,
              position: 'fixed',
              top: '0px',
              left: 0 + 'px',
              zIndex: 'auto',
              filter:
                'grayscale(1) brightness(110%) drop-shadow(0px 0px 0px black)',
            }}
            path={obj.appPath}
            x={obj.x}
            y={obj.y}
            id={obj.id}
            key={obj.id}
            bgImg={obj.bgImg}
            bgX={obj.bgX}
            bgY={obj.bgy}
            bgWidth={obj.bgWidth}
          />
        );
      })
    : 'Loading...';

  return <>{display}</>;
}
