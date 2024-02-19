

// create first look 
// function firstLook(){
//      const firstLook = document.getElementById('first-look');
//      firstLook.classList.add('hidden');
//      // show second look
//      const secondLook = document.getElementById('second-look');
//     secondLook.classList.remove('hidden');
// }

// function selectbutton(){
//     const nonSelectedSeAt = document.querySelectorAll('seat-button');
//     console.log(nonSelectedSeAt)
// }

// const allButton = document.getElementsByClassName('seat-button');
//  let ticketPurchased = 0 ;
// for(const button of allButton){
//     button.addEventListener('click' , function(event){
//          button.classList.remove('bg-gray-100','text-black');
//          button.classList.add('bg-green-600','text-white') ; 
//         if(ticketPurchased >= 4){
//             alert('Cannot Buy Extra Ticket');
//         }else{
//             let reserved = parseInt(document.getElementById('reserved').innerText);
//             if(reserved>0){
//                 reserved--;
//                 ticketPurchased++;
//                 document.getElementById('seat-selected').innerText = ticketPurchased;
//                 document.getElementById("reserved").innerText = reserved ;
//             }
//         }
//     } )
// }
   
   
const allButton = document.getElementsByClassName('seat-button');
 let ticketPurchased = 0 ;
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




     
      

    
  
