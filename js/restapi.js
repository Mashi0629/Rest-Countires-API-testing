const loadCountryAPI = () => {
    fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags,population,languages')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            displayCountries(data); 
        })
        .catch(error => console.error("Error fetching data:", error));
};


const displayCountries = countries =>{
    console.log(countries);
    const countriesHTML = countries.map(country => getCountry(country))
    //displaying div to html
    const container =  document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');

}

const getCountry = (country) => {
    return `
        <div class="country-div">
            <img src="${country.flags.png}" alt="Flag of ${country.name.common}" width="100">
            <h2>${country.name.common}</h2>
            <p><strong>Capital:</strong> ${country.capital?.[0] || 'N/A'}</p>
            <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
            <p><strong>Languages:</strong> ${Object.values(country.languages || {}).join(', ')}</p>
        </div>
    `;
};

loadCountryAPI();
