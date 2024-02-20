


   
   
const allButton = document.getElementsByClassName('seat-button');
 let ticketPurchased = 0 ;
 let totalCost = 0 ;
 let grandTotal = 0 ;
for(const button of allButton){
    button.addEventListener('click' , function(event){
        if(ticketPurchased >= 4){
            alert('Cannot Buy Extra Ticket');
            return;
        }
         button.classList.remove('bg-gray-100','text-black');
         button.classList.add('bg-green-600','text-white') ; 
         button.disabled = true ;
         let reserved = parseInt(document.getElementById('reserved').innerText);
         if(reserved>0){
             reserved--;
             ticketPurchased++;
             totalCost = totalCost + 550 ; 
             grandTotal =grandTotal + 550 ;
             document.getElementById('grand-total').innerText = grandTotal ;
             document.getElementById('total-cost').innerText = totalCost;
             document.getElementById('seat-selected').innerText = ticketPurchased;
             document.getElementById("reserved").innerText = reserved ;
             let ticketName = button.innerText;
            let ticketContainer = document.getElementById('ticket-container');
            ticketContainer.insertAdjacentHTML('beforeend', `<div class="flex justify-between">
            <h3>${ticketName}</h3>
            <h3>Economy</h3>
            <h3>550</h3>
       </div>`);
       }
    } )
}



function  applyCoupon(){
    if(ticketPurchased < 4){
        alert('Buy One More');
        return;
    }
    const cuponCode = document.getElementById('cuponInput').value ;
    if(cuponCode === "NEW15"){
        const discountValue = grandTotal * 0.15 ;
        const grandTotal2 = grandTotal - (grandTotal * 0.15);
 
        document.getElementById('grand-total').innerText = grandTotal2 ;
        document.getElementById('cuponSection').classList.add('hidden');
        document.querySelector('#discount-show').classList.remove('hidden');
        document.getElementById('discount').innerText = discountValue;
    }else if(cuponCode === "Couple 20"){
        const discountValue = grandTotal * 0.2 ;
        const grandTotal2 = grandTotal - (grandTotal * 0.2);
        document.getElementById('grand-total').innerText = grandTotal2 ;
        document.getElementById('cuponSection').classList.add('hidden');
        document.querySelector('#discount-show').classList.remove('hidden');
        document.getElementById('discount').innerText = discountValue;
    }
    else{
        alert('invalid coupon')
    }
}


   
    
function xyz(){
    let phnNumber = document.getElementById('number').value;
    console.log(phnNumber)
    if(ticketPurchased < 1 && phnNumber === ""){
        alert('Minimum 1 ticket purchase and must provide your phone number');
        return;
    }
                        document.getElementById('popup').classList.toggle('hidden')
}

setInterval(() => {
    let phnNumber = document.getElementById('number').value;
}, 1000);

  
