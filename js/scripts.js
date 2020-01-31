// back end 
function Pizza(size, toppings){
  this.size = size,
  this.toppings = toppings;
}


Pizza.prototype.addToCost = function(){
  var cost = 0;
    if(this.size === "small"){
      cost += 8;
    } else if(this.size === "medium"){
      cost += 10;
    } else if(this.size === "large"){
      cost += 12;
    } ;
    if(this.toppings === checked){
      cost += 1;
    }
    return cost;
};

Pizza.prototype.addTop = function(topping){
  this.toppings.push(topping);
}


// front end 

$(document).ready(function(){
  $("form#pizzaOrder").submit(function(event){
    event.preventDefault();

    var size = $("input:radio[name=size]:checked").val();
    var toppings = [];

    var finalPizza = new Pizza(inputSize, inputToppings);

    $("input:checkbox[name=toppings];checked").each(function(){
      var toppingsPicked = $(this).val();
      finalPizza.addTop(toppingsPicked)
    })
  });
  var finalPrice = finalPizza.addToCost();

  $("span.orderTotal").html(finalPrice)
});