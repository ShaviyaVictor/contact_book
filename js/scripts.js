//    business logic contact constructor
function contact(first, last){
  this.firstName = first;
  this.lastName = last;
}

//    user interface logic
$(document).ready(function(){
  $("form#new-contact").submit(function(event){
    event.preventDefault();

  //    variables that will capture the inputted values of our form    
  let inputtedFirstName = $("input#new-first-name").val();
  let inputtedLastName = $("input#new-last-name").val();


  });
});