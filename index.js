/**
  *
  * main() will be run when you invoke this action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  */
 function main(params) {
    var request = require("request");
    let url = "https://my-api.plantnet.org/v2/identify/all"
    let api_key = params.key
    let image_1 = params.image
    let organ_1 = params.organ
    // let image_1 = "https://jardineriaplantasyflores.com/wp-content/uploads/2014/05/Portulacaria_afra_Red_Stem_Stems_3264px.jpg"
    //let organ_1 = "leaf"
    let plantNet_url = `${url}?api-key=${api_key}&images=${image_1}&organs=${organ_1}`
    
    var options = {
      url: plantNet_url,
      json: true
   }
  return new Promise(function (resolve, reject) {
      request(options, function (err, resp) { 
         if (err) {
            console.log(err);
            return reject({err: err});
         }
      return resolve(resp.body.results[0]);
      });
  });
}