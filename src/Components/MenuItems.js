import React from 'react';
const axios =require('axios');


class MenuItems extends React.Component{
constructor(props){
super(props);

//Stored in State= menu items,prices 
this.state= {
    menuItems:  [],
    price: '',


}
}

async newMenu() {
let objItems = await axios.get('https://entree-f18.herokuapp.com/v1/menu')
 .then(function (response) {
    return response.data.menu_items; // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  this.setState({
    menuItems: objItems,
});
}
componentDidMount(){

this.newMenu();
console.log("the component did mount");
}

render (){

    let allItems= this.state.menuItems.map((item, idx) => {
    return <div key={idx}>{item.description}</div>

});
if (this.state.menuItems === 0 ){
    return null;
}else {
    return allItems;
}
}

}


export default MenuItems;