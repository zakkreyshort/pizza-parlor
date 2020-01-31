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
// console.log(cost) currently returning value selected
    if(this.toppings.includes("pepperoni")){
      cost += 1;
    };
    if(this.toppings.includes("extra cheese")){
      cost += 1;
    };
    if(this.toppings.includes("anchovies")){
      cost += 1;
    };
    if(this.toppings.includes("pineapple")){
      cost += 1;
    };    
  return cost;
};

// method to push toppings to an array (go through or display) 

Pizza.prototype.addTop = function(topping) {
  this.toppings.push(topping);
}

// front end 
$(document).ready(function() {
  $("#pizzaOrder").submit(function(){
    event.preventDefault();
    var selectedSize = $("input:radio[name=size]:checked").val();
    var selectedToppings = [];
    var finalPizza = new Pizza(selectedSize, selectedToppings);
    $("input:checkbox[name=toppings]:checked").each(function(){
      var toppingsPicked = $(this).val();
      finalPizza.addTop(toppingsPicked);
    });
    var finalPrice = finalPizza.addToCost();
    $("span.orderTotal").html(finalPrice);
  });
});
