import React, { Component } from 'react';
import './App.css';
import axios from "axios";

import HousingList from './components/HousingList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      housingList: []
    }
  }

  affordableUnitsEval(affordableUnits, totalUnits) {
    const aUnits = Number(affordableUnits);
    const tUnits = Number(totalUnits);
    if (aUnits <= tUnits) {
      return aUnits;
    } else {
      return 0;
    }
  }

  unitPercentageEvaluation(affordableUnits, totalUnits) {
    const aUnits = Number(affordableUnits);
    const tUnits = Number(totalUnits);
    if (aUnits > 0 && tUnits > 0) {
      return Math.round((aUnits / tUnits) * 100) + "%"; 
    } else {
      return "None";
    }
  }
  
  async componentDidMount() {
    // do an axios call to get top stories
    const response = await axios("https://data.sfgov.org/resource/9rdx-httc.json");
    const housingList = response.data;
    this.setState({ housingList })
  }

  render() {
    return (
      <div className="App">
        <HousingList
          affordableUnitsEval={this.affordableUnitsEval}
          unitPercentageEvaluation={this.unitPercentageEvaluation}
          listings={this.state.housingList} />
      </div>
    );
  }
}

export default App;
