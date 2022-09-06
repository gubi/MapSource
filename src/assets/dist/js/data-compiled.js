"use strict";
/* jshint esversion: 6 */
"strict mode";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _es6Promise = require("es6-promise");

var _es6Promise2 = _interopRequireDefault(_es6Promise);

var _str = require("../../src/es6/_str.es6");

var _str2 = _interopRequireDefault(_str);

var _obj = require("../../src/es6/_obj.es6");

var _obj2 = _interopRequireDefault(_obj);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var STR = new _str2.default();
var OBJ = new _obj2.default();
var user = {
  logged: false
};

var data = function () {
  function data() {
    _classCallCheck(this, data);
  }

  _createClass(data, [{
    key: "get_login",

    /**
     * -------------------------------------------------------------------------
     * 								GET
     * -------------------------------------------------------------------------
     */

    /**
     * Get and parse the Ontology data (for the Ontology card)
     * @NOTE This is an async function
     *
     * @param  string 							id								Tho Ontology ID
     * @return object 															The ontologies data JSON object
     */
    value: function get_login() {
      return new _es6Promise2.default(function (resolve, reject) {
        /**
        * @see http://www.cropontology.org/api
        */
        $.ajax({
          type: "GET",
          url: "login",
          data: {
            alt: "json"
          },
          async: true,
          crossDomain: true,
          dataType: "json",
          success: function success(data) {
            if (data.username !== undefined && data.username !== "") {
              resolve(data);
            } else {
              resolve(false);
            }
          },
          error: function error(jqXHR, textStatus, errorThrown) {
            reject(errorThrown);
          }
        });
      });
    }
  }, {
    key: "get_user_logged",
    value: function get_user_logged() {
      if (!user.logged) {
        // Check if user is logged
        this.get_login().then(function (login_data) {
          if (login_data) {
            user = login_data;
            user.logged = true;
          } else {
            user.logged = false;
          }
          return user.logged;
        });
      } else {
        return true;
      }
    }
  }, {
    key: "get_user",
    value: function get_user(id) {}
    // return new Promise((resolve, reject) => {
    // 	/**
    // 	* @see http://www.cropontology.org/api
    // 	*/
    // 	if(!$.isNumeric(id)) {
    // 		// The passed identifier is not a an ID but an username
    // 		$.ajax({
    // 			type: "GET",
    // 			url: "http://www.cropontology.org/users",
    // 			async: true,
    // 			crossDomain: true,
    // 			dataType: "json",
    // 			success: (users) => {
    // 				$.each(users, (ku, vu) => {
    // 					if(vu.username == id) {
    // 						$.ajax({
    // 							type: "GET",
    // 							url: "http://www.cropontology.org/users/" + vu.userid,
    // 							async: true,
    // 							crossDomain: true,
    // 							dataType: "json",
    // 							success: (data) => {
    // 								// Get Gravatar data
    // 								$.ajax({
    // 									type: "GET",
    // 									url: "https://en.gravatar.com/" + data.gravatar + ".json",
    // 									async: true,
    // 									crossDomain: true,
    // 									dataType: "json",
    // 									success: (gravatar_data) => {
    // 										data.gravatar = gravatar_data.entry[0];
    // 										resolve(data);
    // 									}
    // 								});
    // 							},
    // 							error: (jqXHR, textStatus, errorThrown) => {
    // 								reject(errorThrown);
    // 							}
    // 						});
    // 					}
    // 				});
    // 			},
    // 			error: (jqXHR, textStatus, errorThrown) => {
    // 				reject(errorThrown);
    // 			}
    // 		});
    // 	} else {
    // 		$.ajax({
    // 			type: "GET",
    // 			url: "http://www.cropontology.org/users/" + id,
    // 			async: true,
    // 			dataType: "json",
    // 			success: (data) => {
    // 				// Get Gravatar data
    // 				$.ajax({
    // 					type: "GET",
    // 					url: "https://en.gravatar.com/" + data.gravatar + ".json",
    // 					async: true,
    // 					dataType: "json",
    // 					success: (gravatar_data) => {
    // 						data.gravatar = gravatar_data.entry[0];
    // 						resolve(data);
    // 					}
    // 				});
    // 			},
    // 			error: (jqXHR, textStatus, errorThrown) => {
    // 				reject(errorThrown);
    // 			}
    // 		});
    // 	}
    // });


    /**
     * -------------------------------------------------------------------------
     * 								POST
     * -------------------------------------------------------------------------
     */

  }]);

  return data;
}();

exports.default = data;
