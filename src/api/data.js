export const getUserData = async (cb) => {
  const data = await fetch("/ibu.json");
  const user = await data.json();
  //   const user = await data.json();
  cb(user);
};
