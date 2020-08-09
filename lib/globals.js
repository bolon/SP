//todo: put this into a fucnt to randomize
var github_predefined_random_text = {
  file_name: 'm_file_test.txt',
  file_name_updated: 'm_file_test_updated.txt',
  file_description: 'Description lorem ipsum',
  file_description_updated: 'Description lorem ipsum UPDATE',
  file_content: 'Lorem ipsum\n\nSiAmet\nThis is a CREATION\nJust FYI',
  file_content_updated: 'Lorem ipsum\n\nSiAmet\nThis is a UPDATE\nJust FYI',
};

//todo: create in a secret file .env maybe?
var github_id = {
  user_email: '',
  user_id: '',
  password: ''
}

module.exports = {
  github_id: github_id,
  github_text: github_predefined_random_text
}