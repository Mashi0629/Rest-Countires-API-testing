const loadCountryAPI = () => {
    fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags,population,languages')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error("Error fetching data:", error));
}

const displayCountries = countries =>{
    console.log(countries);
    const countriesHTML = countries.map(country => getCountry(country))
    //displaying div to html
    const container =  document.getElementById('countries');
    container.innerHTML = countriesHTML;
}

const getCountry = (country) =>{
    console.log(country)
    return `
    <div>
    <h2>${country.name.common} </h2>
    </div>
    `
}
loadCountryAPI();
