let drowdown_item = document.querySelector('.drop-down .nav-link');
let menu = document.querySelector('.dropdownmenu-small-screen');
let Main_menu = document.querySelector('.navbar-ul');
let close_menu = document.querySelector('.dropdownmenu-small-screen .backBtn');
let checkBox = document.querySelector('.checkbtn');

// menu button
checkBox.addEventListener('click',function(){

     let id =  document.getElementById('show-navbar-ul');
       if(id != null){
        Main_menu.removeAttribute('id','show-navbar-ul');
       }
       else {
         Main_menu.setAttribute('id','show-navbar-ul'); 

       }

  });

  // dropdown function
drowdown_item.addEventListener('click',function(){

   menu.style.display = 'block';

   Main_menu.removeAttribute('id','show-navbar-ul');
 
});

// close function
close_menu.addEventListener('click',function(){

    menu.style.display = 'none';

     Main_menu.setAttribute('id','show-navbar-ul');

 });


 //inner width capture function 
window.onresize = function() {
           
   let broswerWidth = window.innerWidth; 

if(broswerWidth > 1050 && broswerWidth < 1180 ){
    menu.style.display = 'none';
    Main_menu.setAttribute('id','show-navbar-ul');
 }
 
};
