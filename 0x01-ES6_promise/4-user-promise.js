export default function signUpUser(firstName, lastName) {
  const user = { firstName, lastName };
  return new Promise((resolve) => {
    resolve(user);
  });
}
