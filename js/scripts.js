// back end 
function Pizza(){
  this.size = size;
  this.toppings = toppings;
  this.cost = cost
  this.totalCost = totalCost;
}

Pizza.prototype.addSizeToCost = function(size, toppings, cost){
  var cost = 0;
  this.size = function(){
    if(size === 8){
      size += cost;
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

var order = new Order();

function newOrder (size, toppings, totalCost){

}



// front end 

$(document).ready(function(){
  $().submit(function(event){
    event.preventDefault();
  }
})