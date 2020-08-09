module.exports = {
  commands: [
    {
      navigate_to_deleted_gist : navigate_to_deleted_gist,
      assert_deleted_gist : assert_deleted_gist
    }
  ],
  elements: {}
};

function navigate_to_deleted_gist(url){
  this.api
    .url(url)
    .waitForElementVisible('body', 1000);
  
  return this;
}

function assert_deleted_gist(gist_url, expected_http_code){
  this.api.perform(done => {
            request(gist_url, function (error, response, body) {
                console.log(response.statusCode)
                assert.ok(response.statusCode == expected_http_code)
                done()
            }) 
        })
}