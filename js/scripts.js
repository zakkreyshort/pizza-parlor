// back end 
function Pizza(size, toppings, cost, totalCost){
  this.size = size;
  this.toppings = toppings;
  this.cost = cost
  this.totalCost = [];
}

Pizza.prototype.totalCost = function displayAmount(){
  var sizeRequested = parseInt($("radio#value").val());
  var toppingsRequested = parseInt($("checkbox#value").val());
  var totalCostprint = addToppingsToCost(sizeRequested += toppingsRequested)
  this.totalCost.push(totalCostprint);
}


function addSizeToCost(size, cost){
  var cost = 0;
  this.size = function(){
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

function addToppingsToCost(toppings, cost){
  var cost = addSizeToCost(cost);
  this.toppings = function(){
    if(toppings === 1){
      toppings += cost;
      this.totalCost.push(cost);
    } else {
      this.totalCost.push(cost);
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
    var total = newOrder()
    displayTotal(total);

  })
})