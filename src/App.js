import {Route, Switch} from 'react-router-dom'
import Warehouse from './components/Warehouse'
import WarehouseItem from './components/WarehouseItem'
import WarehouseDetailsPage from './components/WarehouseDetailsPage'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <div className="app-body">
        <Switch>
          <Route exact path="/" component={Warehouse} />
          <Route exact path="/details" component={WarehouseDetailsPage} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
