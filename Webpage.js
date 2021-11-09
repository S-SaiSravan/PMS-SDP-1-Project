import './routing.css'
import Home from './Home'
import Aboutus from './Aboutus'
import Services from './Services'
import Contactus from './Contactus'
import Results from './Results'
import Login from './Login'
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'


const Webpage = () =>(
  
<BrowserRouter>
<div className="pms">
<section>

<ul>

<Link className="lk" to="/">
<li> Home</li></Link>

<Link to="/aboutus">
<li>Who we are</li></Link>

<Link to="/services">
<li>What we do</li></Link>
<Link to="/contact">
<li>Contact</li></Link>
<Link to="/results">
<li>Results</li>
</Link>

<div class="alignleft">          
<Link to="/login">

<li>Login / Sign Up</li>
</Link>
</div>
    </ul>
    <Switch>
<Route path="/" component={Home} exact/>
       <Route path="/aboutus" component={Aboutus} exact/>
       <Route path="/services" component={Services} exact/>
       <Route path="/contact" component={Contactus} exact/>
       <Route path="/results" component={Results} exact/>
       <Route path="/login" component={Login} exact/>
       </Switch>
       </section>
       </div>
</BrowserRouter>
);
export default Webpage;