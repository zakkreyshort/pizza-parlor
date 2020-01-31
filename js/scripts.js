// back end 
function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
};

Pizza.prototype.addTopping = function(topping){
  this.toppings.push(topping);
};

Pizza.prototype.addToCost = function(){
  var cost;
    if(this.size === 8){
      cost = 8;
    } else if(this.size === 10){
      cost = 10;
    } else if(this.size === 12){
      cost = 12;
    } ;
    // ??for loop going through each checkbox value for toppings??
    for(var top = 0; top < this.toppings.length; i++){
      var toppingAdd = ["peperoni", "extra cheese", "anchovies", "pineapple"]
      if (toppingAdd.includes(this.toppings[i])){
      cost += 1;
      };
  };
  return cost;
};


// user interface 

var showMyTotal = function(Pizza){
  var priceTotal = Pizza.addToCost();
  $("span#orderTotal").html(priceTotal)
};


// front end 

$(document).ready(function(){
  $("#completeOrder").submit(function(event){
    event.preventDefault();

    var size = $("input:radio[name=size]:checked").val();
    var toppings = [];
    var yourPizza = new Pizza(size, toppings);
    $("input:checkbox[name=toppings]:checked").each(function() {
    var checkTopping = $(this).val();
    yourPizza.selectTopping(checkTopping);
    });
    showMyTotal(checkTopping);
  });
});