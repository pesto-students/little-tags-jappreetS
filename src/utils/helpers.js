const isObjPropertiesEmpty = (obj) => {
  for (var key in obj) {
    if (obj[key] !== '') return false;
  }
  return true;
};

const getUserDetails = (userObj) => {
  return {
    email: userObj.email,
    username: userObj.username,
    displayName: userObj.displayName,
  };
};

export { isObjPropertiesEmpty, getUserDetails };
