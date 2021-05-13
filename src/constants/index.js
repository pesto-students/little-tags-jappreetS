const API_BASE_URL = 'https://fakestoreapi.com';

const GITHUB_PROFILE = 'https://github.com/jappreetS';
const LINKEDIN_PROFILE = 'https://www.linkedin.com/in/jappreetsingh/';

const CATEGORIES = [
  {
    id: 'accessories',
    label: 'Accessories',
  },
  {
    id: 'shirts',
    label: 'Shirts',
  },
  {
    id: 'pants',
    label: 'Pants',
  },
  {
    id: 'jackets',
    label: 'Jackets',
  },
];

const PRODUCT_SIZES = [
  {
    id: 'xs',
    label: 'XS',
    disable: false,
  },
  {
    id: 's',
    label: 'S',
    disable: false,
  },
  {
    id: 'm',
    label: 'M',
    disable: false,
  },
  {
    id: 'l',
    label: 'L',
    disable: false,
  },
  {
    id: 'xl',
    label: 'XL',
    disable: false,
  },
];

const SIDE_MENU_OTHER_PAGES = [
  {
    id: 'pastOrders',
    label: 'Past Orders',
    route: '/past-orders',
  },
  {
    id: 'addAddress',
    label: 'Add Address',
    route: '/add-address',
  },
];

const STATES = [
  {
    value: 'delhi',
    label: 'Delhi',
  },
  {
    value: 'karnataka',
    label: 'Karnataka',
  },
  {
    value: 'maharashtra',
    label: 'Maharashtra',
  },
  {
    value: 'rajasthan',
    label: 'Rajasthan',
  },
];

export {
  API_BASE_URL,
  GITHUB_PROFILE,
  LINKEDIN_PROFILE,
  CATEGORIES,
  PRODUCT_SIZES,
  SIDE_MENU_OTHER_PAGES,
  STATES,
};
