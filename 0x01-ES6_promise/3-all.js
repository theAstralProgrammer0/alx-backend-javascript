import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  return Promise.all([photoPromise, userPromise])
    .then((value) => console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`))
    .catch(() => console.log('Signup system offline'));
}
