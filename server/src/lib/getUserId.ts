const getUserId = (user: any) => {
  const stringUser = JSON.stringify(user);
  return JSON.parse(stringUser).id;
};

export default getUserId;
