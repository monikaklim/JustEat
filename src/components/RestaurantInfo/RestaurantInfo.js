import React from  'react';
import  './RestaurantInfo.module.css';
import Navbar from '../Navbar/Navbar';
import Logo from "./logo.jpg";
const restaurantInfo = () =>(

<div>
<Navbar/>
<div className = "RestaurantInfo">


<h1>Il Panino di Zio Frank </h1>

<div className = "LogoRestaurant">
<img src = {Logo} alt = "Logo ristorante" />

<p><i className="material-icons">place</i>  Corso Francesco Ferrucci, 44/C, <br/>
Torino, 10138  </p>

</div>



<table className = "OrariApertura">
<th></th>
<th>Orari di apertura</th>
<tr>
    <td> Lunedì </td>
    <td>12:00 - 23:30 </td>
</tr>

<tr>
    <td> Martedì </td>
    <td>12:00 - 23:30 </td>
</tr>

<tr>
    <td> Mercoledì</td>
    <td>12:00 - 23:30 </td>
</tr>

<tr>
    <td>Giovedì </td>
    <td> 12:00 - 23:30</td>
</tr>

<tr>
    <td> Venerdì</td>
    <td>12:00 - 23:30 </td>
</tr>

<tr>
    <td>Sabato </td>
    <td> 12:00 - 23:30</td>
</tr>

<tr>
    <td> Domenica</td>
    <td>12:00 - 23:30 </td>
</tr>

</table>
<hr/>

<div className = "InfoPayment">
<p><i className="material-icons">restaurant </i>  Costo di consegna: € 2,90 <br/>
Minimo € 13 per la consegna </p>

<table>
<tr>
    <td> <i className="fa fa-money"></i></td>
    <td>Contanti</td>
</tr>

<tr>
    <td> <i className="fa fa-credit-card"></i> </td>
    <td>Carta</td>
</tr>

<tr>
    <td> <i className="fa fa-paypal"></i></td>
    <td>Paypal</td>
</tr>

</table>


<b>Il ristorante non accetta i buoni pasto.</b>
<br/>
</div>


</div>


</div>

);
export default restaurantInfo;