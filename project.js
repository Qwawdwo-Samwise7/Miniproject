function myFuction(){
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')){
        var dropdowns = document.getElementsByIdClassName("dropdowm-content");
        for (var i = 0; i < dropdowns.length; i++) {
         var openDropdown = dropdowns[i];
         if(openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
         }
        }
    }
}