import React from 'react'
import { Link } from 'react-router'
import HomeItem from './HomeItem'


class FarmingHome extends React.Component {
    constructor(props) {
        super(props)
        this.addFarmingHome = this.addFarmingHome.bind(this)
        this.state = {
          farmingPatches: []
        }
      }
  componentDidMount() {
    this.addFarmingHome()
        }
  addFarmingHome() {
        fetch('/api/filter?filter[category_name_eq]=Farming')
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(response => this.setState({farmingPatches: response}))
        }

    render(){
      var sampleSize = this.state.farmingPatches.slice(0,3)
      var items = sampleSize.map((data, i) => {
        return <HomeItem data={data} key={i} />

          })
          return <div>
              <div className="col-sm-3">
                <h1 className="headerText">Farming</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            {items}
        </div>
    }
  }
  export default FarmingHome
