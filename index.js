const fs = require('fs');
const css = fs.readFileSync('./style.css');
const options = JSON.parse(fs.readFileSync('postcss.json', 'utf8'));

const postcss = require('postcss');
postcss([
  require('colorguard')(options.colorguard),
  require('postcss-custom-properties'),
  require('postcss-reporter'),
])
.process(css, { from: 'style.css', to: 'bundle.css' })
.then(() => {
  // result.warnings().forEach(function (warn) {
  //   console.log(warn.text);
  // });
  // .then(function (result) {
  //     fs.writeFileSync('style.css', result.css);
  //     if ( result.map ) fs.writeFileSync('style.css.map', result.map);
});
