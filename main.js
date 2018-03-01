
var Recipes=[{description:"Mansaf: Wash meat cubes and place in tray with lid. Cover meat with water, cover tray and place in refrigerator for 4-8 hours.Melt 1/4 cup of the clarified butter in heavy skillet over medium-high heat. Drain and pat dry meat cubes. Place in skillet and cook for 20 minutes until browned on all sides. Season meat with salt and pepper, to taste, and add enough water to cover meat. Reduce heat, cover and cook for 1 hour. Add onion and simmer uncovered for 30 minutes.", imageId:"#img3"},
{description:"Musakhan: Place the onions in a pot and add enough olive oil to submerge the onions completely (it may vary a little with the size of your pot but it took me 2 cups. Cook the onions over low heat stirring occasionally till the onions are translucent but still hold their shape and have some texture, you don’t want them to get mushy (this will take 20- 30 minutes)). Once the onions are done, place them in a colander to drain off the olive oil. Do not discard the oil. After all the oil has been drained off, sprinkle the onions with sumac, cardamom and black pepper and toss them till they are completely coated with sumac (note that the color and the taste will deepen when you leave the onions aside so add the sumac gradually, you can always add more if you want)", imageId:"#img4"},
{description:"Kebab: Preheat the oven to 200C/180C Fan/Gas 6. Brush the oil over a 1kg/2lb 4oz loaf tin. Tip the mince into a large bowl, add the garlic, spices and seasoning and mix with your hands until smooth. Press into the loaf tin and bake for 20 minutes. Set aside until cool enough to handle. Meanwhile, warm the pittas in the oven for 5 minutes. Turn the meat out of the tin and slice the kebab lengthways into thin strips. Open up each pitta to create a pocket and pile in the salad ingredients and meat. Add chilli sauce and yoghurt, plus pickled chillies if using.", imageId:"#img5"},
{description:"Massala: Combine garlic, ginger, turmeric, garam masala, coriander, and cumin in a small bowl. Whisk yogurt, salt, and half of spice mixture in a medium bowl; add chicken and turn to coat. Cover and chill 4-6 hours. Cover and chill remaining spice mixture. Heat ghee in a large heavy pot over medium heat. Add onion, tomato paste, cardamom, and chiles and cook, stirring often, until tomato paste has darkened and onion is soft, about 5 minutes. Add remaining half of spice mixture and cook, stirring often, until bottom of pot begins to brown, about 4 minutes. Add tomatoes with juices, crushing them with your hands as you add them. Bring to a boil, reduce heat, and simmer, stirring often and scraping up browned bits from bottom of pot, until sauce thickens, 8-10 minutes. Add cream and chopped cilantro. Simmer, stirring occasionally, until sauce thickens, 30-40 minutes. Meanwhile, preheat broiler. Line a rimmed baking sheet with foil and set a wire rack inside sheet. Arrange chicken on rack in a single layer. Broil until chicken starts to blacken in spots (it will not be cooked through), about 10 minutes. Cut chicken into bite-size pieces, add to sauce, and simmer, stirring occasionally, until chicken is cooked through, 8-10 minutes. Serve with rice and cilantro sprigs.", imageId:"#img6"}];





/*****************************************************************/
$(document).ready(function(){




      for (var i = 0; i < Recipes.length; i++) {


            $(Recipes[i].imageId).on('click',function(){
                  var choo = "#"+this.id

                  for (var j = 0; j < i; j++) {
                       if(choo=== Recipes[j].imageId){

                        $(".para").text(Recipes[j].description)
                  }     
            }


      })


      }




$( "#btn1" ).on( "click", function() {

var d = new Date();
 var comment = $("#txt1").val();
 
 $( '#addComm' ).append( "<li>"+comment+" ------- "+d+"</li>");

});


// $(button).on('click',function(){

// 

// 

// }
      
})