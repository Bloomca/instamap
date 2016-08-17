import GoogleMapsLoader from 'google-maps';

GoogleMapsLoader.KEY = 'AIzaSyAEhEf2J1wKFwVpawMPwvHarj4sCr_EqTo';

export default new Promise((resolve) => {
  GoogleMapsLoader.load(google => {
    resolve(google);
  });
});
