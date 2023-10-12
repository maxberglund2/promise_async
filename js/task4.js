const fetchCountry = async (alpha3Code) => {
  try {
    const res = await fetch(
      `https://restcountries.eu/rest/v2/alpha/${alpha3Code}`
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchCountryAndNeigbors = async () => {
  const columbia = await fetchCountry("col");

  const neighbors = await Promise.all(
    columbia.borders.map((border) => fetchCountry(border))
  );

  console.log(neighbors);
};

fetchCountryAndNeigbors();