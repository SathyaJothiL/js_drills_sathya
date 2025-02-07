 // use this object to test your functions

// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.
// Check and use MDN as well
// PROJECT RESTRICTION: You can't use the built in Object methods.  Only use native JavaScript for loops. No other types of loops are allowed.
// PROJECT RESTRICTION: You can't use the underscore library or any other external library.

function keys(obj) {
  let l=[]
  for(i in obj){
    l.push(i)
  }
  return l
}


function values(obj) {
  let l=[]
  for(i in obj){
    l.push(obj[i])
  }
 return l;
}



function mapObject(cb,obj) {
  let o={}
  for(let i in obj){
    o[i]=cb(obj[i],i,obj);
  }
return o
}
function mapcall(val,key,obj){
if(typeof(obj[key])==="number"){
  return obj[key]+10
}
if(typeof(obj[key]==="string")){
  return obj[key]+" new"
}
}


function pairs(obj) {
  let l=[];
 for(i in obj){
  l.push([i,obj[i]])
 }
 return l
}



function invert(obj) {
  let o={};
 for(i in obj){
  let key=obj[i]
  o[key]=i;
 }
 return o;
}


function defaults(obj, defaultProps) {
let o={}
for(i in obj){
  if(obj[i]===undefined){
    for(j in defaultProps){
      if(i==j){
        o[i]=defaultProps[i]
      }
    }
  }
  else{
    o[i]=obj[i]
  }
}
 return o; 
}


module.exports={keys:keys,values:values,pairs:pairs,defaults:defaults,invert:invert,mapObject:mapObject,mapcall:mapcall}


 // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys

   // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values

    // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
  // http://underscorejs.org/#mapObject

   // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs

  /* STRETCH PROBLEMS */

  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert

  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults