// fecthUser("Arjun")
// 	.then((user) => fetchUserPhotos(user.username))
// 	.then((userPhotos) => console.log(`Your photes are ${userPhotos}`));


const displayUserData = async () => {
  const user = await fecthUser(`Govind`);
  const photos = await fetchUserPhotos(user.username);
  console.log(`${user.username} Your photos are: ${photos}`);
};

displayUserData();
