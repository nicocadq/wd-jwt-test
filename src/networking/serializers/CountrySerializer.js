class CountrySerializer {
  static deSerialize(data) {
    return {
      name: data.name,
      capital: data.capital,
      region: data.region,
    };
  }
}

export default CountrySerializer;
