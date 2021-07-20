import React from "react";
import CountriesData from "../../data/Data";
import styles from "../SearchDrop/searchDrop.module.css";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      filteredCountries: [],
    };
    
  }

  componentDidMount() {
    CountriesData().then((data) => {
      const countries = [];
      data.map(({ name, flag }) => {
        countries.push({ name, flag });
        return true;
      });
      this.setState({ countries: countries });
    });
  }

  userInputSearch = (event) => {
    let userInput = event.target.value;
    console.log(userInput)
    const filteredCountries = this.state.countries.filter(({ name }) =>
      name.includes(userInput) 
    );
    this.setState({ filteredCountries: filteredCountries });
    console.log(filteredCountries)
  };
  

  render() {

    return (
      <>
        <input
          className={styles.inputSearch}
          type="text"
          placeholder="country name..."
          onChange={this.userInputSearch}
        />

        <div >{this.state.filteredCountries.map(({name,flag})=> {return <div>  {name} <img className={styles.imgStyle} src={flag} alt="" /> </div>}
        )}</div>
      </>
    );
  }
}

export default Search;
