var dessDiv = document.querySelector("#desserts");
const getApi = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert";

async function getDessert() {
  const desResp = await fetch(getApi);
  var data = await desResp.json();
  // console.log(data)
  //console.log(data.meals)
  return data.meals;
}

function displayData(data){
  data.map(function(obj){
    dessDiv.innerHTML += `<div class="pd-8 col-sm-3 col-lg-3 shadow bg-transparent text-center mb-4 my-5" style="color:#CBB26A"> 
                          <img class="Thumbnails card-img-top"  src="${obj.strMealThumb}">
                          <div data-meal-ID="${obj.idMeal}">
                          <h3>${obj.strMeal}</h3>
                          </div>
                          </div>`;
      });
}
    
    // function definition
    // function show() {
    //   var dessOutput = "";  
    //   for (i = 0; i < 7; i++) {
    //     dessOutput += `<div><img><h3></h3></div>`;
    //   } 
    // }
   
    // function call
    // show();       
    //console.log(getDessert());     
getDessert().then(meals => displayData(meals));

//console.log(theMeals);
//displayData(theMeals);
  
        
        
    
    
    