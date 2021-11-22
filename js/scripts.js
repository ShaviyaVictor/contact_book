//    business logic contact constructor
function contact(first, last){
  this.firstName = first;
  this.lastName = last;
}

//    user interface logic
$(document).ready(function(){
  $("form#new-contact").submit(function(event){
    event.preventDefault();


  });
});