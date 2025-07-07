const loadCountryAPI = () => {
    fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags,population,languages')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error("Error fetching data:", error));
}

loadCountryAPI();
