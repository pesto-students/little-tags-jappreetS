const getUserDetails = (userObj) => {
  return {
    email: userObj.email,
    username: userObj.username,
    displayName: userObj.displayName,
  };
};

export { getUserDetails };
