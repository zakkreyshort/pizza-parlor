// back end - create Pizza objec
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.cost = 0;
}

// method for cost and size 

Pizza.prototype.addToCost = function() {
    if(this.size === "small"){
      this.cost += 8;
    } else if(this.size === "medium"){
      this.cost += 10;
    } else if(this.size === "large"){
      this.cost += 12;
    } ;
// console.log(this.cost) currently returning value selected
    if(this.toppings.includes("pepperoni")){
      this.cost += 1;
    };
    if(this.toppings.includes("extra cheese")){
      this.cost += 1;
    };
    if(this.toppings.includes("anchovies")){
      this.cost += 1;
    };
    if(this.toppings.includes("pineapple")){
      this.cost += 1;
    };    
  return this.cost;
};


Pizza.prototype.addTop = function(topping) {
  this.toppings.push(topping);
}

// front end 
$(document).ready(function() {

// takeout or delivery 
  $("#deliveryBtn").click(function(event){
    event.preventDefault();
    alert("Delivery is currently unavailable! Please check back soon:)")
  });
  $("#takeoutBtn").click(function(event){
    event.preventDefault();
    $("#pizzaParlor").show();
    $("#welcomeScreen").hide();
  })

// pizza order form 
  $("#pizzaOrder").submit(function(){
    event.preventDefault();
    var selectedSize = $("input:radio[name=size]:checked").val();
    var selectedToppings = [];
    var finalPizza = new Pizza(selectedSize, selectedToppings);
    $("input:checkbox[name=toppings]:checked").each(function(){
      var toppingsPicked = $(this).val();
      finalPizza.addTop(toppingsPicked);
    });
    $("span.orderTotal").html(finalPizza.addToCost());
  });

  // thank you form 
});
