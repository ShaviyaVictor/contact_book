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

  //    creating a variable that will capture the values to be declared for our different keys/parameters of the contact object
  let newContact = new contact(inputtedFirstName, inputtedLastName);

  //    jQuery appends the inputs provided in the form by adding a list and reffering to the object constructor
  $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");

  //    jQuery updates a blank input value upon adding the data
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  });
});