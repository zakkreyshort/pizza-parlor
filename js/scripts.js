// back end 
function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.selectTopping = function(topping){
  this.topping.push(this.toppings)
}


function addToCost(){
  var cost;
    if(size === 8){
      size += cost;
      this.totalCost.push(cost);
    } else if(size === 10){
      size += cost;
      this.totalCost.push(cost);
    } else if(size === 12){
      size += cost;
      this.totalCost.push(cost);
    } else{
      alert("Please choose a size")
    }
  }
}



// user interface 

var pizza = new Pizza();

function newOrder (totalCost){
  var customer = new Pizza (totalCost);
  Pizza.totalCost(customer);
  return customer;
}

function displayTotal (){
  $("span#orderTotal").text("$" + this.totalCost);
}

// front end 

$(document).ready(function(){
  $("button#completeOrder").submit(function(event){
    event.preventDefault();
    var size = $("input:radio[name=size]:checked").val();
    var toppings = [];
    var yourPizza = new Pizza(size, toppings)
    $("input:checkbox[name=toppings]:checked").each(function() {
      var checkTopping = $(this).val();
      yourPizza.addTopping(checkTopping);
    });

  })
})