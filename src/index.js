var qs = require('./query_selector.js');
var qsa = require('./query_selector_all.js');
var gid = require('./get_element_by_id.js');
var gclass = require('./get_elements_by_class_name.js');
var gtag = require('./get_elements_by_tag_name.js');

module.exports = function () {
  window.qs = qs;
  window.qsa = qsa;
  window.gid = gid;
  window.gclass = gclass;
  window.gtag = gtag;
}

module.exports.qs = qs;
module.exports.qsa = qsa;
module.exports.gid = gid;
module.exports.gclass = gclass;
module.exports.gtag = gtag;