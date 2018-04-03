import {About} from './components/pages/About';
import {Form} from './components/pages/Form';
import {AddCard} from './components/pages/AddCard';
import Scan from './components/pages/Scan.jsx';
import {Garson} from './components/pages/Garson.jsx'
import OrderPage from "./components/pages/Order.jsx";
import Menu from "./components/pages/Menu.jsx";
import OrderPageStuff from "./components/pages/OrderStuff.jsx";
import RatingPage from "./components/pages/Rating.jsx";
import ThanksPage from "./components/pages/Thanks.jsx";


export const routes = [{
    path: '/about/',
    component: About
}, {
    path: '/form/',
    component: Form
}, {
  path: '/add-card/',
  component: AddCard
}, {
  path: '/scan/',
  component: Scan
}, {
  path: '/garson/',
  component: Garson
}, {
  path: '/order/',
  component: OrderPage
}, {
  path: '/rating/',
  component: RatingPage
}, {
  path: '/thx/',
  component: ThanksPage
},
  {
    path: '/order-stuff/',
    component: OrderPageStuff
  },
  {
    path: '/menu/',
    component: Menu
  }];