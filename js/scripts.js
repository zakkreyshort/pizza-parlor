// back end 
function Pizza(){
  this.size = size;
  this.toppings = toppings;
  this.cost = cost
  this.totalCost = totalCost;
}



Pizza.prototype.totalCost = function displayAmount(){
  var sizeRequested = parseInt($("radio#value").val());
  var toppingsRequested = parseInt($("checkbox#value").val());
  var totalCostprint = addSizeToCost(sizeRequested += toppingsRequested);
  return totalCostprint;
}


function addSizeToCost(size, toppings, cost){
  var cost = 0;
  this.size = function(){
    if(size === 8){
      size += cost;
      console.log(cost);
    } else if(size === 10){
      size += cost;
    } else if(size === 12){
      size += cost;
    } else{
      alert("Please choose a size")
    }
  };

  this.toppings = function(){
    this.toppings = function(){
      if(toppings === 1){
        toppings += size;
      } else{
      }
    }
  }
}



// user interface 







// front end 

$(document).ready(function(){
  $("button#completeOrder").submit(function(event){
    event.preventDefault();
    var total = Pizza.totalCost;
    $("#orderTotal").html(total);

  })
})