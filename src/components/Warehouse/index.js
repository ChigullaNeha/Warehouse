import {Component} from 'react'
import WarehouseItem from '../WarehouseItem'
import WarehouseDetailsPage from '../WarehouseDetailsPage'
import './index.css'

const InitialWarehouseList = [
  {
    name: 'Warehouse-165',
    code: 'W-00001',
    id: 1,
    city: 'Delhi',
    spaceAvailable: 1234,
    type: 'Leasable Space',
    cluster: 'cluster-a-32',
    isRegistered: true,
    isLive: false,
  },
  {
    name: 'Warehouse-276',
    code: 'W-00002',
    id: 2,
    city: 'Chennai',
    spaceAvailable: 124,
    type: 'Warehouse Service',
    cluster: 'cluster-a-1',
    isRegistered: true,
    isLive: false,
  },
  {
    name: 'Warehouse-3039',
    code: 'W-00003',
    id: 3,
    city: 'Indore',
    spaceAvailable: 134,
    type: 'Warehouse Service',
    cluster: 'cluster-a-1',
    isRegistered: true,
    isLive: false,
  },
  {
    name: 'Warehouse-324',
    code: 'W-00004',
    id: 4,
    city: 'Chennai',
    spaceAvailable: 12,
    type: 'Leasable Space',
    cluster: 'cluster-a-21',
    isRegistered: true,
    isLive: false,
  },
  {
    name: 'Warehouse-5454',
    code: 'W-00005',
    id: 5,
    city: 'Chennai',
    spaceAvailable: 1243434,
    type: 'Warehouse Service',
    cluster: 'cluster-a-21',
    isRegistered: true,
    isLive: false,
  },
  {
    name: 'Warehouse-4345',
    code: 'W-00006',
    id: 6,
    city: 'Chennai',
    spaceAvailable: 1,
    type: 'Leasable Space',
    cluster: 'cluster-a-21',
    isRegistered: true,
    isLive: false,
  },
  {
    name: 'Warehouse-3455',
    code: 'W-00007',
    id: 7,
    city: 'Mumbai',
    spaceAvailable: 4,
    type: 'Leasable Space',
    cluster: 'cluster-a-2',
    isRegistered: true,
    isLive: false,
  },
  {
    name: 'Warehouse-23455',
    code: 'W-00008',
    id: 8,
    city: 'Bangalore',
    spaceAvailable: 3456,
    type: 'Warehouse Service',
    cluster: 'cluster-a-21',
    isRegistered: true,
    isLive: true,
  },
  {
    name: 'Warehouse-6457',
    code: 'W-00009',
    id: 9,
    city: 'Bangalore',
    spaceAvailable: 1234545,
    type: 'Warehouse Service',
    cluster: 'cluster-a-1',
    isRegistered: true,
    isLive: false,
  },
  {
    name: 'Warehouse-32456',
    code: 'W-000010',
    id: 10,
    city: 'Guwahati',
    spaceAvailable: 121234,
    type: 'Warehouse Service',
    cluster: 'cluster-a-1',
    isRegistered: true,
    isLive: true,
  },
  {
    name: 'Warehouse-3245678',
    code: 'W-000011',
    id: 11,
    city: 'Delhi',
    spaceAvailable: 98,
    type: 'Leasable Space',
    cluster: 'cluster-v-2',
    isRegistered: true,
    isLive: false,
  },
  {
    name: 'Warehouse-4567',
    code: 'W-000012',
    id: 12,
    city: 'Indore',
    spaceAvailable: 97,
    type: 'Warehouse Service',
    cluster: 'cluster-a-1',
    isRegistered: true,
    isLive: true,
  },
  {
    name: 'Warehouse-458',
    code: 'W-000013',
    id: 13,
    city: 'Delhi',
    spaceAvailable: 654,
    type: 'Leasable Space',
    cluster: 'cluster-a-1',
    isRegistered: true,
    isLive: false,
  },
]

class Warehouse extends Component {
  state = {wareHouseList: InitialWarehouseList, searchInput: ''}

  onchangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {wareHouseList, searchInput} = this.state
    const searchResults = wareHouseList.filter(
      eachItem =>
        eachItem.name.includes(searchInput) ||
        eachItem.city.includes(searchInput) ||
        eachItem.cluster.includes(searchInput),
    )
    return (
      <div className="first-container">
        <input
          type="search"
          value={searchInput}
          onChange={this.onchangeSearchInput}
          className="input-el"
          placeholder="Enter Text"
        />
        <div className="container">
          {searchResults.map(eachItem => (
            <WarehouseItem warehouseDetails={eachItem} key={eachItem.id} />
          ))}
        </div>
      </div>
    )
  }
}
export default Warehouse
