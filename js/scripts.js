// back end 
function Pizza(size, toppings){
  this.size = size,
  this.toppings = toppings
}

Pizza.prototype.addTopping = function(){
  this.toppings.push();
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
    for(var i = 0; i < this.toppings; i++){
      var toppingAdd = ["pepperoni", "extra cheese", "anchovies", "pineapple"]
      if (toppingAdd.includes(this.toppings[i])){
      cost += 1;
      }; 
  };
  return cost;
};


// front end 

$(document).ready(function(){
  $("#completeOrder").submit(function(event){
    event.preventDefault();
    var size = $("input:radio[name=size]:checked").val();
    var toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
    var checkTopping = $(this).val();
      toppings.push(checkTopping);
      toppings.push(size);
    }); 
  });
});