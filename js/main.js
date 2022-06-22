const MAX_ADS_COUNT = 10;

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const CHECKINS_CHECKOUTS = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const latitude = {
  min: 35.65000,
  max: 35.70000,
};

const longitude = {
  min: 139.70000,
  max: 139.80000,
};

const price = {
  min: 0,
  max: 10,
};

const rooms = {
  min: 0,
  max: 10,
};

const guests = {
  min: 0,
  max: 10,
};

function getRandom(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

getRandom();

function getFractionRandom(a, b, digits = 5) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));

  const result = Math.random() * (upper - lower) + lower;

  return +result.toFixed(digits);
}

getFractionRandom();

const getRandomArrayElement = (elements) =>
  elements[getRandom(0, elements.length - 1)];

const createObj = (id) => {
  const lat = getFractionRandom(latitude.min, latitude.max);
  const lng = getFractionRandom(longitude.min, longitude.max);

  return {
    author: {
      avatar: `img/avatars/user${String(id).padStart(2, '0')}.png`
    },
    offer: {
      title: 'Объявление',
      address: `${lat}, ${lng}`,
      price: getRandom(price.min, price.max),
      type: getRandomArrayElement(TYPES),
      rooms: getRandom(rooms.min, rooms.max),
      guests: getRandom(guests.min, guests.max),
      checkin: getRandomArrayElement(CHECKINS_CHECKOUTS),
      checkout: getRandomArrayElement(CHECKINS_CHECKOUTS),
      features:
        FEATURES.slice(0, getRandom(1, FEATURES.length)),
      description: 'Описание помещения',
      photos:
        PHOTOS.slice(0, getRandom(1, PHOTOS.length)),
    },
    location: {
      lat,
      lng,
    }
  };
};

const createAds = (amount) =>
  Array.from(
    { length: amount },
    (_, index) => createObj(index));


createAds(MAX_ADS_COUNT);
