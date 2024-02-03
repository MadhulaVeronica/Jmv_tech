
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './images/add.png';
import Sub from './images/sub.png';
import Mul from './images/mul.png';
import Div from './images/div.png';
import Mod from './images/mod.png';
import Eq from './images/eq.png';
import Ieq from './images/Ieq.png';
import Appr from './images/appr.png';
import Plus from './images/plus.png';
import Greater from './images/greater.png';
import Lesser from './images/lesser.png';
import Inf from './images/inf.png';
import Fact from './images/fact.png';
import Percent from './images/percent.png';
import Emp from './images/emp.png';
import Pi from './images/pi.png';



const Operations=()=>{
  return(
    <>
    <h2 style={{marginLeft:'90px'}}>Extra Components</h2>
    <p style={{marginLeft:'90px'}}>The mathematical “operation” refers to calculating a value using operands and a math operator. </p>
    <br>
    </br>
    {/*Row 1*/}
    {/*Card 1*/}
    <div className="container">
      <div className="row">
      <div className="col-md-2">
      <div class="card" style={{width:'150px',heigth:'150px'}}>
      <img src={Add} height={150} width={148} />
  <div class="card-body">
    <center><p>Addition</p></center>
  </div>
</div>
</div>

{/*Card 2 */}
        
<div className="col-md-2">
      <div class="card" style={{width:'150px',heigth:'150px'}}>
      <img src={Sub} height={150} width={147} />
  <div class="card-body">
    <center><p>Subtraction</p></center>
  </div>
</div>
</div>

        {/*Card 3 */}
        <div className="col-md-2">
      <div class="card" style={{width:'150px',heigth:'150px'}}>
      <img src={Mul} height={150} width={146} />
  <div class="card-body">
    <center><p>Multiply</p></center>
  </div>
</div>
</div>

        {/*Card 4 */}
        <div className="col-md-2">
      <div class="card" style={{width:'150px',heigth:'100px'}}>
      <img src={Div} height={150} width={148} />
  <div class="card-body">
    <center><p>Division</p></center>
  </div>
</div>
</div>

        {/*Card 5 */}
        <div className="col-md-2">
      <div class="card" style={{width:'150px',heigth:'100px'}}>
      <img src={Mod} height={150} width={148} />
  <div class="card-body">
    <center><p>Modulus</p></center>
  </div>
</div>
</div>

{/*Card 6 */}
<div className="col-md-2">
      <div class="card" style={{width:'150px',heigth:'100px'}}>
      <img src={Eq} height={150} width={148} />
  <div class="card-body">
    <center><p>Equalily</p></center>
  </div>
</div>
</div>
      </div>
    </div>
<br>
</br>
{/*Row2*/}
 {/*Card 1 */}
    <div className="container">
      <div className="row">
      <div className="col-md-2">
      <div class="card" style={{width:'150px',heigth:'150px'}}>
      <img src={Ieq} height={150} width={148} />
  <div class="card-body">
    <center><p>Inequality</p></center>
  </div>
</div>
</div>

{/*Card 2 */}

      <div className="col-md-2">
      <div class="card" style={{width:'150px',heigth:'150px'}}>
      <img src={Appr} height={150} width={148} />
  <div class="card-body">
    <center><p>Approximation</p></center>
  </div>
</div>
</div>


{/*Card 3 */}

<div className="col-md-2">
      <div class="card" style={{width:'150px',heigth:'150px'}}>
      <img src={Plus} height={150} width={148} />
  <div class="card-body">
    <center><p>Plus or Minus</p></center>
  </div>
</div>
</div>

{/*Card 4 */}

<div className="col-md-2">
      <div class="card" style={{width:'150px',heigth:'150px'}}>
      <img src={Greater} height={150} width={150} />
  <div class="card-body">
    <center><p>Greater than</p></center>
  </div>
</div>
</div>



{/*Card 5 */}

<div className="col-md-2">
      <div class="card" style={{width:'150px',heigth:'150px'}}>
      <img src={Lesser} height={150} width={150} />
  <div class="card-body">
    <center><p>Lesser than</p></center>
  </div>
</div>
</div>

{/*Card 6 */}

<div className="col-md-2">
      <div class="card" style={{width:'150px',heigth:'150px'}}>
      <img src={Inf} height={150} width={150} />
  <div class="card-body">
    <center><p>Infinity</p></center>
  </div>
</div>
</div>
</div>
</div>
<br>
</br>

{/*Row 3*/}
    {/*Card 1*/}
    <div className="container">
      <div className="row">
      <div className="col-md-2">
      <div class="card" style={{width:'150px',heigth:'150px'}}>
      <img src={Fact} height={150} width={148} />
  <div class="card-body">
    <center><p>Factorial</p></center>
  </div>
</div>
</div>

{/*Card 2*/}

      <div className="col-md-2">
      <div class="card" style={{width:'150px',heigth:'150px'}}>
      <img src={Percent} height={150} width={148} />
  <div class="card-body">
    <center><p>Percentage</p></center>
  </div>
</div>
</div>


{/*Card 3*/}

<div className="col-md-2">
      <div class="card" style={{width:'150px',heigth:'150px'}}>
      <img src={Emp} height={150} width={148} />
  <div class="card-body">
    <center><p>Empty set</p></center>
  </div>
</div>
</div>

{/*Card 4*/}

<div className="col-md-2">
      <div class="card" style={{width:'150px',heigth:'150px'}}>
      <img src={Pi} height={150} width={148} />
  <div class="card-body">
    <center><p>Pi</p></center>
  </div>
</div>
</div>

</div>
</div>

    </>
  )
}

export default Operations;

