var request = require('request');
var assert = require('assert');

module.exports = {  
  'Do Login': function(client) {    //login 1st
    var user_id = client.globals.github_id.user_id;
    var password = client.globals.github_id.password;
    var login_page = client.page.login();    
    login_page.do_login(user_id, password);
    //Go to user gists and select any gist
    var gists_page = client.page.gists.list_gists();
    gists_page.load_gist_list(user_id).select_gist();
  },

  'Delete gist' : function(client) {
    var detail_gist_page = client.page.gists.detail_gist();
    var gist_url='';
    client.url(function(res){
      gist_url=res.value; //store current url for later use
      
      detail_gist_page.click('@delete_button').confirm_delete_prompt(true);
      
      var EXPECTED_HTTP_CODE = 404;
      //todo: change assertion for counter in list of gists
      client.perform(function(){
        var undefined_page = client.page.gists.undefined_gist();
          request(gist_url, function (error, response, body) {
            console.log(gist_url)
            client.assert.ok(response.statusCode == EXPECTED_HTTP_CODE)
          }) 
      })
    })
  }
}