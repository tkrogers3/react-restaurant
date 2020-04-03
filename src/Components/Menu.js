import React from 'react';
import './Menu.css';

class Menu extends React.Component {
    constructor(props) {
        super(props)
    }


  /* I want map over the sections to place the section title in the div class "card-header"
   and I want to map over the menuItems to place them each inside of a "list-group-item"
   I also want to set a function that takes a random price and appends it at the end of the 
   list group item. */
    render() {
        return (
<div className="card" styleType="width: 18rem;"> 
  <div className="card-header "  id="sectionTitle">  
  <h3>Appetizers</h3> 
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Crab Cakes -$3</li>
  </ul>
</div>
  
        )
    }
}

export default Menu;