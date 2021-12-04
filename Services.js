import React from 'react'
import './sevices.css'
import ReactDOM from 'react-dom';
import { colors } from '@material-ui/core';
export default function Services(){


    return <div className="bgg">
     <div style={{textAlign:"left"}}>
        <h2 style={{color:"white"}}>The Services We provide are:</h2>
        <div>
        <p style={{color:"white"}}>We Conduct surveys , analyse products , provide our clients with pricing strategies .
We do promotions , Takes care of deployment process .</p>
<p style={{color:"white"}}>
Take feedback from consumers and even help in developing the product and overcoming the issues if any .</p>
<h1 style={{color:"white"}}>Business Requirements:</h1>
    <ul className="ullist">
        <li className="list"> Define the target population</li>
        <li className="list"> Test your audience </li>
        <li className="list"> Consider marketing strategies</li>
        <li className="list"> Evaluate those strategies </li>

</ul>
<h1 style={{color:"white"}}>Our Marketing Strategies include: </h1>
<ul className="ullist">
    <li className="list">•Business to business (B2B) marketing
	
</li>
    <li className="list">•Business to consumer (B2C) marketing</li>
</ul>
<h1 style={{color:"white"}}>Following are the different types of marketing strategies available for our clients:</h1>
<ul className="ullist">
    <li className="list">Paid advertising </li>
<li className="list"> Cause marketing</li>
<li className="list"> Relationship marketing</li>
<li className="list"> Undercover marketing</li>
<li className="list"> Word of mouth</li>
<li className="list"> Internet marketing</li>
<li className="list"> Transactional marketing</li>
<li className="list"> Diversity marketing</li>

</ul>


        </div>
    </div>
    </div>
}