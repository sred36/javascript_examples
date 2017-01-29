var animals = [
    { name: "Jason", species:"rabitt"},
    { name: "Jessica", species:"dog"},
    { name: "Jacky", species:"dog"},
    { name: "Luke", species:"fish"},
    { name: "Junior", species:"cat"},
    { name: "Thomas", species:"cat"}
]


/******************************************
***filter method with callback function****
******************************************/

var dogs = animals.filter(function(animals){
    return animals.species === "dog";
}).map((dogs)=>{
    return dogs.name;
});


console.log(dogs);



/****************************************************************
*****************************************************************

Both methods return two objects. This will be the two dog items.
it returns items which respond to TRUE in this case dog. 

returned 

[Object, Object]

Objectname: "Jessica"species: "dog" 
Objectname: "Jacky"species: "dog"


******************************************************************
*****************************************************************/