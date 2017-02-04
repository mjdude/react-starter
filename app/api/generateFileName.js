export var generateFileName = (filename) => {
  var ext_regex = /(?:\.([^.]+))?$/;
  var ext = ext_regex.exec(filename)[1];
  var date = new Date().getTime();
  var charBank = 'abcdefghijklmnopqrstuvwxyz';
  var fstring = '';

  for (var i = 0; i < 15; i++) {
    fstring += charBank[parseInt(Math.random()*26)];
  }

  return (fstring += date + '.' + ext);
};
