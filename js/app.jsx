import React from 'react';
import ReactDOM from 'react-dom';

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
                        <CatTable />
                    </div>
    }
}

//Nie zmieniaj tego kodu poniżej!
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
