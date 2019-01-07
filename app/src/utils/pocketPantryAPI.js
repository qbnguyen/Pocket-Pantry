import axios from "axios";


//Methods for using the Pocket Pantry API

let getUsersSavedRecipes = (googleId) => {
  axios.get('/api/user/saved-recipes/' + googleId)
  .then(function(response) {
  });
}

let getUserRecord = (googleId) => {
  axios.get('/api/user/' + googleId)
  .then(function(response) {
  });
}

let getSavedRecipeDetails = (objID) => {
  axios.get('/api/savedRecipe/' + objID)
  .then(function(response) {
  });
}

let createUser = (name, googleId, imageUrl, email) => {
  axios.post('/api/user/create-user', {
      name: name,
      googleId: googleId,
      imageUrl: imageUrl,
      email: email
  })
  .then(function(response) {
  });
}

export default {
//Get Saved Recipes for a user based on googleId:
// On the front-end just pass this method a googleId like this...PPAPI.getUsersSavedRecipes(googleId)
    getUsersSavedRecipes: getUsersSavedRecipes,
//Create a User in the db
// On the front-end just pass this method a name, googleId, imageUrl, and email like this... PPAPI.createUser(name, googleId, imageUrl, email)
    createUser: createUser,
//Get a single Users Record from the db
// On the front-end just pass this method googleId like this... PPAPI.getUserRecord(googleId)
    getUserRecord: getUserRecord,

//Get details of a saved recipe from the db by objID
// On the front-end just pass this method an objID like this... PPAPI.getSavedRecipeDetails(objID)
    getSavedRecipeDetails: getSavedRecipeDetails
  };