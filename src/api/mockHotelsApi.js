import hotelsJson from './data.json';

const delay = 2000;

class HotelsApi {
  static getAllHotels() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], hotelsJson));
      }, delay);
    });
  }
}

export default HotelsApi;
