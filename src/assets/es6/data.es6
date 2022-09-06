/* jshint esversion: 6 */
"strict mode";

import Promise from 'es6-promise';
import str from "../../src/es6/_str.es6";
import obj from "../../src/es6/_obj.es6";
var STR = new str();
var OBJ = new obj();
var user = {
	logged: false
};

class data {
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
 	get_login() {
 		return new Promise((resolve, reject) => {
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
 				success: (data) => {
 					if(data.username !== undefined && data.username !== "") {
 						resolve(data);
 					} else {
 						resolve(false);
 					}
 				},
 				error: (jqXHR, textStatus, errorThrown) => {
 					reject(errorThrown);
 				}
 			});
 		});
 	}

 	get_user_logged() {
 		if(!user.logged) {
 			// Check if user is logged
 			this.get_login().then((login_data) => {
 				if(login_data) {
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

 	get_user(id) {
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
 	}

	/**
	 * -------------------------------------------------------------------------
	 * 								POST
	 * -------------------------------------------------------------------------
	 */

}
export default data;
