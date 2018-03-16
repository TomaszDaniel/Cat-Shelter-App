import React from 'react';
import ReactDOM from 'react-dom';

var kitties = [
    {category: "male", age: "4", likesKids: true, name: "Fidel Catstro"},
    {category: "male", age: "9", likesKids: true, name: "Hairy Potter"},
    {category: "male", age: "2", likesKids: false, name: "Grumpy"},
    {category: "female", age: "1", likesKids: true, name: "Jude Paw"},
    {category: "female", age: "2", likesKids: false, name: "Lucifurr"},
    {category: "female", age: "3", likesKids: true, name: "Meowly Cyrus"}
];

class CatRow extends React.Component {
    render(){
        return      <div>
            catrow
        </div>
    }
}

class CatCategoryRow extends React.Component {
    render(){
        return      <div>
            catcategoryrow
        </div>
    }
}

class CatTable extends React.Component {
    render(){
        return      <div>
                        <CatCategoryRow/>
                        <CatRow/>
                    </div>
    }
}

class SearchBar extends React.Component {
    render(){
        return      <div>
                        serczbar
                    </div>
    }
}

class App extends React.Component {
    render(){
        return      <div>
                        <SearchBar />
                        <CatTable kitties={this.props.kitties}/>
                    </div>
    }
}

//Nie zmieniaj tego kodu poniżej!
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App kitties={kitties}/>,
        document.getElementById('app')
    );
});
