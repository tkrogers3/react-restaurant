import React from 'react';
const axios = require('axios');

class MenuItems extends React.Component {
  constructor(props) {
    super(props);

    //Stored in State= menu items
    this.state = {
      menuItems: []//api object items

    }
  }
  //create a function that sets price for each item  by randomizing number.
  setPrice() {
    return '$' + Math.floor(Math.random() * Math.floor (10) + 15);
   } 
/*The promise*/ async newMenu() {

    let results = await axios.get('https://entree-f18.herokuapp.com/v1/menu/' + this.props.item.selections)
      .then(function (response) {

        return response.data.menu_items; // handle success

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

   /*The promise settled */ await this.setState({
      menuItems: results,
    });
  }

  //set local storage
  // if localStorage key is present, JSON.parse the key into a string, 
 // set state of menuItems array to equal the parsed data from local storage.
 //else, if the local storage is not set, return send the newMenu data to Local Storage
  async componentDidMount() {
    if (window.localStorage[this.props.item.name] != null) {
      let results = JSON.parse(window.localStorage.getItem(this.props.item.name)) || [];
      this.setState(
        { menuItems: results } //setting state of menuItems to the result of the json parse 
      );
    } else {
      this.newMenu();

    }

  }
//when component updates, stringify the menuItems
  componentDidUpdate() {
    window.localStorage.setItem(this.props.item.name, JSON.stringify(this.state.menuItems))

  }

  render() {

    return (

      <div className="card" >
        <div className="card-header textColor" id="sectionTitle">
          <h3>{this.props.item.name}</h3>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {
              this.state.menuItems ? this.state.menuItems.map((food, idx) => {
                return <div className="table border-bottom font-weight-bold mx-auto" key={idx}>{food.description} - {this.setPrice()} </div>
              }) : null
            }

          </li>
        </ul>
      </div>
    )
  }

}


export default MenuItems;