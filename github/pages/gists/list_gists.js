const util = require('util');
//define login page and its element
module.exports = {
  commands: [{
      load_gist_list: navigate_to_user_gist,
    }],
  elements: {
    gist_link: 'div[class="gist-snippet"] div div div span a:nth-child(2)',
    gist_container: 'div.gist-snippet'
  }
};

function navigate_to_user_gist(user_id){
  this.navigate('https://gist.github.com/' + user_id)
    .waitForElementVisible('@gist_container');
  return this;
}