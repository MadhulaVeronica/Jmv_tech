
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Circle from './images/circle.png';
import Square from './images/square.png';
import Triangle from './images/triangle.png';
import Pentagon from './images/pentagon.png';
import Hexagon from './images/hexagon.png';




const Geometry=()=>{
  return(
    <>
    <h2 style={{marginLeft:'90px'}}>Geometrical Components</h2>
    <p style={{marginLeft:'90px'}}>Geometric Shapes can be defined as figure or area closed by a boundary which is created by combining the specific amount of curves, points, and lines.</p>
    <br>
    </br>
    <div className="container">
      <div className="row">
      <div className="col-md-2">
      <div class="card" style={{width:'150px',heigth:'150px'}}>
      <img src={Circle} height={150} width={150} />
  <div class="card-body">
    <center><p>Circle</p></center>
  </div>
</div>
</div>

{/*Card 2 */}
        
<div className="col-md-2">
      <div class="card" style={{width:'150px',heigth:'150px'}}>
      <img src={Square} height={150} width={150} />
  <div class="card-body">
    <center><p>Square</p></center>
  </div>
</div>
</div>

        {/*Card 3 */}
        <div className="col-md-2">
      <div class="card" style={{width:'150px',heigth:'150px'}}>
      <img src={Triangle} height={150} width={150} />
  <div class="card-body">
    <center><p>Triangle</p></center>
  </div>
</div>
</div>

        {/*Card 4 */}
        <div className="col-md-2">
      <div class="card" style={{width:'150px',heigth:'100px'}}>
      <img src={Pentagon} height={150} width={150} />
  <div class="card-body">
    <center><p>Pentagon</p></center>
  </div>
</div>
</div>

        {/*Card 5 */}
        <div className="col-md-2">
      <div class="card" style={{width:'150px',heigth:'100px'}}>
      <img src={Hexagon} height={150} width={150} />
  <div class="card-body">
    <center><p>Hexagon</p></center>
  </div>
</div>
</div>
      </div>
    </div>
    </>
  )
}

export default Geometry;

