import { useState, createContext } from 'react';

const AppUploadContext = createContext();

const AppUploadProvider = (props) => {
  const [apps, setApps] = useState([]);
  const updateAppsPos = (id, x, y) => {
    setApps((prev) => {
      const curr = prev?.find((obj) => {
        return obj.id === id;
      });
      curr.x = x;
      curr.y = y;
      const filterArr = prev.filter((obj) => {
        return obj.id !== id;
      });
      const modArr = [...filterArr, curr];
      return modArr;
    });
  };
  return (
    <AppUploadContext.Provider
      value={{
        updateAppsPos,
        apps,
        setApps,
      }}>
      {props.children}
    </AppUploadContext.Provider>
  );
};

export { AppUploadProvider, AppUploadContext };
