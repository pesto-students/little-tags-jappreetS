const getUpdatedAddresses = (addresses, addressData) => {
  const addressesArr = [...addresses];
  addressesArr.push(addressData);
  return addressesArr;
};

const getUpdatedCart = (cart, cartData) => {
  const cartArr = [...cart];
  const indexOfCurrentItem = cart.findIndex((item) => item.id === cartData.id);
  if (indexOfCurrentItem > -1) {
    cartData.count === 0
      ? cartArr.splice(indexOfCurrentItem, 1)
      : (cartArr[indexOfCurrentItem] = cartData);
  } else {
    cartArr.push(cartData);
  }

  return cartArr;
};

const getUpdatedOrders = (orders, orderData) => {
  const ordersArr = [...orders];
  ordersArr.push(orderData);
  return ordersArr;
};

const getUserDetails = (userObj) => {
  return {
    email: userObj.email,
    username: userObj.username,
    displayName: userObj.displayName,
  };
};

const isObjPropertiesEmpty = (obj) => {
  for (var key in obj) {
    if (obj[key] !== '') return false;
  }
  return true;
};

export {
  getUpdatedAddresses,
  getUpdatedCart,
  getUpdatedOrders,
  getUserDetails,
  isObjPropertiesEmpty,
};
