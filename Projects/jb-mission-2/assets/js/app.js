"use strict";

(() => {
    
    const getData = (url)=>{
        return fetch(url).then(response=>response.json())
    }

    const findUserSelection = ()=> {return `https://restcountries.com/v3.1/name/${document.getElementById(`countryPicker`).value}`}

    

    const generateSelected = (countries) => {
        
        const totalCountries = countries.length;
        const totalPopulation = countries.reduce((sum, country) => sum + (country.population || 0), 0);
        const averagePopulation = totalPopulation / totalCountries;

        const statsHTML = `
            <span>Total countries result: ${totalCountries}</span><br><br>
            <span>Total Countries Population: ${totalPopulation}</span><br><br>
            <span>Average Population: ${averagePopulation.toFixed(2)}</span><br><br>
        `;

        
        const countriesHTML = countries
            .map(country => {
                return `
                    <tr>
                        <td>${country.name.official}</td>
                        <td>${country.population}</td>
                    </tr>
                `;
            })
            .reduce((cumulative, current) => cumulative + current, '');
        
        return { statsHTML, countriesHTML};
    }

    const generateRegionStats = (countries) => {
        const regions = [...new Set(countries.flatMap(country => country.continents))];
        
        const generatesStatsHTML = regions
            .map(region => {
                const count = countries.filter(country => country.continents.includes(region)).length;
                return `
                    <tr>
                        <td>${region}</td>
                        <td>${count}</td>
                    </tr>
                `;
            })
            .reduce((cumulative, current) => cumulative + current, '');
    
        return generatesStatsHTML;
    };
    
    const generateLanguageStats = (countries) => {
        const arrayOfLanguages = [
            ...new Set(countries.flatMap(country => 
                country.languages ? Object.values(country.languages) : []
            ))
        ];
    
        const generatesLanguagesHTML = arrayOfLanguages
            .map(Language => {
                const count = countries.filter(country => 
                    country.languages && Object.values(country.languages).includes(Language)
                ).length;
    
                return `
                    <tr>
                        <td>${Language}</td>    
                        <td>${count}</td>
                    </tr>
                `;
            })
            .reduce((cumulative, current) => cumulative + current, '');
    
        return generatesLanguagesHTML;
    };
    
        
    
    const renderCountries = (countriesHTML) => {
        document.getElementById('showContent').innerHTML = countriesHTML;
    }
    const renderStats = (statsHTML) => {
        document.getElementById('stats').innerHTML = statsHTML;
    }
    const renderRegionStats = (statsHTML) => {
        document.getElementById('regionStats').innerHTML = statsHTML;
    }
    const renderLanguageStats = (statsHTML) => {
        document.getElementById('languageStats').innerHTML = statsHTML;
    }


    


    const selectButton =async (event) =>{
        try {
            event.preventDefault()
            const countries = await getData(findUserSelection())
            const { statsHTML, countriesHTML } = generateSelected(countries);
            const regionStatsHTML = generateRegionStats(countries)
            const LanguageStatsHTML = generateLanguageStats(countries)
            renderStats(statsHTML);
            renderCountries(countriesHTML);
            renderRegionStats(regionStatsHTML);
            renderLanguageStats(LanguageStatsHTML)
            
        } catch (error) {
            console.warn(error)
        }
    }

    const allButton =async (event) =>{
        try {
            event.preventDefault()
            const countries = await getData(`https://restcountries.com/v3.1/all`)
            const { statsHTML, countriesHTML } = generateSelected(countries);
            const regionStatsHTML = generateRegionStats(countries)
            const LanguageStatsHTML = generateLanguageStats(countries)
            renderStats(statsHTML);
            renderCountries(countriesHTML);
            renderRegionStats(regionStatsHTML);
            renderLanguageStats(LanguageStatsHTML)
        } catch (error) {
            console.warn(error)
        }
    }

     
    document.getElementById(`Search`).addEventListener(`click`,(event) => selectButton(event))
    document.getElementById(`showAll`).addEventListener(`click`,(event) => allButton(event))
    
})()


