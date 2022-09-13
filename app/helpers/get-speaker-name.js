import { helper } from '@ember/component/helper';

export function getSpeakerName(params/*, hash*/) {
  let [surname, name, fName] = params;
  return `${surname} ${name} ${fName}`;
}

export default helper(getSpeakerName);
