import Background from '../Main/Background/Background';
import SecondaryBackground from '../Main/Background/SecondaryBackground';
import DefaultOptions from '../Main/Options/Default';
import Apps from '../Helpers/Reusables/AllApps';

export default function DefaultLayout() {
  return (
    <>
      <Background backgroundColor='white' />
      <SecondaryBackground backgroundColor='black' />
      <Apps />
      <DefaultOptions
        linkAddChoice='/menu/add_choice'
        linkChoosePicture='/choosePicture'
      />
    </>
  );
}
