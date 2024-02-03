
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pie from './images/pie.png';
import Bar from './images/bar.png';
import Histogram from './images/histogram.png';
import Line from './images/line.jpg';
import Scatter from './images/scatter.png';
import Sub from './images/subplot.png';
import Grid from './images/grid.png';
import Lreg from './images/lreg.png';
import Preg from './images/preg.png';
import Cm from './images/cm.png';
import Roc from './images/roc.png';
import Line1 from './images/line1.png';
import Pie2 from './images/pie2.jpg';
import Bar2 from './images/bar2.png';



const Stats=()=>{
  return(
    <>
    <h2 style={{marginLeft:'90px'}}>Statistical Components</h2>
    <p style={{marginLeft:'90px'}}>A statistical representation of data is a graphical way of representing data in statistics</p>
    <br>
    </br>
    {/*Row 1*/}
    {/*Card 1*/}
    <div className="container">
      <div className="row">
      <div className="col-md-2">
      <div class="card" style={{width:'150px',heigth:'150px'}}>
      <img src={Pie} height={150} width={150} />
  <div class="card-body">
    <center><p>PieChart</p></center>
  </div>
</div>
</div>

{/*Card 2 */}
        
<div className="col-md-2">
      <div class="card" style={{width:'150px',heigth:'150px'}}>
      <img src={Bar} height={150} width={145} />
  <div class="card-body">
    <center><p>BarChart</p></center>
  </div>
</div>
</div>

        {/*Card 3 */}
        <div className="col-md-2">
      <div class="card" style={{width:'150px',heigth:'150px'}}>
      <img src={Histogram} height={150} width={148} />
  <div class="card-body">
    <center><p>Histogram</p></center>
  </div>
</div>
</div>

        {/*Card 4 */}
        <div className="col-md-2">
      <div class="card" style={{width:'150px',heigth:'100px'}}>
      <img src={Line} height={150} width={147} />
  <div class="card-body">
    <center><p>LineChart</p></center>
  </div>
</div>
</div>

        {/*Card 5 */}
        <div className="col-md-2">
      <div class="card" style={{width:'150px',heigth:'100px'}}>
      <img src={Scatter} height={150} width={140} />
  <div class="card-body">
    <center><p>Scatter</p></center>
  </div>
</div>
</div>

 {/*Card 6 */}
 <div className="col-md-2">
      <div class="card" style={{width:'150px',heigth:'100px'}}>
      <img src={Sub} height={150} width={148} />
  <div class="card-body">
    <center><p>SubPlot</p></center>
  </div>
</div>
</div>
      </div>
    </div>
<br>
</br>
    {/*Row 2*/}
    {/*Card 1*/}
    <div className="container">
      <div className="row">
      <div className="col-md-2">
      <div class="card" style={{width:'150px',heigth:'150px'}}>
      <img src={Grid} height={150} width={145} />
  <div class="card-body">
    <center><p>GridPlot</p></center>
  </div>
</div>
</div>

{/*Card 2*/}
      <div className="col-md-2">
      <div class="card" style={{width:'150px',heigth:'150px'}}>
      <img src={Lreg} height={150} width={145} />
  <div class="card-body">
    <center><p>Linear Regression</p></center>
  </div>
</div>
</div>

{/*Card 3*/}
<div className="col-md-2">
      <div class="card" style={{width:'150px',heigth:'150px'}}>
      <img src={Preg} height={150} width={145} />
  <div class="card-body">
    <center><p>Polynomial Regression</p></center>
  </div>
</div>
</div>

{/*Card 4*/}
<div className="col-md-2">
      <div class="card" style={{width:'150px',heigth:'150px'}}>
      <img src={Cm} height={150} width={145} />
  <div class="card-body">
    <center><p>Confusion Matrix</p></center>
  </div>
</div>
</div>


{/*Card 5*/}
<div className="col-md-2">
      <div class="card" style={{width:'150px',heigth:'150px'}}>
      <img src={Roc} height={150} width={145} />
  <div class="card-body">
    <center><p>ROC Curve</p></center>
  </div>
</div>
</div>
{/*Card 6*/}
<div className="col-md-2">
      <div class="card" style={{width:'150px',heigth:'150px'}}>
      <img src={Line1} height={150} width={145} />
  <div class="card-body">
    <center><p>2D Line Graph</p></center>
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
      <img src={Pie2} height={150} width={140} />
  <div class="card-body">
    <center><p>2D-PieChart</p></center>
  </div>
</div>
</div>


{/*Card 2*/}
      <div className="col-md-2">
      <div class="card" style={{width:'150px',heigth:'150px'}}>
      <img src={Bar2} height={150} width={140} />
  <div class="card-body">
    <center><p>2D-BarChart</p></center>
  </div>
</div>
</div>
</div>
</div>    



</>

)
}

export default Stats;

