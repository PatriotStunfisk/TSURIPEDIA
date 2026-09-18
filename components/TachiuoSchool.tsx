import {getFishProfile} from '@/lib/fish-registry';
import FishEcologyVisual from './FishEcologyVisual';

export default function TachiuoSchool(){
  return <FishEcologyVisual visual={getFishProfile('tachiuo')?.ecologyVisual}/>;
}
