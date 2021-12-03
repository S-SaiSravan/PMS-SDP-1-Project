import SaiShravan from './SaiShravan';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import SeethaRamaRaju from './SeethaRamaRaju';
import Sathvik from './Sathvik';
import './info.css'
const Webpage = () =>(
  
<BrowserRouter>
<div className="pms">
<section>

<ul>
    <Link to="/SaiShravan">
<li>Sravan</li>
</Link>
<Link to="/SeethaRamaRaju">
<li>Seetha Rama Raju</li>
</Link>
<Link to="/Sathvik">
<li>Shanmugha Sathvik</li>
</Link>

    </ul>
    <Switch>
    <Route path="/SaiShravan"   component={SaiShravan} exact/>
    <Route path="/SeethaRamaRaju"   component={SeethaRamaRaju} exact/>
    <Route path="/Sathvik"   component={Sathvik} exact/>
       </Switch>
       </section>
       </div>
       <img className="kl" src="kl_university.jpg"/>
       <div className="box1">
    <div className="b1content">
    <marquee className="marquee1" width="60%" direction="right" height="40px">
    <b>DataBase Management System</b>
</marquee>
   <h1>DBMS</h1> 

   <p><b>“Marketing involves the design of the products acceptable to the consumers and the conduct of those activities which facilitate the transfer of ownership between seller and buyer.”</b></p>
   <p> Working with major companies, brands</p>
   <button className="button1">Find out More</button>
   </div>
  </div>
  <div className="box2">
    <div className="b2content">
    <marquee className="marquee2" width="60%" direction="right" height="40px">
    <b>Elements of Software Construction</b>
</marquee>
   <h1> ESC</h1> 

   <p><b>“Marketing involves the design of the products acceptable to the consumers and the conduct of those activities which facilitate the transfer of ownership between seller and buyer.”</b></p>
   <p> Working with major companies, brands</p>
   <button className="button2">Find out More</button>
   </div>
  </div>
  <div className="box3">
    <div className="b3content">
    <marquee className="marquee3" width="60%" direction="right" height="40px">
    <b>Mathematical Programming-1</b>
</marquee>
   <h1>MP-1</h1> 

   <p><b>“Marketing involves the design of the products acceptable to the consumers and the conduct of those activities which facilitate the transfer of ownership between seller and buyer.”</b></p>
   <p> Working with major companies, brands</p>
   <button className="button3">Find out More</button>
   </div>
  </div>
</BrowserRouter>

);
export default Webpage;