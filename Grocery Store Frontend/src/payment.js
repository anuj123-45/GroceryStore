import React from 'react';
import './payment.css';
const Payment=()=>{
return(
    
   
<>
<div style={{top:0,left:0}}>
   <button type="button" className="btn btn-primary">
   <a href='/gotohome' className="text-decoration-none text-dark">
            Home
          </a>
        </button>
   </div>
     

<div  className="loginbox">
	<img src="https://s3.ap-south-1.amazonaws.com/img1.creditmantri.com/community/article/which-hdfc-bank-credit-card-is-best-for-online-shopping.jpg" className="image1"/>
		<form action="thank you.html" method="post">
		  <p>Card Holder Name</p>
          <input type="text" name="" placeholder="Enter Name"   required="required"/>
            <p>CARD NUMBER</p>
		  <input type="number" name="" placeholder="Enter Card Number"  required="required"/>
          <p>CVV</p>
          <input type="number" name="" placeholder="Enter CVV"       required="required" />
         <p>Expiry Date</p>
          <input type="date" name="" placeholder="mm/yy"   required="required"/>
        
            <input type="submit" name="" value="Make Payment"/>		  
		</form>

    </div>










</>
    
);
}

export default Payment;