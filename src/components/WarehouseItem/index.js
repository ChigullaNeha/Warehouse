import {Link} from 'react-router-dom'

import './index.css'

const WarehouseItem = props => {
  const {warehouseDetails} = props
  const {name, cluster, city} = warehouseDetails
  return (
    <Link to="/details" className="list-item">
      <h1 className="heading">{name}</h1>
      <p className="para">{cluster}</p>
      <p className="para">{city}</p>
    </Link>
  )
}
export default WarehouseItem
