import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignUp(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => (
      results.map((e) => (
        {
          status: e.status,
          value: e.status === 'fulfilled' ? e.value : String(e.reason),
        }))));
}
