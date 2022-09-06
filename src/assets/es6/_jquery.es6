/* jshint esversion: 6 */
"strict mode";

import * as loc from "../../common/data/locations.js";
// import rive from "../../common/data/Ecovillaggi_RIVE.json";

// import actions from "../../src/es6/_actions.es6";
import layout from "../../src/es6/layout.es6";
import navigation from "../../src/es6/_navigation.es6";

require("../../src/es6/_obj.es6");

function linkify(text) {
	var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
	return text.replace(exp, "<a href=\"$1\" target=\"_blank\">$1</a>");
}

var
	locations = loc.locations,
	LAYOUT = new layout(),
	// ACTIONS = new actions(),
	NAV = new navigation(),

	page = NAV.get_page()


	// settings = require("../../../../common/settings/contents.json")
;


function find(items, text) {
	text = text.split(' ');
	return items.filter(function(item) {
		return text.every(function(el) {
			if(typeof item === 'object') {
				if(item.post_title !== undefined && item.post_title !== null) {
					if(item.post_title.indexOf(el) > -1) {
						console.log(text, item.post_title);
					}
				}
			}
			// console.info(item.properties.Name, item.post_title);
			// return item.content.indexOf(el) > -1;
		});
	});
}


// $.noConflict();
$(document).ready(() => {
	var items = []
	let fullScreenChange;
	if('onfullscreenchange' in window.document) {
		fullScreenChange = 'fullscreenchange';
	} else if ('onmozfullscreenchange' in window.document) {
		fullScreenChange = 'mozfullscreenchange';
	} else if ('onwebkitfullscreenchange' in window.document) {
		fullScreenChange = 'webkitfullscreenchange';
	} else if ('onmsfullscreenchange' in window.document) {
		fullScreenChange = 'MSFullscreenChange';
	}

	// Build the <header> object
	// LAYOUT.build_header();
	// Build the top carousel
	// LAYOUT.build_carousel();
	// // Build the search bar
	// LAYOUT.build_searchbar();
	// if(page == "home") {
	// 	// Build the halfway menu
	// 	LAYOUT.build_halfway_menu();
	// 	// Build the contents section
	// 	LAYOUT.build_contents_section();
	// } else {
	// 	// Build the contents section
	// 	LAYOUT.build_contents_section();
	// 	// Build the halfway menu
	// 	LAYOUT.build_halfway_menu();
	// }
	// // Build the footer
	// LAYOUT.build_footer();

	// Load scripts
	// LAYOUT.load_scripts();

	/**
	 * Creeate map
	 * -------------------------------------------------------------------------
	 */
	let map = L.map("map_area", {
		center: [41.87194, 12.56738],
		zoom: 6,
		scrollWheelZoom: false,
		fullscreenControl: true,
		fullscreenControlOptions: {
			position: 'topleft', // change the position of the button can be topleft, topright, bottomright or bottomleft, defaut topleft
			title: 'Show me the fullscreen !', // change the title of the button, default Full Screen
			titleCancel: 'Exit fullscreen mode', // change the title of the button when fullscreen is on, default Exit Full Screen
			content: null, // change the content of the button, can be HTML, default null
			forceSeparateButton: true, // force seperate button to detach from zoom buttons, default false
			forcePseudoFullscreen: true, // force use of pseudo full screen even if full screen API is available, default false
			fullscreenElement: false // Dom element to render in full screen, false by default, fallback to map._container
		}
	});
	L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
		attribution: '&copy; <a target="_blank" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	// function onLocationFound(e) {
	// 	var radius = e.accuracy / 2;
	// 	L.marker(e.latlng).addTo(map)
	// 	.bindPopup("You are within " + radius + " meters from this point").openPopup();
	// 	L.circle(e.latlng, radius).addTo(map);
	// }

	function getLocation(map) {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
				// console.log(position.coords);
				map.setView(new L.LatLng(position.coords.latitude, position.coords.longitude), 8);
				// document.getElementById('idLatitude').value = position.coords.latitude;
				// document.getElementById('idLongitude').value = position.coords.longitude;
			});
        } else {
            console.warn("Geolocation is not supported by this browser.");
        }

    }
	getLocation(map);
    //
	// map.on('locationfound', onLocationFound);
	// map.locate({setView: true, watch: true, maxZoom: 8});


	/* ---------------------------------------------------------------------- */

	/**
	 * ecovillage.org markers (worldwide)
	 */
	let markers = L.markerClusterGroup();

	var leaf = L.AwesomeMarkers.icon({
		icon: 'leaf',
		prefix: 'fa',
		markerColor: 'green'
	});
	$.each(locations, (k, v) => {
		items.push(v);
		// ID: "3607"
		// lat: 36.9507
		// lng: -3.1321
		// post_title: "Valle de Sensaciones"
		// post_type: "gen_project"
		// console.info(v.ID, v);
		var marker = L.marker(new L.LatLng(v.lat, v.lng), {
			icon: leaf,
			title: v.post_title
		})
		marker.bindPopup("<div id=\"" + v.ID + "\"><h2>" + v.post_title + "</h2><br /><p class=\"text-center\"><i class=\"fa fa-spinner fa-pulse fa-fw\"></i></p></div><br /><hr /><p><small>Source: <a target=\"_blank\" href=\"https://ecovillage.org/projects/map\">https://ecovillage.org/projects/map</a></small></p>", {
			maxHeight: 300,
			minWidth: 500
		});
		marker.on('click', function(e) {
			// console.log(v.ID);
			// Marker onclick
			// console.log($("#" + v.ID), $("#" + v.ID).hasClass("text-center"));
			$.get({
				url: "https://ecovillage.org/wp-json/gen/v1/mapdata?ID=" + v.ID + "&type=" + v.post_type,
				success: (data) => {
					$("#" + v.ID).html(
						data.content
						.replace(/href/ig, 'target="_blank" href')
						.replace("background-image: url(/", 'background-image: url(https://ecovillage.org/')
					).removeClass("text-center");
				}
			});
		});

		markers.addLayer(marker);
	});
	map.addLayer(markers);

	/**
	 * Ecovillaggi RIVE
	 */
	// var i = [];
	// var riveL = new L.GeoJSON.AJAX("../../common/data/Ecovillaggi_RIVE.geojson", {
	// 	pointToLayer: function (feature, latlng) {
	// 		return L.marker(latlng, {
	// 			icon: L.AwesomeMarkers.icon({
	// 				icon: 'pagelines',
	// 				prefix: 'fa',
	// 				markerColor: 'cadetblue'
	// 			})
	// 			// title: v.post_title
	// 		});
	// 	},
	// 	onEachFeature: (feature, layer) => {
	// 		items.push({label: feature.properties.Name, value: ""});
	// 		i.push({label: feature.properties.Name, value: ""});
	// 		// console.log(items);
	// 		layer.bindPopup("<h2>" + feature.properties.Name + "</h2>" + ((feature.properties.description) ? linkify(feature.properties.description) : "") + "<br /><hr /><p><small>Source: <a target=\"_blank\" href=\"https://ecovillaggi.it\">https://ecovillaggi.it</a></small></p>");
	// 	}
	// });
	// riveL.addTo(map);

	/**
	 * Progetti RIVE
	 */
	// var riveP = new L.GeoJSON.AJAX("../../common/data/Progetti_RIVE.geojson", {
	// 	pointToLayer: function (feature, latlng) {
	// 		return L.marker(latlng, {
	// 			icon: L.AwesomeMarkers.icon({
	// 				icon: 'flag',
	// 				prefix: 'fa',
	// 				markerColor: 'brown'
	// 			})
	// 			// title: v.post_title
	// 		});
	// 	},
	// 	onEachFeature: (feature, layer) => {
	// 		items.push({label: feature.properties.Name, value: ""});
	// 		i.push({label: feature.properties.Name, value: ""});
	// 		// console.log(items);
	// 		layer.bindPopup("<h2>" + feature.properties.Name + "</h2>" + ((feature.properties.description) ? linkify(feature.properties.description) : "") + "<br /><hr /><p><small>Source: <a target=\"_blank\" href=\"https://ecovillaggi.it\">https://ecovillaggi.it</a></small></p>");
	// 	}
	// });
	// riveP.addTo(map);
	console.info(items);
	// addDataToAutocomplete(items);

	/* ---------------------------------------------------------------------- */
	/* 								Map behaviours							  */
	/* ---------------------------------------------------------------------- */

	/**
	 * Click, wheel and focus
	 */
	map.on('focus', () => { map.scrollWheelZoom.enable(); });
	map.on('blur', () => { map.scrollWheelZoom.disable(); });
	// events are fired when entering or exiting fullscreen.

	let set_fullscreeen = () => {
			// console.log('entered fullscreen');
			$("#logo_map").attr({"hidden": false});
			$("#map_search").addClass("full");
			$(".leaflet-top").css({"top": "150px"});
			$("#map_search .btn").removeClass("btn-secondary").addClass("btn-outline-secondary");
			$("#container .container").removeClass("container");
			$("#search_input").removeClass("form-control-lg").addClass("form-control-sm");
			$("#map_search").animate({
				top: "50%",
				left: "15%",
				width: "70%"
			}, 100);
			map.scrollWheelZoom.enable();
		},
		set_normalscreen = () => {
			// console.log('exited fullscreen');
			$("#logo_map").attr({"hidden": true});
			$("#map_search").removeClass("full");
			$(".leaflet-top").css({"top": "0"});
			$("#map_search .btn").removeClass("btn-outline-secondary").addClass("btn-secondary");
			$("#container > div").stop().addClass("container");
			$("#search_input").removeClass("form-control-sm").addClass("form-control-lg");
			$("#map_search").animate({
				top: "30%",
				left: "15%",
				width: "70%"
			}, 100);
			map.scrollWheelZoom.disable();
		};

	function fullscreen_change() {
		if(window.document.fullscreen) {
			/**
			 * Fullscreen view
			 */
			set_fullscreeen();
		} else {
			/**
			 * Normal view
			 */
			set_normalscreen();
		};
	}
	window.document.addEventListener(fullScreenChange, fullscreen_change);

	// $("#search_input").focus(() => {
	// 	if(!map.isFullscreen()) {
	// 		set_fullscreeen();
	// 		map.toggleFullscreen();
	// 	}
	// });
	$("#map").dblclick(() => {
		if(!map.isFullscreen()) {
			set_fullscreeen();
			map.toggleFullscreen();
		}
	});
	$("#search_input").on("keyup", (e) => {
		var code = e.key;
		if(!map.isFullscreen()) {
			set_fullscreeen();
			map.toggleFullscreen();
		}

		if(code === "Enter") {
			e.preventDefault();
			$("#map_search").animate({
				top: "11px",
				left: "40%",
				width: "59%"
			}, 100);
		} else if(code === "Esc") {
			$("#map_search").animate({
				top: "30%",
				left: "15%",
				width: "70%"
			}, 100);
		} else {
			set_fullscreeen();
			$("#map_search").animate({
				top: "50%",
				left: "15%",
				width: "70%"
			}, 100);
		}

		// console.log(find(items, 'text')) // both objects
	});
	// $("#search_input").autocomplete({
	// 	source: items.map(function(d) {
	// 		return d.post_title;
	// 	}),
	// 	minLength: 2
	// })._renderItem = function (ul, item) {
    //     return $("<li></li>")
    //         .data("ui-autocomplete-item", item)
    //         .append("<a>" + item.label + "</a>")
    //         .appendTo(ul);
    // };

	// var substringMatcher = function(strs) {
	// 	return function findMatches(q, cb) {
	// 		console.log(q, cb);
	// 		var matches, substringRegex;
    //
	// 		// an array that will be populated with substring matches
	// 		matches = [];
    //
	// 		// regex used to determine if a string contains the substring `q`
	// 		substrRegex = new RegExp(q, 'i');
    //
	// 		// iterate through the pool of strings and for any string that
	// 		// contains the substring `q`, add it to the `matches` array
	// 		$.each(strs, function(i, str) {
	// 			console.log(i, str);
	// 			if (substrRegex.test(str)) {
	// 				matches.push(str);
	// 			}
	// 		});
    //
	// 		cb(matches);
	// 	};
	// };


	// console.log(items);
	// function addDataToAutocomplete(arr) {
    //     arr.sort(function(a, b){ // sort object by Name
    //         var nameA=a.label, nameB=b.label
    //         if (nameA < nameB) //sort string ascending
    //             return -1
    //         if (nameA > nameB)
    //             return 1
    //         return 0 //default return value (no sorting)
    //     })
    //
   	// 	// The source for autocomplete.  https://api.jqueryui.com/autocomplete/#method-option
	// 	$("#search_input").autocomplete("option", "source", arr);
    //
	// 	$("#search_input").on("autocompleteselect", function( event, ui ) {
	// 		console.log(arr);
	// 		polySelect(ui.item.label);  //grabs selected state name
	// 		ui.item.value='';
	// 	});
	// }
	// passing in `null` for the `options` arguments will result in the default
	// options being used
	// $('#search_input').typeahead({
	// 	hint: true,
	// 	highlight: true,
	// 	minLength: 1
	// },
	// {
	// 	name: 'places',
	// 	source: items
	// });

	// Marker a Roma
	// L.marker([41.9027835, 12.4963655]).addTo(map)
	// .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
	// .openPopup();

	// $("#search_input").autocomplete("option", "source", arr);

	// $("#search_input").on( "autocompleteselect", function( event, ui ) {
	// 	polySelect(ui.item.label);  //grabs selected state name
	// 	ui.item.value='';
	// });

	// var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	// var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	// 	return new bootstrap.Tooltip(tooltipTriggerEl, {
	// 		boundary: 'window'
	// 	})
	// })

	// $.ajaxSetup({ cache: true });
	// $.getScript('https://connect.facebook.net/en_US/sdk.js', function(){
	// 	FB.init({
	// 		appId: '503287753991591',
	// 		version: 'v2.7' // or v2.1, v2.2, v2.3, ...
	// 	});
	// 	// $('#loginbutton,#feedbutton').removeAttr('disabled');
	// 	// FB.getLoginStatus(updateStatusCallback);
	//
	// 	// Get App token data
	// 	// https://graph.facebook.com/oauth/access_token?client_id=503287753991591&client_secret=736978599f45e00c2a45bcc826313388&grant_type=client_credentials
	// 	let app_id = "503287753991591",
	// 		group_id = "1468487430095734",
	// 		secret = "736978599f45e00c2a45bcc826313388",
	// 		token = "503287753991591|dIlPA1ayBT22nLCad9Oiw43xD6w";
	// 	FB.api(
	// 		'/' + group_id + '/feed',
	// 		function(response) {
	// 			console.log(response);
	// 		}, {access_token: token}
	// 	);
	// });

	LAYOUT.activate();
});
