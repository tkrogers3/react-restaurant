import React from 'react';
//import { faWindows } from '@fortawesome/free-brands-svg-icons';
const axios = require('axios');

class MenuItems extends React.Component {
  constructor(props) {
    super(props);

    //Stored in State= menu items,prices, sections
    this.state = {
      menuItems: []//api object items

    }
  }
  setPrice() {
    return Math.floor(Math.random() * 10) + 15;
  }
  async newMenu() {

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

    await this.setState({
      menuItems: results,
    });
  }

  //set local storage
  // if localStorage key = menu section this.props.item.name  
  async componentDidMount() {
    if (window.localStorage[this.props.item.name] != null) {
      let results = JSON.parse(window.localStorage.getItem(this.props.item.name)) || [];
      this.setState(
        { menuItems: results }
      );
    } else {
      this.newMenu();

    }

  }

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