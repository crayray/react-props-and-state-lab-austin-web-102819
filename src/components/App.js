import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onFindPetsClick = () => {
    this.getPets();
  }

  getPets = async () => {
    const apiUrl =
    this.state.filters.type === "all"
      ? "/api/pets"
      : `/api/pets?type=${this.state.filters.type}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    });
  }
 

  onChangeType = ( { target: { value } }) => {
    this.setState({
      filters:{
        ...this.state.filters,
        type: value

      }
    }); 
   
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
                onChangeType={this.onChangeType}
                onFindPetsClick= {this.onFindPetsClick}

              />
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
