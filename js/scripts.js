// back end - create Pizza objec
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

// method for cost and size 

Pizza.prototype.addToCost = function() {
  var cost = 0;
    if(this.size === "small"){
      cost += 8;
    } else if(this.size === "medium"){
      cost += 10;
    } else if(this.size === "large"){
      cost += 12;
    } ;
console.log(cost)
  var cost2 = 0;
    if(this.toppings.includes("pepperoni", "extra cheese", "anchovies", "pineapple")){
      cost2 += 1;
    }
    return cost += cost2;
};

// method to push toppings to an array 

Pizza.prototype.addTop = function(topping) {
  this.toppings.push(topping);
}


// front end 

$(document).ready(function() {
  $("#pizzaOrder").submit(function(){
    event.preventDefault();

    var size = $("#choosePizzaSize").val();
    var toppings = [];

    var finalPizza = new Pizza(size, toppings);

    $("input:checkbox[name=toppings]:checked").each(function(){
      var toppingsPicked = $(this).val();
      finalPizza.addTop(toppingsPicked)
    });
    var finalPrice = finalPizza.addToCost();
    $("span.orderTotal").html(finalPrice);
  });

});