// back end 
function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
}

// think this is redundant since we only select one size 
Pizza.prototype.selectSize = function(size){
  this.size.push(size);
}

// push topping to eventual array to add all toppings 
Pizza.prototype.selectTopping = function(topping){
  this.toppings.push(topping);
}


function addToCost(){
  var cost;
    if(size === "8"){
      cost = 8,
    } else if(size === "10"){
      cost = 10,
    } else if(size === "12"){
      cost = 12,
    } 
    // ??for loop going through each checkbox value for toppings??
    
  }




// user interface 





// front end 

$(document).ready(function(){
  $("#completeOrder").submit(function(event){
    event.preventDefault();
    var size = $("input:radio[name=size]:checked").val();
    var toppings = [];
    var yourPizza = new Pizza(size, toppings)
    $("input:checkbox[name=toppings]:checked").each(function() {
    var checkTopping = $(this).val();
    yourPizza.selectTopping(checkTopping);
    });

    // display pizza total somewhere 
  })
})