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
  var cost2 = 0;
    if(this.toppings === "pepperoni"){
      cost2 + 1;
    } else if(this.toppings === "extra cheese"){
      cost2 + 1;
    } else if (this.toppings === "anchovies"){
      cost2 + 1;
    } else if (this.toppings === "pineapple"){
      cost2 + 1;
    };
  var finalCost = (cost += cost2);
  return finalCost;
};

// method to push toppings to an array 

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
