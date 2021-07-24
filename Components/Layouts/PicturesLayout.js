import Background from '../Main/Background/Background';
import SecondaryBackground from '../Main/Background/SecondaryBackground';
import PictureOptions from '../Main/Options/Pictures';
import Apps from '../Helpers/Reusables/AllApps';
export default function DefaultLayout() {
  return (
    <>
      <Background backgroundColor='white' />
      <SecondaryBackground backgroundColor='black' />
      <Apps />
      <PictureOptions />
    </>
  );
}
