
var Recipes=[{foodName:"mansaf", description:"Mansaf dish", imageId:"img1"}];


 function each(coll, func) { 
       if (Array.isArray(coll)) { 
             for (var i = 0; i < coll.length; i++) { 
                   func(coll[i], i); 
             } 
       } else { 
             for (var key in coll) { 
                   func(coll[key], key); 
             } 
       } 
 }	



/*****************************************************************/


function returnRecipe(){

var food_image = $("#img1");

alert(food_image);


each(Recipes, function( food, i) {


}

	)


}



