import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photo = uploadPhoto();
  const user = createUser();

  return Promise.all([photo, user]).then((values) => ({ photo: values[0], name: values[1] }));
}
