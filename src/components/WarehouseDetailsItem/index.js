import {Component} from 'react'
import './index.css'

class WarehouseDetailsItem extends Component {
  render() {
    const {details} = this.props
    const {name, city, spaceAvailable, code, type, cluster} = details
    return (
      <div className="details-container">
        <h1 className="el" contentEditable>
          {name}
        </h1>
        <p className="el" contentEditable>
          City: {city}
        </p>
        <p className="el" contentEditable>
          Type: {type}
        </p>
        <p className="el" contentEditable>
          Cluster: {cluster}
        </p>
        <p className="el" contentEditable>
          Code: {code}
        </p>
        <p className="el" contentEditable>
          SpaceAvailable: {spaceAvailable}
        </p>
        <hr />
      </div>
    )
  }
}

export default WarehouseDetailsItem
