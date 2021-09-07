import axios from 'axios';
import Country from '../../models/Country';
import { generateURL, ROUTES } from '../routes';
import CountrySerializer from '../serializers/CountrySerializer';

class CountryController {
  static async getCountries() {
    console.log(generateURL(ROUTES.ALL));
    const response = await axios.get(generateURL(ROUTES.ALL), { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
    const deSerializedCountries = response.data.map(
      (country) => new Country(CountrySerializer.deSerialize(country)),
    );
    console.log(deSerializedCountries);
  }
}

export default CountryController;
