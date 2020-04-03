import React from 'react';
import MenuItems from './MenuItems.js'

class MenuSections extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
    this.sections = [ //create sections array that stores object date property/value
      {
        name: "Appetizers",
        selections: 8,
       
      },
      {
        name: "Lunch",
        selections: 10,
      
      },
      {
        name: "Dinner",
        selections: 15,
    
      },
      {
        name: "Sides",
        selections: 8,
       
      },
      {
        name: "Deserts",
        selections: 10,
        price: {setPrice() {
          return Math.floor( Math.random() * 10) + 15;}
        }
      }
    ]


  }


  /* I want map over the sections to place the section title  {this.sections.name} in the div class 
  "card-header" and map over the menuItems from MenuItems.js {new items} ? {this.sections.selections } 
  and price {this.state.sections.price} to place them each inside of a "list-group-item
  not sure how to get section selections in play."*/
  render() {
    
    return (
      <React.Fragment>
      {this.sections.map((item, index) => {
        return <MenuItems item={item} key={index}/>
        console.log({index})
      })}</React.Fragment>
     
    );
  }
}





export default MenuSections;