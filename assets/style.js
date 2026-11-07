function TourHoliday(event){
    event.preventDefault();
    document.getElementById('package_error').innerHTML = "";
    document.getElementById('no_child_error').innerHTML = "";
    document.getElementById('child_amount_error').innerHTML = "";
    document.getElementById('pax_no_error').innerHTML = "";
    document.getElementById('pax_amount_error').innerHTML = "";
    document.getElementById('days_error').innerHTML = "";

    let package_name=document.getElementById('package_name').value;
    let no_child=document.getElementById('no_child').value;
    let amount_each_child=document.getElementById('amount_each_child').value;
    let pax_no=document.getElementById('pax_no').value;
    let pax_amount=document.getElementById('pax_amount').value;
    let days=document.getElementById('days').value;

    let hasError= false;

    if(!package_name || package_name === "Select Package"){
        document.getElementById('package_error').innerHTML="please select package name.";
        hasError= true;
    }

    if(!no_child){
        document.getElementById('no_child_error').innerHTML="enter no. child.";
        hasError= true;
    }
    if(!amount_each_child){
        document.getElementById('child_amount_error').innerHTML="<br/> enter each child amount.";
        hasError= true;
    }
    if(!pax_no){
        document.getElementById('pax_no_error').innerHTML="enter pax no.";
        hasError= true;
    }
    if(!pax_amount){
        document.getElementById('pax_amount_error').innerHTML="<br/> enter pax amount.";
        hasError= true;
    }    
    if(!days){
        document.getElementById('days_error').innerHTML="please select days.";
       hasError= true;
    }
    if(hasError){
        return false;
    }

    let no_child_total=no_child*amount_each_child;
    let pax_no_total =pax_no*pax_amount;
    let total_amount=no_child_total+pax_no_total;

    document.getElementById('no_child_total').innerHTML=no_child_total;
    document.getElementById('pax_no_total').innerHTML=pax_no_total;
    document.getElementById('total_amount').innerHTML=total_amount;
    document.getElementById('thanks').innerHTML="Thanks for choose us.";

    return false;

}
//  const salesCustomer={
//         customername:"tony",
//         customeremail:"abcd@gmail.com",
//         customerGender:"male",
//         saleDate:'15-01-2005',
//         customeramount:10000,
//         customerplace:'jaipur',
//         amountDepositTime:'12:01 pm'
//     };
//     console.log(salesCustomer);
//     const salesCust= new Object();
//     salesCust.customername="rohan";
//     console.log(salesCust);

//     alert(salesCustomer.Code);