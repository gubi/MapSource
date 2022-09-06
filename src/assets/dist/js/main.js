(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * Taken from ecovvillages.org
 * @see https://ecovillage.org/projects/map/
 *
 * @type {Array}                                An array of objects
 */
var locations = exports.locations = [{
	"ID": "3607",
	"post_title": "Valle de Sensaciones",
	"post_type": "gen_project",
	"lat": 36.9507,
	"lng": -3.1321
}, {
	"ID": "3615",
	"post_title": "Buenviv\xED",
	"post_type": "gen_project",
	"lat": 37.8223,
	"lng": -5.0464
}, {
	"ID": "3622",
	"post_title": "Sunseed Tecnologia del Desierto",
	"post_type": "gen_project",
	"lat": 37.0902,
	"lng": -2.0833
}, {
	"ID": "3627",
	"post_title": "Molino de Guadalmes\xED",
	"post_type": "gen_project",
	"lat": 36.0467,
	"lng": -5.5226
}, {
	"ID": "3630",
	"post_title": "Valdepielagos",
	"post_type": "gen_project",
	"lat": 40.7636,
	"lng": -3.4652
}, {
	"ID": "3632",
	"post_title": "Selba - Artosilla",
	"post_type": "gen_project",
	"lat": 42.4262,
	"lng": -0.2628
}, {
	"ID": "3641",
	"post_title": "Proyecto autosuficiencia y soberania",
	"post_type": "gen_project",
	"lat": 43.1563,
	"lng": -6.2596
}, {
	"ID": "3642",
	"post_title": "Proyecto esenio...",
	"post_type": "gen_project",
	"lat": 40.428,
	"lng": -3.65
}, {
	"ID": "3644",
	"post_title": "Comunidad Libertaria en proceso",
	"post_type": "gen_project",
	"lat": 43.0784,
	"lng": -3.5473
}, {
	"ID": "3655",
	"post_title": "RENACE",
	"post_type": "gen_project",
	"lat": 4.5981,
	"lng": -74.0758
}, {
	"ID": "3657",
	"post_title": "Los Portales",
	"post_type": "gen_project",
	"lat": 37.7154,
	"lng": -5.9987
}, {
	"ID": "3658",
	"post_title": "Cortijo Los Ba\xF1os Al-Hamam",
	"post_type": "gen_project",
	"lat": 37.0408,
	"lng": -2.201
}, {
	"ID": "3664",
	"post_title": "Los Molinos del R\xEDo Aguas",
	"post_type": "gen_project",
	"lat": 37.0892,
	"lng": -2.0758
}, {
	"ID": "3667",
	"post_title": "Amalurra",
	"post_type": "gen_project",
	"lat": 43.2352,
	"lng": -3.2205
}, {
	"ID": "3681",
	"post_title": "Comunidad Alternativa EkoHerri",
	"post_type": "gen_project",
	"lat": 40.4637,
	"lng": -3.7492
}, {
	"ID": "3685",
	"post_title": "Bellbunya Sustainable Community",
	"post_type": "gen_project",
	"lat": -26.492,
	"lng": 152.8537
}, {
	"ID": "3692",
	"post_title": "Verxilans",
	"post_type": "gen_project",
	"lat": 40.1652,
	"lng": -4.3987
}, {
	"ID": "3695",
	"post_title": "Ek\u014Dbius International",
	"post_type": "gen_project",
	"lat": 5.532,
	"lng": -67.4297
}, {
	"ID": "3696",
	"post_title": "Transition Town Freiburg",
	"post_type": "gen_project",
	"lat": 47.999,
	"lng": 7.8421
}, {
	"ID": "3699",
	"post_title": "Arroyolobo",
	"post_type": "gen_project",
	"lat": 38.5616,
	"lng": -5.5957
}, {
	"ID": "3701",
	"post_title": "Alpha Farm",
	"post_type": "gen_project",
	"lat": 44.1604,
	"lng": -123.7017
}, {
	"ID": "3702",
	"post_title": "Arcosanti",
	"post_type": "gen_project",
	"lat": 34.3395,
	"lng": -112.103
}, {
	"ID": "3703",
	"post_title": "Ecovilla GAIA - Argentina",
	"post_type": "gen_project",
	"lat": -35.0034,
	"lng": -59.2756
}, {
	"ID": "3704",
	"post_title": "Breitenbush Community",
	"post_type": "gen_project",
	"lat": 44.734,
	"lng": -122.1498
}, {
	"ID": "3708",
	"post_title": "Comunidad Los Horcones",
	"post_type": "gen_project",
	"lat": 19.3762,
	"lng": -99.1037
}, {
	"ID": "3710",
	"post_title": "EarthArt Village",
	"post_type": "gen_project",
	"lat": 38.1433,
	"lng": -105.8146
}, {
	"ID": "3713",
	"post_title": "East Wind Community",
	"post_type": "gen_project",
	"lat": 36.6202,
	"lng": -92.2729
}, {
	"ID": "3718",
	"post_title": "Funda\xE7\xE3o Terra Mirim",
	"post_type": "gen_project",
	"lat": -12.8334,
	"lng": -38.4541
}, {
	"ID": "3719",
	"post_title": "Fundaci\xF3n Durika",
	"post_type": "gen_project",
	"lat": 9.1725,
	"lng": -83.3357
}, {
	"ID": "3720",
	"post_title": "Gesundheit! Institute",
	"post_type": "gen_project",
	"lat": 38.8897,
	"lng": -77.1622
}, {
	"ID": "3721",
	"post_title": "Glen Valley Organic Farm",
	"post_type": "gen_project",
	"lat": 49.1581,
	"lng": -122.4284
}, {
	"ID": "3723",
	"post_title": "Heathcote Community",
	"post_type": "gen_project",
	"lat": 39.7089,
	"lng": -76.6684
}, {
	"ID": "3725",
	"post_title": "Ecoaldea Huehuecoyotl",
	"post_type": "gen_project",
	"lat": 18.9848,
	"lng": -99.0931
}, {
	"ID": "3727",
	"post_title": "Las Ca\xF1adas Bosque de Niebla",
	"post_type": "gen_project",
	"lat": 19.1531,
	"lng": -96.9545
}, {
	"ID": "3728",
	"post_title": "Los Angeles Eco-Village",
	"post_type": "gen_project",
	"lat": 34.0725,
	"lng": -118.2907
}, {
	"ID": "3729",
	"post_title": "Manzanita Village",
	"post_type": "gen_project",
	"lat": 34.5366,
	"lng": -112.4533
}, {
	"ID": "3732",
	"post_title": "O.U.R. Ecovillage",
	"post_type": "gen_project",
	"lat": 48.6754,
	"lng": -123.7998
}, {
	"ID": "3735",
	"post_title": "Southwest Sufi Community",
	"post_type": "gen_project",
	"lat": 33.02,
	"lng": -108.28
}, {
	"ID": "3737",
	"post_title": "The Farm",
	"post_type": "gen_project",
	"lat": 35.4797,
	"lng": -87.3285
}, {
	"ID": "3740",
	"post_title": "Ecovillage Torri Superiore",
	"post_type": "gen_project",
	"lat": 43.8413,
	"lng": 7.5529
}, {
	"ID": "3741",
	"post_title": "Damanhur Federation",
	"post_type": "gen_project",
	"lat": 45.4178,
	"lng": 7.7483
}, {
	"ID": "3742",
	"post_title": "Tamera",
	"post_type": "gen_project",
	"lat": 37.7333,
	"lng": -8.4333
}, {
	"ID": "3743",
	"post_title": "ZEGG",
	"post_type": "gen_project",
	"lat": 52.1572,
	"lng": 12.5931
}, {
	"ID": "3748",
	"post_title": "Crystal Waters",
	"post_type": "gen_project",
	"lat": -26.7888,
	"lng": 152.7166
}, {
	"ID": "3750",
	"post_title": "Abundance Ecovillage",
	"post_type": "gen_project",
	"lat": 41.0009,
	"lng": -91.9739
}, {
	"ID": "3755",
	"post_title": "Windsong",
	"post_type": "gen_project",
	"lat": 49.1776,
	"lng": -122.6543
}, {
	"ID": "3757",
	"post_title": "Braziers Park",
	"post_type": "gen_project",
	"lat": 51.554,
	"lng": -1.0836
}, {
	"ID": "3758",
	"post_title": "Brithdir Mawr",
	"post_type": "gen_project",
	"lat": 51.6741,
	"lng": -4.9089
}, {
	"ID": "3759",
	"post_title": "Camphill Community:  Vallersund Gaar",
	"post_type": "gen_project",
	"lat": 63.8605,
	"lng": 9.7495
}, {
	"ID": "3762",
	"post_title": "Keuruu Ecovillage",
	"post_type": "gen_project",
	"lat": 62.3067,
	"lng": 24.6231
}, {
	"ID": "3763",
	"post_title": "Findhorn Foundation Community and Ecovillage",
	"post_type": "gen_project",
	"lat": 57.6522,
	"lng": -3.592
}, {
	"ID": "3764",
	"post_title": "Gy\xFCr\xFCf\xFC Ecovillage",
	"post_type": "gen_project",
	"lat": 46.8832,
	"lng": 16.9905
}, {
	"ID": "3765",
	"post_title": "Hertha Levef\xE6llesskab /Hertha Living Community",
	"post_type": "gen_project",
	"lat": 56.1818,
	"lng": 9.9726
}, {
	"ID": "3768",
	"post_title": "Lebensgarten Steyerberg",
	"post_type": "gen_project",
	"lat": 52.5863,
	"lng": 9.0228
}, {
	"ID": "3769",
	"post_title": "Christiania",
	"post_type": "gen_project",
	"lat": 55.6735,
	"lng": 12.5958
}, {
	"ID": "3770",
	"post_title": "Sieben Linden Ecovillage",
	"post_type": "gen_project",
	"lat": 52.68,
	"lng": 11.1345
}, {
	"ID": "3773",
	"post_title": "Svanholm",
	"post_type": "gen_project",
	"lat": 55.7508,
	"lng": 11.9588
}, {
	"ID": "3774",
	"post_title": "Ecovillage Grishino",
	"post_type": "gen_project",
	"lat": 55.4173,
	"lng": 38.2652
}, {
	"ID": "3775",
	"post_title": "Ufafabrik",
	"post_type": "gen_project",
	"lat": 52.4547,
	"lng": 13.3818
}, {
	"ID": "3777",
	"post_title": "Villaggio Verde",
	"post_type": "gen_project",
	"lat": 45.6528,
	"lng": 8.4136
}, {
	"ID": "3780",
	"post_title": "Munks\xF8g\xE5rds",
	"post_type": "gen_project",
	"lat": 55.6583,
	"lng": 12.1327
}, {
	"ID": "3782",
	"post_title": "La Comune di Bagnaia",
	"post_type": "gen_project",
	"lat": 43.2943,
	"lng": 11.201
}, {
	"ID": "3785",
	"post_title": "Libera Universit\xE1 di Alcatraz",
	"post_type": "gen_project",
	"lat": 43.2757,
	"lng": 12.6794
}, {
	"ID": "3788",
	"post_title": "Gunes Koy",
	"post_type": "gen_project",
	"lat": 39.9208,
	"lng": 32.8541
}, {
	"ID": "3796",
	"post_title": "Kibbutz Lotan",
	"post_type": "gen_project",
	"lat": 29.9883,
	"lng": 35.0868
}, {
	"ID": "3798",
	"post_title": "Ecotopia Romania Association",
	"post_type": "gen_project",
	"lat": 45.8139,
	"lng": 21.3331
}, {
	"ID": "3799",
	"post_title": "Redfield Community",
	"post_type": "gen_project",
	"lat": 51.9524,
	"lng": -0.8925
}, {
	"ID": "3800",
	"post_title": "Camphill Community:  Clanabogan",
	"post_type": "gen_project",
	"lat": 54.5601,
	"lng": -7.3606
}, {
	"ID": "3801",
	"post_title": "Camphill Community:  Mourne Grange",
	"post_type": "gen_project",
	"lat": 54.0636,
	"lng": -6.0079
}, {
	"ID": "3803",
	"post_title": "Delphin-Gemeinschaft",
	"post_type": "gen_project",
	"lat": 47.6489,
	"lng": 7.996
}, {
	"ID": "3804",
	"post_title": "Forum-Vauban",
	"post_type": "gen_project",
	"lat": 47.9753,
	"lng": 7.8253
}, {
	"ID": "3807",
	"post_title": "Kommune Niederkaufungen",
	"post_type": "gen_project",
	"lat": 51.2854,
	"lng": 9.6019
}, {
	"ID": "3811",
	"post_title": "Ces",
	"post_type": "gen_project",
	"lat": 46.4229,
	"lng": 8.844
}, {
	"ID": "3823",
	"post_title": "Kookaburra Park",
	"post_type": "gen_project",
	"lat": -24.9933,
	"lng": 151.9603
}, {
	"ID": "3824",
	"post_title": "Otamatea Ecovillage",
	"post_type": "gen_project",
	"lat": -36.1612,
	"lng": 174.4434
}, {
	"ID": "3825",
	"post_title": "Patanga",
	"post_type": "gen_project",
	"lat": -30.4383,
	"lng": 152.6945
}, {
	"ID": "3826",
	"post_title": "Rosneath Farm",
	"post_type": "gen_project",
	"lat": -33.6155,
	"lng": 115.108
}, {
	"ID": "3827",
	"post_title": "Round the Bend Conservation Co-op Ltd",
	"post_type": "gen_project",
	"lat": -37.6908,
	"lng": 145.2158
}, {
	"ID": "3829",
	"post_title": "Tui Community",
	"post_type": "gen_project",
	"lat": -40.8585,
	"lng": 172.8085
}, {
	"ID": "3830",
	"post_title": "Aldinga Arts Ecovillage",
	"post_type": "gen_project",
	"lat": -35.2653,
	"lng": 138.4784
}, {
	"ID": "3834",
	"post_title": "Thanamalwila",
	"post_type": "gen_project",
	"lat": 6.7964,
	"lng": 79.8778
}, {
	"ID": "3836",
	"post_title": "Awaawaroa Bay Ecovillage",
	"post_type": "gen_project",
	"lat": -36.8019,
	"lng": 175.108
}, {
	"ID": "3838",
	"post_title": "Schloss Glarisegg",
	"post_type": "gen_project",
	"lat": 47.6548,
	"lng": 8.9567
}, {
	"ID": "3840",
	"post_title": "Tribe of Likatien",
	"post_type": "gen_project",
	"lat": 47.5671,
	"lng": 10.6993
}, {
	"ID": "3841",
	"post_title": "Main Arm Eco Village",
	"post_type": "gen_project",
	"lat": -28.5534,
	"lng": 153.4996
}, {
	"ID": "3846",
	"post_title": "La Peque\xF1a Granja de Mam\xE1 Lul\xFA",
	"post_type": "gen_project",
	"lat": 4.5522,
	"lng": -75.652
}, {
	"ID": "3848",
	"post_title": "Ecoaldea Alborada",
	"post_type": "gen_project",
	"lat": 7.8932,
	"lng": -72.2408
}, {
	"ID": "3852",
	"post_title": "Kohatu Toa Ecovillage",
	"post_type": "gen_project",
	"lat": -36.1237,
	"lng": 174.431
}, {
	"ID": "3857",
	"post_title": "Parque Visao Futuro",
	"post_type": "gen_project",
	"lat": -23.1789,
	"lng": -48.121
}, {
	"ID": "3860",
	"post_title": "Eltham Ecovillage - dulaiwurrong vi",
	"post_type": "gen_project",
	"lat": -37.7136,
	"lng": 145.1488
}, {
	"ID": "3863",
	"post_title": "AIH Andelssamfundet i Hjortsh\xF6j",
	"post_type": "gen_project",
	"lat": 56.1629,
	"lng": 10.2039
}, {
	"ID": "3864",
	"post_title": "Dedetepe Farm",
	"post_type": "gen_project",
	"lat": 39.5486,
	"lng": 26.6117
}, {
	"ID": "3867",
	"post_title": "Ecoaldea San Miguel  - Colombia -",
	"post_type": "gen_project",
	"lat": 5.026,
	"lng": -74.03
}, {
	"ID": "3869",
	"post_title": "San Mateo Ecovillage",
	"post_type": "gen_project",
	"lat": 37.5403,
	"lng": -122.2785
}, {
	"ID": "3870",
	"post_title": "Yarrow EcoVillage",
	"post_type": "gen_project",
	"lat": 49.0821,
	"lng": -122.0526
}, {
	"ID": "3871",
	"post_title": "Zajezka",
	"post_type": "gen_project",
	"lat": 48.4194,
	"lng": 19.1599
}, {
	"ID": "3875",
	"post_title": "Ecovillage Kovcheg (not GEN member)",
	"post_type": "gen_project",
	"lat": 54.5519,
	"lng": 36.2851
}, {
	"ID": "3876",
	"post_title": "Rampur",
	"post_type": "gen_project",
	"lat": 27.4874,
	"lng": 84.4803
}, {
	"ID": "3877",
	"post_title": "Port Townsend EcoVillage",
	"post_type": "gen_project",
	"lat": 48.1252,
	"lng": -122.7817
}, {
	"ID": "3878",
	"post_title": "Vilaj Espwa",
	"post_type": "gen_project",
	"lat": 18.2,
	"lng": -73.75
}, {
	"ID": "3879",
	"post_title": "Kaditah",
	"post_type": "gen_project",
	"lat": 32.9647,
	"lng": 35.496
}, {
	"ID": "3880",
	"post_title": "Hurdalecovillage",
	"post_type": "gen_project",
	"lat": 60.4359,
	"lng": 11.0661
}, {
	"ID": "3881",
	"post_title": "Progetto Pecora Nera",
	"post_type": "gen_project",
	"lat": 46.4349,
	"lng": 12.873
}, {
	"ID": "3882",
	"post_title": "The Change",
	"post_type": "gen_project",
	"lat": -42.8287,
	"lng": 147.269
}, {
	"ID": "3883",
	"post_title": "Lost Valley Education &amp; Event Center",
	"post_type": "gen_project",
	"lat": 43.8902,
	"lng": -122.8221
}, {
	"ID": "3884",
	"post_title": "Kakwa Ecovillage Cooperative",
	"post_type": "gen_project",
	"lat": 53.7215,
	"lng": -120.9043
}, {
	"ID": "3885",
	"post_title": "Vlierhof",
	"post_type": "gen_project",
	"lat": 51.8467,
	"lng": 6.0812
}, {
	"ID": "3886",
	"post_title": "Toronto Ecovillage Project",
	"post_type": "gen_project",
	"lat": 43.6602,
	"lng": -79.4438
}, {
	"ID": "3887",
	"post_title": "Berea College Ecovillage",
	"post_type": "gen_project",
	"lat": 37.5687,
	"lng": -84.2963
}, {
	"ID": "3888",
	"post_title": "Cleveland EcoVillage",
	"post_type": "gen_project",
	"lat": 41.4995,
	"lng": -81.6954
}, {
	"ID": "3890",
	"post_title": "Earthwalk",
	"post_type": "gen_project",
	"lat": 44.005,
	"lng": -77.888
}, {
	"ID": "3892",
	"post_title": "Ecoaldea Vega de los Rios",
	"post_type": "gen_project",
	"lat": 36.7367,
	"lng": -4.8624
}, {
	"ID": "3893",
	"post_title": "Santa Branca Ecovillage",
	"post_type": "gen_project",
	"lat": -22.4123,
	"lng": -42.9664
}, {
	"ID": "3895",
	"post_title": "Finca El Zopilote",
	"post_type": "gen_project",
	"lat": 11.5,
	"lng": -85.5833
}, {
	"ID": "3899",
	"post_title": "Green Valley EcoVillage",
	"post_type": "gen_project",
	"lat": 1.6518,
	"lng": 103.6037
}, {
	"ID": "3902",
	"post_title": "Anarres - Ca' Favale",
	"post_type": "gen_project",
	"lat": 44.342,
	"lng": 9.441
}, {
	"ID": "3907",
	"post_title": "ALDEA MAGIKA",
	"post_type": "gen_project",
	"lat": 4.5981,
	"lng": -74.0758
}, {
	"ID": "3908",
	"post_title": "Ecovillage Mont Radar",
	"post_type": "gen_project",
	"lat": 46.3461,
	"lng": -71.2019
}, {
	"ID": "3909",
	"post_title": "Nevada City, Ca. Ecovillage",
	"post_type": "gen_project",
	"lat": 39.2614,
	"lng": -121.011
}, {
	"ID": "3912",
	"post_title": "BIOSFERA",
	"post_type": "gen_project",
	"lat": 18.5398,
	"lng": -88.272
}, {
	"ID": "3914",
	"post_title": "Reserva Integral y Ecoaldea Sasardi",
	"post_type": "gen_project",
	"lat": 8.5142,
	"lng": -77.2815
}, {
	"ID": "3916",
	"post_title": "Agrovilla El Prado",
	"post_type": "gen_project",
	"lat": 4.7874,
	"lng": -75.6442
}, {
	"ID": "3917",
	"post_title": "Buyukkonuk",
	"post_type": "gen_project",
	"lat": 35.4244,
	"lng": 33.9861
}, {
	"ID": "3918",
	"post_title": "FalconBlanco",
	"post_type": "gen_project",
	"lat": 38.9089,
	"lng": 1.4324
}, {
	"ID": "3920",
	"post_title": "Ethnic village",
	"post_type": "gen_project",
	"lat": 55.7428,
	"lng": 37.6154
}, {
	"ID": "3924",
	"post_title": "Clos du Doubs",
	"post_type": "gen_project",
	"lat": 47.3087,
	"lng": 7.0484
}, {
	"ID": "3926",
	"post_title": "Krisna-v\xF6lgy (Krishna-valley)",
	"post_type": "gen_project",
	"lat": 46.5712,
	"lng": 17.684
}, {
	"ID": "3928",
	"post_title": "Red Colombiana de Reservas Naturales",
	"post_type": "gen_project",
	"lat": 4.5981,
	"lng": -74.0758
}, {
	"ID": "3929",
	"post_title": "Ecoaldea Manuar\xE9",
	"post_type": "gen_project",
	"lat": 8.7628,
	"lng": -75.892
}, {
	"ID": "3931",
	"post_title": "Yacu Yura",
	"post_type": "gen_project",
	"lat": -31.4799,
	"lng": -64.2135
}, {
	"ID": "3932",
	"post_title": "EcoNorfolk Foundation",
	"post_type": "gen_project",
	"lat": -29.0298,
	"lng": 167.9329
}, {
	"ID": "3934",
	"post_title": "Dapala Farm",
	"post_type": "gen_project",
	"lat": 35.4226,
	"lng": -99.3974
}, {
	"ID": "3938",
	"post_title": "garden villa",
	"post_type": "gen_project",
	"lat": 10.2357,
	"lng": 77.4903
}, {
	"ID": "3939",
	"post_title": "Blackwood\/Earthcare Permaculture",
	"post_type": "gen_project",
	"lat": -37.6538,
	"lng": 145.517
}, {
	"ID": "3941",
	"post_title": "EcoReality Coop",
	"post_type": "gen_project",
	"lat": 48.8615,
	"lng": -123.522
}, {
	"ID": "3942",
	"post_title": "Natural Health Center - NatTech",
	"post_type": "gen_project",
	"lat": 3.5228,
	"lng": -76.1878
}, {
	"ID": "3946",
	"post_title": "Earthaven Ecovillage",
	"post_type": "gen_project",
	"lat": 35.5273,
	"lng": -82.208
}, {
	"ID": "3947",
	"post_title": "Ecovillage at Ithaca",
	"post_type": "gen_project",
	"lat": 42.4443,
	"lng": -76.5403
}, {
	"ID": "3948",
	"post_title": "imece Evi",
	"post_type": "gen_project",
	"lat": 38.7238,
	"lng": 27.1593
}, {
	"ID": "3952",
	"post_title": "Big Stone",
	"post_type": "gen_project",
	"lat": 59.8707,
	"lng": 40.6555
}, {
	"ID": "3954",
	"post_title": "Dancing Rabbit Ecovillage",
	"post_type": "gen_project",
	"lat": 40.3326,
	"lng": -92.0963
}, {
	"ID": "3955",
	"post_title": "Terra UNA",
	"post_type": "gen_project",
	"lat": -22.0283,
	"lng": -44.3163
}, {
	"ID": "3957",
	"post_title": "Sky Meadow Retreat Community",
	"post_type": "gen_project",
	"lat": 44.5448,
	"lng": -72.2611
}, {
	"ID": "3959",
	"post_title": "San Diego Ecovillage",
	"post_type": "gen_project",
	"lat": 32.7519,
	"lng": -117.0986
}, {
	"ID": "3960",
	"post_title": "Anglesey Ecological Village",
	"post_type": "gen_project",
	"lat": 53.2274,
	"lng": -4.1293
}, {
	"ID": "3963",
	"post_title": "The Panya Project",
	"post_type": "gen_project",
	"lat": 19.1366,
	"lng": 98.9487
}, {
	"ID": "3964",
	"post_title": "Eco Truly Park - Eco Village",
	"post_type": "gen_project",
	"lat": -11.6018,
	"lng": -77.2004
}, {
	"ID": "3965",
	"post_title": "Pun Pun",
	"post_type": "gen_project",
	"lat": 19.2102,
	"lng": 98.8804
}, {
	"ID": "3966",
	"post_title": "Children's Village School",
	"post_type": "gen_project",
	"lat": 14.6701,
	"lng": 99.0129
}, {
	"ID": "3968",
	"post_title": "Global Community Communications All",
	"post_type": "gen_project",
	"lat": 31.5772,
	"lng": -111.0379
}, {
	"ID": "3970",
	"post_title": "Aldeafeliz",
	"post_type": "gen_project",
	"lat": 4.9698,
	"lng": -74.2976
}, {
	"ID": "3971",
	"post_title": "Gaia University and Gaia U Latina",
	"post_type": "gen_project",
	"lat": 40.0174,
	"lng": -105.25
}, {
	"ID": "3972",
	"post_title": "Pacific Gardens Cohousing Community",
	"post_type": "gen_project",
	"lat": 49.1638,
	"lng": -124.0361
}, {
	"ID": "3973",
	"post_title": "Arboretum Cohousing",
	"post_type": "gen_project",
	"lat": 43.0599,
	"lng": -89.4054
}, {
	"ID": "3975",
	"post_title": "Ecovila Felicidade",
	"post_type": "gen_project",
	"lat": -7.1153,
	"lng": -34.8611
}, {
	"ID": "3977",
	"post_title": "Clearwater Commons",
	"post_type": "gen_project",
	"lat": 47.8221,
	"lng": -122.214
}, {
	"ID": "3982",
	"post_title": "Nashira un canto de Amor",
	"post_type": "gen_project",
	"lat": 3.4628,
	"lng": -76.3328
}, {
	"ID": "3983",
	"post_title": "ECOlonie - Centre Ecologique International",
	"post_type": "gen_project",
	"lat": 48.0504,
	"lng": 6.1046
}, {
	"ID": "3985",
	"post_title": "Earthsong Eco-Neighbourhood",
	"post_type": "gen_project",
	"lat": -36.8639,
	"lng": 174.6024
}, {
	"ID": "3986",
	"post_title": "KAPIEVI ECOALDEA",
	"post_type": "gen_project",
	"lat": -12.5924,
	"lng": -69.1943
}, {
	"ID": "3988",
	"post_title": "Whole Village",
	"post_type": "gen_project",
	"lat": 43.8491,
	"lng": -80.1068
}, {
	"ID": "3989",
	"post_title": "Community Land Trust Bliss",
	"post_type": "gen_project",
	"lat": 8.624,
	"lng": -83.1622
}, {
	"ID": "3992",
	"post_title": "Alderleaf Farm and Wilderness Colle",
	"post_type": "gen_project",
	"lat": 47.8283,
	"lng": -121.8273
}, {
	"ID": "3993",
	"post_title": "Seaview Performing Arts Center for",
	"post_type": "gen_project",
	"lat": 19.4975,
	"lng": -154.9508
}, {
	"ID": "3995",
	"post_title": "Comuna de Rhiannon",
	"post_type": "gen_project",
	"lat": 0.0513,
	"lng": -78.23
}, {
	"ID": "3997",
	"post_title": "Gaijan Luomukyl\xE4",
	"post_type": "gen_project",
	"lat": 62.5209,
	"lng": 24.0864
}, {
	"ID": "3999",
	"post_title": "fondale",
	"post_type": "gen_project",
	"lat": 42.2255,
	"lng": 9.4172
}, {
	"ID": "4000",
	"post_title": "Rancho Estrella",
	"post_type": "gen_project",
	"lat": 38.3006,
	"lng": -122.4029
}, {
	"ID": "4001",
	"post_title": "Atamai Village",
	"post_type": "gen_project",
	"lat": -41.1431,
	"lng": 172.9571
}, {
	"ID": "4002",
	"post_title": "Suderbyn Permaculture Eco-village",
	"post_type": "gen_project",
	"lat": 57.5738,
	"lng": 18.2085
}, {
	"ID": "4005",
	"post_title": "Finca Las Brisas",
	"post_type": "gen_project",
	"lat": 10.4958,
	"lng": -85.355
}, {
	"ID": "4006",
	"post_title": "Solaris Valhalla CSA Farm and Educa",
	"post_type": "gen_project",
	"lat": 37.1271,
	"lng": -92.0171
}, {
	"ID": "4008",
	"post_title": "Wilderland",
	"post_type": "gen_project",
	"lat": -36.8884,
	"lng": 175.6801
}, {
	"ID": "4010",
	"post_title": "KNIDIA Eco-Farm",
	"post_type": "gen_project",
	"lat": 36.7283,
	"lng": 27.6869
}, {
	"ID": "4012",
	"post_title": "Garp eco volunteer-community",
	"post_type": "gen_project",
	"lat": 40.1553,
	"lng": 26.4142
}, {
	"ID": "4013",
	"post_title": "Godhuli",
	"post_type": "gen_project",
	"lat": 19.076,
	"lng": 72.8777
}, {
	"ID": "4014",
	"post_title": "Copiii Soarelui",
	"post_type": "gen_project",
	"lat": 46.1243,
	"lng": 22.7873
}, {
	"ID": "4016",
	"post_title": "Kalikalos Holistic Education Centres",
	"post_type": "gen_project",
	"lat": 39.3646,
	"lng": 22.9332
}, {
	"ID": "4018",
	"post_title": "ASB Valley Panpoli",
	"post_type": "gen_project",
	"lat": 9.0225,
	"lng": 77.2506
}, {
	"ID": "4019",
	"post_title": "Livonsaaren yhteis\xF6kyl\xE4",
	"post_type": "gen_project",
	"lat": 60.515,
	"lng": 21.7527
}, {
	"ID": "4021",
	"post_title": "Enargeia",
	"post_type": "gen_project",
	"lat": 39.191,
	"lng": 23.2171
}, {
	"ID": "4022",
	"post_title": "baliecovillage",
	"post_type": "gen_project",
	"lat": -8.6563,
	"lng": 115.2221
}, {
	"ID": "4023",
	"post_title": "Sapney",
	"post_type": "gen_project",
	"lat": 12.0069,
	"lng": 79.8106
}, {
	"ID": "4024",
	"post_title": "upland hills learning community",
	"post_type": "gen_project",
	"lat": 42.8053,
	"lng": -83.1919
}, {
	"ID": "4025",
	"post_title": "TerraVie",
	"post_type": "gen_project",
	"lat": 45.9592,
	"lng": -74.5497
}, {
	"ID": "4027",
	"post_title": "Kaszonszek Okofalu",
	"post_type": "gen_project",
	"lat": 46.2249,
	"lng": 26.1005
}, {
	"ID": "4028",
	"post_title": "Common House - Vasjunino",
	"post_type": "gen_project",
	"lat": 55.7558,
	"lng": 37.6173
}, {
	"ID": "4029",
	"post_title": "Sacred Garden Sanctuary",
	"post_type": "gen_project",
	"lat": 31.3446,
	"lng": -109.5453
}, {
	"ID": "4030",
	"post_title": "Peace Factory",
	"post_type": "gen_project",
	"lat": 43.315,
	"lng": 2.2217
}, {
	"ID": "4031",
	"post_title": "Dyssekilde \xD8kosamfund",
	"post_type": "gen_project",
	"lat": 55.9678,
	"lng": 11.859
}, {
	"ID": "4032",
	"post_title": "Eco Yoga Park",
	"post_type": "gen_project",
	"lat": -34.5874,
	"lng": -58.8852
}, {
	"ID": "4033",
	"post_title": "Hickory Nut Forest Eco-Community",
	"post_type": "gen_project",
	"lat": 35.471,
	"lng": -82.3358
}, {
	"ID": "4034",
	"post_title": "Green New World - Finca Nuevo Mundo",
	"post_type": "gen_project",
	"lat": 14.7239,
	"lng": -91.259
}, {
	"ID": "4035",
	"post_title": "The Timbaktu Collective",
	"post_type": "gen_project",
	"lat": 14.6707,
	"lng": 77.5907
}, {
	"ID": "4036",
	"post_title": "Schweibenalp - Center of Unity",
	"post_type": "gen_project",
	"lat": 46.7566,
	"lng": 8.0299
}, {
	"ID": "4037",
	"post_title": "Cloughjordan Ecovillage",
	"post_type": "gen_project",
	"lat": 52.9551,
	"lng": -7.7992
}, {
	"ID": "4039",
	"post_title": "Meltemi",
	"post_type": "gen_project",
	"lat": 38.0041,
	"lng": 24.0233
}, {
	"ID": "4041",
	"post_title": "Arca Verde",
	"post_type": "gen_project",
	"lat": -29.4829,
	"lng": -50.5087
}, {
	"ID": "4044",
	"post_title": "Jindibah Community",
	"post_type": "gen_project",
	"lat": -28.6545,
	"lng": 153.5191
}, {
	"ID": "4045",
	"post_title": "Awakened Life Project",
	"post_type": "gen_project",
	"lat": 40.2186,
	"lng": -7.9352
}, {
	"ID": "4046",
	"post_title": "Fuente Verde",
	"post_type": "gen_project",
	"lat": 9.366,
	"lng": -83.6961
}, {
	"ID": "4047",
	"post_title": "Rydebacke",
	"post_type": "gen_project",
	"lat": 57.5833,
	"lng": 12.35
}, {
	"ID": "4049",
	"post_title": "The Ecovillage at Currumbin",
	"post_type": "gen_project",
	"lat": -28.176,
	"lng": 153.4294
}, {
	"ID": "4050",
	"post_title": "Herzfeld Sennrueti",
	"post_type": "gen_project",
	"lat": 47.376,
	"lng": 9.1927
}, {
	"ID": "4051",
	"post_title": "Kasteel Nieuwenhoven",
	"post_type": "gen_project",
	"lat": 50.8593,
	"lng": 5.2074
}, {
	"ID": "4052",
	"post_title": "Sawyer Hill Ecovillage",
	"post_type": "gen_project",
	"lat": 42.3716,
	"lng": -71.6255
}, {
	"ID": "4053",
	"post_title": "The Source Farm",
	"post_type": "gen_project",
	"lat": 18.1747,
	"lng": -76.4369
}, {
	"ID": "4054",
	"post_title": "ECOVILLAGE VIVER SIMPLES",
	"post_type": "gen_project",
	"lat": -22.289,
	"lng": -44.868
}, {
	"ID": "4055",
	"post_title": "Lubinka",
	"post_type": "gen_project",
	"lat": 55.6864,
	"lng": 37.5694
}, {
	"ID": "4059",
	"post_title": "Dutlar Kollektifi",
	"post_type": "gen_project",
	"lat": 38.7106,
	"lng": 27.1677
}, {
	"ID": "4060",
	"post_title": "Matavenero y Poibueno",
	"post_type": "gen_project",
	"lat": 42.5359,
	"lng": -6.3734
}, {
	"ID": "4061",
	"post_title": "Konohana Family",
	"post_type": "gen_project",
	"lat": 35.2602,
	"lng": 138.5647
}, {
	"ID": "4063",
	"post_title": "Schastlivoe",
	"post_type": "gen_project",
	"lat": 47.2833,
	"lng": 28.5833
}, {
	"ID": "4064",
	"post_title": "tabbowa eco village",
	"post_type": "gen_project",
	"lat": 8.0342,
	"lng": 79.8353
}, {
	"ID": "4067",
	"post_title": "Dolok Zior Village",
	"post_type": "gen_project",
	"lat": -0.5897,
	"lng": 101.3431
}, {
	"ID": "4069",
	"post_title": "Comunidade Solaris",
	"post_type": "gen_project",
	"lat": -11.4099,
	"lng": -41.2809
}, {
	"ID": "4070",
	"post_title": "Govardhan Ecovillage",
	"post_type": "gen_project",
	"lat": 19.6555,
	"lng": 72.9656
}, {
	"ID": "4074",
	"post_title": "communidad en construcci\xC3\xB2n Pared",
	"post_type": "gen_project",
	"lat": -14.95,
	"lng": -61.5333
}, {
	"ID": "4076",
	"post_title": "SHARE(Seres Humanos Al Rescate Ecol",
	"post_type": "gen_project",
	"lat": 19.556,
	"lng": -99.2318
}, {
	"ID": "4078",
	"post_title": "Douceur et Harmonie:  Domain Maman T",
	"post_type": "gen_project",
	"lat": 42.3975,
	"lng": 2.5544
}, {
	"ID": "4079",
	"post_title": "El Manzano",
	"post_type": "gen_project",
	"lat": -37.0333,
	"lng": -72.4
}, {
	"ID": "4081",
	"post_title": "InanItah",
	"post_type": "gen_project",
	"lat": 11.4703,
	"lng": -85.519
}, {
	"ID": "4082",
	"post_title": "Ecotopia",
	"post_type": "gen_project",
	"lat": 38.4285,
	"lng": 20.6765
}, {
	"ID": "4083",
	"post_title": "Serene - A mission to survive...",
	"post_type": "gen_project",
	"lat": 18.2963,
	"lng": 73.6374
}, {
	"ID": "4084",
	"post_title": "Comunidad Ecologica de Pe\xF1alol\xE9n",
	"post_type": "gen_project",
	"lat": -33.4167,
	"lng": -70.55
}, {
	"ID": "4086",
	"post_title": "Huehuecoyotl",
	"post_type": "gen_project",
	"lat": 18.9861,
	"lng": -99.0781
}, {
	"ID": "4087",
	"post_title": "Anna Eco Village Resort",
	"post_type": "gen_project",
	"lat": 28.2026,
	"lng": 83.985
}, {
	"ID": "4089",
	"post_title": "Prairie Sage Colorado",
	"post_type": "gen_project",
	"lat": 40.015,
	"lng": -105.2706
}, {
	"ID": "4091",
	"post_title": "amor y paz",
	"post_type": "gen_project",
	"lat": 3.4206,
	"lng": -76.5222
}, {
	"ID": "4094",
	"post_title": "Te Manawa Eco village",
	"post_type": "gen_project",
	"lat": -41.2706,
	"lng": 173.284
}, {
	"ID": "4095",
	"post_title": "Ecovillage Bhrugu Aranya",
	"post_type": "gen_project",
	"lat": 49.6676,
	"lng": 19.8193
}, {
	"ID": "4096",
	"post_title": "Nuevo Durango",
	"post_type": "gen_project",
	"lat": 20.7335,
	"lng": -87.5916
}, {
	"ID": "4097",
	"post_title": "Sadhana Forest",
	"post_type": "gen_project",
	"lat": 12.0069,
	"lng": 79.8106
}, {
	"ID": "4103",
	"post_title": "Neshobe Farm",
	"post_type": "gen_project",
	"lat": 43.806,
	"lng": -73.1017
}, {
	"ID": "4105",
	"post_title": "Katywil Farm Community",
	"post_type": "gen_project",
	"lat": 42.7023,
	"lng": -72.7768
}, {
	"ID": "4106",
	"post_title": "CastelMerlino",
	"post_type": "gen_project",
	"lat": 44.2784,
	"lng": 11.2679
}, {
	"ID": "4107",
	"post_title": "Michigan EcoVillage",
	"post_type": "gen_project",
	"lat": 42.9754,
	"lng": -83.7518
}, {
	"ID": "4108",
	"post_title": "Ixixtlan",
	"post_type": "gen_project",
	"lat": 18.8707,
	"lng": -98.3983
}, {
	"ID": "4110",
	"post_title": "LaSenda Ecovillage",
	"post_type": "gen_project",
	"lat": 20.9118,
	"lng": -100.7408
}, {
	"ID": "4115",
	"post_title": "Free and Real - The Telaithrion Project",
	"post_type": "gen_project",
	"lat": 38.9488,
	"lng": 23.1362
}, {
	"ID": "4117",
	"post_title": "Betterfields Community",
	"post_type": "gen_project",
	"lat": 36.7783,
	"lng": -119.4179
}, {
	"ID": "4118",
	"post_title": "Earth Mountain Education Farm",
	"post_type": "gen_project",
	"lat": 37.2575,
	"lng": -104.9104
}, {
	"ID": "4120",
	"post_title": "il popolo elfico",
	"post_type": "gen_project",
	"lat": 44.1081,
	"lng": 11.0046
}, {
	"ID": "4122",
	"post_title": "Ecovillage Hawaii",
	"post_type": "gen_project",
	"lat": 19.7297,
	"lng": -155.09
}, {
	"ID": "4123",
	"post_title": "Charlottendals Farm and EcoVillage",
	"post_type": "gen_project",
	"lat": 59.0941,
	"lng": 17.5586
}, {
	"ID": "4124",
	"post_title": "Schloss Tempelhof",
	"post_type": "gen_project",
	"lat": 49.1262,
	"lng": 10.2065
}, {
	"ID": "4125",
	"post_title": "Ferme de la Chaux,  Goshen",
	"post_type": "gen_project",
	"lat": 47.1976,
	"lng": 5.1682
}, {
	"ID": "4127",
	"post_title": "Ecovillaggio Habitat",
	"post_type": "gen_project",
	"lat": 43.5401,
	"lng": 10.9549
}, {
	"ID": "4128",
	"post_title": "Bodhi Farms",
	"post_type": "gen_project",
	"lat": 35.5013,
	"lng": -105.2487
}, {
	"ID": "4129",
	"post_title": "Witchcliffe Ecovillage",
	"post_type": "gen_project",
	"lat": -34.0296,
	"lng": 115.1043
}, {
	"ID": "4131",
	"post_title": "White Hawk Ecovillage",
	"post_type": "gen_project",
	"lat": 42.3623,
	"lng": -76.4893
}, {
	"ID": "4133",
	"post_title": "Tasman Ecovillage",
	"post_type": "gen_project",
	"lat": -43.0942,
	"lng": 147.7429
}, {
	"ID": "4134",
	"post_title": "Mama Roja",
	"post_type": "gen_project",
	"lat": -27.4667,
	"lng": -55
}, {
	"ID": "4135",
	"post_title": "Aurora Dwelling Circle",
	"post_type": "gen_project",
	"lat": 42.446,
	"lng": -76.496
}, {
	"ID": "4137",
	"post_title": "Aldea 506 Ecovillage",
	"post_type": "gen_project",
	"lat": 10.3777,
	"lng": -84.6113
}, {
	"ID": "4138",
	"post_title": "One Island",
	"post_type": "gen_project",
	"lat": 19.4438,
	"lng": -155.8889
}, {
	"ID": "4139",
	"post_title": "Claytor Nature Study Center",
	"post_type": "gen_project",
	"lat": 37.4007,
	"lng": -79.1829
}, {
	"ID": "4140",
	"post_title": "Christie Walk",
	"post_type": "gen_project",
	"lat": -34.9333,
	"lng": 138.5965
}, {
	"ID": "4141",
	"post_title": "Ecovila da Montanha",
	"post_type": "gen_project",
	"lat": -14.7817,
	"lng": -47.5533
}, {
	"ID": "4142",
	"post_title": "Tranc\xC6dventure",
	"post_type": "gen_project",
	"lat": 45.8878,
	"lng": 13.7377
}, {
	"ID": "4143",
	"post_title": "Aldeas de Paz",
	"post_type": "gen_project",
	"lat": 4.6021,
	"lng": -61.1112
}, {
	"ID": "4144",
	"post_title": "Bello Horizonte",
	"post_type": "gen_project",
	"lat": 30.9857,
	"lng": -114.8237
}, {
	"ID": "4147",
	"post_title": "Ringing Cedar Project",
	"post_type": "gen_project",
	"lat": 43.781,
	"lng": -79.3463
}, {
	"ID": "4150",
	"post_title": "Shiram",
	"post_type": "gen_project",
	"lat": 61.524,
	"lng": 105.3188
}, {
	"ID": "4152",
	"post_title": "KULBASH",
	"post_type": "gen_project",
	"lat": 55.8006,
	"lng": 49.1056
}, {
	"ID": "4153",
	"post_title": "Hundredfold Farm Cohousing",
	"post_type": "gen_project",
	"lat": 39.8896,
	"lng": -77.3762
}, {
	"ID": "4154",
	"post_title": "LECASE",
	"post_type": "gen_project",
	"lat": 32.807,
	"lng": -117.258
}, {
	"ID": "4155",
	"post_title": "Proyecto Ecoaldea",
	"post_type": "gen_project",
	"lat": 40.4167,
	"lng": -3.7004
}, {
	"ID": "4156",
	"post_title": "Belfast Cohousing and Ecovillage",
	"post_type": "gen_project",
	"lat": 44.4259,
	"lng": -69.0064
}, {
	"ID": "4158",
	"post_title": "Hummingbird Community",
	"post_type": "gen_project",
	"lat": 35.9611,
	"lng": -105.4185
}, {
	"ID": "4160",
	"post_title": "To the Garden",
	"post_type": "gen_project",
	"lat": 37.0112,
	"lng": 25.128
}, {
	"ID": "4165",
	"post_title": "Sachawasi",
	"post_type": "gen_project",
	"lat": -14.7192,
	"lng": -68.4114
}, {
	"ID": "4166",
	"post_title": "Cite Ecologique (Qc,  Canada)",
	"post_type": "gen_project",
	"lat": 45.8536,
	"lng": -71.64
}, {
	"ID": "4168",
	"post_title": "Wongsanit Ashram",
	"post_type": "gen_project",
	"lat": 14.0014,
	"lng": 100.9965
}, {
	"ID": "4169",
	"post_title": "The Village Project",
	"post_type": "gen_project",
	"lat": 48.4286,
	"lng": -123.3656
}, {
	"ID": "4171",
	"post_title": "Taman Petanu Eco Neighborhood",
	"post_type": "gen_project",
	"lat": -8.5519,
	"lng": 115.2845
}, {
	"ID": "4172",
	"post_title": "Ecoaldea Espiral De Luz",
	"post_type": "gen_project",
	"lat": -14.95,
	"lng": -61.5333
}, {
	"ID": "4174",
	"post_title": "New Earth Mountain Village.",
	"post_type": "gen_project",
	"lat": 53.7267,
	"lng": -127.6476
}, {
	"ID": "4176",
	"post_title": "Seonae Ville",
	"post_type": "gen_project",
	"lat": 36.4895,
	"lng": 127.7295
}, {
	"ID": "4177",
	"post_title": "Ganas Community",
	"post_type": "gen_project",
	"lat": 40.6379,
	"lng": -74.0833
}, {
	"ID": "4178",
	"post_title": "Seonae Ecovillage",
	"post_type": "gen_project",
	"lat": 36.4895,
	"lng": 127.7295
}, {
	"ID": "4179",
	"post_title": "Sat Yoga Ecovilliage",
	"post_type": "gen_project",
	"lat": 9.419,
	"lng": -83.795
}, {
	"ID": "4182",
	"post_title": "Polestar Gardens",
	"post_type": "gen_project",
	"lat": 19.4975,
	"lng": -154.9508
}, {
	"ID": "4184",
	"post_title": "SoFair Farms",
	"post_type": "gen_project",
	"lat": 40.96,
	"lng": -91.922
}, {
	"ID": "4186",
	"post_title": "Chyrvony Kastrychnik",
	"post_type": "gen_project",
	"lat": 52.4453,
	"lng": 30.9842
}, {
	"ID": "4188",
	"post_title": "Valterra Village eCohousing",
	"post_type": "gen_project",
	"lat": 49.3441,
	"lng": -124.4763
}, {
	"ID": "4192",
	"post_title": "H\xE4stekasen permaculture farm,  learning and adventure center",
	"post_type": "gen_project",
	"lat": 58.2711,
	"lng": 11.6256
}, {
	"ID": "4193",
	"post_title": "Not yet named",
	"post_type": "gen_project",
	"lat": 25.392,
	"lng": -76.5559
}, {
	"ID": "4195",
	"post_title": "Atlan Center",
	"post_type": "gen_project",
	"lat": 45.7909,
	"lng": -121.5377
}, {
	"ID": "4196",
	"post_title": "PachaMama",
	"post_type": "gen_project",
	"lat": 10.0346,
	"lng": -85.7391
}, {
	"ID": "4201",
	"post_title": "THREAD,  Siddharth ecovillage",
	"post_type": "gen_project",
	"lat": 20.2961,
	"lng": 85.8245
}, {
	"ID": "4202",
	"post_title": "Kaveri Kogukond",
	"post_type": "gen_project",
	"lat": 58.3776,
	"lng": 26.9831
}, {
	"ID": "4204",
	"post_title": "The Hollies Centre for Practical Sustainability",
	"post_type": "gen_project",
	"lat": 51.8979,
	"lng": -8.4711
}, {
	"ID": "4205",
	"post_title": "VerdEnergia Pacifica",
	"post_type": "gen_project",
	"lat": 9.6221,
	"lng": -84.4991
}, {
	"ID": "4209",
	"post_title": "A settlement is GIFT",
	"post_type": "gen_project",
	"lat": 53.6978,
	"lng": 91.6963
}, {
	"ID": "4210",
	"post_title": "Magdala Ecovila",
	"post_type": "gen_project",
	"lat": -20.5418,
	"lng": -47.4197
}, {
	"ID": "4213",
	"post_title": "Coffee Creek Community and Gardens",
	"post_type": "gen_project",
	"lat": 46.7462,
	"lng": -122.9579
}, {
	"ID": "4214",
	"post_title": "Rama Negra - ECHO MOVEMENT- Argenti",
	"post_type": "gen_project",
	"lat": -34.707,
	"lng": -58.4774
}, {
	"ID": "4215",
	"post_title": "Adamama",
	"post_type": "gen_project",
	"lat": 31.4775,
	"lng": 34.6301
}, {
	"ID": "4216",
	"post_title": "Energy Ecotourism of Poncosari in I",
	"post_type": "gen_project",
	"lat": -7.7972,
	"lng": 110.3688
}, {
	"ID": "4218",
	"post_title": "Wisdom Forest",
	"post_type": "gen_project",
	"lat": -0.9833,
	"lng": -77.8167
}, {
	"ID": "4221",
	"post_title": "Okanagan Ecovillage",
	"post_type": "gen_project",
	"lat": 50.2507,
	"lng": -118.9678
}, {
	"ID": "4222",
	"post_title": "Smiltenei un Latvijai",
	"post_type": "gen_project",
	"lat": 57.4247,
	"lng": 25.9016
}, {
	"ID": "4223",
	"post_title": "Lodgecol",
	"post_type": "gen_project",
	"lat": 20.6886,
	"lng": -88.1997
}, {
	"ID": "4224",
	"post_title": "Terra Libera \xD8kogrend",
	"post_type": "gen_project",
	"lat": 59.4847,
	"lng": 10.1462
}, {
	"ID": "4226",
	"post_title": "COMUNIDAD DE MANTENCION AMBIENTAL",
	"post_type": "gen_project",
	"lat": -33.319,
	"lng": -71.4076
}, {
	"ID": "4228",
	"post_title": "Shamballa",
	"post_type": "gen_project",
	"lat": -30.7835,
	"lng": -64.6345
}, {
	"ID": "4230",
	"post_title": "One Community",
	"post_type": "gen_project",
	"lat": 34.0522,
	"lng": -118.2437
}, {
	"ID": "4231",
	"post_title": "abibiman",
	"post_type": "gen_project",
	"lat": 5.7089,
	"lng": 0.0187
}, {
	"ID": "4236",
	"post_title": "Hariharalaya",
	"post_type": "gen_project",
	"lat": 13.3622,
	"lng": 103.8597
}, {
	"ID": "4238",
	"post_title": "SANPABLODEATENAS-BOL\xCDVAR-ECUADOR",
	"post_type": "gen_project",
	"lat": -1.8198,
	"lng": -79.0664
}, {
	"ID": "4239",
	"post_title": "Kibbutz Tzivon",
	"post_type": "gen_project",
	"lat": 33.0183,
	"lng": 35.3908
}, {
	"ID": "4240",
	"post_title": "Koh Kong Eco Community",
	"post_type": "gen_project",
	"lat": 12,
	"lng": 103.25
}, {
	"ID": "4241",
	"post_title": "casa pangea",
	"post_type": "gen_project",
	"lat": -22.9804,
	"lng": -49.8769
}, {
	"ID": "4242",
	"post_title": "Floyd EcoVillage",
	"post_type": "gen_project",
	"lat": 36.9112,
	"lng": -80.3201
}, {
	"ID": "4243",
	"post_title": "L'Ecojardin du P\xE9rigord",
	"post_type": "gen_project",
	"lat": 45.453,
	"lng": 1.169
}, {
	"ID": "4244",
	"post_title": "cinderlandecovillage",
	"post_type": "gen_project",
	"lat": 19.4975,
	"lng": -154.9508
}, {
	"ID": "4247",
	"post_title": "TERRE DES JEUNES TOGO",
	"post_type": "gen_project",
	"lat": 6.3968,
	"lng": 0.9105
}, {
	"ID": "4250",
	"post_title": "Kuthumba Ecovillage",
	"post_type": "gen_project",
	"lat": -34.0509,
	"lng": 23.3577
}, {
	"ID": "4251",
	"post_title": "Berg-en-dal",
	"post_type": "gen_project",
	"lat": -33.4897,
	"lng": 21.2663
}, {
	"ID": "4264",
	"post_title": "World Hope Foundation",
	"post_type": "gen_project",
	"lat": 6.4531,
	"lng": 3.3958
}, {
	"ID": "4265",
	"post_title": "Khula Dhamma Community",
	"post_type": "gen_project",
	"lat": -32.7603,
	"lng": 28.2512
}, {
	"ID": "4267",
	"post_title": "Benin Ecotourism Concern (ECO-BENIN",
	"post_type": "gen_project",
	"lat": 6.3625,
	"lng": 2.4255
}, {
	"ID": "4268",
	"post_title": "Bloemendal Farm Ecovillage",
	"post_type": "gen_project",
	"lat": -33.9249,
	"lng": 18.4241
}, {
	"ID": "4273",
	"post_title": "wireless ghana",
	"post_type": "gen_project",
	"lat": 5.6503,
	"lng": -0.1909
}, {
	"ID": "4277",
	"post_title": "Strawbery Fierlds Ecolodges and Per",
	"post_type": "gen_project",
	"lat": 5.3405,
	"lng": 37.4388
}, {
	"ID": "4281",
	"post_title": "Mfangano Island ecoVillage",
	"post_type": "gen_project",
	"lat": -0.0048,
	"lng": 34.6004
}, {
	"ID": "4286",
	"post_title": "MACODA Eco Ville",
	"post_type": "gen_project",
	"lat": 6.288,
	"lng": -10.7752
}, {
	"ID": "4287",
	"post_title": "Penyon Bay Ecological Village",
	"post_type": "gen_project",
	"lat": 35.2493,
	"lng": -3.9371
}, {
	"ID": "4289",
	"post_title": "badilisha ecovillage foundation trust",
	"post_type": "gen_project",
	"lat": -0.0891,
	"lng": 34.7711
}, {
	"ID": "4292",
	"post_title": "STUDENTS FOR GLOBAL DEMOCRACY UGAND",
	"post_type": "gen_project",
	"lat": 0.3189,
	"lng": 32.575
}, {
	"ID": "4298",
	"post_title": "Hearth & Soul Eco Farm",
	"post_type": "gen_project",
	"lat": -33.8806,
	"lng": 25.4928
}, {
	"ID": "4302",
	"post_title": "BLED ECOLO",
	"post_type": "gen_project",
	"lat": 31.6333,
	"lng": -8
}, {
	"ID": "4305",
	"post_title": "Honeyville Farm",
	"post_type": "gen_project",
	"lat": -34.0027,
	"lng": 24.744
}, {
	"ID": "4306",
	"post_title": "Redemption",
	"post_type": "gen_project",
	"lat": 5.5875,
	"lng": -0.172
}, {
	"ID": "4312",
	"post_title": "Umphakatsi Peace Ecovillage",
	"post_type": "gen_project",
	"lat": -25.4653,
	"lng": 30.9772
}, {
	"ID": "4314",
	"post_title": "GROW BIOINTENSIVE CENTRE KENYA",
	"post_type": "gen_project",
	"lat": -1.0426,
	"lng": 37.0803
}, {
	"ID": "4315",
	"post_title": "Empower capacities of Pygmees and s",
	"post_type": "gen_project",
	"lat": -4.3447,
	"lng": 15.3168
}, {
	"ID": "4316",
	"post_title": "Ndanifor Permaculture Eco Village",
	"post_type": "gen_project",
	"lat": 6.116,
	"lng": 10.1198
}, {
	"ID": "4319",
	"post_title": "Youth and skill Development",
	"post_type": "gen_project",
	"lat": 12.8628,
	"lng": 30.2176
}, {
	"ID": "4321",
	"post_title": "Ferme P\xE9dagogique Arc en ciel",
	"post_type": "gen_project",
	"lat": 32.5477,
	"lng": -0.834
}, {
	"ID": "4322",
	"post_title": "Eco- peace project",
	"post_type": "gen_project",
	"lat": 13.0832,
	"lng": 30.349
}, {
	"ID": "4323",
	"post_title": "SEKEM",
	"post_type": "gen_project",
	"lat": 29.9626,
	"lng": 31.2768
}, {
	"ID": "4325",
	"post_title": "Integrated Community Based Sub-Wate",
	"post_type": "gen_project",
	"lat": 9.0133,
	"lng": 38.7551
}, {
	"ID": "4327",
	"post_title": "Mama Na Bana",
	"post_type": "gen_project",
	"lat": -4.382,
	"lng": 16.0341
}, {
	"ID": "4328",
	"post_title": "SFEL (Strawberry Fields Eco-Lodge)",
	"post_type": "gen_project",
	"lat": 5.3416,
	"lng": 37.4438
}, {
	"ID": "4329",
	"post_title": "African Youth Initiative on Climate",
	"post_type": "gen_project",
	"lat": 31.5131,
	"lng": -9.7697
}, {
	"ID": "4330",
	"post_title": "Acc\xE8s \xE0 l\u2019eau pour un d\xE9velopp",
	"post_type": "gen_project",
	"lat": 32.0895,
	"lng": -8.6074
}, {
	"ID": "4331",
	"post_title": "Misriyati",
	"post_type": "gen_project",
	"lat": 30.0438,
	"lng": 31.2296
}, {
	"ID": "4333",
	"post_title": "Trees for Development",
	"post_type": "gen_project",
	"lat": 5.6556,
	"lng": -0.1615
}, {
	"ID": "4334",
	"post_title": "Trees for Life Program",
	"post_type": "gen_project",
	"lat": -1.274,
	"lng": 36.8149
}, {
	"ID": "4336",
	"post_title": "Community Action for Development (C",
	"post_type": "gen_project",
	"lat": 0.3998,
	"lng": 32.4787
}, {
	"ID": "4341",
	"post_title": "Instituto \xC7araKura",
	"post_type": "gen_project",
	"lat": -27.5265,
	"lng": -48.4661
}, {
	"ID": "4343",
	"post_title": "Ka'Way Mallki - Eco-Community",
	"post_type": "gen_project",
	"lat": -9.4626,
	"lng": -77.4262
}, {
	"ID": "4347",
	"post_title": "Ecovila EL NAGUAL",
	"post_type": "gen_project",
	"lat": -22.5446,
	"lng": -43.0659
}, {
	"ID": "4353",
	"post_title": "Pickards Mountain Eco-Institute",
	"post_type": "gen_project",
	"lat": 35.9509,
	"lng": -79.1559
}, {
	"ID": "4355",
	"post_title": "Irang Ecovillage",
	"post_type": "gen_project",
	"lat": 33.4252,
	"lng": 126.3897
}, {
	"ID": "4357",
	"post_title": "Cooperativa de Permacultura \"Casa d",
	"post_type": "gen_project",
	"lat": -26.8132,
	"lng": -65.2949
}, {
	"ID": "4359",
	"post_title": "EcoFarm &amp; MiniCamping in Pajiesmeniai Lithuania",
	"post_type": "gen_project",
	"lat": 56.1085,
	"lng": 24.4845
}, {
	"ID": "4365",
	"post_title": "Comunidade Aldeia - Terra Preta",
	"post_type": "gen_project",
	"lat": -14.2819,
	"lng": -39.0708
}, {
	"ID": "4366",
	"post_title": "Naravice Ecovillage",
	"post_type": "gen_project",
	"lat": 45.495,
	"lng": 13.7561
}, {
	"ID": "4367",
	"post_title": "Oude Molen Ecovillage",
	"post_type": "gen_project",
	"lat": -33.9396,
	"lng": 18.4907
}, {
	"ID": "4368",
	"post_title": "Eco-Village SOL",
	"post_type": "gen_project",
	"lat": 12.1167,
	"lng": -68.9333
}, {
	"ID": "4370",
	"post_title": "Itekoa",
	"post_type": "gen_project",
	"lat": -34.3359,
	"lng": -58.586
}, {
	"ID": "4371",
	"post_title": "\xE9co-village \"les chemins de traver",
	"post_type": "gen_project",
	"lat": 47.3388,
	"lng": -1.582
}, {
	"ID": "4376",
	"post_title": "Terramada",
	"post_type": "gen_project",
	"lat": 37.2686,
	"lng": -7.5252
}, {
	"ID": "4377",
	"post_title": "AUTarca",
	"post_type": "gen_project",
	"lat": 28.7393,
	"lng": -17.9773
}, {
	"ID": "4378",
	"post_title": "Villages at Crest Mountain",
	"post_type": "gen_project",
	"lat": 35.6103,
	"lng": -82.616
}, {
	"ID": "4380",
	"post_title": "Lemulawen",
	"post_type": "gen_project",
	"lat": -39.4405,
	"lng": -71.7572
}, {
	"ID": "4381",
	"post_title": "Ekoby V\xE4xhuset",
	"post_type": "gen_project",
	"lat": 61.2856,
	"lng": 16.7322
}, {
	"ID": "4383",
	"post_title": "New Oasis for Life China",
	"post_type": "gen_project",
	"lat": 23.8776,
	"lng": 100.0796
}, {
	"ID": "4385",
	"post_title": "Portal do Sol",
	"post_type": "gen_project",
	"lat": -29.4481,
	"lng": -50.5864
}, {
	"ID": "4386",
	"post_title": "Podberezie",
	"post_type": "gen_project",
	"lat": 56.9125,
	"lng": 39.0122
}, {
	"ID": "4387",
	"post_title": "Giardino della Gioia",
	"post_type": "gen_project",
	"lat": 41.8982,
	"lng": 15.6
}, {
	"ID": "4388",
	"post_title": "Instituto Biorregional do Cerrado -",
	"post_type": "gen_project",
	"lat": -14.7902,
	"lng": -47.3137
}, {
	"ID": "4389",
	"post_title": "gASTWERKe e.V.",
	"post_type": "gen_project",
	"lat": 51.3275,
	"lng": 9.672
}, {
	"ID": "4390",
	"post_title": "Ashoka Ecovillage - Cambodia",
	"post_type": "gen_project",
	"lat": 10.7412,
	"lng": 104.1931
}, {
	"ID": "4391",
	"post_title": "Ecoashram",
	"post_type": "gen_project",
	"lat": 40.1905,
	"lng": 44.4789
}, {
	"ID": "4392",
	"post_title": "Coop\xE9rative Cr\xE9ative du Castellas",
	"post_type": "gen_project",
	"lat": 44.2932,
	"lng": 4.0961
}, {
	"ID": "4393",
	"post_title": "Tanjung Ringgit Eco Region",
	"post_type": "gen_project",
	"lat": -8.9421,
	"lng": 116.499
}, {
	"ID": "4394",
	"post_title": "St. Michael's Sustainable Community",
	"post_type": "gen_project",
	"lat": 9.5317,
	"lng": -84.4567
}, {
	"ID": "4395",
	"post_title": "Roshni Association",
	"post_type": "gen_project",
	"lat": 31.2,
	"lng": 74.2
}, {
	"ID": "4406",
	"post_title": "Earthen Heart",
	"post_type": "gen_project",
	"lat": 42.3125,
	"lng": -86.1131
}, {
	"ID": "4409",
	"post_title": "Ecoaldea Escolar La Torre",
	"post_type": "gen_project",
	"lat": 43.653,
	"lng": -7.7991
}, {
	"ID": "4410",
	"post_title": "Better In Belize Eco-Community",
	"post_type": "gen_project",
	"lat": 16.9882,
	"lng": -89.0478
}, {
	"ID": "4411",
	"post_title": "Pu Am Ecolodge",
	"post_type": "gen_project",
	"lat": -39.2851,
	"lng": -71.559
}, {
	"ID": "4415",
	"post_title": "Eco Village SEVAGRAM",
	"post_type": "gen_project",
	"lat": 23.7733,
	"lng": 87.6794
}, {
	"ID": "4419",
	"post_title": "Eco Aldea Espiritual",
	"post_type": "gen_project",
	"lat": -32.9507,
	"lng": -69.2056
}, {
	"ID": "4420",
	"post_title": "Oase Greifenstein",
	"post_type": "gen_project",
	"lat": 50.5953,
	"lng": 8.2836
}, {
	"ID": "4421",
	"post_title": "Lebenstraumgemeinschaft Jahnishausen",
	"post_type": "gen_project",
	"lat": 51.274,
	"lng": 13.2854
}, {
	"ID": "4423",
	"post_title": "Lebensgut Cobstaedt",
	"post_type": "gen_project",
	"lat": 50.9237,
	"lng": 10.8354
}, {
	"ID": "4427",
	"post_title": "The Ecovillage Axis",
	"post_type": "gen_project",
	"lat": -22.7889,
	"lng": -47.0692
}, {
	"ID": "4428",
	"post_title": "Ranchito Acuario - Nueva Aldea",
	"post_type": "gen_project",
	"lat": 20.169,
	"lng": -100.1409
}, {
	"ID": "4429",
	"post_title": "Ecoaldea vegetariana",
	"post_type": "gen_project",
	"lat": 41.5117,
	"lng": -7.998
}, {
	"ID": "4432",
	"post_title": "R\xE9seau Fran\xE7ais des Ecovillages",
	"post_type": "gen_project",
	"lat": 48.8271,
	"lng": -1.1507
}, {
	"ID": "4436",
	"post_title": "Magic Mountain Bulgaria",
	"post_type": "gen_project",
	"lat": 42.8974,
	"lng": 24.1522
}, {
	"ID": "4440",
	"post_title": "Ecoaldea con proyecto de ecoturismo",
	"post_type": "gen_project",
	"lat": 40.9381,
	"lng": 0.3717
}, {
	"ID": "4442",
	"post_title": "Creative Collectives Australia",
	"post_type": "gen_project",
	"lat": -38.0236,
	"lng": 144.4079
}, {
	"ID": "4444",
	"post_title": "Vale do vento - Adegas",
	"post_type": "gen_project",
	"lat": 37.6557,
	"lng": -8.6916
}, {
	"ID": "4449",
	"post_title": "Schloss Tonndorf",
	"post_type": "gen_project",
	"lat": 50.8945,
	"lng": 11.2114
}, {
	"ID": "4450",
	"post_title": "Aurora Community",
	"post_type": "gen_project",
	"lat": 45.6262,
	"lng": 22.5419
}, {
	"ID": "4451",
	"post_title": "CityTree Tel Aviv",
	"post_type": "gen_project",
	"lat": 32.0733,
	"lng": 34.7708
}, {
	"ID": "4452",
	"post_title": "Ein neues Wir",
	"post_type": "gen_project",
	"lat": 50.491,
	"lng": 8.0654
}, {
	"ID": "4454",
	"post_title": "Yesh Meain Farm",
	"post_type": "gen_project",
	"lat": 31.0461,
	"lng": 34.8516
}, {
	"ID": "4455",
	"post_title": "Posada Natura Health Retreat Center",
	"post_type": "gen_project",
	"lat": 9.4656,
	"lng": -84.0584
}, {
	"ID": "4457",
	"post_title": "Arterra  Bizimodu  Ecoaldea",
	"post_type": "gen_project",
	"lat": 42.5907,
	"lng": -0.9964
}, {
	"ID": "4458",
	"post_title": "Ampliando redes de intercambio",
	"post_type": "gen_project",
	"lat": 40.6567,
	"lng": -4.6812
}, {
	"ID": "4464",
	"post_title": "La Citt\xE0 della Luce",
	"post_type": "gen_project",
	"lat": 43.6625,
	"lng": 13.1234
}, {
	"ID": "4466",
	"post_title": "Community\/school led by Shaolin monk",
	"post_type": "gen_project",
	"lat": 52.52,
	"lng": 13.405
}, {
	"ID": "4468",
	"post_title": "Eco Village Cluster Carinthia",
	"post_type": "gen_project",
	"lat": 46.6336,
	"lng": 13.8372
}, {
	"ID": "4469",
	"post_title": "Ecovillage Madagascar",
	"post_type": "gen_project",
	"lat": -18.7577,
	"lng": 47.6424
}, {
	"ID": "4473",
	"post_title": "Ecoaldea Paititi",
	"post_type": "gen_project",
	"lat": -13.588,
	"lng": -68.7169
}, {
	"ID": "4474",
	"post_title": "Movimiento #Darvida",
	"post_type": "gen_project",
	"lat": 40.4637,
	"lng": -3.7492
}, {
	"ID": "4475",
	"post_title": "In progress",
	"post_type": "gen_project",
	"lat": 43.1558,
	"lng": 22.81
}, {
	"ID": "4482",
	"post_title": "Semillas de Luz",
	"post_type": "gen_project",
	"lat": 38.9231,
	"lng": 1.3354
}, {
	"ID": "4484",
	"post_title": "BioScience Agro EcoVillage",
	"post_type": "gen_project",
	"lat": 25.287,
	"lng": 89.3508
}, {
	"ID": "4485",
	"post_title": "Re-Green",
	"post_type": "gen_project",
	"lat": 38.0544,
	"lng": 22.3506
}, {
	"ID": "4486",
	"post_title": "comunidad El Hogar",
	"post_type": "gen_project",
	"lat": 40.9284,
	"lng": 0.0653
}, {
	"ID": "4488",
	"post_title": "Tierra Langla Lunahuana",
	"post_type": "gen_project",
	"lat": -12.9879,
	"lng": -76.16
}, {
	"ID": "4489",
	"post_title": "The Valley Centre",
	"post_type": "gen_project",
	"lat": -33.8688,
	"lng": 151.2093
}, {
	"ID": "4490",
	"post_title": "EKOYER",
	"post_type": "gen_project",
	"lat": 38.0562,
	"lng": 34.8047
}, {
	"ID": "4491",
	"post_title": "Bayramic Yenik\xF6y",
	"post_type": "gen_project",
	"lat": 39.8783,
	"lng": 26.6863
}, {
	"ID": "4493",
	"post_title": "Permacultura Ca\xF1a Dulce",
	"post_type": "gen_project",
	"lat": 36.698,
	"lng": -4.7763
}, {
	"ID": "4495",
	"post_title": "Mini-Granja \"Tierramor\"",
	"post_type": "gen_project",
	"lat": 19.5833,
	"lng": -101.7167
}, {
	"ID": "4498",
	"post_title": "Youth Volunteers for the Environment Ghana",
	"post_type": "gen_project",
	"lat": 5.493,
	"lng": -0.2856
}, {
	"ID": "4499",
	"post_title": "African Regional Aquaculture Centre",
	"post_type": "gen_project",
	"lat": 9.082,
	"lng": 8.6753
}, {
	"ID": "4501",
	"post_title": "KITA",
	"post_type": "gen_project",
	"lat": 6.8716,
	"lng": -1.0592
}, {
	"ID": "4504",
	"post_title": "ONE LOAF Ecovillage",
	"post_type": "gen_project",
	"lat": 6.7459,
	"lng": -1.2295
}, {
	"ID": "4505",
	"post_title": "The Sustainability Institute and Lynedoch Eco-Village",
	"post_type": "gen_project",
	"lat": -33.9814,
	"lng": 18.7679
}, {
	"ID": "4507",
	"post_title": "Amoraima",
	"post_type": "gen_project",
	"lat": 4.6211,
	"lng": -74.0672
}, {
	"ID": "4511",
	"post_title": "Possibilica Initiation Center",
	"post_type": "gen_project",
	"lat": 10.482,
	"lng": -84.7918
}, {
	"ID": "4512",
	"post_title": "Permacultura en alicante",
	"post_type": "gen_project",
	"lat": 38.346,
	"lng": -0.4907
}, {
	"ID": "4513",
	"post_title": "Permaculture Schloss Glarisegg",
	"post_type": "gen_project",
	"lat": 46.8182,
	"lng": 8.2275
}, {
	"ID": "4517",
	"post_title": "Vida Bekasi",
	"post_type": "gen_project",
	"lat": -6.3231,
	"lng": 106.9845
}, {
	"ID": "4518",
	"post_title": "Molinos Verdes de Moringa",
	"post_type": "gen_project",
	"lat": 9.7361,
	"lng": -85.0664
}, {
	"ID": "4520",
	"post_title": "Tribal Simplicity",
	"post_type": "gen_project",
	"lat": -16.1762,
	"lng": -48.7136
}, {
	"ID": "4521",
	"post_title": "ECODEV",
	"post_type": "gen_project",
	"lat": 18.9712,
	"lng": -72.2852
}, {
	"ID": "4524",
	"post_title": "Moraro Indigenous Off-grid Community",
	"post_type": "gen_project",
	"lat": 3.9026,
	"lng": -58.7109
}, {
	"ID": "4525",
	"post_title": "Aldea de Olla",
	"post_type": "gen_project",
	"lat": 39.7296,
	"lng": -0.5057
}, {
	"ID": "4526",
	"post_title": "Sustainable Community Based Tourism",
	"post_type": "gen_project",
	"lat": 0.6519,
	"lng": 30.2769
}, {
	"ID": "4527",
	"post_title": "Agroturismo, Ecoturismo, Permacultura",
	"post_type": "gen_project",
	"lat": 38.8798,
	"lng": -0.5884
}, {
	"ID": "4529",
	"post_title": "Sitio da Terra",
	"post_type": "gen_project",
	"lat": 40.5285,
	"lng": -7.3334
}, {
	"ID": "4538",
	"post_title": "\xC4ngsbacka",
	"post_type": "gen_project",
	"lat": 59.6,
	"lng": 13.7
}, {
	"ID": "4545",
	"post_title": "Chambalabamba",
	"post_type": "gen_project",
	"lat": -1.8312,
	"lng": -78.1834
}, {
	"ID": "4547",
	"post_title": "Kibbutz Gezer",
	"post_type": "gen_project",
	"lat": 31.8763,
	"lng": 34.9211
}, {
	"ID": "4548",
	"post_title": "LOVINKA yoga & meditation center",
	"post_type": "gen_project",
	"lat": 48.4543,
	"lng": 19.622
}, {
	"ID": "4549",
	"post_title": "Illawarra Ecoviilage",
	"post_type": "gen_project",
	"lat": -34.4251,
	"lng": 150.8931
}, {
	"ID": "4550",
	"post_title": "Ecoaldea - Casa de Salud y Reposo",
	"post_type": "gen_project",
	"lat": 40.4126,
	"lng": 0.4243
}, {
	"ID": "4553",
	"post_title": "Permaculture & Yoga Centre Haiti",
	"post_type": "gen_project",
	"lat": 18.2164,
	"lng": -72.6141
}, {
	"ID": "4554",
	"post_title": "Boekel Ecovillage",
	"post_type": "gen_project",
	"lat": 51.5957,
	"lng": 5.6815
}, {
	"ID": "4556",
	"post_title": "FAMILIAFELIZ - decentralized living community - Germany and Spain",
	"post_type": "gen_project",
	"lat": 40.4547,
	"lng": 0.2759
}, {
	"ID": "4557",
	"post_title": "DEHNATEN. Holistic Community.",
	"post_type": "gen_project",
	"lat": 41.5312,
	"lng": 2.1119
}, {
	"ID": "4559",
	"post_title": "La Casa dels Llacs",
	"post_type": "gen_project",
	"lat": 41.7497,
	"lng": 2.5569
}, {
	"ID": "4560",
	"post_title": "Deva Vana Ecovillage Foundation",
	"post_type": "gen_project",
	"lat": -33.8675,
	"lng": 151.207
}, {
	"ID": "4561",
	"post_title": "Simbiosis",
	"post_type": "gen_project",
	"lat": 39.5919,
	"lng": -4.7346
}, {
	"ID": "4562",
	"post_title": "Creature Conduit Sanctuary",
	"post_type": "gen_project",
	"lat": 37.0902,
	"lng": -95.7129
}, {
	"ID": "4564",
	"post_title": "WildCraft Ecovillage",
	"post_type": "gen_project",
	"lat": 30.1822,
	"lng": -97.7455
}, {
	"ID": "4569",
	"post_title": "Gaia Ashram",
	"post_type": "gen_project",
	"lat": 17.7073,
	"lng": 102.8309
}, {
	"ID": "4570",
	"post_title": "Valle del Roble Encantado",
	"post_type": "gen_project",
	"lat": 38.4814,
	"lng": -3.5823
}, {
	"ID": "4573",
	"post_title": "Lakabe",
	"post_type": "gen_project",
	"lat": 42.8727,
	"lng": -1.346
}, {
	"ID": "4575",
	"post_title": "Quaker Intentional Village - Canaan",
	"post_type": "gen_project",
	"lat": 42.4296,
	"lng": -73.5147
}, {
	"ID": "4576",
	"post_title": "Q",
	"post_type": "gen_project",
	"lat": 40.8194,
	"lng": -0.4508
}, {
	"ID": "4581",
	"post_title": "Mbame",
	"post_type": "gen_project",
	"lat": 14.1186,
	"lng": -16.438
}, {
	"ID": "4582",
	"post_title": "CENTRE DES HOMMES Atid\xE9ka m\xE9wona Av\xE9",
	"post_type": "gen_project",
	"lat": 6.9098,
	"lng": 0.6299
}, {
	"ID": "4583",
	"post_title": "Ngaparou",
	"post_type": "gen_project",
	"lat": 14.4647,
	"lng": -17.06
}, {
	"ID": "4584",
	"post_title": "Bravewomen Foundation",
	"post_type": "gen_project",
	"lat": -22.5621,
	"lng": 17.0668
}, {
	"ID": "4585",
	"post_title": "Volunteer Source Nepal",
	"post_type": "gen_project",
	"lat": 28.3949,
	"lng": 84.124
}, {
	"ID": "4586",
	"post_title": "Catalyst Ecovillage",
	"post_type": "gen_project",
	"lat": 41.2565,
	"lng": -74.3599
}, {
	"ID": "4587",
	"post_title": "\"Meshek 43\",  Shdema Israel",
	"post_type": "gen_project",
	"lat": 31.8338,
	"lng": 34.7401
}, {
	"ID": "4589",
	"post_title": "Ecovillage Tris Elies",
	"post_type": "gen_project",
	"lat": 34.9319,
	"lng": 32.7933
}, {
	"ID": "4590",
	"post_title": "Freedom Farm",
	"post_type": "gen_project",
	"lat": 46.6688,
	"lng": -112.252
}, {
	"ID": "4594",
	"post_title": "Permaldeia",
	"post_type": "gen_project",
	"lat": 37.1203,
	"lng": -7.885
}, {
	"ID": "4595",
	"post_title": "Earth Deeds",
	"post_type": "gen_project",
	"lat": 42.4565,
	"lng": -72.4098
}, {
	"ID": "4597",
	"post_title": "Nature Community",
	"post_type": "gen_project",
	"lat": 49.3547,
	"lng": 12.6033
}, {
	"ID": "4600",
	"post_title": "BEND Eco-Neighbourhood",
	"post_type": "gen_project",
	"lat": -36.6889,
	"lng": 149.8416
}, {
	"ID": "4603",
	"post_title": "Amor a la Tierra",
	"post_type": "gen_project",
	"lat": -17.4587,
	"lng": -63.6692
}, {
	"ID": "4604",
	"post_title": "Vuelve a la Tierra",
	"post_type": "gen_project",
	"lat": 41.2774,
	"lng": -3.4789
}, {
	"ID": "4605",
	"post_title": "Los Guindales",
	"post_type": "gen_project",
	"lat": 36.57,
	"lng": -5.2758
}, {
	"ID": "4608",
	"post_title": "Sunny Hill Association",
	"post_type": "gen_project",
	"lat": 45.4576,
	"lng": 13.8107
}, {
	"ID": "4609",
	"post_title": "Ecovila Florescer",
	"post_type": "gen_project",
	"lat": -28.0076,
	"lng": -49.537
}, {
	"ID": "4610",
	"post_title": "The Love Plan",
	"post_type": "gen_project",
	"lat": 28.8025,
	"lng": -81.6445
}, {
	"ID": "4611",
	"post_title": "Projekt WIR",
	"post_type": "gen_project",
	"lat": 52.52,
	"lng": 13.405
}, {
	"ID": "4612",
	"post_title": "Yarok Ba-ir",
	"post_type": "gen_project",
	"lat": 31.0461,
	"lng": 34.8516
}, {
	"ID": "4615",
	"post_title": "GEN Ghana",
	"post_type": "gen_project",
	"lat": 6.6765,
	"lng": -1.5029
}, {
	"ID": "4616",
	"post_title": "Gardening and Landscaping",
	"post_type": "gen_project",
	"lat": 38.5332,
	"lng": -123.0853
}, {
	"ID": "4617",
	"post_title": "Freedom Village Georgia",
	"post_type": "gen_project",
	"lat": 33.3608,
	"lng": -82.8621
}, {
	"ID": "4618",
	"post_title": "Nueva Comarca | Nogol\xED",
	"post_type": "gen_project",
	"lat": -32.9158,
	"lng": -66.3397
}, {
	"ID": "4620",
	"post_title": "Oyo.",
	"post_type": "gen_project",
	"lat": -4.3213,
	"lng": 15.2934
}, {
	"ID": "4621",
	"post_title": "Gemeinschaft Sulzbrunn",
	"post_type": "gen_project",
	"lat": 47.6702,
	"lng": 10.3839
}, {
	"ID": "4623",
	"post_title": "Transition Tivon",
	"post_type": "gen_project",
	"lat": 32.7162,
	"lng": 35.1275
}, {
	"ID": "4625",
	"post_title": "Sagol Eco Spiritual Village",
	"post_type": "gen_project",
	"lat": 31.0461,
	"lng": 34.8516
}, {
	"ID": "4626",
	"post_title": "Holy Land Trust",
	"post_type": "gen_project",
	"lat": 31.7058,
	"lng": 35.2027
}, {
	"ID": "4627",
	"post_title": "Huertos Urbanos de Costa Rica",
	"post_type": "gen_project",
	"lat": 9.9281,
	"lng": -84.0907
}, {
	"ID": "4628",
	"post_title": "Kerem Bnei Shlomo",
	"post_type": "gen_project",
	"lat": 31.941,
	"lng": 34.9892
}, {
	"ID": "4629",
	"post_title": "Hakoritna Farm",
	"post_type": "gen_project",
	"lat": 32.3119,
	"lng": 35.0266
}, {
	"ID": "4630",
	"post_title": "Sharaka",
	"post_type": "gen_project",
	"lat": 31.898,
	"lng": 35.2043
}, {
	"ID": "4631",
	"post_title": "Marda",
	"post_type": "gen_project",
	"lat": 32.1142,
	"lng": 35.1959
}, {
	"ID": "4632",
	"post_title": "Tent of Nations",
	"post_type": "gen_project",
	"lat": 31.6856,
	"lng": 35.1204
}, {
	"ID": "4633",
	"post_title": "SIOM",
	"post_type": "gen_project",
	"lat": 37.0408,
	"lng": -2.201
}, {
	"ID": "4635",
	"post_title": "Ecovillage Self-Sufficient Community",
	"post_type": "gen_project",
	"lat": -22.3628,
	"lng": -43.5141
}, {
	"ID": "4638",
	"post_title": "Finca Morpho",
	"post_type": "gen_project",
	"lat": 8.435,
	"lng": -83.2788
}, {
	"ID": "4639",
	"post_title": "Nea Guinea",
	"post_type": "gen_project",
	"lat": 38.0722,
	"lng": 23.9691
}, {
	"ID": "4642",
	"post_title": "Las Caba\xF1uelas",
	"post_type": "gen_project",
	"lat": 43.1158,
	"lng": -3.5919
}, {
	"ID": "4643",
	"post_title": "Lu'um Project",
	"post_type": "gen_project",
	"lat": 20.6734,
	"lng": -88.7584
}, {
	"ID": "4646",
	"post_title": "Guede Chantier",
	"post_type": "gen_project",
	"lat": 16.5453,
	"lng": -14.7552
}, {
	"ID": "4647",
	"post_title": "Global Campus Palestine",
	"post_type": "gen_project",
	"lat": 32.0651,
	"lng": 35.1517
}, {
	"ID": "4648",
	"post_title": "Casa Cares",
	"post_type": "gen_project",
	"lat": 43.7037,
	"lng": 11.5247
}, {
	"ID": "4650",
	"post_title": "Akasha",
	"post_type": "gen_project",
	"lat": 52.2023,
	"lng": 5.1418
}, {
	"ID": "4651",
	"post_title": "Yatir Herb Farm",
	"post_type": "gen_project",
	"lat": 31.0461,
	"lng": 34.8516
}, {
	"ID": "4657",
	"post_title": "Primal Nascence Eco-Castle Community",
	"post_type": "gen_project",
	"lat": 10.7412,
	"lng": 104.1931
}, {
	"ID": "4659",
	"post_title": "KIYAYA EcoVillage",
	"post_type": "gen_project",
	"lat": -3.3729,
	"lng": 29.1449
}, {
	"ID": "4660",
	"post_title": "Skala Ecovillage",
	"post_type": "gen_project",
	"lat": 40.5595,
	"lng": 23.2611
}, {
	"ID": "4662",
	"post_title": "Prasionopolis eco village",
	"post_type": "gen_project",
	"lat": 35.4327,
	"lng": 23.9355
}, {
	"ID": "4663",
	"post_title": "Ecoaldea Tacotal",
	"post_type": "gen_project",
	"lat": 9.941,
	"lng": -84.5275
}, {
	"ID": "4664",
	"post_title": "Rancho Delicioso,  Costa Rica",
	"post_type": "gen_project",
	"lat": 9.6546,
	"lng": -85.0933
}, {
	"ID": "4666",
	"post_title": "Eco 1",
	"post_type": "gen_project",
	"lat": 40.015,
	"lng": -105.2705
}, {
	"ID": "4671",
	"post_title": "Inuksuk Project",
	"post_type": "gen_project",
	"lat": 46.2279,
	"lng": -73.6534
}, {
	"ID": "4672",
	"post_title": "Meadowsong  EcoVillage",
	"post_type": "gen_project",
	"lat": 43.916,
	"lng": -122.8229
}, {
	"ID": "4675",
	"post_title": "Rawtreat",
	"post_type": "gen_project",
	"lat": 9.0855,
	"lng": -83.6472
}, {
	"ID": "4677",
	"post_title": "Blue Star Tapovan Trinidad",
	"post_type": "gen_project",
	"lat": 10.4299,
	"lng": -61.2989
}, {
	"ID": "4678",
	"post_title": "DECOHOUSING Pty Ltd",
	"post_type": "gen_project",
	"lat": -34.9749,
	"lng": 117.3561
}, {
	"ID": "4680",
	"post_title": "Domegaia Community",
	"post_type": "gen_project",
	"lat": 19.8968,
	"lng": -155.5828
}, {
	"ID": "4684",
	"post_title": "Windward Intentional Community",
	"post_type": "gen_project",
	"lat": 45.8572,
	"lng": -121.1203
}, {
	"ID": "4686",
	"post_title": "Tinos ecolodge",
	"post_type": "gen_project",
	"lat": 37.5773,
	"lng": 25.1652
}, {
	"ID": "4691",
	"post_title": "Puls der Erde e.V.",
	"post_type": "gen_project",
	"lat": 48.1907,
	"lng": 12.4983
}, {
	"ID": "4693",
	"post_title": "Institute for Sustainable Energy and Environmental Solutions (ISEES)",
	"post_type": "gen_project",
	"lat": 5.6727,
	"lng": -0.1674
}, {
	"ID": "4695",
	"post_title": "Ura Gora",
	"post_type": "gen_project",
	"lat": 42.1087,
	"lng": 26.6701
}, {
	"ID": "4697",
	"post_title": "Vale das Lobas",
	"post_type": "gen_project",
	"lat": 39.3999,
	"lng": -8.2245
}, {
	"ID": "4700",
	"post_title": "Serene Light Gardens \/ Finca Luz Serena",
	"post_type": "gen_project",
	"lat": 28.5496,
	"lng": -16.3473
}, {
	"ID": "4702",
	"post_title": "Santa Barbara Eco-Village",
	"post_type": "gen_project",
	"lat": 34.4208,
	"lng": -119.6982
}, {
	"ID": "4705",
	"post_title": "Kalamos island eco-community Greece",
	"post_type": "gen_project",
	"lat": 38.6244,
	"lng": 20.931
}, {
	"ID": "4709",
	"post_title": "El campo",
	"post_type": "gen_project",
	"lat": 40.2344,
	"lng": -1.1875
}, {
	"ID": "4712",
	"post_title": "ECCOS Vereda Cascajal",
	"post_type": "gen_project",
	"lat": 3.3171,
	"lng": -76.499
}, {
	"ID": "4713",
	"post_title": "Headwaters",
	"post_type": "gen_project",
	"lat": 44.4046,
	"lng": -72.3025
}, {
	"ID": "4714",
	"post_title": "as one community",
	"post_type": "gen_project",
	"lat": 34.869,
	"lng": 136.5465
}, {
	"ID": "4715",
	"post_title": "Projeto Walden XXI",
	"post_type": "gen_project",
	"lat": -24.0032,
	"lng": -47.1126
}, {
	"ID": "4716",
	"post_title": "Ecoaldea La Montana",
	"post_type": "gen_project",
	"lat": -39.5129,
	"lng": -71.5701
}, {
	"ID": "4717",
	"post_title": "Eco Campus Bulgarian Houses",
	"post_type": "gen_project",
	"lat": 42.8408,
	"lng": 23.315
}, {
	"ID": "4718",
	"post_title": "Strohplatz",
	"post_type": "gen_project",
	"lat": 49.7683,
	"lng": 7.0498
}, {
	"ID": "4722",
	"post_title": "Aldea Ecologica Gaia",
	"post_type": "gen_project",
	"lat": 18.668,
	"lng": -70.4945
}, {
	"ID": "4723",
	"post_title": "La Vereda",
	"post_type": "gen_project",
	"lat": 42.3773,
	"lng": -2.555
}, {
	"ID": "4725",
	"post_title": "Tierraluz Eco Community",
	"post_type": "gen_project",
	"lat": 20.8689,
	"lng": -105.4408
}, {
	"ID": "4726",
	"post_title": "Ecovillage Hub Connect",
	"post_type": "gen_project",
	"lat": -42.8821,
	"lng": 147.3272
}, {
	"ID": "4727",
	"post_title": "Earth You",
	"post_type": "gen_project",
	"lat": 37.5322,
	"lng": -8.4413
}, {
	"ID": "4728",
	"post_title": "8100",
	"post_type": "gen_project",
	"lat": 41.2135,
	"lng": 28.0713
}, {
	"ID": "4733",
	"post_title": "Maia Earth Village",
	"post_type": "gen_project",
	"lat": 9.971,
	"lng": 118.8559
}, {
	"ID": "4734",
	"post_title": "Hof Medewege",
	"post_type": "gen_project",
	"lat": 53.66,
	"lng": 11.3955
}, {
	"ID": "4735",
	"post_title": "Lumicon",
	"post_type": "gen_project",
	"lat": -1.0885,
	"lng": -77.9202
}, {
	"ID": "4737",
	"post_title": "Auroville",
	"post_type": "gen_project",
	"lat": 12.0053,
	"lng": 79.8129
}, {
	"ID": "4738",
	"post_title": "AZ Eco-village",
	"post_type": "gen_project",
	"lat": 52.0657,
	"lng": 87.3523
}, {
	"ID": "4739",
	"post_title": "LebensGut Miteinander",
	"post_type": "gen_project",
	"lat": 48.0508,
	"lng": 15.7488
}, {
	"ID": "4740",
	"post_title": "CCLT Ecovillage",
	"post_type": "gen_project",
	"lat": 52.2053,
	"lng": 0.1218
}, {
	"ID": "4741",
	"post_title": "Green Canvas of Light",
	"post_type": "gen_project",
	"lat": -33.9802,
	"lng": 22.6778
}, {
	"ID": "4742",
	"post_title": "Villa Monte Reserve",
	"post_type": "gen_project",
	"lat": -24.1173,
	"lng": -64.4052
}, {
	"ID": "4743",
	"post_title": "Eco Chateau",
	"post_type": "gen_project",
	"lat": 45.1469,
	"lng": 2.0528
}, {
	"ID": "4749",
	"post_title": "Lebenshof Graben",
	"post_type": "gen_project",
	"lat": 48.4705,
	"lng": 12.9031
}, {
	"ID": "4750",
	"post_title": "Simplicity III",
	"post_type": "gen_project",
	"lat": 44.4409,
	"lng": -72.4165
}, {
	"ID": "4751",
	"post_title": "Narara Ecovillage",
	"post_type": "gen_project",
	"lat": -33.3952,
	"lng": 151.3295
}, {
	"ID": "4752",
	"post_title": "lifegardeners",
	"post_type": "gen_project",
	"lat": 45.6203,
	"lng": 22.5859
}, {
	"ID": "4754",
	"post_title": "El Rancho Zapote",
	"post_type": "gen_project",
	"lat": 21.3421,
	"lng": -89.2625
}, {
	"ID": "4755",
	"post_title": "Earth Connection",
	"post_type": "gen_project",
	"lat": 20.7402,
	"lng": -89.6223
}, {
	"ID": "4758",
	"post_title": "Buddhist Monastery",
	"post_type": "gen_project",
	"lat": 27.7213,
	"lng": 85.2923
}, {
	"ID": "4760",
	"post_title": "Mahu\xE1 Ashram",
	"post_type": "gen_project",
	"lat": -34.8533,
	"lng": -55.1238
}, {
	"ID": "4762",
	"post_title": "Community Garden in Rural Wayanad!",
	"post_type": "gen_project",
	"lat": 11.6854,
	"lng": 76.132
}, {
	"ID": "4764",
	"post_title": "Moonshine Tribe",
	"post_type": "gen_project",
	"lat": 40.5655,
	"lng": 15.4963
}, {
	"ID": "4766",
	"post_title": "Long Distance Bike Challenge",
	"post_type": "gen_project",
	"lat": 45.4654,
	"lng": 9.1859
}, {
	"ID": "4768",
	"post_title": "Ecovila Amat",
	"post_type": "gen_project",
	"lat": 42.1467,
	"lng": 2.3849
}, {
	"ID": "4770",
	"post_title": "Lifechanyuan International Family Society (Thailand Branch)",
	"post_type": "gen_project",
	"lat": 18.8705,
	"lng": 99.1362
}, {
	"ID": "4775",
	"post_title": "Tesla Ullastrell",
	"post_type": "gen_project",
	"lat": 41.5265,
	"lng": 1.9594
}, {
	"ID": "4776",
	"post_title": "Coastal Roots Farm",
	"post_type": "gen_project",
	"lat": 33.0546,
	"lng": -117.2852
}, {
	"ID": "4777",
	"post_title": "8thLife EcoVillage Project",
	"post_type": "gen_project",
	"lat": 28.7134,
	"lng": -17.9058
}, {
	"ID": "4779",
	"post_title": "Shangri-La",
	"post_type": "gen_project",
	"lat": 37.1946,
	"lng": -8.4741
}, {
	"ID": "4781",
	"post_title": "FUN-Nepal,  Volunteering in Nepal",
	"post_type": "gen_project",
	"lat": 27.6788,
	"lng": 85.2937
}, {
	"ID": "4782",
	"post_title": "Magic Forest Community in Bulgaria",
	"post_type": "gen_project",
	"lat": 42.5443,
	"lng": 22.9616
}, {
	"ID": "4783",
	"post_title": "Lively Village",
	"post_type": "gen_project",
	"lat": 54.6117,
	"lng": 24.2677
}, {
	"ID": "4788",
	"post_title": "Asociaci\xF3n Manantial de Tara",
	"post_type": "gen_project",
	"lat": 28.3426,
	"lng": -16.4058
}, {
	"ID": "4789",
	"post_title": "Middle Earth Biodynamic Village",
	"post_type": "gen_project",
	"lat": 48.5264,
	"lng": -80.4666
}, {
	"ID": "4790",
	"post_title": "Ecovillage Sainte Camelle",
	"post_type": "gen_project",
	"lat": 43.1062,
	"lng": 1.5621
}, {
	"ID": "4792",
	"post_title": "bioloos - sustainable sanitation",
	"post_type": "gen_project",
	"lat": 17.3993,
	"lng": 78.4627
}, {
	"ID": "4793",
	"post_title": "Proyecto O Couso",
	"post_type": "gen_project",
	"lat": 42.7194,
	"lng": -7.3057
}, {
	"ID": "4803",
	"post_title": "Gemeinschaftsland Sonnenwiese",
	"post_type": "gen_project",
	"lat": 51.3953,
	"lng": 12.8458
}, {
	"ID": "4805",
	"post_title": "Hua Tao (Hua Dao) ecovillage",
	"post_type": "gen_project",
	"lat": 30.6301,
	"lng": 103.673
}, {
	"ID": "4806",
	"post_title": "Eden Hope",
	"post_type": "gen_project",
	"lat": -15.2092,
	"lng": 166.7087
}, {
	"ID": "4809",
	"post_title": "\"proyecto de vida sostenible\"",
	"post_type": "gen_project",
	"lat": 40.4637,
	"lng": -3.7492
}, {
	"ID": "7638",
	"post_title": "Cambio Social Rural",
	"post_type": "gen_project",
	"lat": 43.1828,
	"lng": -3.9878
}, {
	"ID": "7640",
	"post_title": "Alternative View",
	"post_type": "gen_project",
	"lat": 40.4637,
	"lng": -3.7492
}, {
	"ID": "7646",
	"post_title": "Yeryuzu Ecovillage",
	"post_type": "gen_project",
	"lat": 40.5419,
	"lng": 30.1078
}, {
	"ID": "7650",
	"post_title": "Ecovillages in Estonia, Spain, Romania",
	"post_type": "gen_project",
	"lat": 41.1495,
	"lng": -2.2775
}, {
	"ID": "7652",
	"post_title": "Green Gecko",
	"post_type": "gen_project",
	"lat": 17.2517,
	"lng": 103.0384
}, {
	"ID": "7653",
	"post_title": "Busquem co-creadors",
	"post_type": "gen_project",
	"lat": 42.0558,
	"lng": 2.7282
}, {
	"ID": "7654",
	"post_title": "Samenbeleving",
	"post_type": "gen_project",
	"lat": 52.8539,
	"lng": 6.5316
}, {
	"ID": "7655",
	"post_title": "Shambhala Eco-Castle",
	"post_type": "gen_project",
	"lat": 27.8609,
	"lng": 82.9286
}, {
	"ID": "7657",
	"post_title": "Hava & Adam",
	"post_type": "gen_project",
	"lat": 31.9091,
	"lng": 35.0025
}, {
	"ID": "7658",
	"post_title": "El Valle de la Luna",
	"post_type": "gen_project",
	"lat": 8.5232,
	"lng": -82.6185
}, {
	"ID": "7659",
	"post_title": "\"Coura Rocks\"",
	"post_type": "gen_project",
	"lat": -33.831,
	"lng": 148.6907
}, {
	"ID": "7662",
	"post_title": "Relocating in Peace with Effective S",
	"post_type": "gen_project",
	"lat": 19.7515,
	"lng": 75.7139
}, {
	"ID": "7663",
	"post_title": "Kuishtak,  para SER humano",
	"post_type": "gen_project",
	"lat": 20.7378,
	"lng": -100.3985
}, {
	"ID": "7664",
	"post_title": "Boodaville",
	"post_type": "gen_project",
	"lat": 41.0158,
	"lng": 0.1876
}, {
	"ID": "7665",
	"post_title": "Las Liridas",
	"post_type": "gen_project",
	"lat": 18.9848,
	"lng": -99.0931
}, {
	"ID": "7666",
	"post_title": "Crooked Tree Homeless Ecovillage",
	"post_type": "gen_project",
	"lat": 35.5148,
	"lng": -84.7902
}, {
	"ID": "7667",
	"post_title": "Green educator",
	"post_type": "gen_project",
	"lat": 35.2022,
	"lng": -0.6299
}, {
	"ID": "7670",
	"post_title": "Terramana",
	"post_type": "gen_project",
	"lat": 3.466,
	"lng": 98.0465
}, {
	"ID": "7671",
	"post_title": "Kuyabeh",
	"post_type": "gen_project",
	"lat": 20.2148,
	"lng": -87.4293
}, {
	"ID": "7672",
	"post_title": "Green Village",
	"post_type": "gen_project",
	"lat": 7.9612,
	"lng": 80.7273
}, {
	"ID": "7675",
	"post_title": "Folleterre Faerie Sanctuary",
	"post_type": "gen_project",
	"lat": 47.787,
	"lng": 6.6345
}, {
	"ID": "7683",
	"post_title": "Tribodar",
	"post_type": "gen_project",
	"lat": 39.518,
	"lng": -7.6484
}, {
	"ID": "7685",
	"post_title": "Hof Hackenow",
	"post_type": "gen_project",
	"lat": 52.5262,
	"lng": 14.4796
}, {
	"ID": "7686",
	"post_title": "El Calabacino",
	"post_type": "gen_project",
	"lat": 37.8752,
	"lng": -6.677
}, {
	"ID": "236596",
	"post_title": "Igunga Ecovillage",
	"post_type": "gen_project",
	"lat": -4.3562,
	"lng": 33.6176
}, {
	"ID": "236597",
	"post_title": "Nackunga Community",
	"post_type": "gen_project",
	"lat": 59.0259,
	"lng": 17.5512
}, {
	"ID": "236598",
	"post_title": "Kin's domain \"Bozhi dar\",  Bulgaria",
	"post_type": "gen_project",
	"lat": 42.9116,
	"lng": 27.646
}, {
	"ID": "236599",
	"post_title": "S\xF3lheimar Iceland",
	"post_type": "gen_project",
	"lat": 64.0656,
	"lng": -20.6419
}, {
	"ID": "236602",
	"post_title": "Ecovila Ayrum\xE3",
	"post_type": "gen_project",
	"lat": -18.4314,
	"lng": -43.4188
}, {
	"ID": "236603",
	"post_title": "PermaTree a Holistic Gaia Association in Ecuador",
	"post_type": "gen_project",
	"lat": -3.752,
	"lng": -78.6305
}, {
	"ID": "236604",
	"post_title": "Todos Santos Ecovillage",
	"post_type": "gen_project",
	"lat": 19.4969,
	"lng": -99.7233
}, {
	"ID": "236605",
	"post_title": "IDEAL Society",
	"post_type": "gen_project",
	"lat": 49.356,
	"lng": -115.2988
}, {
	"ID": "236607",
	"post_title": "Forever MicroRanch",
	"post_type": "gen_project",
	"lat": 49.2049,
	"lng": -108.5618
}, {
	"ID": "236676",
	"post_title": "Erigiendo Dipam",
	"post_type": "gen_project",
	"lat": -14.235,
	"lng": -51.9253
}, {
	"ID": "238001",
	"post_title": "Alentejo Community Portugal",
	"post_type": "gen_project",
	"lat": 37.6072,
	"lng": -8.624
}, {
	"ID": "238280",
	"post_title": "Young family looking for an alternative,  social and sustainable way of living",
	"post_type": "gen_project",
	"lat": 38.8855,
	"lng": -7.9553
}, {
	"ID": "238501",
	"post_title": "Hedonisia Hawaii Sustainable Community",
	"post_type": "gen_project",
	"lat": 19.4683,
	"lng": -154.8924
}, {
	"ID": "238587",
	"post_title": "Healing biotope in Bosnia",
	"post_type": "gen_project",
	"lat": 44.8403,
	"lng": 18.3032
}, {
	"ID": "238607",
	"post_title": "New Life Foundation",
	"post_type": "gen_project",
	"lat": 20.0959,
	"lng": 99.8159
}, {
	"ID": "238635",
	"post_title": "Ha Giang responsible tourism",
	"post_type": "gen_project",
	"lat": 22.8015,
	"lng": 104.9817
}, {
	"ID": "238982",
	"post_title": "Unity",
	"post_type": "gen_project",
	"lat": 9.9297,
	"lng": -84.0492
}, {
	"ID": "239017",
	"post_title": "KindaVillage",
	"post_type": "gen_project",
	"lat": 52.0465,
	"lng": -4.2461
}, {
	"ID": "239116",
	"post_title": "Mauritius Ecovillage",
	"post_type": "gen_project",
	"lat": -20.319,
	"lng": 57.38
}, {
	"ID": "239216",
	"post_title": "GDA Sidi Amor",
	"post_type": "gen_project",
	"lat": 36.9323,
	"lng": 10.1423
}, {
	"ID": "239249",
	"post_title": "Awakened Forest Project",
	"post_type": "gen_project",
	"lat": 40.1975,
	"lng": -7.7994
}, {
	"ID": "239258",
	"post_title": "Eco Aldea Tierra de Niebla",
	"post_type": "gen_project",
	"lat": 19.1764,
	"lng": -96.9723
}, {
	"ID": "239507",
	"post_title": "VFS Dargeluetz",
	"post_type": "gen_project",
	"lat": 53.4836,
	"lng": 11.8577
}, {
	"ID": "239510",
	"post_title": "Beyond Vitality",
	"post_type": "gen_project",
	"lat": 15.4419,
	"lng": -61.2583
}, {
	"ID": "239533",
	"post_title": "Dogtown Ecovillage",
	"post_type": "gen_project",
	"lat": 38.6245,
	"lng": -90.2936
}, {
	"ID": "239611",
	"post_title": "Goodlife Eco Village",
	"post_type": "gen_project",
	"lat": 44.2265,
	"lng": -76.2887
}, {
	"ID": "239636",
	"post_title": "EcoGay Community",
	"post_type": "gen_project",
	"lat": 4.6804,
	"lng": -74.5325
}, {
	"ID": "239668",
	"post_title": "Willka Hampi",
	"post_type": "gen_project",
	"lat": -13.411,
	"lng": -71.9495
}, {
	"ID": "240078",
	"post_title": "Esenios Madrid",
	"post_type": "gen_project",
	"lat": 40.4168,
	"lng": -3.7038
}, {
	"ID": "240412",
	"post_title": "Eco- Social Development Initiatives",
	"post_type": "gen_project",
	"lat": 0.0146,
	"lng": 32.6074
}, {
	"ID": "241297",
	"post_title": "Living Energy Farm",
	"post_type": "gen_project",
	"lat": 38.037,
	"lng": -77.9865
}, {
	"ID": "241400",
	"post_title": "Qiandao Eco-village",
	"post_type": "gen_project",
	"lat": 29.4742,
	"lng": 118.6438
}, {
	"ID": "241507",
	"post_title": "Instituto Favela da Paz",
	"post_type": "gen_project",
	"lat": -23.7028,
	"lng": -46.7692
}, {
	"ID": "241650",
	"post_title": "Korogonas Ark, peace, educational\xA0community for regeneration &amp; Connection",
	"post_type": "gen_project",
	"lat": 36.6716,
	"lng": 22.8907
}, {
	"ID": "241741",
	"post_title": "8th Life Panama",
	"post_type": "gen_project",
	"lat": 8.3951,
	"lng": -80.2627
}, {
	"ID": "241965",
	"post_title": "Ocate Cliffs",
	"post_type": "gen_project",
	"lat": 36.2357,
	"lng": -105.1407
}, {
	"ID": "241969",
	"post_title": "Farkha",
	"post_type": "gen_project",
	"lat": 32.0701,
	"lng": 35.1496
}, {
	"ID": "241981",
	"post_title": "Loving Center for Transformation",
	"post_type": "gen_project",
	"lat": 23.0427,
	"lng": 72.566
}, {
	"ID": "242048",
	"post_title": "Ecovillage La Cite Ecologique of NH",
	"post_type": "gen_project",
	"lat": 44.9342,
	"lng": -71.4762
}, {
	"ID": "242150",
	"post_title": "Mafraq Domes",
	"post_type": "gen_project",
	"lat": 31.1583,
	"lng": 36.8613
}, {
	"ID": "242540",
	"post_title": "Red de Permacultura Bioregi\xF3n Central Occidental",
	"post_type": "gen_project",
	"lat": 10.1289,
	"lng": -84.5297
}, {
	"ID": "242613",
	"post_title": "LandGut Girtenm\xFChle",
	"post_type": "gen_project",
	"lat": 49.5324,
	"lng": 6.6882
}, {
	"ID": "243702",
	"post_title": "Smala Ecovillage Communities",
	"post_type": "gen_project",
	"lat": 46.4977,
	"lng": 6.725
}, {
	"ID": "243747",
	"post_title": "ESPOIR POUR TOUS",
	"post_type": "gen_project",
	"lat": -4.434,
	"lng": 19.9951
}, {
	"ID": "243749",
	"post_title": "LIBULU ECO COMMUNAUTE",
	"post_type": "gen_project",
	"lat": -4.4779,
	"lng": 16.2158
}, {
	"ID": "243752",
	"post_title": "MINGADI1 ECO COMMUNAUTE",
	"post_type": "gen_project",
	"lat": -4.6805,
	"lng": 15.2161
}, {
	"ID": "243754",
	"post_title": "MINGADI2 ECO COMMUNAUTE",
	"post_type": "gen_project",
	"lat": -4.6586,
	"lng": 15.2051
}, {
	"ID": "243756",
	"post_title": "DIAKI ECO COMMUNAUTE",
	"post_type": "gen_project",
	"lat": -4.6805,
	"lng": 15.2051
}, {
	"ID": "243893",
	"post_title": "Natura Regenerative Community",
	"post_type": "gen_project",
	"lat": 44.3615,
	"lng": -64.5109
}, {
	"ID": "243934",
	"post_title": "Children Development Program",
	"post_type": "gen_project",
	"lat": 27.7279,
	"lng": 85.2883
}, {
	"ID": "244131",
	"post_title": "Sembrando Vida",
	"post_type": "gen_project",
	"lat": 23.1615,
	"lng": -106.3597
}, {
	"ID": "244213",
	"post_title": "#MeetThetribe :  Gond Tribe,  Bastar,  Chattisgarh",
	"post_type": "gen_project",
	"lat": 19.1071,
	"lng": 81.9535
}, {
	"ID": "244220",
	"post_title": "Project Abundance Bulgaria",
	"post_type": "gen_project",
	"lat": 42.0279,
	"lng": 26.5965
}, {
	"ID": "244231",
	"post_title": "Camphill Village Minnesota",
	"post_type": "gen_project",
	"lat": 45.847,
	"lng": -94.8402
}, {
	"ID": "244247",
	"post_title": "Consejo de Visiones Guardianes de la Tierra Mexico",
	"post_type": "gen_project",
	"lat": 18.6417,
	"lng": -88.3637
}, {
	"ID": "244254",
	"post_title": "Bomigo Island - Ecovillage Transition Project",
	"post_type": "gen_project",
	"lat": 5.8805,
	"lng": 0.6886
}, {
	"ID": "244279",
	"post_title": "Fundacion Escuela Sintana y Tierra Negra",
	"post_type": "gen_project",
	"lat": 11.2333,
	"lng": -73.7668
}, {
	"ID": "244465",
	"post_title": "Cambium \xB7 Leben in Gemeinschaft",
	"post_type": "gen_project",
	"lat": 46.9326,
	"lng": 16.0203
}, {
	"ID": "244557",
	"post_title": "Zhoutian Ancient Hakka Village",
	"post_type": "gen_project",
	"lat": 22.8562,
	"lng": 114.4151
}, {
	"ID": "244617",
	"post_title": "solana de riambau",
	"post_type": "gen_project",
	"lat": 42.3375,
	"lng": 2.8024
}, {
	"ID": "244650",
	"post_title": "Elos",
	"post_type": "gen_project",
	"lat": -23.9466,
	"lng": -46.3507
}, {
	"ID": "244810",
	"post_title": "The Xperiment",
	"post_type": "gen_project",
	"lat": 42.6723,
	"lng": 25.7324
}, {
	"ID": "245010",
	"post_title": "BIOpolis",
	"post_type": "gen_project",
	"lat": 48.3345,
	"lng": 25.7749
}, {
	"ID": "245188",
	"post_title": "Ground-Up Initiative",
	"post_type": "gen_project",
	"lat": 1.4143,
	"lng": 103.8279
}, {
	"ID": "245234",
	"post_title": "ECOVILLAGE A KODIMASSO",
	"post_type": "gen_project",
	"lat": 5.8702,
	"lng": -4.6558
}, {
	"ID": "245299",
	"post_title": "Zanasouj Ecovillage,  Qazvin",
	"post_type": "gen_project",
	"lat": 36.4305,
	"lng": 50.1872
}, {
	"ID": "245432",
	"post_title": "RiverFalls Village - Costa Rica",
	"post_type": "gen_project",
	"lat": 9.1755,
	"lng": -83.721
}, {
	"ID": "245512",
	"post_title": "Rocky Corner Cohousing",
	"post_type": "gen_project",
	"lat": 41.4033,
	"lng": -72.9995
}, {
	"ID": "245584",
	"post_title": "Eco Soul Hostel,  London",
	"post_type": "gen_project",
	"lat": 51.4633,
	"lng": -0.1123
}, {
	"ID": "245635",
	"post_title": "Miller's Corner",
	"post_type": "gen_project",
	"lat": -35.0619,
	"lng": 138.858
}, {
	"ID": "245661",
	"post_title": "Hastakala Eco Village",
	"post_type": "gen_project",
	"lat": 17.8098,
	"lng": 78.4395
}, {
	"ID": "245867",
	"post_title": "Centro Amazanga Ecuador",
	"post_type": "gen_project",
	"lat": -1.0962,
	"lng": -78.3578
}, {
	"ID": "245926",
	"post_title": "Mantra Life",
	"post_type": "gen_project",
	"lat": 6.8991,
	"lng": 79.9053
}, {
	"ID": "245991",
	"post_title": "Dome Lombok",
	"post_type": "gen_project",
	"lat": -8.9127,
	"lng": 116.3414
}, {
	"ID": "246050",
	"post_title": "Eco Caminhos",
	"post_type": "gen_project",
	"lat": -22.3034,
	"lng": -42.5867
}, {
	"ID": "246140",
	"post_title": "Zonca Ecovillage Italy",
	"post_type": "gen_project",
	"lat": 46.057,
	"lng": 8.2057
}, {
	"ID": "246330",
	"post_title": "Bio Chakra",
	"post_type": "gen_project",
	"lat": -34.4943,
	"lng": -58.634
}, {
	"ID": "246388",
	"post_title": "India One Solar Thermal Power Plant",
	"post_type": "gen_project",
	"lat": 24.5167,
	"lng": 72.7858
}, {
	"ID": "246486",
	"post_title": "Elphinstone Rainbow Village",
	"post_type": "gen_project",
	"lat": 49.4549,
	"lng": -123.628
}, {
	"ID": "247065",
	"post_title": "Barrow &amp; Cousins Family Foundation Friendly Ecovillage Farm Project Dankunku",
	"post_type": "gen_project",
	"lat": 13.5716,
	"lng": -15.324
}, {
	"ID": "247178",
	"post_title": "Wellnessland Health Institute and Wholeness Center",
	"post_type": "gen_project",
	"lat": 10.3051,
	"lng": 123.9011
}, {
	"ID": "247258",
	"post_title": "Ghana Permaculture Institute",
	"post_type": "gen_project",
	"lat": 7.6619,
	"lng": -1.8436
}, {
	"ID": "247282",
	"post_title": "Dry Gulch Ecovillage",
	"post_type": "gen_project",
	"lat": 39.7328,
	"lng": -105.0481
}, {
	"ID": "247699",
	"post_title": "Catfarm",
	"post_type": "gen_project",
	"lat": 43.4977,
	"lng": 3.6598
}, {
	"ID": "248065",
	"post_title": "Ananda Valley",
	"post_type": "gen_project",
	"lat": 40.1703,
	"lng": -7.6648
}, {
	"ID": "248079",
	"post_title": "Zeleni Kruchi",
	"post_type": "gen_project",
	"lat": 49.4216,
	"lng": 30.8663
}, {
	"ID": "248089",
	"post_title": "YestoSustainability",
	"post_type": "gen_project",
	"lat": 42.8727,
	"lng": -1.346
}, {
	"ID": "248180",
	"post_title": "Casa Putraint\xFC - Ecoescuela Arte Escencia",
	"post_type": "gen_project",
	"lat": -32.6103,
	"lng": -70.7151
}, {
	"ID": "248314",
	"post_title": "Rancho Mastatal",
	"post_type": "gen_project",
	"lat": 9.6728,
	"lng": -84.3705
}, {
	"ID": "248430",
	"post_title": "Borgo Basino Folk School Ecovillage Farm",
	"post_type": "gen_project",
	"lat": 44.0416,
	"lng": 11.9814
}, {
	"ID": "248486",
	"post_title": "Elves of Armenia Eco-Project",
	"post_type": "gen_project",
	"lat": 40.7268,
	"lng": 45.0513
}, {
	"ID": "248564",
	"post_title": "Unity Ecovillage",
	"post_type": "gen_project",
	"lat": 5.1939,
	"lng": -1.2123
}, {
	"ID": "248578",
	"post_title": "EcoSur",
	"post_type": "gen_project",
	"lat": -35.1776,
	"lng": -67.5098
}, {
	"ID": "248624",
	"post_title": "La Bolina",
	"post_type": "gen_project",
	"lat": 36.9322,
	"lng": -3.5914
}, {
	"ID": "248712",
	"post_title": "Permaculture demonstrative center for dry climate in Hidalgo mexico",
	"post_type": "gen_project",
	"lat": 20.3871,
	"lng": -98.9616
}, {
	"ID": "248730",
	"post_title": "New Vraja Bhumy Dhama",
	"post_type": "gen_project",
	"lat": 46.8848,
	"lng": 31.7412
}, {
	"ID": "248732",
	"post_title": "Compass 21",
	"post_type": "gen_project",
	"lat": 10.2031,
	"lng": -2.5982
}, {
	"ID": "248759",
	"post_title": "Togo Eang,  Eco Lodge,  Tumbulawa,  Sulawesi,  Indonesia",
	"post_type": "gen_project",
	"lat": -0.4753,
	"lng": 121.748
}, {
	"ID": "248770",
	"post_title": "Obyrok",
	"post_type": "gen_project",
	"lat": 51.3857,
	"lng": 32.8664
}, {
	"ID": "248881",
	"post_title": "StadtCOLOUR",
	"post_type": "gen_project",
	"lat": 49.2827,
	"lng": -123.1207
}, {
	"ID": "248924",
	"post_title": "Bhakti Tirtha Dhama",
	"post_type": "gen_project",
	"lat": 49.8099,
	"lng": 29.5148
}, {
	"ID": "248942",
	"post_title": "New Mayapur",
	"post_type": "gen_project",
	"lat": 49.1668,
	"lng": 34.8046
}, {
	"ID": "248960",
	"post_title": "Intelligence Group",
	"post_type": "gen_project",
	"lat": 46.2386,
	"lng": 24.11
}, {
	"ID": "249038",
	"post_title": "Shambala",
	"post_type": "gen_project",
	"lat": 37.3166,
	"lng": -8.8037
}, {
	"ID": "249136",
	"post_title": "Ecoescuela El Jard\xEDn",
	"post_type": "gen_project",
	"lat": 8.709,
	"lng": -71.4823
}, {
	"ID": "249275",
	"post_title": "Chmyrivka",
	"post_type": "gen_project",
	"lat": 49.1049,
	"lng": 32.4622
}, {
	"ID": "249280",
	"post_title": "Raduga",
	"post_type": "gen_project",
	"lat": 46.5931,
	"lng": 32.7551
}, {
	"ID": "249345",
	"post_title": "Scope Zambia",
	"post_type": "gen_project",
	"lat": -15.5797,
	"lng": 28.3897
}, {
	"ID": "249349",
	"post_title": "Sandele Foundation",
	"post_type": "gen_project",
	"lat": 13.1182,
	"lng": -16.7649
}, {
	"ID": "249351",
	"post_title": "White Carpathians (Vrbovce)",
	"post_type": "gen_project",
	"lat": 48.8244,
	"lng": 17.5156
}, {
	"ID": "249686",
	"post_title": "Ecovillage in Olympos Antalya Turkey",
	"post_type": "gen_project",
	"lat": 36.384,
	"lng": 30.4406
}, {
	"ID": "249772",
	"post_title": "Obrobibini Peace Complex (OPC)",
	"post_type": "gen_project",
	"lat": 4.8164,
	"lng": -1.9421
}, {
	"ID": "249791",
	"post_title": "Ecoaldea Panzenu",
	"post_type": "gen_project",
	"lat": 10.0088,
	"lng": -75.044
}, {
	"ID": "249867",
	"post_title": "Ras\u0101 Haven",
	"post_type": "gen_project",
	"lat": 15.3597,
	"lng": 74.1834
}, {
	"ID": "249975",
	"post_title": "Cohabitat Qu\xE9bec",
	"post_type": "gen_project",
	"lat": 46.7945,
	"lng": -71.2663
}, {
	"ID": "250078",
	"post_title": "Ecovila Terras Altas",
	"post_type": "gen_project",
	"lat": -22.2882,
	"lng": -43.8053
}, {
	"ID": "250131",
	"post_title": "Chanchos de Monte",
	"post_type": "gen_project",
	"lat": 10.3389,
	"lng": -84.8312
}, {
	"ID": "250133",
	"post_title": "Caravana por la Paz y Restauraci\xF3n de la Madre Tierra",
	"post_type": "gen_project",
	"lat": -32.6419,
	"lng": -70.7331
}, {
	"ID": "250158",
	"post_title": "One Planet Valley",
	"post_type": "gen_project",
	"lat": 49.064,
	"lng": -116.4857
}, {
	"ID": "250191",
	"post_title": "Integrated farmers club, umathel",
	"post_type": "gen_project",
	"lat": 24.3929,
	"lng": 93.9008
}, {
	"ID": "250222",
	"post_title": "El Manzano",
	"post_type": "gen_project",
	"lat": -37.1556,
	"lng": -72.2851
}, {
	"ID": "250281",
	"post_title": "FREE:  Future Rural Economic Empowerment",
	"post_type": "gen_project",
	"lat": -28.522,
	"lng": 28.8319
}, {
	"ID": "250365",
	"post_title": "Lebensraum Belmont",
	"post_type": "gen_project",
	"lat": 46.6644,
	"lng": 7.8592
}, {
	"ID": "250421",
	"post_title": "Taiyari",
	"post_type": "gen_project",
	"lat": 19.2557,
	"lng": -99.4751
}, {
	"ID": "250425",
	"post_title": "Help create a new intentional community eco-tourism farm stay and healing center in a forest next to the USA border \u24CB Mexico",
	"post_type": "gen_project",
	"lat": 32.3972,
	"lng": -116.1093
}, {
	"ID": "250489",
	"post_title": "Bergen Ecovillage",
	"post_type": "gen_project",
	"lat": 60.4925,
	"lng": 5.6994
}, {
	"ID": "250530",
	"post_title": "Songaia Cohousing Community",
	"post_type": "gen_project",
	"lat": 47.7939,
	"lng": -122.1786
}, {
	"ID": "250679",
	"post_title": "Paradays - Living Happy",
	"post_type": "gen_project",
	"lat": 8.1699,
	"lng": 124.6594
}, {
	"ID": "250699",
	"post_title": "Vitopia - Magdeburg (Germany)",
	"post_type": "gen_project",
	"lat": 52.1535,
	"lng": 11.6774
}, {
	"ID": "250753",
	"post_title": "Almost Heaven Farms",
	"post_type": "gen_project",
	"lat": 26.8852,
	"lng": 88.0431
}, {
	"ID": "250785",
	"post_title": "Sanctuary Of Visions",
	"post_type": "gen_project",
	"lat": -27.6728,
	"lng": 121.6283
}, {
	"ID": "250804",
	"post_title": "Suwan organic farmstay",
	"post_type": "gen_project",
	"lat": 17.6672,
	"lng": 102.8182
}, {
	"ID": "250829",
	"post_title": "Twin Oaks Community",
	"post_type": "gen_project",
	"lat": 37.9305,
	"lng": -77.9886
}, {
	"ID": "250850",
	"post_title": "ML Jallow Ecovillage Project  The Gambia : Think Globally , Act Locally",
	"post_type": "gen_project",
	"lat": 13.344,
	"lng": -16.7323
}, {
	"ID": "250948",
	"post_title": "Living Well Community",
	"post_type": "gen_project",
	"lat": 35.7462,
	"lng": -79.6849
}, {
	"ID": "250963",
	"post_title": "Da Sen Dian Ecovillage Project",
	"post_type": "gen_project",
	"lat": 40.4076,
	"lng": 118.9497
}, {
	"ID": "251041",
	"post_title": "Wanakaset Network Thailand",
	"post_type": "gen_project",
	"lat": 13.6251,
	"lng": 101.4297
}, {
	"ID": "251088",
	"post_title": "Litibu Ecovillage",
	"post_type": "gen_project",
	"lat": 20.8095,
	"lng": -105.4784
}, {
	"ID": "251090",
	"post_title": "Kai Farms",
	"post_type": "gen_project",
	"lat": 14.2183,
	"lng": 120.9729
}, {
	"ID": "251116",
	"post_title": "Espace Culturel et Agricole Aduna'm",
	"post_type": "gen_project",
	"lat": 16.2742,
	"lng": -14.1565
}, {
	"ID": "251121",
	"post_title": "Meaningful Sustainable Volunteer Projects in Uganda",
	"post_type": "gen_project",
	"lat": 0.3549,
	"lng": 32.752
}, {
	"ID": "251142",
	"post_title": "Conocer gente para villa en Le\xF3n / Meet people to create an ecovillage in Leon",
	"post_type": "gen_project",
	"lat": 42.5987,
	"lng": -5.5671
}, {
	"ID": "251200",
	"post_title": "Bowden House Community",
	"post_type": "gen_project",
	"lat": 50.4157,
	"lng": -3.6872
}, {
	"ID": "251450",
	"post_title": "LaCasaRotta",
	"post_type": "gen_project",
	"lat": 44.6234,
	"lng": 7.8977
}, {
	"ID": "251510",
	"post_title": "Gemeinschaftsinitiative Chiemgau",
	"post_type": "gen_project",
	"lat": 47.9695,
	"lng": 12.4709
}, {
	"ID": "251545",
	"post_title": "Daruma Ecovillage",
	"post_type": "gen_project",
	"lat": 13.237,
	"lng": 100.9533
}, {
	"ID": "251702",
	"post_title": "Good Market",
	"post_type": "gen_project",
	"lat": 6.9062,
	"lng": 79.863
}, {
	"ID": "251730",
	"post_title": "Marcahuasi - Casa del Protector",
	"post_type": "gen_project",
	"lat": -11.7433,
	"lng": -76.6088
}, {
	"ID": "251732",
	"post_title": "Hawaiian Sanctuary Retreat Center",
	"post_type": "gen_project",
	"lat": 19.4819,
	"lng": -154.9441
}, {
	"ID": "251754",
	"post_title": "Northmoor UK",
	"post_type": "gen_project",
	"lat": 51.7241,
	"lng": -1.3798
}, {
	"ID": "251758",
	"post_title": "Community_ARK_Project",
	"post_type": "gen_project",
	"lat": 43.7044,
	"lng": -76.5167
}, {
	"ID": "251798",
	"post_title": "1st Humanity Fellowship Centre in New Brunswick",
	"post_type": "gen_project",
	"lat": 46.894,
	"lng": -65.8189
}, {
	"ID": "251916",
	"post_title": "Love House TLV",
	"post_type": "gen_project",
	"lat": 32.069,
	"lng": 34.814
}, {
	"ID": "254752",
	"post_title": "Eco Aldea de los glaciares sagrados - Maras",
	"post_type": "gen_project",
	"lat": -13.3382,
	"lng": -72.1434
}, {
	"ID": "254795",
	"post_title": "Summertown Gardens - Summertown,  Tennessee",
	"post_type": "gen_project",
	"lat": 35.4461,
	"lng": -87.3419
}, {
	"ID": "254882",
	"post_title": "Vila das Borboletas",
	"post_type": "gen_project",
	"lat": -23.8079,
	"lng": -47.4345
}, {
	"ID": "255015",
	"post_title": "Aerium",
	"post_type": "gen_project",
	"lat": 43.9996,
	"lng": 3.4854
}, {
	"ID": "255112",
	"post_title": "House of I * Heritage Chateau",
	"post_type": "gen_project",
	"lat": 40.9184,
	"lng": 115.2256
}, {
	"ID": "255161",
	"post_title": "Ekovillage Seven Hills in Ukraine",
	"post_type": "gen_project",
	"lat": 49.0082,
	"lng": 32.9048
}, {
	"ID": "255191",
	"post_title": "Jagera EcoCommunity",
	"post_type": "gen_project",
	"lat": -29.4552,
	"lng": 153.208
}, {
	"ID": "255248",
	"post_title": "The Tribe Goa - Forest Eco-Village - Guest House and Cafe",
	"post_type": "gen_project",
	"lat": 15.0384,
	"lng": 74.0181
}, {
	"ID": "255337",
	"post_title": "Communaut\xE9 de l'Arche de Saint-Antoine",
	"post_type": "gen_project",
	"lat": 45.1762,
	"lng": 5.217
}, {
	"ID": "255347",
	"post_title": "Myriad Village Marketing Co-op Ltd.",
	"post_type": "gen_project",
	"lat": 50.3869,
	"lng": -97.2607
}, {
	"ID": "255753",
	"post_title": "Adunam",
	"post_type": "gen_project",
	"lat": 16.2913,
	"lng": -14.1393
}, {
	"ID": "255944",
	"post_title": "Isinilang na Maharlika Ecovillage",
	"post_type": "gen_project",
	"lat": 14.9772,
	"lng": 121.1045
}, {
	"ID": "256265",
	"post_title": "Toranam - Sustainable Development in South India",
	"post_type": "gen_project",
	"lat": 13.6452,
	"lng": 78.5668
}, {
	"ID": "256395",
	"post_title": "La Bella Ecoaldea",
	"post_type": "gen_project",
	"lat": -35.7694,
	"lng": -71.3867
}, {
	"ID": "256419",
	"post_title": "Himalayan Hemp - Eco Project",
	"post_type": "gen_project",
	"lat": 32.1905,
	"lng": 75.7435
}, {
	"ID": "256507",
	"post_title": "ecovillage space - an online community for people in the regeneration movement",
	"post_type": "gen_project",
	"lat": 59.7952,
	"lng": 10.6085
}, {
	"ID": "256539",
	"post_title": "New Roots",
	"post_type": "gen_project",
	"lat": 55.4944,
	"lng": 11.8199
}, {
	"ID": "256543",
	"post_title": "Kinigi Eco Center",
	"post_type": "gen_project",
	"lat": -1.9707,
	"lng": 29.9278
}, {
	"ID": "256559",
	"post_title": "Peace Valley - Australian Bush Retreat",
	"post_type": "gen_project",
	"lat": -28.3115,
	"lng": 152.4584
}, {
	"ID": "256566",
	"post_title": "speargrass",
	"post_type": "gen_project",
	"lat": -13.5142,
	"lng": 131.7333
}, {
	"ID": "256576",
	"post_title": "Maleny Eco Village",
	"post_type": "gen_project",
	"lat": -26.7643,
	"lng": 152.8482
}, {
	"ID": "256610",
	"post_title": "Yasna Sloboda",
	"post_type": "gen_project",
	"lat": 54.7562,
	"lng": 37.8844
}, {
	"ID": "256672",
	"post_title": "Vila C\xE9u do Mapi\xE1",
	"post_type": "gen_project",
	"lat": -8.4563,
	"lng": -67.4416
}, {
	"ID": "256682",
	"post_title": "Cleary Ecovillage Collaboratory",
	"post_type": "gen_project",
	"lat": 42.5645,
	"lng": -83.9936
}, {
	"ID": "256700",
	"post_title": "Noordeland",
	"post_type": "gen_project",
	"lat": 52.8559,
	"lng": 7.0803
}, {
	"ID": "256724",
	"post_title": "Baireni Ecovillage",
	"post_type": "gen_project",
	"lat": 26.9817,
	"lng": 86.5331
}, {
	"ID": "256760",
	"post_title": "sagg eco village",
	"post_type": "gen_project",
	"lat": 34.2727,
	"lng": 74.7604
}, {
	"ID": "256762",
	"post_title": "ReSCOPE Programme",
	"post_type": "gen_project",
	"lat": -15.0287,
	"lng": 28.7412
}, {
	"ID": "256809",
	"post_title": "Global Ecovillage Network antenna of Central Africa",
	"post_type": "gen_project",
	"lat": 3.9179,
	"lng": 17.7549
}, {
	"ID": "256978",
	"post_title": "Crystal Land Colombia",
	"post_type": "gen_project",
	"lat": 1.9,
	"lng": -76.3618
}, {
	"ID": "256980",
	"post_title": "Oasis de Lentiourel",
	"post_type": "gen_project",
	"lat": 43.9875,
	"lng": 2.7992
}, {
	"ID": "257044",
	"post_title": "Permavillage",
	"post_type": "gen_project",
	"lat": 50.4674,
	"lng": 4.872
}, {
	"ID": "257081",
	"post_title": "OUR Ecovillage - Shawnigan Lake,  British Columbia,  Canada",
	"post_type": "gen_project",
	"lat": 48.6385,
	"lng": -123.609
}, {
	"ID": "257189",
	"post_title": "Hunter Healing Gardens",
	"post_type": "gen_project",
	"lat": -32.5298,
	"lng": 151.4924
}, {
	"ID": "257221",
	"post_title": "Kokangabha agro tourism",
	"post_type": "gen_project",
	"lat": 16.8752,
	"lng": 73.5302
}, {
	"ID": "257264",
	"post_title": "Oasis du Coq \xE0 l'\xC2me",
	"post_type": "gen_project",
	"lat": 44.584,
	"lng": -0.0897
}, {
	"ID": "257276",
	"post_title": "Jakobgut - einfach zusammen leben",
	"post_type": "gen_project",
	"lat": 50.5638,
	"lng": 11.9761
}, {
	"ID": "257346",
	"post_title": "Rancho Luna - Para\xEDso Renacer",
	"post_type": "gen_project",
	"lat": 11.2722,
	"lng": -73.8453
}, {
	"ID": "257356",
	"post_title": "Nuestra Finca Sagrada - Our Sacred Farm",
	"post_type": "gen_project",
	"lat": 11.8204,
	"lng": -86.1163
}, {
	"ID": "257396",
	"post_title": "Gaaraw\xE9 Village",
	"post_type": "gen_project",
	"lat": 8.8653,
	"lng": 98.7155
}, {
	"ID": "257460",
	"post_title": "EcoVillage de Pourgues",
	"post_type": "gen_project",
	"lat": 43.177,
	"lng": 1.4369
}, {
	"ID": "257520",
	"post_title": "Terre de la Reunion",
	"post_type": "gen_project",
	"lat": 46.0678,
	"lng": -74.1629
}, {
	"ID": "257905",
	"post_title": "RareBirds Housing Co-operative",
	"post_type": "gen_project",
	"lat": 50.6761,
	"lng": -120.3573
}, {
	"ID": "258041",
	"post_title": "supplied by nature -  naturversorgt",
	"post_type": "gen_project",
	"lat": 46.7228,
	"lng": 14.2001
}, {
	"ID": "258612",
	"post_title": "Heartwood Cohousing",
	"post_type": "gen_project",
	"lat": 37.2388,
	"lng": -107.6262
}, {
	"ID": "258697",
	"post_title": "Garaldea Inclusiva",
	"post_type": "gen_project",
	"lat": 40.146,
	"lng": -3.5294
}, {
	"ID": "258861",
	"post_title": "Vegetarium - Integral Eco Community Guest Home",
	"post_type": "gen_project",
	"lat": 43.0054,
	"lng": 23.3663
}, {
	"ID": "258893",
	"post_title": "Rural ICT Project",
	"post_type": "gen_project",
	"lat": 6.0333,
	"lng": -0.0833
}, {
	"ID": "258976",
	"post_title": "Programa Permanente Ecobairro | Instituto Ecobairro Brasil",
	"post_type": "gen_project",
	"lat": -23.5941,
	"lng": -46.6412
}, {
	"ID": "258985",
	"post_title": "Global Tribe Biodynamic Eco-village",
	"post_type": "gen_project",
	"lat": 37.1891,
	"lng": -6.5119
}, {
	"ID": "259062",
	"post_title": "Ecovillage Pentierebougou",
	"post_type": "gen_project",
	"lat": 13.0834,
	"lng": -7.9427
}, {
	"ID": "259184",
	"post_title": "Bowden House Community",
	"post_type": "gen_project",
	"lat": 50.4337,
	"lng": -3.6858
}, {
	"ID": "259192",
	"post_title": "Mount of Oaks - Monte dos Carvalhos",
	"post_type": "gen_project",
	"lat": 40.0732,
	"lng": -7.4445
}, {
	"ID": "259236",
	"post_title": "Cedar Moon",
	"post_type": "gen_project",
	"lat": 45.4422,
	"lng": -122.6861
}, {
	"ID": "259363",
	"post_title": "Innovative center for sustainable agriculture and rural development of Serbia",
	"post_type": "gen_project",
	"lat": 43.2271,
	"lng": 22.0309
}, {
	"ID": "259393",
	"post_title": "H\xE5gaby",
	"post_type": "gen_project",
	"lat": 59.8397,
	"lng": 17.5844
}, {
	"ID": "259446",
	"post_title": "Inla Kesh",
	"post_type": "gen_project",
	"lat": 16.5982,
	"lng": -92.5634
}, {
	"ID": "259465",
	"post_title": "Benfeita",
	"post_type": "gen_project",
	"lat": 40.2314,
	"lng": -7.9459
}, {
	"ID": "259738",
	"post_title": "Bringing Ideas Together",
	"post_type": "gen_project",
	"lat": 55.8511,
	"lng": -4.2252
}, {
	"ID": "259753",
	"post_title": "Firestone Sanctuary",
	"post_type": "gen_project",
	"lat": -27.1902,
	"lng": 152.7349
}, {
	"ID": "259819",
	"post_title": "St. Francis Farm Community",
	"post_type": "gen_project",
	"lat": 43.5909,
	"lng": -76.0269
}, {
	"ID": "259874",
	"post_title": "Arkbound Foundation",
	"post_type": "gen_project",
	"lat": 55.8511,
	"lng": -4.2252
}, {
	"ID": "259928",
	"post_title": "Kuna Comuna",
	"post_type": "gen_project",
	"lat": 28.3914,
	"lng": -16.5239
}, {
	"ID": "259939",
	"post_title": "Alt Terra Commons",
	"post_type": "gen_project",
	"lat": 34.0122,
	"lng": -117.6889
}, {
	"ID": "261218",
	"post_title": "Fundaci\xF3n ArteSumapaz",
	"post_type": "gen_project",
	"lat": 4.1911,
	"lng": -74.4465
}, {
	"ID": "261586",
	"post_title": "Dzin Space",
	"post_type": "gen_project",
	"lat": 48.1884,
	"lng": 24.7229
}, {
	"ID": "261625",
	"post_title": "Ekvn-Yefolecv",
	"post_type": "gen_project",
	"lat": 33.0167,
	"lng": -86.3121
}, {
	"ID": "261647",
	"post_title": "Centro Multidisciplinario Acahual",
	"post_type": "gen_project",
	"lat": 19.8362,
	"lng": -99.2134
}, {
	"ID": "261650",
	"post_title": "Mercado Aldeas Verdes",
	"post_type": "gen_project",
	"lat": 19.8359,
	"lng": -99.2108
}, {
	"ID": "261666",
	"post_title": "Ecovillage Project in Bangladesh",
	"post_type": "gen_project",
	"lat": 22.4898,
	"lng": 89.5707
}, {
	"ID": "261696",
	"post_title": "NW Agrivillage",
	"post_type": "gen_project",
	"lat": 48.202,
	"lng": -122.0621
}, {
	"ID": "261767",
	"post_title": "Zamukia Ecovillage",
	"post_type": "gen_project",
	"lat": 11.2451,
	"lng": -73.5594
}, {
	"ID": "261829",
	"post_title": "Kufunda Village",
	"post_type": "gen_project",
	"lat": -17.9762,
	"lng": 31.1565
}, {
	"ID": "261900",
	"post_title": "Tierra Baturi",
	"post_type": "gen_project",
	"lat": 23.4464,
	"lng": -110.2265
}, {
	"ID": "261949",
	"post_title": "Balenbouche Estate,  St Lucia",
	"post_type": "gen_project",
	"lat": 13.7566,
	"lng": -61.0277
}, {
	"ID": "262003",
	"post_title": "YouthLink",
	"post_type": "gen_project",
	"lat": 12.0024,
	"lng": 79.8144
}, {
	"ID": "262021",
	"post_title": "Bafut Ecovillage",
	"post_type": "gen_project",
	"lat": 6.0845,
	"lng": 10.1302
}, {
	"ID": "262034",
	"post_title": "Red de Reservas Kunagua",
	"post_type": "gen_project",
	"lat": 4.4206,
	"lng": -74.3531
}, {
	"ID": "262041",
	"post_title": "Terra Luminous",
	"post_type": "gen_project",
	"lat": -24.11,
	"lng": -48.3751
}, {
	"ID": "262132",
	"post_title": "Coalescence Ecovillage",
	"post_type": "gen_project",
	"lat": 20.7984,
	"lng": -156.3319
}, {
	"ID": "262245",
	"post_title": "Rachel Carson Ecovillage",
	"post_type": "gen_project",
	"lat": 40.4406,
	"lng": -79.9959
}, {
	"ID": "262258",
	"post_title": "Granja Ber\xF3",
	"post_type": "gen_project",
	"lat": 20.0621,
	"lng": -99.6203
}, {
	"ID": "262306",
	"post_title": "Campo Divino",
	"post_type": "gen_project",
	"lat": -32.1752,
	"lng": -64.5734
}, {
	"ID": "262319",
	"post_title": "Kumaon Maati - Agrotourism",
	"post_type": "gen_project",
	"lat": 29.3668,
	"lng": 79.1922
}, {
	"ID": "262378",
	"post_title": "Jacutinga do Capara\xF3",
	"post_type": "gen_project",
	"lat": -20.5275,
	"lng": -41.7269
}, {
	"ID": "262385",
	"post_title": "La Rosina Ecovillage",
	"post_type": "gen_project",
	"lat": 39.3593,
	"lng": -7.2714
}, {
	"ID": "262455",
	"post_title": "Biosphere Foundation",
	"post_type": "gen_project",
	"lat": -8.1608,
	"lng": 114.5856
}, {
	"ID": "262600",
	"post_title": "Espa\xE7o Org\xE2nico Imagine",
	"post_type": "gen_project",
	"lat": -26.9769,
	"lng": -49.1535
}, {
	"ID": "262857",
	"post_title": "Southern Life Community",
	"post_type": "gen_project",
	"lat": 26.204,
	"lng": 119.1897
}, {
	"ID": "262866",
	"post_title": "Gr\xF8nt Nabofellesskap",
	"post_type": "gen_project",
	"lat": 59.6615,
	"lng": 11.0054
}, {
	"ID": "262888",
	"post_title": "Quinta Alada",
	"post_type": "gen_project",
	"lat": 38.8037,
	"lng": -8.4098
}, {
	"ID": "262948",
	"post_title": "Ahimsagram",
	"post_type": "gen_project",
	"lat": 26.8335,
	"lng": 75.7915
}, {
	"ID": "262966",
	"post_title": "Nova Terra Project",
	"post_type": "gen_project",
	"lat": 0.2305,
	"lng": 6.6134
}, {
	"ID": "263035",
	"post_title": "The Camphill School",
	"post_type": "gen_project",
	"lat": 40.1361,
	"lng": -75.7063
}, {
	"ID": "263064",
	"post_title": "Kuroiwa Permaculture Farm",
	"post_type": "gen_project",
	"lat": 37.6938,
	"lng": 139.3835
}, {
	"ID": "263087",
	"post_title": "Vaishnav Dham Ecovillage",
	"post_type": "gen_project",
	"lat": 20.0794,
	"lng": 77.0478
}, {
	"ID": "263315",
	"post_title": "Sunshine Ecovillage Network",
	"post_type": "gen_project",
	"lat": 29.7408,
	"lng": 119.462
}, {
	"ID": "263451",
	"post_title": "Ecoaldea Tierra Madre",
	"post_type": "gen_project",
	"lat": -34.4688,
	"lng": -55.0854
}, {
	"ID": "263540",
	"post_title": "COVID-19 PANDEMIC RECOVERY PLAN FOR TOURISM SERVICE PROVIDERS IN KAHANGI VILLAGE NEAR KIBALE NATIONAL PARK IN WESTERN UGANDA",
	"post_type": "gen_project",
	"lat": 0.6546,
	"lng": 30.2801
}, {
	"ID": "263542",
	"post_title": "Sonas Village",
	"post_type": "gen_project",
	"lat": 11.0128,
	"lng": 104.6921
}, {
	"ID": "263545",
	"post_title": "Ser Humanos:  Building sustainable self-financing village communities",
	"post_type": "gen_project",
	"lat": -30.6815,
	"lng": -64.3368
}, {
	"ID": "263549",
	"post_title": "Khetee- Regenerative Agroforestry Farm",
	"post_type": "gen_project",
	"lat": 25.0867,
	"lng": 86.0708
}, {
	"ID": "263568",
	"post_title": "Cape Breton Eco Village",
	"post_type": "gen_project",
	"lat": 45.6531,
	"lng": -60.8052
}, {
	"ID": "263574",
	"post_title": "Farmer Tantoh's Ecovillage Project",
	"post_type": "gen_project",
	"lat": 6.0183,
	"lng": 10.1705
}, {
	"ID": "263589",
	"post_title": "El Nahual",
	"post_type": "gen_project",
	"lat": 4.4292,
	"lng": -74.3848
}, {
	"ID": "263593",
	"post_title": "V\xEDa Org\xE1nica",
	"post_type": "gen_project",
	"lat": 20.8144,
	"lng": -100.6198
}, {
	"ID": "263596",
	"post_title": "Green Releaf Initiative",
	"post_type": "gen_project",
	"lat": 10.3157,
	"lng": 123.8854
}, {
	"ID": "263601",
	"post_title": "Coops to Co-ops",
	"post_type": "gen_project",
	"lat": 38.2607,
	"lng": -75.6712
}, {
	"ID": "263605",
	"post_title": "Yaakunaj amor",
	"post_type": "gen_project",
	"lat": 19.1817,
	"lng": -88.4791
}, {
	"ID": "263619",
	"post_title": "La Ladera,  Terreno Cultural",
	"post_type": "gen_project",
	"lat": 19.0167,
	"lng": -99.2399
}, {
	"ID": "263659",
	"post_title": "Aldea Domo Permacultura Integral",
	"post_type": "gen_project",
	"lat": -34.7937,
	"lng": -70.7657
}, {
	"ID": "263697",
	"post_title": "Bamboo Village Of The Future",
	"post_type": "gen_project",
	"lat": 27.4129,
	"lng": 84.3752
}, {
	"ID": "263713",
	"post_title": "T\xE4rkkil\xE4",
	"post_type": "gen_project",
	"lat": 61.994,
	"lng": 25.162
}, {
	"ID": "263718",
	"post_title": "Habiba Community",
	"post_type": "gen_project",
	"lat": 29.0228,
	"lng": 34.6734
}, {
	"ID": "263726",
	"post_title": "Wild Community Natural Living Centre",
	"post_type": "gen_project",
	"lat": -28.5,
	"lng": 153.2167
}, {
	"ID": "263728",
	"post_title": "Pachamama Fair Trade",
	"post_type": "gen_project",
	"lat": 31.8339,
	"lng": -116.0614
}, {
	"ID": "263820",
	"post_title": "Les Femmes Leaders de la Lobaye (M\u2019baiki),  et de la K\xE9mo (D\xE9koa) dans le plaidoyer en faveur de leur participation  Au sein des instances d\xE9cisionnelles de la Gouvernance Foresti\xE8re:   Objectif Agenda 2030.",
	"post_type": "gen_project",
	"lat": 4.3693,
	"lng": 18.0845
}, {
	"ID": "263839",
	"post_title": "SemillAmadi Huerto Urbano. Centro de Intercambio de Aprendizajes y Siembra.",
	"post_type": "gen_project",
	"lat": 31.8771,
	"lng": -116.6207
}, {
	"ID": "263928",
	"post_title": "Desert Matters",
	"post_type": "gen_project",
	"lat": 30.0376,
	"lng": 35.0184
}, {
	"ID": "263962",
	"post_title": "Natuurdorp Maashorst",
	"post_type": "gen_project",
	"lat": 51.7268,
	"lng": 5.6595
}, {
	"ID": "263983",
	"post_title": "SCOPE Zimbabwe - Ecovillage@Chitubu",
	"post_type": "gen_project",
	"lat": -17.3025,
	"lng": 29.752
}, {
	"ID": "264005",
	"post_title": "Barrio cultural Ejido sur",
	"post_type": "gen_project",
	"lat": 20.6296,
	"lng": -87.0739
}, {
	"ID": "264033",
	"post_title": "Jaguar Chirripo",
	"post_type": "gen_project",
	"lat": 9.3538,
	"lng": -83.6264
}, {
	"ID": "264074",
	"post_title": "Mkaaji Mpya Asbl",
	"post_type": "gen_project",
	"lat": -2.0969,
	"lng": 28.9048
}, {
	"ID": "264090",
	"post_title": "ECO-CLEAN GHANA FOUNDATION",
	"post_type": "gen_project",
	"lat": 7.193,
	"lng": -1.3857
}, {
	"ID": "264108",
	"post_title": "Kajulu Hills Eco-Villages",
	"post_type": "gen_project",
	"lat": -0.0157,
	"lng": 34.8172
}, {
	"ID": "264165",
	"post_title": "INKIRI COMMUNITY - PIRACANGA ECOVILLAGE,  BAHIA - BRAZIL.",
	"post_type": "gen_project",
	"lat": -14.2136,
	"lng": -38.9922
}, {
	"ID": "264170",
	"post_title": "Les Femmes Leaders de la Lobaye (M\u2019baiki),  et de la K\xE9mo (D\xE9koa) dans le plaidoyer en faveur de leur participation au sein des instances d\xE9cisionnelles de la Gouvernance Foresti\xE8re:   Objectif Agenda 2030. \xBB",
	"post_type": "gen_project",
	"lat": 6.0105,
	"lng": 19.6446
}, {
	"ID": "264188",
	"post_title": "\"Enhancing Livelihood Revolving Model of the Bangladesh Sundarbans Resource Harvesters\"",
	"post_type": "gen_project",
	"lat": 33.9568,
	"lng": 100.6416
}, {
	"ID": "264398",
	"post_title": "CVEG Vereniging Ecodorpen Gelderland",
	"post_type": "gen_project",
	"lat": 51.8836,
	"lng": 5.8511
}, {
	"ID": "264654",
	"post_title": "O2 Dom",
	"post_type": "gen_project",
	"lat": 56.022,
	"lng": 36.6035
}, {
	"ID": "264803",
	"post_title": "Kwasha Mukwenu",
	"post_type": "gen_project",
	"lat": -14.6411,
	"lng": 27.3789
}, {
	"ID": "264863",
	"post_title": "Green Village Calauan",
	"post_type": "gen_project",
	"lat": 14.1701,
	"lng": 121.3309
}, {
	"ID": "264903",
	"post_title": "Mangwende Orphan Care Trust (MOCT)",
	"post_type": "gen_project",
	"lat": -17.8786,
	"lng": 31.6348
}, {
	"ID": "264920",
	"post_title": "The Hives Project",
	"post_type": "gen_project",
	"lat": 40.2591,
	"lng": 23.5241
}, {
	"ID": "264988",
	"post_title": "Eco Centro Social Vila dos Sonhos",
	"post_type": "gen_project",
	"lat": -21.9634,
	"lng": -43.1546
}, {
	"ID": "265005",
	"post_title": "The Woods",
	"post_type": "gen_project",
	"lat": 6.7634,
	"lng": 80.918
}, {
	"ID": "265053",
	"post_title": "Le Hameau des Cascades",
	"post_type": "gen_project",
	"lat": 31.2652,
	"lng": -9.7937
}, {
	"ID": "265211",
	"post_title": "Shunya farm",
	"post_type": "gen_project",
	"lat": 32.0461,
	"lng": 76.726
}, {
	"ID": "265271",
	"post_title": "Plantamor",
	"post_type": "gen_project",
	"lat": 28.2583,
	"lng": -16.4265
}, {
	"ID": "265284",
	"post_title": "Aya - Ecovillage &amp; Nature Center",
	"post_type": "gen_project",
	"lat": 51.5043,
	"lng": 4.997
}, {
	"ID": "265314",
	"post_title": "Noble Gateway Malaysia",
	"post_type": "gen_project",
	"lat": 3.1192,
	"lng": 101.8359
}, {
	"ID": "265359",
	"post_title": "NGO Synchronic Liines Association",
	"post_type": "gen_project",
	"lat": 45.4305,
	"lng": 7.7588
}, {
	"ID": "265496",
	"post_title": "Connecting,  Planning and Investigating",
	"post_type": "gen_project",
	"lat": 57.1726,
	"lng": 16.0206
}, {
	"ID": "265499",
	"post_title": "KANCHI Eco Village",
	"post_type": "gen_project",
	"lat": 12.9588,
	"lng": 79.5733
}, {
	"ID": "265549",
	"post_title": "Southern Coastal Oregon Permaculture Ecovillage,  SCOPE",
	"post_type": "gen_project",
	"lat": 42.4126,
	"lng": -124.4179
}, {
	"ID": "265643",
	"post_title": "Paradise Valley",
	"post_type": "gen_project",
	"lat": 52.2305,
	"lng": -2.4395
}, {
	"ID": "265696",
	"post_title": "Lisdean Farm",
	"post_type": "gen_project",
	"lat": 54.3324,
	"lng": -7.2952
}, {
	"ID": "265722",
	"post_title": "Valley of Light",
	"post_type": "gen_project",
	"lat": 36.6082,
	"lng": -81.2214
}, {
	"ID": "265737",
	"post_title": "PORTAL XIBALBA:  ECO-VILLAGE IN THE JUNGLE OF PLAYA DEL CARMEN",
	"post_type": "gen_project",
	"lat": 20.7,
	"lng": -87.0608
}, {
	"ID": "265749",
	"post_title": "Green Village Raipur",
	"post_type": "gen_project",
	"lat": 21.9896,
	"lng": 82.7527
}, {
	"ID": "265767",
	"post_title": "OurLand Nature Reserve and Eco-village",
	"post_type": "gen_project",
	"lat": 14.1443,
	"lng": 99.3184
}, {
	"ID": "265960",
	"post_title": "The Wild Cooperative",
	"post_type": "gen_project",
	"lat": 38.7039,
	"lng": -107.6089
}, {
	"ID": "266004",
	"post_title": "Zem\u011Bsouzn\u011Bn\xED",
	"post_type": "gen_project",
	"lat": 50.1007,
	"lng": 13.008
}, {
	"ID": "266103",
	"post_title": "Green Academy Yayu",
	"post_type": "gen_project",
	"lat": 8.3468,
	"lng": 35.8555
}];

},{}],2:[function(require,module,exports){
module.exports={
    "general": {
        "language": "english",
        "loader": {
            "text": "Getting data..."
        },
        "carousel": {
            "visible": true,
            "animate": true,
            "time": 10000
        },
        "search": {
            "tags": {
                "visible": false
            },
            "filters": {
                "visible": false
            },
            "visible": true
        },
        "halfway_menu": {
            "visible": true
        },
        "footer": {
            "logo": "_____.png",
            "background": "footer-background_399395-PCOQ5H-624.png",
            "description": "",
            "visible": true
        },
        "license": {
            "text": ""
        }
    },
    "404": {
        "title": "Page not found",
        "carousel": {
            "visible": true,
            "items": [{
                "message": "",
                "image": "cowpea.jpg"
            }]
        }
    },
    "home": {
        "carousel": {
            "visible": true,
            "items": [{
                "message": "",
                "image": "cowpea.jpg"
            }]
        },
        "sections": {
            "help": {
                "title": "Instructions to develop a new ontology",
                "items_per_page": null,
                "read_more_button": {
                    "visible": false,
                    "label": ""
                },
                "visible": true
            },
            "news": {
                "title": "Latest news",
                "items_per_page": 3,
                "read_more_button": {
                    "visible": true,
                    "label": "Read more..."
                },
                "visible": true
            },
            "ontologies": {
                "title": "Ontologies",
                "items_per_page": 10,
                "read_more_button": {
                    "visible": true,
                    "label": "All ontologies ›"
                },
                "visible": true
            }
        }
    },
    "latest": {
        "title": "Latest Ontologies and Terms",
        "visible": true,
        "carousel": {
            "visible": false,
            "items": [{
                "message": "",
                "image": "cowpea.jpg"
            }]
        }
    },
    "about": {
        "title": "About the Project",
        "visible": true,
        "carousel": {
            "visible": true,
            "items": [{
                "message": "",
                "image": "Neil Palmer-CIAT - About the project.jpg"
            }]
        }
    },
    "privacy-policy": {
        "title": "Privacy policy",
        "visible": true,
        "carousel": {
            "visible": true,
            "items": [{
                "message": "",
                "image": "Neil Palmer-CIAT - Privacy policies.jpg"
            }]
        }
    },
    "API": {
        "title": "API",
        "visible": true,
        "carousel": {
            "visible": true,
            "items": [{
                "message": "",
                "image": "Neil Palmer-CIAT - API"
            }]
        }
    },
    "contact-us": {
        "title": "Contact us",
        "visible": true,
        "carousel": {
            "visible": true,
            "items": [{
                "message": "",
                "image": "Neil Palmer-CIAT - Contact us.jpg"
            }]
        }
    },
    "feedback": {
        "title": "Feedback",
        "visible": true,
        "carousel": {
            "visible": true,
            "items": [{
                "message": "",
                "image": "Neil Palmer-CIAT - Feedback..jpg"
            }]
        }
    },
    "add-ontology": {
        "title": "Add new terms",
        "visible": true,
        "carousel": {
            "visible": true,
            "items": [{
                "message": "",
                "image": "credit_Bioversity International- Add anew term.jpg"
            }]
        }
    },
    "ontology": {
        "title": "",
        "visible": true,
        "carousel": {
            "visible": false,
            "items": [{
                "message": "",
                "image": ""
            }]
        }
    },
    "terms": {
        "title": "",
        "visible": true,
        "carousel": {
            "visible": false,
            "items": [{
                "message": "",
                "image": ""
            }]
        }
    },
    "register": {
        "title": "Register",
        "visible": true,
        "carousel": {
            "visible": false,
            "items": [{
                "message": "",
                "image": ""
            }]
        }
    },
    "forgot-password": {
        "title": "Forgot password",
        "visible": true,
        "carousel": {
            "visible": false,
            "items": [{
                "message": "",
                "image": ""
            }]
        }
    },
    "annotation-tool": {
        "title": "Annotation Tool",
        "visible": true,
        "carousel": {
            "visible": false,
            "items": [{
                "message": "",
                "image": ""
            }]
        }
    }
}

},{}],3:[function(require,module,exports){
module.exports={
	"default": "english",
	"all": [
		"english",
		"french",
		"spanish",
		"chinese",
		"portugese"
	],
	"iso": {
		"EN": "english",
		"FR": "french",
		"ES": "spanish",
		"CN": "chinese",
		"PT": "portugese"
	},
	"getIso": {
		"english":"EN",
		"undefined":"EN",
		"french":  "FR",
		"spanish": "ES",
		"chinese": "CN",
		"portugese":"PT"
	}
}

},{}],4:[function(require,module,exports){
module.exports={
    "menu": {
        "sidenav": {
            "position": "right",
            "items": [
                {
                    "label": "Home",
                    "link": "./",
                    "display": true
                },
                {
                    "label": "About",
                    "link": "./about",
                    "display": true
                },
                {
                    "label": "Add new terms",
                    "link": "./add-ontology",
                    "display": true
                },
                {
                    "label": "API",
                    "link": "./api",
                    "display": false
                },
                {
                    "label": "Agtrials",
                    "link": "./agtrials",
                    "display": false
                },
                {
                    "label": "Annotation Tool",
                    "link": "./annotation-tool",
                    "display": true
                },
                { "separator": true },
                {
                    "label": "Login",
                    "link": "#user_modal",
                    "class": "modal-trigger",
                    "display": true
                },
                {
                    "label": "Register",
                    "link": "./register",
                    "display": true
                }
            ]
        },
        "top_menu": {
            "position": "right",
            "class": "",
            "items": [
                {
                    "label": "Home",
                    "link": "./",
                    "display": true,
                    "is_sidenav_link": false
                },
                {
                    "label": "About",
                    "link": "./about",
                    "display": true,
                    "is_sidenav_link": false
                },
                {
                    "label": "Add new terms",
                    "link": "./add-ontology",
                    "display": true,
                    "is_sidenav_link": false
                },
                {
                    "label": "API",
                    "link": "./api",
                    "display": false,
                    "is_sidenav_link": false
                },
                {
                    "label": "Agtrials",
                    "link": "./agtrials",
                    "display": false,
                    "is_sidenav_link": false
                },
                {
                    "label": "Annotation Tool",
                    "link": "./annotation-tool",
                    "display": true,
                    "is_sidenav_link": false
                },
                { "separator": true },
                {
                    "label": "Login",
                    "link": "#user_modal",
                    "class": "modal-trigger",
                    "display": true,
                    "is_sidenav_link": false
                },
                { "separator": "or" },
                {
                    "label": "Register",
                    "link": "./register",
                    "display": true,
                    "is_sidenav_link": false
                },
                {
                    "link": "javascript:;",
                    "data": {
                        "activates": "sidenav"
                    },
                    "class": "button-collapse black-text",
                    "display": true,
                    "is_sidenav_link": true
                }
            ]
        },
        "halfway_menu": {
            "position": "center",
            "class": "",
            "items": [
                {
                    "label": "Contact us",
                    "link": "./contact-us",
                    "display": true
                },
                {
                    "label": "API",
                    "link": "./API",
                    "display": true
                },
                {
                    "label": "Feedback",
                    "link": "./feedback",
                    "display": true
                }
            ]
        },
        "footer_menu": {
            "items": [
                {
                    "title": "&nbsp;",
                    "position": "left_menu",
                    "class": "",
                    "items": [
                        {
                            "label": "Home",
                            "link": "./",
                            "display": true
                        },
                        { "separator": "" },
                        {
                            "label": "About",
                            "link": "./about",
                            "display": true
                        },
                        {
                            "label": "Blog",
                            "link": "./blog",
                            "display": false
                        },
                        {
                            "label": "API",
                            "link": "./api",
                            "display": false
                        },
                        {
                            "label": "Agtrials",
                            "link": "./agtrials",
                            "display": false
                        },
                        {
                            "label": "Annotation Tool",
                            "link": "./annotation-tool",
                            "display": true
                        },
                        {
                            "label": "All ontologies",
                            "link": "./all-ontologies",
                            "display": false
                        },
                        {
                            "label": "Contact us",
                            "link": "./contact-us",
                            "display": true
                        },
                        {
                            "label": "Feedback",
                            "link": "./feedback",
                            "display": true
                        },
                        {
                            "label": "Privacy policy",
                            "link": "./privacy-policy",
                            "display": true
                        }
                    ]
                },
                {
                    "title": "Related sites",
                    "position": "center_menu",
                    "class": "",
                    "items": [
                        {
                            "label": "Integrated Breeding Platform",
                            "link": "https://www.integratedbreeding.net",
                            "display": true,
                            "target": "_blank"
                        },
                        {
                            "label": "Bioversity International",
                            "link": "http://www.bioversityinternational.org",
                            "display": true,
                            "target": "_blank"
                        },
                        {
                            "label": "NSF (National Science Foundation) -  cROP: Common Reference Ontologies and Applications for Plant Biology",
                            "link": "https://www.nsf.gov/awardsearch/showAward?AWD_ID=1340112",
                            "display": true,
                            "target": "_blank"
                        },
                        {
                            "label": "Planteome",
                            "link": "http://www.planteome.org",
                            "display": true,
                            "target": "_blank"
                        }
                    ]
                },
                {
                    "title": "Follow us",
                    "position": "right_menu",
                    "class": "horizontal",
                    "items": [
                        {
                            "label": "Github",
                            "link": "https://github.com/bioversity/Crop-Ontology/",
                            "display": true,
                            "target": "_blank",
                            "icon": "fab fa-github fa-2x"
                        },
                        {
                            "label": "Youtube",
                            "link": "https://www.youtube.com/channel/UC1HBPf5qzcR6YGaAh-3TzNg",
                            "display": true,
                            "target": "_blank",
                            "icon": "fab fa-youtube fa-2x"
                        },
                        {
                            "label": "Crop Ontology Community Website",
                            "link": "https://sites.google.com/a/cgxchange.org/cropontologycommunity/",
                            "display": true,
                            "target": "_blank",
                            "icon": "fas fa-newspaper fa-2x"
                        }
                    ]
                }
            ]
        },
        "bottom_links": {
            "items": [
                {
                    "title": "",
                    "position": "left",
                    "class": "",
                    "items": [
                        {
                            "label": "Integrated Breeding Platform",
                            "link": "https://www.integratedbreeding.net",
                            "image": "ibp.png",
                            "display": true,
                            "target": "_blank"
                        },
                        {
                            "label": "Bioversity International",
                            "link": "http://www.bioversityinternational.org",
                            "image": "bioversity_small.png",
                            "display": true,
                            "target": "_blank"
                        },
                        {
                            "label": "NSF (National Science Foundation) -  cROP: Common Reference Ontologies and Applications for Plant Biology",
                            "link": "https://www.nsf.gov/awardsearch/showAward?AWD_ID=1340112",
                            "image": "nsf.jpg",
                            "display": true,
                            "target": "_blank"
                        },
                        {
                            "label": "Planteome",
                            "link": "http://www.planteome.org",
                            "image": "planteome.png",
                            "display": true,
                            "target": "_blank"
                        }
                    ]
                },
                {
                    "title": "Bottom Heading",
                    "position": "right",
                    "class": "",
                    "items": [
                        {
                            "label": "Platform for Big Data in Agricolture",
                            "link": "https://www.cgiar.org/research/program-platform/platform-for-big-data-in-agriculture/",
                            "image": "big-data_platform_logo.png",
                            "display": true,
                            "target": "_blank"
                        }
                    ]
                }
            ]
        }
    }
}

},{}],5:[function(require,module,exports){
(function (process,global){(function (){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ES6Promise = factory());
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && typeof require === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    var then$$1 = void 0;
    try {
      then$$1 = value.then;
    } catch (error) {
      reject(promise, error);
      return;
    }
    handleMaybeThenable(promise, value, then$$1);
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = true;

  if (hasCallback) {
    try {
      value = callback(detail);
    } catch (e) {
      succeeded = false;
      error = e;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (succeeded === false) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = void 0;
      var error = void 0;
      var didError = false;
      try {
        _then = entry.then;
      } catch (e) {
        didError = true;
        error = e;
      }

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        if (didError) {
          reject(promise, error);
        } else {
          handleMaybeThenable(promise, entry, _then);
        }
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves

    Synchronous example:

    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }

    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```

    Asynchronous example:

    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```

    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    if (isFunction(callback)) {
      return promise.then(function (value) {
        return constructor.resolve(callback()).then(function () {
          return value;
        });
      }, function (reason) {
        return constructor.resolve(callback()).then(function () {
          throw reason;
        });
      });
    }

    return promise.then(callback, callback);
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));





}).call(this)}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":7}],6:[function(require,module,exports){
//! moment.js
//! version : 2.29.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function () { 'use strict';

    var hookCallback;

    function hooks() {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback(callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return (
            input instanceof Array ||
            Object.prototype.toString.call(input) === '[object Array]'
        );
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return (
            input != null &&
            Object.prototype.toString.call(input) === '[object Object]'
        );
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return Object.getOwnPropertyNames(obj).length === 0;
        } else {
            var k;
            for (k in obj) {
                if (hasOwnProp(obj, k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return (
            typeof input === 'number' ||
            Object.prototype.toString.call(input) === '[object Number]'
        );
    }

    function isDate(input) {
        return (
            input instanceof Date ||
            Object.prototype.toString.call(input) === '[object Date]'
        );
    }

    function map(arr, fn) {
        var res = [],
            i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false,
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this),
                len = t.length >>> 0,
                i;

            for (i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m),
                parsedParts = some.call(flags.parsedDateParts, function (i) {
                    return i != null;
                }),
                isNowValid =
                    !isNaN(m._d.getTime()) &&
                    flags.overflow < 0 &&
                    !flags.empty &&
                    !flags.invalidEra &&
                    !flags.invalidMonth &&
                    !flags.invalidWeekday &&
                    !flags.weekdayMismatch &&
                    !flags.nullInput &&
                    !flags.invalidFormat &&
                    !flags.userInvalidated &&
                    (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid =
                    isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            } else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid(flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        } else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = (hooks.momentProperties = []),
        updateInProgress = false;

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment(obj) {
        return (
            obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
        );
    }

    function warn(msg) {
        if (
            hooks.suppressDeprecationWarnings === false &&
            typeof console !== 'undefined' &&
            console.warn
        ) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [],
                    arg,
                    i,
                    key;
                for (i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (key in arguments[0]) {
                            if (hasOwnProp(arguments[0], key)) {
                                arg += key + ': ' + arguments[0][key] + ', ';
                            }
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(
                    msg +
                        '\nArguments: ' +
                        Array.prototype.slice.call(args).join('') +
                        '\n' +
                        new Error().stack
                );
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return (
            (typeof Function !== 'undefined' && input instanceof Function) ||
            Object.prototype.toString.call(input) === '[object Function]'
        );
    }

    function set(config) {
        var prop, i;
        for (i in config) {
            if (hasOwnProp(config, i)) {
                prop = config[i];
                if (isFunction(prop)) {
                    this[i] = prop;
                } else {
                    this['_' + i] = prop;
                }
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' +
                /\d{1,2}/.source
        );
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig),
            prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (
                hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])
            ) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i,
                res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L',
    };

    function calendar(key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (
            (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
            absNumber
        );
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        formatFunctions = {},
        formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(
                    func.apply(this, arguments),
                    token
                );
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens),
            i,
            length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '',
                i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i])
                    ? array[i].call(mom, format)
                    : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] =
            formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(
                localFormattingTokens,
                replaceLongDateFormatTokens
            );
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var defaultLongDateFormat = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A',
    };

    function longDateFormat(key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper
            .match(formattingTokens)
            .map(function (tok) {
                if (
                    tok === 'MMMM' ||
                    tok === 'MM' ||
                    tok === 'DD' ||
                    tok === 'dddd'
                ) {
                    return tok.slice(1);
                }
                return tok;
            })
            .join('');

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate() {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d',
        defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal(number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        w: 'a week',
        ww: '%d weeks',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years',
    };

    function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction(output)
            ? output(number, withoutSuffix, string, isFuture)
            : output.replace(/%d/i, number);
    }

    function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string'
            ? aliases[units] || aliases[units.toLowerCase()]
            : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [],
            u;
        for (u in unitsObj) {
            if (hasOwnProp(unitsObj, u)) {
                units.push({ unit: u, priority: priorities[u] });
            }
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    function absFloor(number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    function makeGetSet(unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get(mom, unit) {
        return mom.isValid()
            ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]()
            : NaN;
    }

    function set$1(mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (
                unit === 'FullYear' &&
                isLeapYear(mom.year()) &&
                mom.month() === 1 &&
                mom.date() === 29
            ) {
                value = toInt(value);
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](
                    value,
                    mom.month(),
                    daysInMonth(value, mom.month())
                );
            } else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }

    // MOMENTS

    function stringGet(units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }

    function stringSet(units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units),
                i;
            for (i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    var match1 = /\d/, //       0 - 9
        match2 = /\d\d/, //      00 - 99
        match3 = /\d{3}/, //     000 - 999
        match4 = /\d{4}/, //    0000 - 9999
        match6 = /[+-]?\d{6}/, // -999999 - 999999
        match1to2 = /\d\d?/, //       0 - 99
        match3to4 = /\d\d\d\d?/, //     999 - 9999
        match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
        match1to3 = /\d{1,3}/, //       0 - 999
        match1to4 = /\d{1,4}/, //       0 - 9999
        match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
        matchUnsigned = /\d+/, //       0 - inf
        matchSigned = /[+-]?\d+/, //    -inf - inf
        matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
        matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
        matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
        // any word (or two) characters or numbers including two/three word month in arabic.
        // includes scottish gaelic two word and hyphenated months
        matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        regexes;

    regexes = {};

    function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex)
            ? regex
            : function (isStrict, localeData) {
                  return isStrict && strictRegex ? strictRegex : regex;
              };
    }

    function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(
            s
                .replace('\\', '')
                .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (
                    matched,
                    p1,
                    p2,
                    p3,
                    p4
                ) {
                    return p1 || p2 || p3 || p4;
                })
        );
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken(token, callback) {
        var i,
            func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken(token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0,
        MONTH = 1,
        DATE = 2,
        HOUR = 3,
        MINUTE = 4,
        SECOND = 5,
        MILLISECOND = 6,
        WEEK = 7,
        WEEKDAY = 8;

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1
            ? isLeapYear(year)
                ? 29
                : 28
            : 31 - ((modMonth % 7) % 2);
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M', match1to2);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_'
        ),
        defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split(
            '_'
        ),
        MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        defaultMonthsShortRegex = matchWord,
        defaultMonthsRegex = matchWord;

    function localeMonths(m, format) {
        if (!m) {
            return isArray(this._months)
                ? this._months
                : this._months['standalone'];
        }
        return isArray(this._months)
            ? this._months[m.month()]
            : this._months[
                  (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
                      ? 'format'
                      : 'standalone'
              ][m.month()];
    }

    function localeMonthsShort(m, format) {
        if (!m) {
            return isArray(this._monthsShort)
                ? this._monthsShort
                : this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort)
            ? this._monthsShort[m.month()]
            : this._monthsShort[
                  MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
              ][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i,
            ii,
            mom,
            llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp(
                    '^' + this.months(mom, '').replace('.', '') + '$',
                    'i'
                );
                this._shortMonthsParse[i] = new RegExp(
                    '^' + this.monthsShort(mom, '').replace('.', '') + '$',
                    'i'
                );
            }
            if (!strict && !this._monthsParse[i]) {
                regex =
                    '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (
                strict &&
                format === 'MMMM' &&
                this._longMonthsParse[i].test(monthName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'MMM' &&
                this._shortMonthsParse[i].test(monthName)
            ) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth(mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth(value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
    }

    function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict
                ? this._monthsShortStrictRegex
                : this._monthsShortRegex;
        }
    }

    function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict
                ? this._monthsStrictRegex
                : this._monthsRegex;
        }
    }

    function computeMonthsParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp(
            '^(' + longPieces.join('|') + ')',
            'i'
        );
        this._monthsShortStrictRegex = new RegExp(
            '^(' + shortPieces.join('|') + ')',
            'i'
        );
    }

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? zeroFill(y, 4) : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY', 4], 0, 'year');
    addFormatToken(0, ['YYYYY', 5], 0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] =
            input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear() {
        return isLeapYear(this.year());
    }

    function createDate(y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
                date.setFullYear(y);
            }
        } else {
            date = new Date(y, m, d, h, M, s, ms);
        }

        return date;
    }

    function createUTCDate(y) {
        var date, args;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
                date.setUTCFullYear(y);
            }
        } else {
            date = new Date(Date.UTC.apply(null, arguments));
        }

        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear,
            resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear,
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek,
            resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear,
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w', match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (
        input,
        week,
        config,
        token
    ) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow: 0, // Sunday is the first day of the week.
        doy: 6, // The week that contains Jan 6th is the first week of the year.
    };

    function localeFirstDayOfWeek() {
        return this._week.dow;
    }

    function localeFirstDayOfYear() {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd', function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd', function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES
    function shiftWeekdays(ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
            '_'
        ),
        defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        defaultWeekdaysRegex = matchWord,
        defaultWeekdaysShortRegex = matchWord,
        defaultWeekdaysMinRegex = matchWord;

    function localeWeekdays(m, format) {
        var weekdays = isArray(this._weekdays)
            ? this._weekdays
            : this._weekdays[
                  m && m !== true && this._weekdays.isFormat.test(format)
                      ? 'format'
                      : 'standalone'
              ];
        return m === true
            ? shiftWeekdays(weekdays, this._week.dow)
            : m
            ? weekdays[m.day()]
            : weekdays;
    }

    function localeWeekdaysShort(m) {
        return m === true
            ? shiftWeekdays(this._weekdaysShort, this._week.dow)
            : m
            ? this._weekdaysShort[m.day()]
            : this._weekdaysShort;
    }

    function localeWeekdaysMin(m) {
        return m === true
            ? shiftWeekdays(this._weekdaysMin, this._week.dow)
            : m
            ? this._weekdaysMin[m.day()]
            : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i,
            ii,
            mom,
            llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
                this._shortWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
                this._minWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
            }
            if (!this._weekdaysParse[i]) {
                regex =
                    '^' +
                    this.weekdays(mom, '') +
                    '|^' +
                    this.weekdaysShort(mom, '') +
                    '|^' +
                    this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (
                strict &&
                format === 'dddd' &&
                this._fullWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'ddd' &&
                this._shortWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'dd' &&
                this._minWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict
                ? this._weekdaysStrictRegex
                : this._weekdaysRegex;
        }
    }

    function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict
                ? this._weekdaysShortStrictRegex
                : this._weekdaysShortRegex;
        }
    }

    function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict
                ? this._weekdaysMinStrictRegex
                : this._weekdaysMinRegex;
        }
    }

    function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [],
            shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom,
            minp,
            shortp,
            longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = regexEscape(this.weekdaysMin(mom, ''));
            shortp = regexEscape(this.weekdaysShort(mom, ''));
            longp = regexEscape(this.weekdays(mom, ''));
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp(
            '^(' + longPieces.join('|') + ')',
            'i'
        );
        this._weekdaysShortStrictRegex = new RegExp(
            '^(' + shortPieces.join('|') + ')',
            'i'
        );
        this._weekdaysMinStrictRegex = new RegExp(
            '^(' + minPieces.join('|') + ')',
            'i'
        );
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return (
            '' +
            hFormat.apply(this) +
            zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2)
        );
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return (
            '' +
            this.hours() +
            zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2)
        );
    });

    function meridiem(token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(
                this.hours(),
                this.minutes(),
                lowercase
            );
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2);
    addRegexToken('h', match1to2);
    addRegexToken('k', match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4,
            pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4,
            pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM(input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return (input + '').toLowerCase().charAt(0) === 'p';
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
        // Setting the hour should keep the time, because the user explicitly
        // specified which hour they want. So trying to maintain the same hour (in
        // a new timezone) makes sense. Adding/subtracting hours does not follow
        // this rule.
        getSetHour = makeGetSet('Hours', true);

    function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse,
    };

    // internal storage for locale config files
    var locales = {},
        localeFamilies = {},
        globalLocale;

    function commonPrefix(arr1, arr2) {
        var i,
            minl = Math.min(arr1.length, arr2.length);
        for (i = 0; i < minl; i += 1) {
            if (arr1[i] !== arr2[i]) {
                return i;
            }
        }
        return minl;
    }

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0,
            j,
            next,
            locale,
            split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (
                    next &&
                    next.length >= j &&
                    commonPrefix(split, next) >= j - 1
                ) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function loadLocale(name) {
        var oldLocale = null,
            aliasedRequire;
        // TODO: Find a better way to register and load all the locales in Node
        if (
            locales[name] === undefined &&
            typeof module !== 'undefined' &&
            module &&
            module.exports
        ) {
            try {
                oldLocale = globalLocale._abbr;
                aliasedRequire = require;
                aliasedRequire('./locale/' + name);
                getSetGlobalLocale(oldLocale);
            } catch (e) {
                // mark as not found to avoid repeating expensive file require call causing high CPU
                // when trying to find en-US, en_US, en-us for every format call
                locales[name] = null; // null means not found
            }
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale(key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            } else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            } else {
                if (typeof console !== 'undefined' && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn(
                        'Locale ' + key + ' not found. Did you forget to load it?'
                    );
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale(name, config) {
        if (config !== null) {
            var locale,
                parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple(
                    'defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
                );
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config,
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale,
                tmpLocale,
                parentConfig = baseConfig;

            if (locales[name] != null && locales[name].parentLocale != null) {
                // Update existing child locale in-place to avoid memory-leaks
                locales[name].set(mergeConfigs(locales[name]._config, config));
            } else {
                // MERGE
                tmpLocale = loadLocale(name);
                if (tmpLocale != null) {
                    parentConfig = tmpLocale._config;
                }
                config = mergeConfigs(parentConfig, config);
                if (tmpLocale == null) {
                    // updateLocale is called for creating a new locale
                    // Set abbr so it will have a name (getters return
                    // undefined otherwise).
                    config.abbr = name;
                }
                locale = new Locale(config);
                locale.parentLocale = locales[name];
                locales[name] = locale;
            }

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                    if (name === getSetGlobalLocale()) {
                        getSetGlobalLocale(name);
                    }
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale(key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow(m) {
        var overflow,
            a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH] < 0 || a[MONTH] > 11
                    ? MONTH
                    : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH])
                    ? DATE
                    : a[HOUR] < 0 ||
                      a[HOUR] > 24 ||
                      (a[HOUR] === 24 &&
                          (a[MINUTE] !== 0 ||
                              a[SECOND] !== 0 ||
                              a[MILLISECOND] !== 0))
                    ? HOUR
                    : a[MINUTE] < 0 || a[MINUTE] > 59
                    ? MINUTE
                    : a[SECOND] < 0 || a[SECOND] > 59
                    ? SECOND
                    : a[MILLISECOND] < 0 || a[MILLISECOND] > 999
                    ? MILLISECOND
                    : -1;

            if (
                getParsingFlags(m)._overflowDayOfYear &&
                (overflow < YEAR || overflow > DATE)
            ) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
        isoDates = [
            ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
            ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
            ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
            ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
            ['YYYY-DDD', /\d{4}-\d{3}/],
            ['YYYY-MM', /\d{4}-\d\d/, false],
            ['YYYYYYMMDD', /[+-]\d{10}/],
            ['YYYYMMDD', /\d{8}/],
            ['GGGG[W]WWE', /\d{4}W\d{3}/],
            ['GGGG[W]WW', /\d{4}W\d{2}/, false],
            ['YYYYDDD', /\d{7}/],
            ['YYYYMM', /\d{6}/, false],
            ['YYYY', /\d{4}/, false],
        ],
        // iso time formats and regexes
        isoTimes = [
            ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
            ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
            ['HH:mm:ss', /\d\d:\d\d:\d\d/],
            ['HH:mm', /\d\d:\d\d/],
            ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
            ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
            ['HHmmss', /\d\d\d\d\d\d/],
            ['HHmm', /\d\d\d\d/],
            ['HH', /\d\d/],
        ],
        aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
        // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
        rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        obsOffsets = {
            UT: 0,
            GMT: 0,
            EDT: -4 * 60,
            EST: -5 * 60,
            CDT: -5 * 60,
            CST: -6 * 60,
            MDT: -6 * 60,
            MST: -7 * 60,
            PDT: -7 * 60,
            PST: -8 * 60,
        };

    // date from iso format
    function configFromISO(config) {
        var i,
            l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime,
            dateFormat,
            timeFormat,
            tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    function extractFromRFC2822Strings(
        yearStr,
        monthStr,
        dayStr,
        hourStr,
        minuteStr,
        secondStr
    ) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10),
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s
            .replace(/\([^)]*\)|[\n\t]/g, ' ')
            .replace(/(\s\s+)/g, ' ')
            .replace(/^\s\s*/, '')
            .replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(
                    parsedInput[0],
                    parsedInput[1],
                    parsedInput[2]
                ).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10),
                m = hm % 100,
                h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i)),
            parsedArray;
        if (match) {
            parsedArray = extractFromRFC2822Strings(
                match[4],
                match[3],
                match[2],
                match[5],
                match[6],
                match[7]
            );
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);
        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        if (config._strict) {
            config._isValid = false;
        } else {
            // Final attempt, use Input Fallback
            hooks.createFromInputFallback(config);
        }
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
            'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
            'discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [
                nowValue.getUTCFullYear(),
                nowValue.getUTCMonth(),
                nowValue.getUTCDate(),
            ];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray(config) {
        var i,
            date,
            input = [],
            currentDate,
            expectedWeekday,
            yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (
                config._dayOfYear > daysInYear(yearToUse) ||
                config._dayOfYear === 0
            ) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] =
                config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (
            config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0
        ) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(
            null,
            input
        );
        expectedWeekday = config._useUTC
            ? config._d.getUTCDay()
            : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (
            config._w &&
            typeof config._w.d !== 'undefined' &&
            config._w.d !== expectedWeekday
        ) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(
                w.GG,
                config._a[YEAR],
                weekOfYear(createLocal(), 1, 4).year
            );
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to beginning of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i,
            parsedInput,
            tokens,
            token,
            skipped,
            stringLength = string.length,
            totalParsedInputLength = 0,
            era;

        tokens =
            expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) ||
                [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(
                    string.indexOf(parsedInput) + parsedInput.length
                );
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                } else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            } else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver =
            stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (
            config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0
        ) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(
            config._locale,
            config._a[HOUR],
            config._meridiem
        );

        // handle era
        era = getParsingFlags(config).era;
        if (era !== null) {
            config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
        }

        configFromArray(config);
        checkOverflow(config);
    }

    function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,
            scoreToBeat,
            i,
            currentScore,
            validFormatFound,
            bestFormatIsValid = false;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            validFormatFound = false;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (isValid(tempConfig)) {
                validFormatFound = true;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (!bestFormatIsValid) {
                if (
                    scoreToBeat == null ||
                    currentScore < scoreToBeat ||
                    validFormatFound
                ) {
                    scoreToBeat = currentScore;
                    bestMoment = tempConfig;
                    if (validFormatFound) {
                        bestFormatIsValid = true;
                    }
                }
            } else {
                if (currentScore < scoreToBeat) {
                    scoreToBeat = currentScore;
                    bestMoment = tempConfig;
                }
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i),
            dayOrDate = i.day === undefined ? i.date : i.day;
        config._a = map(
            [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
            function (obj) {
                return obj && parseInt(obj, 10);
            }
        );

        configFromArray(config);
    }

    function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig(config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({ nullInput: true });
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        } else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {};

        if (format === true || format === false) {
            strict = format;
            format = undefined;
        }

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if (
            (isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)
        ) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
            'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
            function () {
                var other = createLocal.apply(null, arguments);
                if (this.isValid() && other.isValid()) {
                    return other < this ? this : other;
                } else {
                    return createInvalid();
                }
            }
        ),
        prototypeMax = deprecate(
            'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
            function () {
                var other = createLocal.apply(null, arguments);
                if (this.isValid() && other.isValid()) {
                    return other > this ? this : other;
                } else {
                    return createInvalid();
                }
            }
        );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +new Date();
    };

    var ordering = [
        'year',
        'quarter',
        'month',
        'week',
        'day',
        'hour',
        'minute',
        'second',
        'millisecond',
    ];

    function isDurationValid(m) {
        var key,
            unitHasDecimal = false,
            i;
        for (key in m) {
            if (
                hasOwnProp(m, key) &&
                !(
                    indexOf.call(ordering, key) !== -1 &&
                    (m[key] == null || !isNaN(m[key]))
                )
            ) {
                return false;
            }
        }

        for (i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds =
            +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days + weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months + quarters * 3 + years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration(obj) {
        return obj instanceof Duration;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if (
                (dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))
            ) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    // FORMATTING

    function offset(token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset(),
                sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return (
                sign +
                zeroFill(~~(offset / 60), 2) +
                separator +
                zeroFill(~~offset % 60, 2)
            );
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher),
            chunk,
            parts,
            minutes;

        if (matches === null) {
            return null;
        }

        chunk = matches[matches.length - 1] || [];
        parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff =
                (isMoment(input) || isDate(input)
                    ? input.valueOf()
                    : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset(m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset());
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(
                        this,
                        createDuration(input - offset, 'm'),
                        1,
                        false
                    );
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone(input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset() {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            } else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset(input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime() {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {},
            other;

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted =
                this.isValid() && compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal() {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
        // and further modified to allow for strings containing both week and day
        isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration(input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months,
            };
        } else if (isNumber(input) || !isNaN(+input)) {
            duration = {};
            if (key) {
                duration[key] = +input;
            } else {
                duration.milliseconds = +input;
            }
        } else if ((match = aspNetRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign, // the millisecond decimal point is included in the match
            };
        } else if ((match = isoRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: parseIso(match[2], sign),
                M: parseIso(match[3], sign),
                w: parseIso(match[4], sign),
                d: parseIso(match[5], sign),
                h: parseIso(match[6], sign),
                m: parseIso(match[7], sign),
                s: parseIso(match[8], sign),
            };
        } else if (duration == null) {
            // checks for null or undefined
            duration = {};
        } else if (
            typeof duration === 'object' &&
            ('from' in duration || 'to' in duration)
        ) {
            diffRes = momentsDifference(
                createLocal(duration.from),
                createLocal(duration.to)
            );

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        if (isDuration(input) && hasOwnProp(input, '_isValid')) {
            ret._isValid = input._isValid;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {};

        res.months =
            other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +base.clone().add(res.months, 'M');

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return { milliseconds: 0, months: 0 };
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(
                    name,
                    'moment().' +
                        name +
                        '(period, number) is deprecated. Please use moment().' +
                        name +
                        '(number, period). ' +
                        'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
                );
                tmp = val;
                val = period;
                period = tmp;
            }

            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add = createAdder(1, 'add'),
        subtract = createAdder(-1, 'subtract');

    function isString(input) {
        return typeof input === 'string' || input instanceof String;
    }

    // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
    function isMomentInput(input) {
        return (
            isMoment(input) ||
            isDate(input) ||
            isString(input) ||
            isNumber(input) ||
            isNumberOrStringArray(input) ||
            isMomentInputObject(input) ||
            input === null ||
            input === undefined
        );
    }

    function isMomentInputObject(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input),
            propertyTest = false,
            properties = [
                'years',
                'year',
                'y',
                'months',
                'month',
                'M',
                'days',
                'day',
                'd',
                'dates',
                'date',
                'D',
                'hours',
                'hour',
                'h',
                'minutes',
                'minute',
                'm',
                'seconds',
                'second',
                's',
                'milliseconds',
                'millisecond',
                'ms',
            ],
            i,
            property;

        for (i = 0; i < properties.length; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }

        return objectTest && propertyTest;
    }

    function isNumberOrStringArray(input) {
        var arrayTest = isArray(input),
            dataTypeTest = false;
        if (arrayTest) {
            dataTypeTest =
                input.filter(function (item) {
                    return !isNumber(item) && isString(input);
                }).length === 0;
        }
        return arrayTest && dataTypeTest;
    }

    function isCalendarSpec(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input),
            propertyTest = false,
            properties = [
                'sameDay',
                'nextDay',
                'lastDay',
                'nextWeek',
                'lastWeek',
                'sameElse',
            ],
            i,
            property;

        for (i = 0; i < properties.length; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }

        return objectTest && propertyTest;
    }

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6
            ? 'sameElse'
            : diff < -1
            ? 'lastWeek'
            : diff < 0
            ? 'lastDay'
            : diff < 1
            ? 'sameDay'
            : diff < 2
            ? 'nextDay'
            : diff < 7
            ? 'nextWeek'
            : 'sameElse';
    }

    function calendar$1(time, formats) {
        // Support for single parameter, formats only overload to the calendar function
        if (arguments.length === 1) {
            if (!arguments[0]) {
                time = undefined;
                formats = undefined;
            } else if (isMomentInput(arguments[0])) {
                time = arguments[0];
                formats = undefined;
            } else if (isCalendarSpec(arguments[0])) {
                formats = arguments[0];
                time = undefined;
            }
        }
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse',
            output =
                formats &&
                (isFunction(formats[format])
                    ? formats[format].call(this, now)
                    : formats[format]);

        return this.format(
            output || this.localeData().calendar(format, this, createLocal(now))
        );
    }

    function clone() {
        return new Moment(this);
    }

    function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween(from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
            localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
        }
        inclusivity = inclusivity || '()';
        return (
            (inclusivity[0] === '('
                ? this.isAfter(localFrom, units)
                : !this.isBefore(localFrom, units)) &&
            (inclusivity[1] === ')'
                ? this.isBefore(localTo, units)
                : !this.isAfter(localTo, units))
        );
    }

    function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return (
                this.clone().startOf(units).valueOf() <= inputMs &&
                inputMs <= this.clone().endOf(units).valueOf()
            );
        }
    }

    function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff(input, units, asFloat) {
        var that, zoneDelta, output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year':
                output = monthDiff(this, that) / 12;
                break;
            case 'month':
                output = monthDiff(this, that);
                break;
            case 'quarter':
                output = monthDiff(this, that) / 3;
                break;
            case 'second':
                output = (this - that) / 1e3;
                break; // 1000
            case 'minute':
                output = (this - that) / 6e4;
                break; // 1000 * 60
            case 'hour':
                output = (this - that) / 36e5;
                break; // 1000 * 60 * 60
            case 'day':
                output = (this - that - zoneDelta) / 864e5;
                break; // 1000 * 60 * 60 * 24, negate dst
            case 'week':
                output = (this - that - zoneDelta) / 6048e5;
                break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default:
                output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff(a, b) {
        if (a.date() < b.date()) {
            // end-of-month calculations work correct when the start month has more
            // days than the end month.
            return -monthDiff(b, a);
        }
        // difference in months
        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2,
            adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString() {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true,
            m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(
                m,
                utc
                    ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                    : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
            );
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
                    .toISOString()
                    .replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(
            m,
            utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
        );
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect() {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment',
            zone = '',
            prefix,
            year,
            datetime,
            suffix;
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        prefix = '[' + func + '("]';
        year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
        datetime = '-MM-DD[T]HH:mm:ss.SSS';
        suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format(inputString) {
        if (!inputString) {
            inputString = this.isUtc()
                ? hooks.defaultFormatUtc
                : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from(time, withoutSuffix) {
        if (
            this.isValid() &&
            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
        ) {
            return createDuration({ to: this, from: time })
                .locale(this.locale())
                .humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to(time, withoutSuffix) {
        if (
            this.isValid() &&
            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
        ) {
            return createDuration({ from: this, to: time })
                .locale(this.locale())
                .humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale(key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData() {
        return this._locale;
    }

    var MS_PER_SECOND = 1000,
        MS_PER_MINUTE = 60 * MS_PER_SECOND,
        MS_PER_HOUR = 60 * MS_PER_MINUTE,
        MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return ((dividend % divisor) + divisor) % divisor;
    }

    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return new Date(y, m, d).valueOf();
        }
    }

    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return Date.UTC(y, m, d);
        }
    }

    function startOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(
                    this.year(),
                    this.month() - (this.month() % 3),
                    1
                );
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday()
                );
                break;
            case 'isoWeek':
                time = startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1)
                );
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(
                    time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                    MS_PER_HOUR
                );
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function endOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time =
                    startOfDate(
                        this.year(),
                        this.month() - (this.month() % 3) + 3,
                        1
                    ) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time =
                    startOfDate(
                        this.year(),
                        this.month(),
                        this.date() - this.weekday() + 7
                    ) - 1;
                break;
            case 'isoWeek':
                time =
                    startOfDate(
                        this.year(),
                        this.month(),
                        this.date() - (this.isoWeekday() - 1) + 7
                    ) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time +=
                    MS_PER_HOUR -
                    mod$1(
                        time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                        MS_PER_HOUR
                    ) -
                    1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 60000;
    }

    function unix() {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate() {
        return new Date(this.valueOf());
    }

    function toArray() {
        var m = this;
        return [
            m.year(),
            m.month(),
            m.date(),
            m.hour(),
            m.minute(),
            m.second(),
            m.millisecond(),
        ];
    }

    function toObject() {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds(),
        };
    }

    function toJSON() {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2() {
        return isValid(this);
    }

    function parsingFlags() {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt() {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict,
        };
    }

    addFormatToken('N', 0, 0, 'eraAbbr');
    addFormatToken('NN', 0, 0, 'eraAbbr');
    addFormatToken('NNN', 0, 0, 'eraAbbr');
    addFormatToken('NNNN', 0, 0, 'eraName');
    addFormatToken('NNNNN', 0, 0, 'eraNarrow');

    addFormatToken('y', ['y', 1], 'yo', 'eraYear');
    addFormatToken('y', ['yy', 2], 0, 'eraYear');
    addFormatToken('y', ['yyy', 3], 0, 'eraYear');
    addFormatToken('y', ['yyyy', 4], 0, 'eraYear');

    addRegexToken('N', matchEraAbbr);
    addRegexToken('NN', matchEraAbbr);
    addRegexToken('NNN', matchEraAbbr);
    addRegexToken('NNNN', matchEraName);
    addRegexToken('NNNNN', matchEraNarrow);

    addParseToken(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (
        input,
        array,
        config,
        token
    ) {
        var era = config._locale.erasParse(input, token, config._strict);
        if (era) {
            getParsingFlags(config).era = era;
        } else {
            getParsingFlags(config).invalidEra = input;
        }
    });

    addRegexToken('y', matchUnsigned);
    addRegexToken('yy', matchUnsigned);
    addRegexToken('yyy', matchUnsigned);
    addRegexToken('yyyy', matchUnsigned);
    addRegexToken('yo', matchEraYearOrdinal);

    addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
    addParseToken(['yo'], function (input, array, config, token) {
        var match;
        if (config._locale._eraYearOrdinalRegex) {
            match = input.match(config._locale._eraYearOrdinalRegex);
        }

        if (config._locale.eraYearOrdinalParse) {
            array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
        } else {
            array[YEAR] = parseInt(input, 10);
        }
    });

    function localeEras(m, format) {
        var i,
            l,
            date,
            eras = this._eras || getLocale('en')._eras;
        for (i = 0, l = eras.length; i < l; ++i) {
            switch (typeof eras[i].since) {
                case 'string':
                    // truncate time
                    date = hooks(eras[i].since).startOf('day');
                    eras[i].since = date.valueOf();
                    break;
            }

            switch (typeof eras[i].until) {
                case 'undefined':
                    eras[i].until = +Infinity;
                    break;
                case 'string':
                    // truncate time
                    date = hooks(eras[i].until).startOf('day').valueOf();
                    eras[i].until = date.valueOf();
                    break;
            }
        }
        return eras;
    }

    function localeErasParse(eraName, format, strict) {
        var i,
            l,
            eras = this.eras(),
            name,
            abbr,
            narrow;
        eraName = eraName.toUpperCase();

        for (i = 0, l = eras.length; i < l; ++i) {
            name = eras[i].name.toUpperCase();
            abbr = eras[i].abbr.toUpperCase();
            narrow = eras[i].narrow.toUpperCase();

            if (strict) {
                switch (format) {
                    case 'N':
                    case 'NN':
                    case 'NNN':
                        if (abbr === eraName) {
                            return eras[i];
                        }
                        break;

                    case 'NNNN':
                        if (name === eraName) {
                            return eras[i];
                        }
                        break;

                    case 'NNNNN':
                        if (narrow === eraName) {
                            return eras[i];
                        }
                        break;
                }
            } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
                return eras[i];
            }
        }
    }

    function localeErasConvertYear(era, year) {
        var dir = era.since <= era.until ? +1 : -1;
        if (year === undefined) {
            return hooks(era.since).year();
        } else {
            return hooks(era.since).year() + (year - era.offset) * dir;
        }
    }

    function getEraName() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].name;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].name;
            }
        }

        return '';
    }

    function getEraNarrow() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].narrow;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].narrow;
            }
        }

        return '';
    }

    function getEraAbbr() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].abbr;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].abbr;
            }
        }

        return '';
    }

    function getEraYear() {
        var i,
            l,
            dir,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            dir = eras[i].since <= eras[i].until ? +1 : -1;

            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (
                (eras[i].since <= val && val <= eras[i].until) ||
                (eras[i].until <= val && val <= eras[i].since)
            ) {
                return (
                    (this.year() - hooks(eras[i].since).year()) * dir +
                    eras[i].offset
                );
            }
        }

        return this.year();
    }

    function erasNameRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNameRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasNameRegex : this._erasRegex;
    }

    function erasAbbrRegex(isStrict) {
        if (!hasOwnProp(this, '_erasAbbrRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasAbbrRegex : this._erasRegex;
    }

    function erasNarrowRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNarrowRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasNarrowRegex : this._erasRegex;
    }

    function matchEraAbbr(isStrict, locale) {
        return locale.erasAbbrRegex(isStrict);
    }

    function matchEraName(isStrict, locale) {
        return locale.erasNameRegex(isStrict);
    }

    function matchEraNarrow(isStrict, locale) {
        return locale.erasNarrowRegex(isStrict);
    }

    function matchEraYearOrdinal(isStrict, locale) {
        return locale._eraYearOrdinalRegex || matchUnsigned;
    }

    function computeErasParse() {
        var abbrPieces = [],
            namePieces = [],
            narrowPieces = [],
            mixedPieces = [],
            i,
            l,
            eras = this.eras();

        for (i = 0, l = eras.length; i < l; ++i) {
            namePieces.push(regexEscape(eras[i].name));
            abbrPieces.push(regexEscape(eras[i].abbr));
            narrowPieces.push(regexEscape(eras[i].narrow));

            mixedPieces.push(regexEscape(eras[i].name));
            mixedPieces.push(regexEscape(eras[i].abbr));
            mixedPieces.push(regexEscape(eras[i].narrow));
        }

        this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
        this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
        this._erasNarrowRegex = new RegExp(
            '^(' + narrowPieces.join('|') + ')',
            'i'
        );
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg', 'weekYear');
    addWeekYearFormatToken('ggggg', 'weekYear');
    addWeekYearFormatToken('GGGG', 'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);

    // PARSING

    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (
        input,
        week,
        config,
        token
    ) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(
            this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy
        );
    }

    function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(
            this,
            input,
            this.isoWeek(),
            this.isoWeekday(),
            1,
            4
        );
    }

    function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
    }

    function getISOWeeksInISOWeekYear() {
        return weeksInYear(this.isoWeekYear(), 1, 4);
    }

    function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getWeeksInWeekYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter(input) {
        return input == null
            ? Math.ceil((this.month() + 1) / 3)
            : this.month((input - 1) * 3 + (this.month() % 3));
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIORITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict
            ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
            : locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear(input) {
        var dayOfYear =
            Math.round(
                (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
            ) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m', match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s', match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });

    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);

    var token, getSetMillisecond;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }

    getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z', 0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr() {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName() {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff;
    proto.endOf = endOf;
    proto.format = format;
    proto.from = from;
    proto.fromNow = fromNow;
    proto.to = to;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;
    if (typeof Symbol !== 'undefined' && Symbol.for != null) {
        proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
            return 'Moment<' + this.format() + '>';
        };
    }
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;
    proto.eraName = getEraName;
    proto.eraNarrow = getEraNarrow;
    proto.eraAbbr = getEraAbbr;
    proto.eraYear = getEraYear;
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.weeksInWeekYear = getWeeksInWeekYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates = deprecate(
        'dates accessor is deprecated. Use date instead.',
        getSetDayOfMonth
    );
    proto.months = deprecate(
        'months accessor is deprecated. Use month instead',
        getSetMonth
    );
    proto.years = deprecate(
        'years accessor is deprecated. Use year instead',
        getSetYear
    );
    proto.zone = deprecate(
        'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
        getSetZone
    );
    proto.isDSTShifted = deprecate(
        'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
        isDaylightSavingTimeShifted
    );

    function createUnix(input) {
        return createLocal(input * 1000);
    }

    function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat(string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set;
    proto$1.eras = localeEras;
    proto$1.erasParse = localeErasParse;
    proto$1.erasConvertYear = localeErasConvertYear;
    proto$1.erasAbbrRegex = erasAbbrRegex;
    proto$1.erasNameRegex = erasNameRegex;
    proto$1.erasNarrowRegex = erasNarrowRegex;

    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;

    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1(format, index, field, setter) {
        var locale = getLocale(),
            utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl(format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i,
            out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl(localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0,
            i,
            out = [];

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths(format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort(format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        eras: [
            {
                since: '0001-01-01',
                until: +Infinity,
                offset: 1,
                name: 'Anno Domini',
                narrow: 'AD',
                abbr: 'AD',
            },
            {
                since: '0000-12-31',
                until: -Infinity,
                offset: 1,
                name: 'Before Christ',
                narrow: 'BC',
                abbr: 'BC',
            },
        ],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (number) {
            var b = number % 10,
                output =
                    toInt((number % 100) / 10) === 1
                        ? 'th'
                        : b === 1
                        ? 'st'
                        : b === 2
                        ? 'nd'
                        : b === 3
                        ? 'rd'
                        : 'th';
            return number + output;
        },
    });

    // Side effect imports

    hooks.lang = deprecate(
        'moment.lang is deprecated. Use moment.locale instead.',
        getSetGlobalLocale
    );
    hooks.langData = deprecate(
        'moment.langData is deprecated. Use moment.localeData instead.',
        getLocale
    );

    var mathAbs = Math.abs;

    function abs() {
        var data = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);

        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);

        return this;
    }

    function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil(number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble() {
        var milliseconds = this._milliseconds,
            days = this._days,
            months = this._months,
            data = this._data,
            seconds,
            minutes,
            hours,
            years,
            monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (
            !(
                (milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0)
            )
        ) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;

        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;

        hours = absFloor(minutes / 60);
        data.hours = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days = days;
        data.months = months;
        data.years = years;

        return this;
    }

    function daysToMonths(days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return (days * 4800) / 146097;
    }

    function monthsToDays(months) {
        // the reverse of daysToMonths
        return (months * 146097) / 4800;
    }

    function as(units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days,
            months,
            milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            switch (units) {
                case 'month':
                    return months;
                case 'quarter':
                    return months / 3;
                case 'year':
                    return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week':
                    return days / 7 + milliseconds / 6048e5;
                case 'day':
                    return days + milliseconds / 864e5;
                case 'hour':
                    return days * 24 + milliseconds / 36e5;
                case 'minute':
                    return days * 1440 + milliseconds / 6e4;
                case 'second':
                    return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond':
                    return Math.floor(days * 864e5) + milliseconds;
                default:
                    throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1() {
        if (!this.isValid()) {
            return NaN;
        }
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs(alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms'),
        asSeconds = makeAs('s'),
        asMinutes = makeAs('m'),
        asHours = makeAs('h'),
        asDays = makeAs('d'),
        asWeeks = makeAs('w'),
        asMonths = makeAs('M'),
        asQuarters = makeAs('Q'),
        asYears = makeAs('y');

    function clone$1() {
        return createDuration(this);
    }

    function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds'),
        seconds = makeGetter('seconds'),
        minutes = makeGetter('minutes'),
        hours = makeGetter('hours'),
        days = makeGetter('days'),
        months = makeGetter('months'),
        years = makeGetter('years');

    function weeks() {
        return absFloor(this.days() / 7);
    }

    var round = Math.round,
        thresholds = {
            ss: 44, // a few seconds to seconds
            s: 45, // seconds to minute
            m: 45, // minutes to hour
            h: 22, // hours to day
            d: 26, // days to month/week
            w: null, // weeks to month
            M: 11, // months to year
        };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
        var duration = createDuration(posNegDuration).abs(),
            seconds = round(duration.as('s')),
            minutes = round(duration.as('m')),
            hours = round(duration.as('h')),
            days = round(duration.as('d')),
            months = round(duration.as('M')),
            weeks = round(duration.as('w')),
            years = round(duration.as('y')),
            a =
                (seconds <= thresholds.ss && ['s', seconds]) ||
                (seconds < thresholds.s && ['ss', seconds]) ||
                (minutes <= 1 && ['m']) ||
                (minutes < thresholds.m && ['mm', minutes]) ||
                (hours <= 1 && ['h']) ||
                (hours < thresholds.h && ['hh', hours]) ||
                (days <= 1 && ['d']) ||
                (days < thresholds.d && ['dd', days]);

        if (thresholds.w != null) {
            a =
                a ||
                (weeks <= 1 && ['w']) ||
                (weeks < thresholds.w && ['ww', weeks]);
        }
        a = a ||
            (months <= 1 && ['M']) ||
            (months < thresholds.M && ['MM', months]) ||
            (years <= 1 && ['y']) || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof roundingFunction === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize(argWithSuffix, argThresholds) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var withSuffix = false,
            th = thresholds,
            locale,
            output;

        if (typeof argWithSuffix === 'object') {
            argThresholds = argWithSuffix;
            argWithSuffix = false;
        }
        if (typeof argWithSuffix === 'boolean') {
            withSuffix = argWithSuffix;
        }
        if (typeof argThresholds === 'object') {
            th = Object.assign({}, thresholds, argThresholds);
            if (argThresholds.s != null && argThresholds.ss == null) {
                th.ss = argThresholds.s - 1;
            }
        }

        locale = this.localeData();
        output = relativeTime$1(this, !withSuffix, th, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return (x > 0) - (x < 0) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000,
            days = abs$1(this._days),
            months = abs$1(this._months),
            minutes,
            hours,
            years,
            s,
            total = this.asSeconds(),
            totalSign,
            ymSign,
            daysSign,
            hmsSign;

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes = absFloor(seconds / 60);
        hours = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';

        totalSign = total < 0 ? '-' : '';
        ymSign = sign(this._months) !== sign(total) ? '-' : '';
        daysSign = sign(this._days) !== sign(total) ? '-' : '';
        hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return (
            totalSign +
            'P' +
            (years ? ymSign + years + 'Y' : '') +
            (months ? ymSign + months + 'M' : '') +
            (days ? daysSign + days + 'D' : '') +
            (hours || minutes || seconds ? 'T' : '') +
            (hours ? hmsSign + hours + 'H' : '') +
            (minutes ? hmsSign + minutes + 'M' : '') +
            (seconds ? hmsSign + s + 'S' : '')
        );
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid = isValid$1;
    proto$2.abs = abs;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asQuarters = asQuarters;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.clone = clone$1;
    proto$2.get = get$2;
    proto$2.milliseconds = milliseconds;
    proto$2.seconds = seconds;
    proto$2.minutes = minutes;
    proto$2.hours = hours;
    proto$2.days = days;
    proto$2.weeks = weeks;
    proto$2.months = months;
    proto$2.years = years;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale;
    proto$2.localeData = localeData;

    proto$2.toIsoString = deprecate(
        'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
        toISOString$1
    );
    proto$2.lang = lang;

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    //! moment.js

    hooks.version = '2.29.1';

    setHookCallback(createLocal);

    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD', // <input type="date" />
        TIME: 'HH:mm', // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW', // <input type="week" />
        MONTH: 'YYYY-MM', // <input type="month" />
    };

    return hooks;

})));

},{}],7:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],8:[function(require,module,exports){
"use strict";
/* jshint esversion: 6 */
"strict mode";

require("../../../../src/es6/_jquery.es6");

},{"../../../../src/es6/_jquery.es6":9}],9:[function(require,module,exports){
"use strict";
/* jshint esversion: 6 */
"strict mode";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
// import rive from "../../common/data/Ecovillaggi_RIVE.json";

// import actions from "../../src/es6/_actions.es6";


var _locations = require("../../common/data/locations.js");

var loc = _interopRequireWildcard(_locations);

var _layout = require("../../src/es6/layout.es6");

var _layout2 = _interopRequireDefault(_layout);

var _navigation = require("../../src/es6/_navigation.es6");

var _navigation2 = _interopRequireDefault(_navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

require("../../src/es6/_obj.es6");

function linkify(text) {
	var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
	return text.replace(exp, "<a href=\"$1\" target=\"_blank\">$1</a>");
}

var locations = loc.locations,
    LAYOUT = new _layout2.default(),

// ACTIONS = new actions(),
NAV = new _navigation2.default(),
    page = NAV.get_page()

// settings = require("../../../../common/settings/contents.json")
;

function find(items, text) {
	text = text.split(' ');
	return items.filter(function (item) {
		return text.every(function (el) {
			if ((typeof item === "undefined" ? "undefined" : _typeof(item)) === 'object') {
				if (item.post_title !== undefined && item.post_title !== null) {
					if (item.post_title.indexOf(el) > -1) {
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
$(document).ready(function () {
	var items = [];
	var fullScreenChange = void 0;
	if ('onfullscreenchange' in window.document) {
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
	var map = L.map("map_area", {
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
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
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
	var markers = L.markerClusterGroup();

	var leaf = L.AwesomeMarkers.icon({
		icon: 'leaf',
		prefix: 'fa',
		markerColor: 'green'
	});
	$.each(locations, function (k, v) {
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
		});
		marker.bindPopup("<div id=\"" + v.ID + "\"><h2>" + v.post_title + "</h2><br /><p class=\"text-center\"><i class=\"fa fa-spinner fa-pulse fa-fw\"></i></p></div><br /><hr /><p><small>Source: <a target=\"_blank\" href=\"https://ecovillage.org/projects/map\">https://ecovillage.org/projects/map</a></small></p>", {
			maxHeight: 300,
			minWidth: 500
		});
		marker.on('click', function (e) {
			// console.log(v.ID);
			// Marker onclick
			// console.log($("#" + v.ID), $("#" + v.ID).hasClass("text-center"));
			$.get({
				url: "https://ecovillage.org/wp-json/gen/v1/mapdata?ID=" + v.ID + "&type=" + v.post_type,
				success: function success(data) {
					$("#" + v.ID).html(data.content.replace(/href/ig, 'target="_blank" href').replace("background-image: url(/", 'background-image: url(https://ecovillage.org/')).removeClass("text-center");
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
	// 	pointToLayer: function pointToLayer(feature, latlng) {
	// 		return L.marker(latlng, {
	// 			icon: L.AwesomeMarkers.icon({
	// 				icon: 'pagelines',
	// 				prefix: 'fa',
	// 				markerColor: 'cadetblue'
	// 			})
	// 			// title: v.post_title
	// 		});
	// 	},
	// 	onEachFeature: function onEachFeature(feature, layer) {
	// 		items.push({ label: feature.properties.Name, value: "" });
	// 		i.push({ label: feature.properties.Name, value: "" });
	// 		// console.log(items);
	// 		layer.bindPopup("<h2>" + feature.properties.Name + "</h2>" + (feature.properties.description ? linkify(feature.properties.description) : "") + "<br /><hr /><p><small>Source: <a target=\"_blank\" href=\"https://ecovillaggi.it\">https://ecovillaggi.it</a></small></p>");
	// 	}
	// });
	// riveL.addTo(map);

	/**
  * Progetti RIVE
  */
	// var riveP = new L.GeoJSON.AJAX("../../common/data/Progetti_RIVE.geojson", {
	// 	pointToLayer: function pointToLayer(feature, latlng) {
	// 		return L.marker(latlng, {
	// 			icon: L.AwesomeMarkers.icon({
	// 				icon: 'flag',
	// 				prefix: 'fa',
	// 				markerColor: 'brown'
	// 			})
	// 			// title: v.post_title
	// 		});
	// 	},
	// 	onEachFeature: function onEachFeature(feature, layer) {
	// 		items.push({ label: feature.properties.Name, value: "" });
	// 		i.push({ label: feature.properties.Name, value: "" });
	// 		// console.log(items);
	// 		layer.bindPopup("<h2>" + feature.properties.Name + "</h2>" + (feature.properties.description ? linkify(feature.properties.description) : "") + "<br /><hr /><p><small>Source: <a target=\"_blank\" href=\"https://ecovillaggi.it\">https://ecovillaggi.it</a></small></p>");
	// 	}
	// });
	// riveP.addTo(map);
	// console.info(items);
	// addDataToAutocomplete(items);

	/* ---------------------------------------------------------------------- */
	/* 								Map behaviours							  */
	/* ---------------------------------------------------------------------- */

	/**
  * Click, wheel and focus
  */
	map.on('focus', function () {
		map.scrollWheelZoom.enable();
	});
	map.on('blur', function () {
		map.scrollWheelZoom.disable();
	});
	// events are fired when entering or exiting fullscreen.

	var set_fullscreeen = function set_fullscreeen() {
		// console.log('entered fullscreen');
		$("#logo_map").attr({ "hidden": false });
		$("#map_search").addClass("full");
		$(".leaflet-top").css({ "top": "150px" });
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
	    set_normalscreen = function set_normalscreen() {
		// console.log('exited fullscreen');
		$("#logo_map").attr({ "hidden": true });
		$("#map_search").removeClass("full");
		$(".leaflet-top").css({ "top": "0" });
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
		if (window.document.fullscreen) {
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
	$("#map").dblclick(function () {
		if (!map.isFullscreen()) {
			set_fullscreeen();
			map.toggleFullscreen();
		}
	});
	$("#search_input").on("keyup", function (e) {
		var code = e.key;
		if (!map.isFullscreen()) {
			set_fullscreeen();
			map.toggleFullscreen();
		}

		if (code === "Enter") {
			e.preventDefault();
			$("#map_search").animate({
				top: "11px",
				left: "40%",
				width: "59%"
			}, 100);
		} else if (code === "Esc") {
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
	// L.marker([41.9027835, 12.4963655]).addTo(map).bindPopup("A pretty CSS3 popup.<br> Easily customizable.").openPopup();

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

	$.ajaxSetup({ cache: true });
	$.getScript('https://connect.facebook.net/en_US/sdk.js', function () {
		FB.init({
			appId: '503287753991591',
			version: 'v2.7' // or v2.1, v2.2, v2.3, ...
		});
		// $('#loginbutton,#feedbutton').removeAttr('disabled');
		// FB.getLoginStatus(updateStatusCallback);

		// Get App token data
		// https://graph.facebook.com/oauth/access_token?client_id=503287753991591&client_secret=736978599f45e00c2a45bcc826313388&grant_type=client_credentials
		var app_id = "503287753991591",
		    group_id = "1468487430095734",
		    secret = "736978599f45e00c2a45bcc826313388",
		    token = "503287753991591|dIlPA1ayBT22nLCad9Oiw43xD6w";
		FB.api('/' + group_id + '/feed', function (response) {
			console.log(response);
		}, { access_token: token });
	});

	LAYOUT.activate();
});

},{"../../common/data/locations.js":1,"../../src/es6/_navigation.es6":10,"../../src/es6/_obj.es6":11,"../../src/es6/layout.es6":14}],10:[function(require,module,exports){
"use strict";
/* jshint esversion: 6 */
"strict mode";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var navigation = function () {
	function navigation() {
		_classCallCheck(this, navigation);
	}

	_createClass(navigation, [{
		key: "get_url_path",

		/**
  * Get the path of the current URL
  * @return array															The page path
  */
		value: function get_url_path() {
			var url = window.location.pathname.split(/(?:\/|\:)+/).splice(1),
			    path = [];

			$.each(url, function (k, v) {
				path.push(decodeURIComponent(v));
			});
			return path;
		}

		/**
   * Get the current page from the current URL
   * @uses get_url_path()
   *
   * @return string															The current page
   */

	}, {
		key: "get_page",
		value: function get_page() {
			var page = this.get_url_path()[0];
			return page == "" ? "home" : page;
		}
	}]);

	return navigation;
}();

exports.default = navigation;

},{}],11:[function(require,module,exports){
'use strict';
/* jshint esversion: 6 */
"strict mode";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$.fn.serializeObject = function () {
    var o = {},
        a = this.serializeArray();

    $.each(a, function () {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

$.fn.hasAttr = function (name) {
    return this.attr(name) !== undefined;
};

var obj = function obj() {
    _classCallCheck(this, obj);
};

exports.default = obj;

},{}],12:[function(require,module,exports){
"use strict";
/* jshint esversion: 6 */
"strict mode";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var settings = require("../../common/settings/contents.json");

var str = function () {
	function str() {
		_classCallCheck(this, str);
	}

	_createClass(str, [{
		key: "ucfirst",

		/**
   * Make a string's first character uppercase
   * This function is very similar to PHP ucfirst()
   * @see http://php.net/manual/en/function.ucfirst.php
   *
   * @param  string 							string							The input string
   * @return string															The converted string
   */
		value: function ucfirst(string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		}

		/**
   * Make a string's first character lowercase
   * This function is very similar to PHP lcfirst()
   * @see http://php.net/manual/en/function.lcfirst.php
   *
   * @param  string 							string							The input string
   * @return string															The converted string
   */

	}, {
		key: "lcfirst",
		value: function lcfirst(string) {
			return string.charAt(0).toLowerCase() + string.slice(1);
		}

		/**
   * Uppercase the first character of each word in a string
   * This function is very similar to PHP ucwords()
   * @see http://php.net/manual/en/function.ucwords.php
   *
   * @param  string 							string							The input string
   * @return string															The converted string
   */

	}, {
		key: "ucwords",
		value: function ucwords(string) {
			return (string + "").replace(/^(.)|\s+(.)/g, function ($1) {
				return $1.toUpperCase();
			});
		}

		/**
   * Quote string with slashes
   * This function is very similar to PHP addslashes()
   * @see http://php.net/manual/en/function.addslashes.php
   *
   * @param  string 							string							The input string
   * @return string															The converted string
   */

	}, {
		key: "addslashes",
		value: function addslashes(string) {
			return string.replace(/\\/g, '\\\\').replace(/\'/g, '\\\'').replace(/\"/g, '\\"').replace(/\0/g, '\\0');
		}

		/**
   * Un-quotes a quoted string
   * This function is very similar to PHP stripslashes()
   * @see http://php.net/manual/en/function.stripslashes.php
   *
   * @param  string 							string							The input string
   * @return string															The converted string
   */

	}, {
		key: "stripslashes",
		value: function stripslashes(string) {
			return string.replace(/\\'/g, '\'').replace(/\\"/g, '"').replace(/\\:/g, ':').replace(/\\0/g, '\0').replace(/\\\\/g, '\\');
		}

		/**
   * Inserts HTML line breaks before all newlines in a string
   * This function is very similar to PHP nl2br()
   * @see http://php.net/manual/en/function.nl2br.php
   *
   * @param  string 							string							The input string
   * @return string															The converted string
   */

	}, {
		key: "nl2br",
		value: function nl2br(string) {
			return string.replace(/(\r\n|\n\r|\r|\n)/g, "<br />");
		}

		/**
   * Pluralize a string
   * @param  integer 							items							The amount of items
   * @param  string 							string							The string to pluralize
   * @return The pluralized string
   */

	}, {
		key: "pluralize",
		value: function pluralize(items, string) {
			return items !== 1 ? string + "s" : string;
		}

		/**
   * Check wheter a given string is a JSON
   * @param  string 							string							The string to analyze
   * @return boolean
   */

	}, {
		key: "is_json",
		value: function is_json(string) {
			try {
				JSON.parse(string);
			} catch (e) {
				return false;
			}
			return true;
		}
	}, {
		key: "is_url",
		value: function is_url(string) {
			return string.startsWith("http");
		}
	}, {
		key: "camel_case_2_text",
		value: function camel_case_2_text(string) {
			return string.replace(/([a-z])([A-Z])/g, "$1 $2");
		}
	}, {
		key: "readable_data",
		value: function readable_data(string) {
			return this.camel_case_2_text(string.replace("_", " "));
		}
	}]);

	return str;
}();

exports.default = str;

},{"../../common/settings/contents.json":2}],13:[function(require,module,exports){
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

},{"../../src/es6/_obj.es6":11,"../../src/es6/_str.es6":12,"es6-promise":5}],14:[function(require,module,exports){
"use strict";
/* jshint esversion: 6 */
"strict mode";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// import treeview from "../../src/es6/_treeview.es6";
// import filters from "../../src/es6/filters.es6";


var _data = require("../../src/es6/data.es6");

var _data2 = _interopRequireDefault(_data);

var _navigation = require("../../src/es6/_navigation.es6");

var _navigation2 = _interopRequireDefault(_navigation);

var _pagination = require("../../src/es6/pagination.es6");

var _pagination2 = _interopRequireDefault(_pagination);

var _modals = require("../../src/es6/modals.es6");

var _modals2 = _interopRequireDefault(_modals);

var _str = require("../../src/es6/_str.es6");

var _str2 = _interopRequireDefault(_str);

var _loader = require("../../src/es6/loader.es6");

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Static pages
 */
// import page_about from "../../common/statics/about.html";
// import page_privacy_policy from "../../common/statics/privacy_policy.html";
// import page_api from "../../common/statics/api.html";
// import page_help from "../../common/statics/help.html";
// import page_login from "../../common/statics/login.html";
// import page_register from "../../common/statics/register.html";
// import page_forgot_password from "../../common/statics/forgot-password.html";
// import page_feedback from "../../common/statics/feedback.html";
// import page_add_ontology from "../../common/statics/add-ontology.html";

// import layout_annotation_tool from "../../src/es6/pages/annotation_tool.es6";


var DATA = new _data2.default(),
    NAV = new _navigation2.default(),
    PAGINATION = new _pagination2.default(),

// TREEVIEW = new treeview(),
// FILTERS = new filters(),
MODALS = new _modals2.default(),
    STR = new _str2.default(),
    LOADER = new _loader2.default(),
    URL = "http://www.cropontology.org",


/**
 * Static pages
 */
// PAGE_ABOUT = page_about,
// PAGE_PRIVACY_POLICY = page_privacy_policy,
// PAGE_API = page_api.replace(/\{\{URL\}}/igm, window.location).replace(/((<style>)|(<style type=.+))((\s+)|(\S+)|(\r+)|(\n+))(.+)((\s+)|(\S+)|(\r+)|(\n+))(<\/style>)/g, ""),
// PAGE_HELP = page_help,
// PAGE_LOGIN = page_login,
// PAGE_REGISTER = page_register,
// PAGE_FORGOT_PASSWORD = page_forgot_password,
// PAGE_FEEDBACK = page_feedback,
// PAGE_ADD_ONTOLOGY = page_add_ontology,
/**
 * Layouts
 */
// PAGE_ANNOTATION_TOOL = new layout_annotation_tool(),

page = NAV.get_page(),
    settings = require("../../common/settings/contents.json"),
    languages = require("../../common/settings/languages.json"),
    moment = require("moment"),
    user = {
	logged: false
};

if (settings[page] == undefined) {
	page = "404";
}

var layout = function () {
	function layout() {
		_classCallCheck(this, layout);
	}

	_createClass(layout, [{
		key: "activate",
		value: function activate() {
			/* Add rel="external" to links that are external (this.hostname !== location.hostname) BUT don't add to anchors containing images */
			$("#static_contents a, .license a").each(function (k, v) {
				// Compare the anchor tag's host name with location's host name
				if ($(v).prop("hostname") && $(v).prop("hostname") !== location.hostname && $(v).prop("hostname") !== "www.cropontology.org") {
					$(v).not("a:has(img)").attr("rel", "external");
				}
			});

			// Modals

			// let search_data = {};
			// $("input.autocomplete").on("keyup", (e) => {
			// 	let start_search_after = 3,
			// 		reg = new RegExp("[\\w\\d\\\\\/\\-\\_\\p{L}]");
			//
			// 	// Intercept only word, digits and allowed special characters (see regex above)
			// 	if($("input.autocomplete").val().length > start_search_after && reg.test(e.key)) {
			// 		// The search loader
			// 		LOADER.create({
			// 			type: "circular",
			// 			size: "micro",
			// 			colour: "yellow",
			// 			target: "#search_loader"
			// 		});
			// 		DATA.search($("input.autocomplete").val()).then((data) => {
			// 			LOADER.hide("#search_loader", true);
			// 			$.each(data, (k, v) => {
			// 				search_data["<small><tt>" + v.id + "</tt></small> - " + v.ontology_name + " - " + STR.get_ontology_term(JSON.stringify(v.name))] = null;
			// 			});
			//
			// 			$("input.autocomplete").autocomplete({
			// 				data: search_data,
			// 				minLength: start_search_after,
			// 				limit: 50,
			// 				onAutocomplete: function(val) {
			// 					location.href = "./terms/" + val.replace(/ \- (.*?) \- /g, "/");
			// 				},
			// 			}).blur().focus();
			// 		});
			// 	}
			// });


			// $(".collapsible").collapsible();
			//
			// $(".tooltipped").tooltip({html: true});
			//
			// $(".materialboxed").materialbox();
			//
			// $(".parallax").parallax();
			//
			// $(".tabs:not(.add-ontology)").tabs();
			//
			// $("textarea.autoresize").trigger("autoresize");


			/**
    * Behaviours after page build
    * ---------------------------------------------------------------------
    */
			switch (page) {
				case "home":
					// Add the loader for news and info contents
					// LOADER.create({target: ".help", type: "progress"});
					break;
				case "ontology":
					// Add the loader for news and info contents
					// LOADER.create({target: "#contents", type: "progress"});
					break;
				case "register":
					// $.validator.setDefaults({
					// 	errorClass: 'invalid',
					// 	validClass: "valid",
					// 	errorPlacement: (error, element) => {
					// 		$(element)
					// 		.closest("form")
					// 		.find("label[for='" + element.attr("id") + "']")
					// 		.attr('data-error', error.text());
					// 	},
					// 	submitHandler: (form) => {
					// 		if(grecaptcha.getResponse().length == 0) {
					// 			DATA.register_user($("#register_form").serializeObject()).then((response) => {
					// 				if(response.message !== undefined) {
					// 					Materialize.toast('<span class="fa fa-2x fa-check grey-text"></span> ' + response.message, 2000, "", () => {
					// 						location.reload();
					// 					});
					// 				} else {
					// 					$("#register_form :input").blur().removeClass("invalid").removeClass("valid");
					// 					Materialize.toast('<span class="fa fa-2x fa-times grey-text"></span> ' + response.error, 4000);
					// 				}
					// 			});
					// 		}
					// 	}
					// });
					// $("#register_form").validate({
					// 	rules: {
					// 		first_name: {
					// 			required: true
					// 		},
					// 		sirname: {
					// 			required: true
					// 		},
					// 		email: {
					// 			required: true,
					// 			email: true
					// 		},
					// 		username: {
					// 			required: true,
					// 			minlength: 2
					// 		},
					// 		password: {
					// 			required: true,
					// 			minlength: 5
					// 		},
					// 		confirm_password: {
					// 			required: true,
					// 			minlength: 5,
					// 			equalTo: "#password"
					// 		},
					// 	},
					// 	messages: {
					// 		first_name: "Please specify your name",
					// 		sirname: "Please specify your last name",
					// 		email: {
					// 			required: "Please specify an e-mail address",
					// 			email: "Your email address must be in the format of name@domain.com"
					// 		},
					// 		username: {
					// 			required: "Please insert an username",
					// 			minlength: "Your username must consist of at least 2 characters"
					// 		},
					// 		password: {
					// 			required: "Please insert a password",
					// 			minlength: "Your password must be at least 5 characters long",
					// 		},
					// 		confirm_password: {
					// 			required: "Please insert a password",
					// 			minlength: "Your password must be at least 5 characters long",
					// 			equalTo: "Please enter the same password as before"
					// 		}
					// 	}
					// });
					break;
			}

			// Adapt graph on fullscreen mode
			// $(document).on("fscreenchange", (e, state, elem) => {
			// 	switch($(elem).attr("id")) {
			// 		case "graph":
			// 			if(state) {
			// 				$(".fa-expand").removeClass("fa-expand").addClass("fa-compress");
			//
			// 				$("#graph.fullscreen").find(".btn.fullscreen").attr("data-tooltip", "Exit fullscreen").click((e) => {
			// 					$.fullscreen.exit();
			// 				});
			// 			} else {
			// 				$(".fa-compress").removeClass("fa-compress").addClass("fa-expand");
			// 				$("#graph.fullscreen").find(".btn.fullscreen").attr("data-tooltip", "Show fullscreen");
			// 			}
			// 			break;
			// 		case "result":
			// 			if(state) {
			// 				// $(".btn.fullscreen").attr("data-tooltip", "Exit fullscreen").text("fullscreen_exit");
			// 				$("#result").prepend(
			// 					$('<a>', {
			// 						"href": "javascript:;",
			// 						"class": "btn exit-fullscreen z-depth-1",
			// 						"data-position": "left",
			// 						"data-tooltip": "Exit fullscreen"
			// 					}).append(
			// 						$('<i>', {"class": "material-icons"}).text("fullscreen_exit")
			// 					).click(() => {
			// 						$("#result .btn.exit-fullscreen").remove();
			// 						$.fullscreen.exit();
			// 					})
			// 				)
			// 			}
			// 			break;
			// 	}
			// });


			$(".alert").alert();
			$('.dropdown-toggle').dropdown();
			$('[data-bs-toggle="tooltip"]').tooltip();
		}

		/**
   * Build a menu
   * @param  string 						position							The menu position
   * @return object
   */

	}, {
		key: "build_menu",
		value: function build_menu(position) {
			var menus = require("../../common/settings/menu.json");

			$.each(menus, function (k, v) {
				$("#" + position).append($.map(v[position].items, function (item, k) {
					switch (position) {
						case "top_menu":
							var display = !item.is_sidenav_link ? k >= 6 ? " hide-on-med-and-down" : " hide-on-small-only" : "";

							if (item.label === undefined && item.separator) {
								switch ($.type(item.separator)) {
									case "boolean":
										return $('<li>', { "class": display }).append($('<span>', { "class": "separator" }));
										break;
									case "string":
										return $('<li>', { "class": "disabled black-text" + display }).append($('<span>').text(item.separator));
										break;
								}
							} else {
								if (item.display) {
									var $li = $('<li>').append($('<a>', {
										"href": item.link,
										"class": item.class + display
									}).append(function () {
										if (!item.is_sidenav_link) {
											return item.label;
										} else {
											return $('<i>', { "class": "material-icons" }).text("menu");
										}
									}));
									if (item.data !== undefined) {
										$.each(item.data, function (data_key, data_value) {
											$li.find("a").attr("data-" + data_key, data_value);
										});
									}
									if (item.is_sidenav_link) {
										$li.addClass("right show-on-medium-and-down");
									}
									return $li;
								}
							}
							break;
						case "bottom_links":
							$.each(item.items, function (ik, iv) {
								if (iv.display) {
									$("#" + position + " ." + item.position).append($('<a>', { "class": "tooltipped", "href": iv.link, "target": iv.target, "data-tooltip": iv.label }).append($('<img>', { "class": "", "src": "common/media/img/" + iv.image })));
								}
							});
							break;
						case "footer_menu":
							$("#" + item.position).prepend($('<h2>').html(item.title));
							$("#" + item.position).append($('<ul>', { "class": item.class }));
							$.each(item.items, function (ik, iv) {
								$("#" + item.position).find("ul").append(function () {
									if (iv.display) {
										return $('<li>').append($('<a>', { "href": iv.link, "target": iv.target, "data-tooltip": iv.label, "class": "tooltipped" }).append(iv.icon !== undefined ? $('<span>', { "class": iv.icon }) : iv.label));
									}
									if (iv.separator !== undefined) {
										return $('<li>', { "class": "separator" });
									}
								});
							});
							break;
						default:
							if (item.label === undefined && item.separator) {
								switch ($.type(item.separator)) {
									case "boolean":
										return $('<li>', { "class": "divider" }).append($('<span>', { "class": "separator" }));
										break;
									case "string":
										return $('<li>', { "class": "disabled black-text" }).append($('<span>').text(item.separator));
										break;
								}
							} else {
								if (item.display) {
									return $('<li>').append($('<a>', { "href": item.link, "class": item.class }).text(item.label));
								}
							}
							break;
					}
				}));
			});
		}

		/**
   * Build the page <header>
   * @return {[type]} [description]
   */

	}, {
		key: "build_header",
		value: function build_header() {
			$("body").prepend($("<header>").append($('<nav>', { "class": "transparent z-depth-0" }).append($('<div>', { "class": "nav-wrapper" }).append($('<a>', { "href": "./", "class": "brand-logo" }).append($('<img>', { "src": "common/media/img/crop_ontology.png" }))).append(
			// Sidenav
			$('<ul>', { "id": "sidenav", "class": "side-nav" }).append($('<li>', { "class": "row-control" }).append($('<a>', { "href": "javascript:;" }).append($('<i>', { "class": "material-icons" }).text("close")).append("Close").click(function () {
				$(".button-collapse").sideNav("hide");
			}))
			// ).append(
			// $('<li>', {"class": "divider"})
			)).append(
			// Top menu container
			$('<ul>', { "id": "top_menu", "class": "right" })))));

			/**
    * Build the top menu
    * @uses build_menu()
    */
			// this.build_menu("sidenav");

			/**
    * Build the top menu
    * @uses build_menu()
    */
			// this.build_menu("top_menu");
		}

		/**
   * Build the carousel messages slider
   */

	}, {
		key: "build_carousel",
		value: function build_carousel() {
			var path = STR.ucfirst(NAV.get_url_path()[NAV.get_url_path().length - 1]),
			    title = "",
			    subtitle = "";

			if (settings.general.carousel.visible && settings[page].carousel.visible) {
				$("body").append($('<section>', { "id": "top_carousel", "class": "" }).append($('<div>', { "class": "carousel carousel-slider center" }).append($('<div>', { "class": "carousel-fixed-item container" }).append($('<div>', { "class": "left" }).append(function () {
					if (page == "404") {
						return $('<h1>', { "id": "page_subtitle" }).text(page);
					} else if (settings[page].subtitle !== undefined && settings[page].subtitle !== "") {
						return $('<h1>', { "id": "page_subtitle" }).text(settings[page].subtitle);
					}
				}).append($('<h1>', { "id": "page_title" }).text(settings[page].title)))).append($.map(settings[page].carousel.items, function (v) {
					return $('<div>', { "class": "carousel-item valign-wrapper", "href": "#one" }).append(function () {
						if (v.image !== "") {
							return $('<img>', { "src": "common/media/img/carousel_images/" + v.image, "class": "responsive-img" });
						}
					}).append($('<h1>').html(STR.nl2br(v.message).replace(/\[(.*?)\]/gm, '<span class="highlight">$1</span>')));
				}))));

				// Instantiate Materialize carousel
				$(".carousel").carousel({
					duration: 50,
					fullWidth: true,
					indicators: false
				}).animate({ "opacity": 1 }, 300);

				if (settings[page].carousel.items.length == 1) {
					$(".carousel").css("pointer-events", "none");
				}

				/**
    * Animate the carousel
    * @param integer						time						The delay after carousel change (default is 10'000)
    */
				if (settings.general.carousel.animate && settings[page].carousel.items.length > 1) {
					setInterval(function () {
						// $(".carousel .carousel-item").fadeOut(300, () => {
						$(".carousel").carousel("next");
						// $(".carousel .carousel-item").delay(300).fadeIn();
						// })
					}, settings.general.carousel.time);
				}
			} else {
				/**
     * Set page title & subtitle
     * @note
     */
				var _title = "",
				    _subtitle = "";
				switch (page) {
					case "ontology":
						_title = NAV.get_ontology_id();
						_subtitle = STR.camel_case_2_text(NAV.get_ontology_label());
						break;
					case "terms":
						_title = '<a href="./terms/CO_020">' + NAV.get_ontology_id() + "</a><small>:" + NAV.get_term_id() + "</small>";
						_subtitle = STR.camel_case_2_text(NAV.get_term_label());
						break;
					default:
						_title = settings[page].title;
						_subtitle = settings[page].subtitle;
						break;
				}

				$("body").append($('<div>', { "id": "ontology_card", "class": "row container" }).append($('<h1>', { "id": "page_subtitle" }).html(_title)).append($('<h2>', { "id": "page_title" }).text(_subtitle)));
			}
		}

		/**
   * Build the searchbar
   */

	}, {
		key: "build_searchbar",
		value: function build_searchbar() {
			// Build the filters modal
			// MODALS.filters_modal();

			if (settings.general.search.visible) {
				var $searchbar = $('<div>', { "class": "bar" }).append(
				// Layout for search with tags
				// $('<div>', {"id": "search_input", "class": "input-field col s8 m8 l8 xl8"}).append(
				$('<div>', { "id": "search_input", "class": "input-field", "style": "width:100%;" }).append($('<input>', {
					"type": "search",
					"id": "search",
					"autocomplete": "off",
					"class": "autocomplete",
					"placeholder": "Search...",
					"name": "q"
				}))).append($('<div>', { "id": "search_loader" })),
				    $breadcrumbs = $('<nav>', { "class": "transparent z-depth-0" }).append($('<div>', { "class": "nav-wrapper" }).append($('<div>', { "class": "col s12 truncate" }).append($('<a>', { "href": "./", "class": "breadcrumb" }).append($('<span>', { "class": "fas fa-home" }))).append(function () {
					if (NAV.get_url_path().length > 1) {
						switch (page) {
							case "ontology":
								return $('<span>', { "class": "breadcrumb" }).html($('<tt>').append(NAV.get_ontology_id())).append(" ").append($("<span>", { "class": "page_name" }).append(STR.ucfirst(STR.camel_case_2_text(NAV.get_ontology_label()))));
								break;
							case "terms":
								return $('<span>', { "class": "breadcrumb" }).html($('<tt>').append(NAV.get_ontology_id()).append($('<small>').append(":" + NAV.get_term_id()))).append(" ").append($("<span>", { "class": "page_name" }).append(STR.ucfirst(STR.camel_case_2_text(NAV.get_term_label()))));
								break;
							default:
								return $('<span>', { "class": "breadcrumb" }).html(STR.ucfirst(STR.camel_case_2_text(NAV.get_page().replace(NAV.get_ontology_url_regex(":"), "<tt>$1</tt> $2"))));
								break;
						}
					} else {
						return $('<span>', { "class": "breadcrumb" }).text(STR.ucfirst(NAV.get_page()));
					}
				})));

				if (page == "home") {
					$("body").append($('<section>', { "id": "searchbar", "class": "container" }).append($('<form>', { "method": "get", "onsubmit": "return false;" }).append($('<div>', { "class": "" }).append($('<div>', { "class": "row" }).append($searchbar).append(function () {
						if (settings.general.search.tags.visible) {
							return $('<div>', { "id": "tags_list", "class": "input-field col s4 m4 l4 xl4" }).append($('<ul>', { "class": "tags" }).append().append()
							// FILTERS.draw_filter("user", "MALAPORTE")
							);
						}
					})).append(function () {
						if (settings.general.search.filters.visible) {
							return $('<a>', { "href": "#searchbar_filters", "class": "btn-text blue-text right modal-trigger" }).append($('<span>', { "class": "fa fa-filter" })).append(" Add a filter");
						}
					}))));
				} else {
					$("body").append($('<section>', { "id": "navbar", "class": "container" }).append($('<div>', { "class": "row" }).append($('<div>', { "id": "searchbar", "class": "col s12 m8 l6 right" }).append($searchbar)).append($('<div>', { "id": "breadcrumb", "class": "col s12 m4 l6 left" }).append($breadcrumbs))));
				}
			}
		}

		/**
   * Build the halfway menu
   */

	}, {
		key: "build_halfway_menu",
		value: function build_halfway_menu() {
			if (settings.general.halfway_menu.visible) {
				$("body").append($('<section>', { "id": "halfway", "class": "" }).append($('<ul>', { "id": "halfway_menu", "class": "center horizontal" })));

				/**
     * Build the top menu
     * @uses build_menu()
     */
				this.build_menu("halfway_menu");
			}
		}

		/**
   * Build the contents section
   * @uses build_page_contents()
   */

	}, {
		key: "build_contents_section",
		value: function build_contents_section() {
			/**
    * Content container
    */
			$("body").append($('<section>', { "id": "contents", "class": "" }).append(function () {
				switch (page) {
					/**
     * Home layout
     * -------------------------------------------------------------
     */
					case "home":
						return $('<div>', { "class": "row" }).append($('<div>', { "id": "ontologies_container", "class": "col s12 m12 l8 xl8 right" }).append($('<div>', { "class": "center-align" }).text(settings.general.loader.text))).append($('<div>', { "class": "col s12 m12 l4 xl4 left" }).append($('<div>', { "class": "row" }).append($('<div>', { "id": "info_container", "class": "col s12 m12 l12 xl12" }).append($('<div>', { "class": "card lighten-5" }).append($('<div>', { "class": "card-content" }).append($('<span>', { "class": "card-title highlight" })).append(
						// Loader
						// ---------------------------------
						$('<div>', { "class": "help" }).append()
						// $('<div>', {"class": "center-align"}).text(settings.general.loader.text)

						// ---------------------------------
						)))).append($('<div>', { "id": "feed_container", "class": "col s12 m12 l12 xl12" }))));
						break;
					case "latest":
						return $('<div>', { "class": "container" }).append($('<div>', { "id": "ontologies_container", "class": "col s12 m8 l8 xl8" }).append($('<div>', { "class": "center-align" }).text(settings.general.loader.text)));
						break;
					default:
						return $('<div>', { "id": "page_content", "class": "container" });
						break;
				}
			}));

			/**
    * Get and place contents in the page
    */
			this.build_page_contents();
		}

		/**
   * Build pages contents
   */

	}, {
		key: "build_page_contents",
		value: function build_page_contents() {
			var _$;

			DATA.get_user_logged();

			// Build the user account modal
			MODALS.user_modal("Login");

			switch (page) {
				/**
     * 							404 contents
     * -----------------------------------------------------------------
     */
				case "404":
					$("#contents .container").append($('<center>', { "class": "flow-text" }).text("The page you are looking for does not exists"));
					break;
				/**
     * 							HOME contents
     * -----------------------------------------------------------------
     */
				case "home":
					/**
      * Info
      * -------------------------------------------------------------
      */
					// DATA.get_help_content().then((data) => {
					// 	if(settings.home.sections.help.visible) {
					// 		// LOADER.hide("#help");
					// 		$("#info_container .card-title").append(
					// 			$('<small>', {"class": "far fa-question-circle grey-text"})
					// 		).append(" " + settings.home.sections.help.title);
					// 		$("#info_container .card-content .help").html(data[0].content.replace("<ul>", '<ul class="browser-default">'));
					// 		// return data[0].content;
					// 	}
					// });

					/**
      * Feeds
      * -------------------------------------------------------------
      */
					// DATA.get_community_website_feed().then((data) => {
					// 	if(settings.home.sections.news.visible) {
					// 		var $feeds = [],
					// 			feeds = [],
					// 			total_pages = Math.ceil(parseInt(data.length)/settings.home.sections.news.items_per_page),
					// 			visible_data = 0,
					// 			current_page = 0,
					// 			visible;
					//
					// 		$.each(data, (k, v) => {
					// 			if(v.category[0].label == "announcement") {
					// 				visible_data++;
					// 				if(visible_data % parseInt(settings.home.sections.news.items_per_page + 1) == 0) {
					// 					current_page++;
					// 				}
					//
					// 				feeds.push({
					// 					page: current_page,
					// 					visible: (current_page == 0) ? "visible" : "hide",
					// 					title: v.title,
					// 					preview: v.preview,
					// 					author: $('<a>', {"href": "mailto:" + v.author.email}).text(v.author.name).prop("outerHTML"),
					// 					published: moment(v.published).local().format("MMM DD, YYYY"),
					// 					link: v.link,
					// 					abstract: STR.extract_text(v.content) + "<br />"
					// 				});
					//
					// 			}
					// 		});
					// 		$.each(feeds, (k, v) => {
					// 			$feeds.push(
					// 				$('<div>', {"class": "feed page_" + v.page + " " + v.visible})
					// 				.append(
					// 					$('<div>', {"class": "preview"}).append(
					// 						$('<a>', {"href": v.link}).append(
					// 							$(v.preview)
					// 						)
					// 					)
					// 				).append(
					// 					$('<span>', {"class": "card-title highlight"}).append(
					// 						$('<a>', {"href": v.link}).text(v.title)
					// 					)
					// 				).append(
					// 					$('<div>', {"class": "release"}).append(
					// 						$('<span>', {"class": "far fa-fw fa-clock"})
					// 					).append(
					// 						$('<span>').html(" " + v.published + " by " + v.author)
					// 					)
					//                     // Uncomment below if you want the "abstract" content and the "Read more..." button on each news
					//                     //
					// 					// ).append(
					// 					// 	$('<div>', {"class": "content"}).append(
					// 					// 		v.abstract
					// 					// 	).append(
					// 					// 		$('<a>', {"href": v.link, "class": "readmore"}).text("Read more...")
					// 					// 	)
					// 				)
					// 			);
					// 		});
					//
					// 		$("#feed_container").append(
					// 			$('<div>', {"class": "card z-depth-1"}).append(
					// 				$('<div>', {"class": "card-content"}).append(
					// 					$('<div>', {"class": "card-title highlight"}).append(settings.home.sections.news.title)
					// 				)
					// 			).append(
					// 				$('<div>', {"class": "card-content"}).append(
					// 					$feeds
					//
					// 					// Uncomment below if you want news pagination
					// 					//
					// 					// PAGINATION.build_pagination({
					// 					// 	id: "feed_pagination",
					// 					// 	content: "#feed_container",
					// 					// 	items: ".feed",
					// 					// 	current_page: 1,
					// 					// 	total_pages: Math.ceil(parseInt(data.length)/settings.home.sections.news.items_per_page),
					// 					// })
					// 				)
					// 			).append(
					// 				$('<div>', {"class": "card-action right-align"}).append(
					// 					$('<a>', {"class": "btn btn-flat highlight-btn", "href": "https://sites.google.com/a/cgxchange.org/cropontologycommunity/"}).text("Read more...")
					// 				)
					// 			)
					// 		).slideDown(300);
					// 	}
					// }).catch((e) => {
					// 	// handle the error
					// });

					/**
      * Ontologies
      * -------------------------------------------------------------
      */
					// LOADER.create({target: "#ontologies_container", type: "progress"});

					break;
				/**
    			 * 							LATEST ONTOLOGIES AND NEWS contents
     * -----------------------------------------------------------------
    			 */
				case "latest":
					LOADER.create({ target: "#ontologies_container", type: "progress" });

					DATA.get_latest_ontologies().then(function (latest) {
						LOADER.hide("#ontologies_container .progress", true);

						if (settings.latest.visible) {
							$("#ontologies_container").html($('<ul>', { "class": "collapsible z-depth-0", "data-collapsible": "accordion" }));

							var current_page = 1,
							    page_limit = parseInt(settings.home.sections.ontologies.items_per_page),
							    page_content = [];

							if (page_limit <= 0) {
								page_limit = 1;
							}

							/**
        * Cycle categories (5 items)
        */
							$.each(latest, function (k, categories) {
								$("#ontologies_container .collapsible").append($('<li>', {
									"class": k == "latestOntos" ? "active" : "",
									"id": k
								}).append($('<div>', { "class": "collapsible-header " + (k == "latestOntos" ? "active" : "") }).append($('<div>', { "class": "left" }).append($('<span>').text(STR.ucfirst(STR.camel_case_2_text(k.replace("Ontos", "Ontologies"))) + " (top 10)")))).append($('<div>', { "class": "collapsible-body" }).append($('<ul>', { "id": "ontology_container" }).append($.map(categories, function (vv, kk) {
									var name = "",
									    href = "",
									    rss = "",
									    nt = "",
									    summary = "",
									    author = "";

									if (k == "latestOntos") {
										name = vv.ontology_name;
										href = "./ontology/" + vv.ontology_id + ":" + name.replace("/", "-");
										rss = "http://www.cropontology.org/ontology/" + vv.ontology_id + "/" + name.replace("/", "-") + "/rss";
										nt = "http://www.cropontology.org/ontology/" + vv.ontology_id + "/" + name.replace("/", "-") + "/nt";
										summary = STR.ucfirst(vv.ontology_summary), author = vv.username;
									} else {
										name = STR.get_ontology_term(vv.name);
										href = "./terms/" + vv.id + ":" + name.replace("/", "-");
										rss = "http://www.cropontology.org/ontology/" + vv.id + "/" + name.replace("/", "-") + "/rss";
										nt = "http://www.cropontology.org/ontology/" + vv.id.split(":")[0] + "/" + (vv.ontology_name == null || vv.ontology_name == "null" ? "" : vv.ontology_name.replace("/", "-")) + "/nt";
										summary = "", author = vv.author;
									}
									return $('<ul>', { "class": "collection" }).append($('<li>', { "class": "collection-item" }).append($('<a>', {
										"href": href
									}).append($('<h2>').append(name))).append($('<div>', { "class": "secondary-content" }).append($('<a>', {
										"class": "download tooltipped",
										"data-position": "top",
										"data-tooltip": "Ontology RSS",
										"data-delay": "0",
										"target": "_blank",
										"href": rss
									}).append($('<span>', { "class": "fa fa-rss-square" })).tooltip()).append($('<a>', {
										"class": "download tooltipped",
										"data-position": "top",
										"data-tooltip": "RDF N-Triples",
										"data-delay": "0",
										"target": "_blank",
										"href": nt
									}).append($('<span>', { "class": "picol_rdf_document" })).tooltip())).append($('<a>', { "href": "javascript:;", "class": "tag green" }).text(author)).append(function () {
										if (summary.length > 0) {
											return $('<p>').html(summary);
										}
									}));
								}))))).collapsible();
							});
						}
					});
					break;
				/**
    			 * 							CONTACT US contents
     * -----------------------------------------------------------------
    			 */
				case "contact-us":
				case "contact us":
					$("#contents").addClass("coloured grey lighten-5").find(".container").attr("id", "contact_form").append($('<form>', {
						"method": "get",
						"onsubmit": "return false;"
					}).append($('<div>', { "class": "row" }).append($('<form>', { "class": "col s12 m6 offset-m3" }).append($('<div>', { "class": "row" }).append($('<div>', { "class": "input-field col s6" }).append($('<input>', { "type": "text", "id": "first_name", "class": "validate" })).append($('<label>', { "for": "first_name" }).text("First name"))).append($('<div>', { "class": "input-field col s6" }).append($('<input>', { "type": "text", "id": "last_name", "class": "validate" })).append($('<label>', { "for": "last_name" }).text("Last name"))).append($('<div>', { "class": "input-field col s12" }).append($('<input>', { "type": "email", "id": "email", "class": "validate" })).append($('<label>', { "for": "email" }).text("E-mail address")))).append($('<div>', { "class": "row" }).append($('<div>', { "class": "input-field col s10" }).append($('<input>', { "type": "text", "id": "subject", "class": "validate" })).append($('<label>', { "for": "subject" }).text("Subject"))).append($('<div>', { "class": "input-field col s12" }).append($('<textarea>', { "id": "message", "class": "materialize-textarea" })).append($('<label>', { "for": "message" }).text("Message"))).append(
					// Google reCAPTCHA
					$('<div>', { "class": "g-recaptcha right", "data-sitekey": "6LdssoIUAAAAAIQYYHDi_jMiGHylKTm7JpPiq1GY" }))).append($('<div>', { "class": "row" }).append($('<a>', { "class": "btn btn-flat right waves-effect waves-light", "href": "javascript:;" }).text("Send"))))));
					break;
				/**
     * 							ABOUT contents
    * -----------------------------------------------------------------
     */
				case "about":
					// Place the external html page
					$("#contents").addClass("coloured grey lighten-5").find(".container").attr("id", "static_contents").append(PAGE_ABOUT);
					break;
				/**
     * 							PRIVACY POLICY contents
    * -----------------------------------------------------------------
     */
				case "privacy-policy":
				case "privacy policy":
					// Place the external html page
					$("#contents").addClass("coloured grey lighten-5").find(".container").attr("id", "static_contents").append(PAGE_PRIVACY_POLICY);
					break;
				/**
     * 							API contents
     * -----------------------------------------------------------------
     */
				case "api":
				case "API":
					// Place the external html page
					$("#contents").addClass("coloured grey lighten-5").find(".container").attr("id", "static_contents").append(PAGE_API);
					break;
				/**
     * 							HELP contents
     * -----------------------------------------------------------------
     */
				case "help":
					// Place the external html page
					$("#contents").addClass("coloured grey lighten-5").find(".container").attr("id", "static_contents").append(PAGE_HELP);
					break;
				/**
     * 							LOGIN contents
     * -----------------------------------------------------------------
     */
				case "login":
					// Place the external html page
					$("#contents").addClass("coloured grey lighten-5").find(".container").attr("id", "static_contents").append(PAGE_LOGIN);
					break;
				/**
     * 							REGISTER contents
     * -----------------------------------------------------------------
     */
				case "register":
					// Place the external html page
					$("#contents").addClass("coloured grey lighten-5").find(".container").attr("id", "static_contents").append(PAGE_REGISTER);
					break;
				/**
     * 							FORGOT-PASSWORD contents
     * -----------------------------------------------------------------
     */
				case "forgot-password":
					// Place the external html page
					$("#contents").addClass("coloured grey lighten-5").find(".container").attr("id", "static_contents").append(PAGE_FORGOT_PASSWORD);
					break;
				/**
     * 							FEEDBACK contents
     * -----------------------------------------------------------------
     */
				case "feedback":
					// Place the external html page
					$("#contents").addClass("coloured grey lighten-5").find(".container").attr("id", "static_contents").append(PAGE_FEEDBACK);
					break;
				/**
     * 							ADD-ONTOLOGIES contents
     * -----------------------------------------------------------------
     */
				case "add-ontology":
					var counter = 0,
					    ontoId,
					    getPars = function getPars(o, $cont, ontoId, parent) {
						var term = {};
						if ($cont.attr("id") !== "cont") {
							// we dont want to save the root
							var _name = $cont.find("input[name=name]:first").val();
							term = {
								id: ontoId + ":" + counter++,
								name: _name,
								parent: parent
							};
							o.push(term);
						}
						// children() returns only the top most elements
						$cont.children("ul").each(function (k, v) {
							getPars(o, $(v), ontoId, term.id || null);
						});
					};

					// Place the external html page
					$("#contents").addClass("coloured grey lighten-5").find(".container").attr("id", "static_contents").append(PAGE_ADD_ONTOLOGY);
					$(".tooltipped").tooltip();

					$("#add_childs_btn").on("click", function (e) {
						var $template = $('<ul>', { "class": "treeview form" }).append($('<li>', { "class": "term" }).append($('<div>', { "class": "item valign-wrapper" }).append($('<div>', { "class": "input-field col s5" }).append($('<input>', { "type": "text", "name": "name", "placeholder": "Term Name" }))).append($('<div>', { "class": "input-field col s5" }).append($('<input>', { "type": "text", "name": "relation_name", "placeholder": "Relation Name" }))).append($('<div>', { "class": "col s1" }).append($('<a>', { "class": "btn btn-mini add", "href": "javascript:;", "tabindex": "-1" }).append($('<span>', { "class": "fa fa-plus" }))).append($('<a>', { "class": "btn btn-mini remove", "href": "javascript:;", "tabindex": "-1" }).append($('<span>', { "class": "fa fa-minus" }))))));

						$("#cont").append($template);
						$("#cont").find("ul:last-child li:last-child input:first").focus();

						$(".btn-mini.add").unbind().on("click", function (e) {
							var $cloned_template = $template.clone(true);
							$cloned_template.find("input").val("");
							$(e.target).closest("ul").last().append($cloned_template);
							$(e.target).closest("ul").last().find("li").last().find("input:first").focus();
						});
						$(".btn-mini.remove").unbind().on("click", function (e) {
							if (!confirm("Are you sure you want to remove this term and all its children?")) return;
							$(e.target).closest("ul").last().remove();
						});

						e.preventDefault();
						e.stopPropagation();
					});
					$("#save").click(function (e) {
						var ret = [],
						    counter = 0,
						    ontoId = $.trim($("form:visible").find("#ontology_id").val());

						getPars(ret, $("#cont"), ontoId);

						// we need to obey the API which is a list of objects.
						// the tree is given by referencing each id
						// so the developer needs to give us IDs for us to know about
						// relation logic
						var pars = {
							ontology_name: $.trim($("form:visible").find("#ontology_name").val()),
							ontology_version: _data2.default.ontology_version !== undefined ? _data2.default.ontology_version + 1 : 1,
							ontology_id: $.trim($("form:visible").find("#ontology_id").val()),
							ontology_summary: $.trim($("form:visible").find("#ontology_summary").val()),
							category: $.trim($("form:visible").find("#create_ontology_cont select[name=category]").val()),
							json: JSON.stringify(ret)
						};

						if ($.trim(pars.ontology_name) == "" || pars.ontology_name == undefined || pars.ontology_id == "" || pars.ontology_id == undefined) {
							$("#error").text("Please insert the name of Ontology and its ID").fadeIn();
							return;
						}
						DATA.get_ontology(ontoId).then(function (data) {
							$("#error").fadeOut();

							DATA.add_ontology(pars).then(function (data) {
								window.location.href = "/";
							}, function (error) {
								$("#error").html($(error.responseText).text()).fadeIn();
							});

							e.preventDefault();
							e.stopPropagation();
						});
					});

					setTimeout(function () {
						DATA.get_ontology_upload_url().then(function (upload_url) {
							$("#add_ontology_tab_contents .col.active form").attr("action", upload_url);
						});
					}, 100);

					$(".tabs").tabs({
						onShow: function onShow(e) {
							DATA.get_ontology_upload_url().then(function (upload_url) {
								$("#add_ontology_tab_contents .col.active form").attr("action", upload_url);
							});
						}
					});

					break;
				/**
     * 							ONTOLOGIES contents
     * -----------------------------------------------------------------
     */
				case "ontology":
				case "terms":
					var name = "",
					    term = "",
					    language = "english";

					MODALS.download_ontology_modal();

					/**
      * Ontology card
      */
					DATA.get_ontologies_data(NAV.get_ontology_id()).then(function (ontologies_data) {
						$("#ontology_card").html($('<div>', { "class": "col s4 m3 l2" }).append($('<img>', { "class": "crop_pict responsive-img", "src": ontologies_data.ontology_picture }))).append($('<div>', { "class": "col s8 m9 l10" }).append($('<h1>', { "id": "page_subtitle" }).append(NAV.get_ontology_id()).append(NAV.get_term_id() !== undefined ? "<small>:" + NAV.get_term_id() + "</small>" : "")).append($('<h2>', { "id": "page_title" }).append(function () {
							// if(ontologies_data.ontology_title.link !== "") {
							// 	return $('<a>', {"href": ontologies_data.ontology_title.link, "target": "_blank"}).append(ontologies_data.ontology_title.title).append((NAV.get_term_id() !== undefined) ? NAV.get_term_label() : "");
							// } else {
							// 	return ontologies_data.ontology_title.title + ((page == "terms" && NAV.get_term_id() !== undefined) ? "<small>" + NAV.get_term_label() + "</small>" : "");
							// }
						})).append($('<table>', { "class": "responsive-table hide-on-small-only" }).append($('<thead>').append($('<tr>').append($('<th>').text("Ontology curators")).append($('<th>').text("Scientists")).append($('<th>', { "class": "center" }).text("Crop Lead Center")).append($('<th>', { "class": "center" }).text("Partners")).append($('<th>', { "class": "center" }).text("CGIAR research program")))).append($('<tbody>').append($('<td>').append(function () {
							if (ontologies_data.ontology_curators.length > 0 && ontologies_data.ontology_curators[0] !== "") {
								return $('<ul>', { "class": "browser-default" }).append($.map(ontologies_data.ontology_curators, function (v, k) {
									return $('<li>').append(v);
								}));
							}
						})).append($('<td>').append(function () {
							if (ontologies_data.scientists.length > 0 && ontologies_data.scientists[0] !== "") {
								return $('<ul>', { "class": "browser-default" }).append($.map(ontologies_data.scientists, function (v, k) {
									return $('<li>').append(v);
								}));
							}
						})).append($('<td>', { "class": "center" }).append(function () {
							if (ontologies_data.lead_centers.length > 0) {
								// 	console.info(v.image);
								return $('<div>').append($.map(ontologies_data.lead_centers, function (v, k) {
									if (v.image) {
										var image = !STR.is_url(v.image) ? "./common/media/img/" + v.image : v.image;
										return $('<a>', { "href": v.link, "target": "_blank" }).append($('<img>', { "src": image }));
									}
								})).html();
							}
						})).append($('<td>', { "class": "center" }).append(function () {
							if (ontologies_data.partners.length > 0) {
								// 	console.info(v.image);
								return $('<div>').append($.map(ontologies_data.partners, function (v, k) {
									if (v.image) {
										var image = !STR.is_url(v.image) ? "./common/media/img/" + v.image : v.image;
										return $('<a>', { "href": v.link, "target": "_blank" }).append($('<img>', { "src": image }));
									}
								})).html();
							}
						})).append($('<td>', { "class": "center" }).append(function () {
							if (ontologies_data.cgiar_research_program.length > 0) {
								// 	console.info(v.image);
								return $('<div>').append($.map(ontologies_data.cgiar_research_program, function (v, k) {
									return $('<a>', { "href": v.link, "target": "_blank" }).append($('<img>', { "src": "./common/media/img/" + v.image }));
								})).html();
							}
						})))));
					});

					DATA.get_ontology(NAV.get_ontology_id()).then(function (data) {
						LOADER.hide("#contents .progress");

						// Set Ontology languages
						var langs = STR.get_ontologies_languages(data.name);
						if (typeof langs == "string") {
							langs = [langs];
						}
						// Set the page name
						var page_name = STR.get_ontology_term(data.name);
						$(".page_name").text(page_name);
						// Reset the page title
						$("#page_title").html(page_name);

						$("#ontology_tree .languages_refresh select").append($.map(langs, function (lang) {
							return $('<option>', {
								"value": lang.toLowerCase(),
								"selected": lang.toLowerCase() == settings.general.language ? true : false
							}).text(lang);
						}))
						//.attr("disabled", (langs.length == 1))
						.material_select();

						// TREEVIEW.add_items({
						// 	item: "#treeview",
						// 	source: data,
						// 	term: '<tt>' + NAV.get_ontology_id() + "</tt> - " + STR.get_ontology_term(data.name),
						// 	is_root: true,
						// 	langs: langs
						// });

						var permalink = "./ontology/" + NAV.get_ontology_id() + ":" + NAV.get_ontology_label(),
						    ext_permalink = "https://www.cropontology.org/terms/" + data.id + "/" + STR.get_ontology_term(data.name) + "/static-html?language=" + STR.get_ontology_term_language(data.name);

						// $("#term_permalink").attr("href", ext_permalink);
						$("#term_info_name").attr("href", permalink);
						$("#ontology_tree, #ontology_info").removeClass("disabled");
					});

					$("#contents").addClass("coloured grey lighten-5").find(".container").append($('<div>', { "class": "row" }).append($('<div>', { "class": "col s12 m6 l5" }).append($('<h6>').text("Traits, methods and scales")).append($('<div>', { "id": "ontology_tree", "class": "card z-depth-0 disabled" }).append($('<nav>').append($('<div>', { "class": "languages_refresh left" }).append($('<select>', { "name": "language" }))).append($('<ul>', { "class": "right" }).append($('<li>').append($('<a>', { "href": "#download_ontology_modal", "class": "modal-trigger" }).append($('<span>', { "class": "picol_arrow_full_down" })).append(" Download"))))).append($('<div>', { "id": "treeview_container", "class": "card-content" }).append($('<ul>', { "id": "treeview", "class": "treeview" }))))).append($('<div>', { "class": "col s12 m6 l7" }).append($('<h6>').text("Term information")).append($('<div>', { "id": "ontology_info", "class": "disabled" }).append($('<div>', { "class": "card z-depth-1 browser-content browser" }).append($('<nav>', { "class": "nav-extended" }).append($('<div>', { "class": "nav-content" }).append($('<ul>', { "class": "tabs" }).append(
					// Info tab
					$('<li>', { "id": "general", "class": "tab" }).append($('<a>', (_$ = { "href": "#page_info", "class": "active" }, _defineProperty(_$, "class", "tooltipped"), _defineProperty(_$, "data-tooltip", "General"), _defineProperty(_$, "data-position", "top"), _$)).append($('<span>', { "class": "hide-on-large-only fa fa-info-circle" })).append($('<span>', { "class": "hide-on-med-and-down text" }).text("General")))).append(
					// Variables tab
					$('<li>', { "id": "variables", "class": "tab disabled" }).append($('<a>', { "href": "#item_variables", "class": "tooltipped", "data-tooltip": "Variables", "data-position": "top" }).append($('<span>', { "class": "hide-on-large-only fa fa-code-branch" })).append($('<span>', { "class": "hide-on-med-and-down text" }).text("Variables")))).append(
					// Comments tab
					$('<li>', { "id": "new-comments", "class": "tab" }).append($('<a>', { "href": "#page_comments", "class": "tooltipped", "data-tooltip": "Comments", "data-position": "top" }).append($('<span>', { "class": "hide-on-large-only fa fa-comments" })).append($('<span>', { "class": "hide-on-med-and-down text" }).text("Comments")))))).append($('<div>', { "class": "filterbar nav-wrapper" }).append($('<ul>', { "class": "filters left" }).append($('<span>', { "class": "fa fa-link grey-text" })).append($('<li>', { "data-filter": "read" }).append($('<a>', {
						"href": "javascript:;",
						"id": "term_info_name",
						"class": "tooltipped",
						"data-tooltip": '<center>Permalink<br /><small>Click to refresh this page</small></center>'
					}).html($('<span>', { "class": "getting_data" }).text("Getting data...")))
					// ).append(
					// 	$('<li>', {"data-filter": "read"}).append(
					// 		$('<a>', {
					// 			"href": "javascript:;",
					// 			"target": "_blank",
					// 			"id": "term_permalink",
					// 			"class": "right tooltipped",
					// 			"data-tooltip": "Permalink"
					// 		}).append(
					// 			$('<span>', {"class": "fa fa-link"})
					// 		)
					// 	)
					)))).append($('<div>', { "id": "pages" }).append(
					// Info container
					$('<div>', { "id": "page_info", "class": "card-content" })).append(
					// Variables container
					$('<div>', { "id": "item_variables", "class": "card-content" })).append(
					// Comments container
					$('<div>', { "id": "page_comments", "class": "card-content" }).append($('<ul>', { "id": "comments", "class": "collection" }).hide()).append($('<div>', { "id": "comment_form" }).append(function () {
						if (DATA.get_user_logged()) {
							return $('<form>', { "method": "post", "action": "http://www.cropontology.org/add-comment" }).append($('<div>', { "class": "row" }).append($('<input>', { "type": "hidden", "name": "termId" }).val(page == "terms" ? NAV.get_term_id() : "")).append($('<input>', { "type": "hidden", "name": "ontologyId" }).val(NAV.get_ontology_id())).append($('<div>', { "class": "input-field col s12" }).append($("<textarea>", {
								"name": "comment",
								"class": "materialize-textarea",
								"id": "comment_input"
							})).append($('<label>', { "for": "comment_input" }).text("Add a comment"))).append($('<input>', { "type": "submit", "class": "btn btn-flat btn-highlight waves-effect waves-light right" }).val("Comment")));
						} else {
							return $('<center>').append($('<i>').append("Please ").append($('<a>', { "href": "#user_modal", "class": "modal-trigger" }).text("login")).append(" to comment"));
						}
					}))))).append($('<div>', { "id": "graph", "class": "card disabled" }).append($('<div>', { "id": "graph_content", "class": "valign-wrapper" }).append(
					// $('<h1>').html('<svg aria-hidden="true" data-prefix="fal" data-icon="chart-network" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-chart-network fa-w-20 fa-3x"><path fill="currentColor" d="M513.6 202.8l-19.2-25.6-48 36 19.2 25.6 48-36zM576 192c13.3 0 25.6-4 35.8-10.9 6.8-4.6 12.7-10.5 17.3-17.3C636 153.6 640 141.3 640 128c0-13.3-4-25.6-10.9-35.8-2.3-3.4-4.9-6.6-7.8-9.5-2.9-2.9-6.1-5.5-9.5-7.8C601.6 68 589.3 64 576 64s-25.6 4-35.8 10.9c-6.8 4.6-12.7 10.5-17.3 17.3C516 102.4 512 114.7 512 128c0 35.3 28.7 64 64 64zm0-96c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zM99.8 250.9C89.6 244 77.3 240 64 240s-25.6 4-35.8 10.9c-6.8 4.6-12.7 10.5-17.3 17.3C4 278.4 0 290.7 0 304c0 35.3 28.7 64 64 64s64-28.7 64-64c0-13.3-4-25.6-10.9-35.8-4.6-6.8-10.5-12.7-17.3-17.3zM64 336c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32zm88-16h48v-32h-48v32zm469.3 82.7c-2.9-2.9-6.1-5.5-9.5-7.8C601.6 388 589.3 384 576 384s-25.6 4-35.8 10.9c-3.3 2.2-6.3 4.7-9.1 7.5l-91.8-55.1c5.6-13.3 8.7-28 8.7-43.3 0-61.9-50.1-112-112-112-11.3 0-21.9 2.2-32.2 5.2l-39.3-84.1C278.8 101.4 288 83.9 288 64c0-13.3-4-25.6-10.9-35.8-4.6-6.8-10.5-12.7-17.3-17.3C249.6 4 237.3 0 224 0s-25.6 4-35.8 10.9c-6.8 4.6-12.7 10.5-17.3 17.3C164 38.4 160 50.7 160 64c0 35.3 28.7 64 64 64 4 0 7.9-.5 11.7-1.2l39 83.6c-30.5 20-50.7 54.4-50.7 93.6 0 61.9 50.1 112 112 112 35 0 65.8-16.4 86.4-41.5l92.4 55.4c-1.7 5.8-2.7 11.8-2.7 18.1 0 35.3 28.7 64 64 64 13.3 0 25.6-4 35.8-10.9 6.8-4.6 12.7-10.5 17.3-17.3C636 473.6 640 461.3 640 448c0-13.3-4-25.6-10.9-35.8-2.3-3.4-5-6.6-7.8-9.5zM224 96c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32zm112 288c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80zm240 96c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z" class=""></path></svg>')
					$('<h1>').append($('<span>', { "class": "fab fa-hubspot fa-3x" }))))))));

					$("#contents").prepend(LOADER.create({ type: "progress" }));
					break;
			}
		}

		/**
   * Build the footer section
   */

	}, {
		key: "build_footer",
		value: function build_footer() {
			if (settings.general.footer.visible) {
				$("body").append($("<footer>", { "class": "parallax-container" }).append($("<div>", { "class": "parallax" }).append($("<img>", { "src": "common/media/img/" + settings.general.footer.background }))).append($("<div>", { "class": "row" }).append($("<div>", { "class": "col s12 m12 l3 xl2" }).append($('<a>', { "href": "./", "class": "brand-logo" }).append($('<img>', { "class": "responsive-img", "src": "common/media/img/" + settings.general.footer.logo }))).append($('<p>', { "class": "description" }).html(settings.general.footer.description))).append($("<div>", { "id": "left_menu", "class": "col s12 m4 l2 offset-l1 offset-xl1" })).append($("<div>", { "id": "center_menu", "class": "col s12 m4 l3" })).append($("<div>", { "id": "right_menu", "class": "col s12 m4 l3 offset-xl1" })))).append($('<section>', { "id": "bottom_links" }).append($('<div>', { "class": "row container" }).append($('<div>', { "id": "", "class": "col s12 m12 l8 xl8 left" })).append($('<div>', { "id": "owner", "class": "col s12 m12 l4 xl4 right right-align" })))).append($('<center>', { "class": "license" }).append($('<p>').html(settings.general.license.text)));
			}

			/**
    * Build the footer menu
    * @uses build_menu()
    */
			this.build_menu("footer_menu");

			/**
   * Build the bottom links menu
   * @uses build_menu()
   */
			this.build_menu("bottom_links");
			// this.build_menu("owner");
		}
	}, {
		key: "load_scripts",
		value: function load_scripts() {
			switch (page) {
				case "add-ontology":
					$("head").append("<!-- Main style -->").append($('<link>', { "rel": "stylesheet", "href": "dist/css/jquery.treeview.css", "type": "text/css", "media": "screen" }));
					break;
				case "ontology":
				case "terms":
					$("head").append("<!-- Main style -->").append($('<link>', { "rel": "stylesheet", "href": "dist/css/jquery.treeview.css", "type": "text/css", "media": "screen" }));

					$("#scripts").append("<!-- Fullscreen feature -->").append($('<script>', { "type": "text/javascript", "src": "bower_components/jq-fullscreen/release/jquery.fullscreen.min.js" })).append("<!--  The Raphael JavaScript library for vector graphics display  -->").append($('<script>', { "type": "text/javascript", "src": "dist/js/raphael-min.js" })).append("<!--  Dracula  -->").append("<!--  An extension of Raphael for connecting shapes -->").append($('<script>', { "type": "text/javascript", "src": "dist/js/dracula_graffle.js" })).append("<!--  Graphs  -->").append($('<script>', { "type": "text/javascript", "src": "dist/js/dracula_graph.js" })).append($('<script>', { "type": "text/javascript", "src": "dist/js/dracula_algorithms.js" }));
					break;
				case "annotation-tool":
					$("head").append("<!-- Materialize Stepper -->").append($('<link>', { "rel": "stylesheet", "href": "dist/css/mstepper.css", "type": "text/css", "media": "screen" }));

					$("#scripts").append("<!-- Materialize Stepper -->").append($('<script>', { "type": "text/javascript", "src": "dist/js/mstepper.min.js" })).append("<!-- SheetJS/js-xlsx -->").append($('<script>', { "type": "text/javascript", "src": "bower_components/js-xlsx/dist/xlsx.core.min.js" })).append($('<script>', { "type": "text/javascript", "src": "bower_components/js-xlsx/dist/cpexcel.js" })).append($('<script>', { "type": "text/javascript", "src": "bower_components/js-xlsx/dist/ods.js" })).append($('<script>', { "type": "text/javascript", "src": "bower_components/file-saver/dist/FileSaver.min.js" })).append("<!-- nodeca/mimoza -->").append($('<script>', { "type": "text/javascript", "src": "bower_components/mimoza/dist/mimoza.min.js" })).append("<!-- mholt/PapaParse -->").append($('<script>', { "type": "text/javascript", "src": "bower_components/papaparse/papaparse.min.js" })).append("<!-- Fullscreen feature -->").append($('<script>', { "type": "text/javascript", "src": "bower_components/jq-fullscreen/release/jquery.fullscreen.min.js" }));
					break;
				case "register":
					$("#scripts").append("<!-- jquery-validation -->").append($('<script>', { "type": "text/javascript", "src": "bower_components/jquery-validation/dist/jquery.validate.min.js" })).append("<!-- Google reCAPTCHA -->").append($('<script>', { "type": "text/javascript", "src": "https://www.google.com/recaptcha/api.js" }));
					break;
			}
		}
	}]);

	return layout;
}();

exports.default = layout;

},{"../../common/settings/contents.json":2,"../../common/settings/languages.json":3,"../../common/settings/menu.json":4,"../../src/es6/_navigation.es6":10,"../../src/es6/_str.es6":12,"../../src/es6/data.es6":13,"../../src/es6/loader.es6":15,"../../src/es6/modals.es6":16,"../../src/es6/pagination.es6":17,"moment":6}],15:[function(require,module,exports){
"use strict";
/* jshint esversion: 6 */
"strict mode";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var loader = function () {
	function loader() {
		_classCallCheck(this, loader);
	}

	_createClass(loader, [{
		key: "create",

		/**
   * Build a circular or a progress loader
   * @see https://materializecss.com/preloader.html
   *
   * @param  object 						options								The loader display options
   */
		value: function create(options) {
			var defaults = {
				/**
     * The loader type.
     * Options: "progress" or "circular"
     * @type {String}
     */
				type: "progress",
				/**
     * The progress type.
     * Options: `true` stay for determinate progress (need `size` option)
     * NOTE: This option is available only for progress loaders
     * @type {Boolean}
     */
				determinate: false,
				/**
     * The loader size.
     * Options:
     * 	- Circular loader: @type {String} 	"" or "small" or "big"
     * 	- Progress loader: @type {Integer}	The percentage of progress
     */
				size: "",
				/**
     * The loader colour
     * NOTE: This option is available only for circular loaders
     * @type {String}
     */
				colour: "grey",
				target: ""
			},
			    data = $.extend({}, defaults, options);

			switch (data.type) {
				case "progress":
					if ($(data.target + " .progress").length > 0) {
						this.show(data.target + " .progress");
					} else {
						$(data.target).prepend($('<div>', { "class": "progress" }).append($('<div>', {
							"class": data.determinate ? "determinate" : "indeterminate",
							"style": data.size !== "" ? "width: " + data.size + "%" : ""
						})));
					}
					break;
				case "circular":
					if ($(data.target + " .preloader-wrapper").length > 0) {
						this.show(data.target + " .preloader-wrapper");
					} else {
						$(data.target).prepend($('<div>', { "class": "preloader-wrapper " + data.size + " active" }).append($('<div>', { "class": "spinner-layer spinner-" + data.colour + "-only" }).append($('<div>', { "class": "circle-clipper left" }).append($('<div>', { "class": "circle" }))).append($('<div>', { "class": "gap-patch" }).append($('<div>', { "class": "circle" }))).append($('<div>', { "class": "circle-clipper right" }).append($('<div>', { "class": "circle" })))));
					}
					break;
			}
		}
	}, {
		key: "show",
		value: function show(item) {
			$(item).animate({ "opacity": 1 });
		}
	}, {
		key: "hide",
		value: function hide(item, remove) {
			remove = remove == undefined ? false : remove;
			$(item).animate({ "opacity": 0 }, 300, function () {
				if (remove) {
					$(item).remove();
				}
			});
		}
	}]);

	return loader;
}();

exports.default = loader;

},{}],16:[function(require,module,exports){
"use strict";
/* jshint esversion: 6 */
"strict mode";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _navigation = require("../../src/es6/_navigation.es6");

var _navigation2 = _interopRequireDefault(_navigation);

var _str = require("../../src/es6/_str.es6");

var _str2 = _interopRequireDefault(_str);

var _data = require("../../src/es6/data.es6");

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NAV = new _navigation2.default();
var STR = new _str2.default();
var DATA = new _data2.default();

var modals = function () {
	function modals() {
		_classCallCheck(this, modals);
	}

	_createClass(modals, [{
		key: "build_modal",

		/**
   * Build a modal popup
   * NOTE: Must be executed before or after creating the trigger button
   * @see http://archives.materializecss.com/0.100.2/modals.html
   *
   * @example:
   * ```
   * // Trigger
   * <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
   * ```
   *
   * @param object						options								Parameters passed as JSON object
   */
		value: function build_modal(options) {
			var defaults = {
				id: "modal",
				class: "",
				title: "Modal Header",
				subtitle: "",
				content: "Modal Content",
				display_buttons: true,
				close_button: false,
				ok_button: "Ok",
				cancel_button: "Cancel",
				ok_action: function ok_action() {
					return false;
				},
				cancel_action: function cancel_action() {
					return false;
				},
				fixed_footer: true,
				bottom_sheet: false,
				size: "medium" // Modal size. Possible options: "small", "medium", "large"
			},
			    settings = $.extend({}, defaults, options);

			$("body").prepend($('<div>', {
				"id": settings.id,
				"class": "modal " + settings.class + " " + settings.size + " " + (settings.fixed_footer ? " modal-fixed-footer" : "") + (settings.bottom_sheet ? " bottom-sheet" : "")
			}).append($('<div>', { "class": "modal-content" }).append(function () {
				if (settings.close_button) {
					return $('<a>', { "href": "javascript:;", "class": "modal-action modal-close btn btn-mini right" }).append($('<span>', { "class": "fa fa-times" }));
				}
			}).append($('<h4>').html(settings.title)).append(function () {
				if (settings.subtitle) {
					return $('<h5>').html(settings.subtitle);
				}
			}).append(settings.content)).append(function () {
				if (settings.display_buttons) {
					return $('<div>', { "class": "modal-footer" }).append($('<a>', { "href": "javascript:;", "class": "modal-action modal-close waves-effect waves-green btn-flat left" }).text(settings.cancel_button).click(function () {
						settings.cancel_action();
					})).append($('<a>', { "href": "javascript:;", "class": "modal-action waves-effect waves-green btn-flat right" }).text(settings.ok_button).click(function () {
						settings.ok_action();
					}));
				}
			}));
		}
	}, {
		key: "confirm",
		value: function confirm(options) {
			this.build_modal({
				id: "confirm_modal",
				size: "small",
				title: options.title,
				content: options.content,
				fixed_footer: false,
				bottom_sheet: false,
				ok_action: options.ok_action
			});
		}
	}, {
		key: "add_filter_row",
		value: function add_filter_row(options) {
			var defaults = {
				id: "",
				name: "",
				placeholder: ""
			},
			    settings = $.extend({}, defaults, options);

			return $('<div>', { class: "row filter" }).append($('<div>', { class: "input-field col s2" }).append($('<p>').append($('<input>', {
				type: "checkbox",
				class: "filled-in",
				id: settings.id
			})).append($('<label>', { for: settings.id }).text(settings.label)))).append($('<div>', { class: "input-field col s4" }).append($('<input>', {
				type: "text",
				name: settings.name,
				placeholder: settings.placeholder,
				disabled: true
			})));
		}

		/**
   * Build the filters modal
   */

	}, {
		key: "filters_modal",
		value: function filters_modal() {
			function activate_rows() {
				$(".filter").each(function (k, v) {
					var $checkbox = $(v).find("input[type='checkbox']"),
					    $input = $(v).find("input[type='text']");

					$checkbox.on("change", function () {
						if ($checkbox.is(":checked")) {
							$input.attr("disabled", false).focus();
						} else {
							$input.attr("disabled", true);
						}
					});
				});
			}

			var $filters_modal_content = $('<div>', { "class": "row" }).append($('<form>', { class: "col s12" }).append(this.add_filter_row({
				id: "user_check",
				name: "user",
				label: "Users:",
				placeholder: "Type a username, name or last name..."
			})).append(this.add_filter_row({
				id: "type_check",
				name: "type",
				label: "Type:",
				placeholder: "Ontology type..."
			})));

			this.build_modal({
				id: "searchbar_filters",
				title: "Filters",
				content: $filters_modal_content,
				fixed_footer: false
			});
			activate_rows();
		}
	}, {
		key: "user_modal",
		value: function user_modal(title) {
			var $user_modal_content = $('<div>', { "class": "" }).append($('<form>', { "class": "col s12" }).append($('<div>', { "class": "row" }).append($('<div>', { "class": "input-field col s10 offset-s1" }).append($('<input>', {
				"type": "text",
				"name": "username",
				"id": "log_username"
			})).append($('<label>', { "for": "log_username" }).text("Username"))).append($('<div>', { "class": "input-field col s10 offset-s1" }).append($('<input>', {
				"type": "password",
				"name": "password",
				"id": "log_password"
			})).append($('<label>', { "for": "log_password" }).text("Password")))).append($('<div>', { "class": "row" }).append($('<div>', { "class": "col s10 offset-s1" }).append($('<a>', { "href": "./forgot-password" }).text("Forgot Password?"))))).append($('<div>', { "id": "login_error", "class": "card red white-text center-align" }));

			this.build_modal({
				id: "user_modal",
				size: "small",
				title: title,
				content: $user_modal_content,
				fixed_footer: false,
				bottom_sheet: false,
				ok_action: function ok_action() {
					DATA.log_user($user_modal_content.find("form").serialize()).then(function (data) {
						if (data.error !== undefined) {
							$("#login_error").html(STR.ucfirst(STR.readable_data(data.error)));
						} else {
							location.reload();
						}
					}, function (error) {
						$("#login_error").html(error);
						return false;
					});
				}
			});
		}
	}, {
		key: "download_ontology_modal",
		value: function download_ontology_modal() {
			var $download_ontology_modal = $('<div>', { "class": "" }).append($('<div>', { class: "row" }).append($('<div>', { "class": "col s3 m3 l3 xl3" }).append($('<a>', {
				"target": "_blank",
				"href": "https://www.cropontology.org/report?ontology_id=" + NAV.get_ontology_id(),
				"class": "center dowload-item",
				"download": NAV.get_ontology_id() + ".csv"
			}).append($('<h4>').append($('<span>', { "class": "picol_document_text" }))).append($('<h6>').text("Trait dictionary")))).append($('<div>', { "class": "col s3 m3 l3 xl3" }).append($('<a>', {
				"target": "_blank",
				"href": "https://www.cropontology.org/rdf/" + NAV.get_ontology_id() + (NAV.get_term_id() !== undefined ? ":" + NAV.get_term_id() : "") + "/" + NAV.get_ontology_label(),
				"class": "center dowload-item",
				"download": NAV.get_ontology_id() + ".nt"
			}).append($('<h4>').append($('<span>', { "class": "picol_rdf" }))).append($('<h6>').text("RDF")))).append($('<div>', { "class": "col s3 m3 l3 xl3" }).append($('<a>', {
				"target": "_blank",
				"href": "https://www.cropontology.org/ontology/" + NAV.get_ontology_id() + "/" + NAV.get_ontology_label() + "/nt",
				"class": "center dowload-item",
				"download": NAV.get_ontology_id() + ".nt"
			}).append($('<h4>').append($('<span>', { "class": "picol_rdf_document" }))).append($('<h6>').text("RDF N-Triples")))).append($('<div>', { "class": "col s3 m3 l3 xl3" }).append($('<a>', {
				"target": "_blank",
				"href": "https://www.cropontology.org/obo/" + NAV.get_ontology_id(),
				"class": "center dowload-item",
				"download": NAV.get_ontology_id() + ".obo"
			}).append($('<h4>').append($('<span>', { "class": "picol_owl_lite_document" }))).append($('<h6>').text("OBO File")))));

			this.build_modal({
				id: "download_ontology_modal",
				size: "small",
				class: "centered",
				title: "Download",
				subtitle: "<tt>" + NAV.get_ontology_id() + (NAV.get_term_id() !== undefined ? "<small>:" + NAV.get_term_id() + "</small>" : "") + "</tt> &rsaquo; " + (NAV.get_term_label() !== undefined ? NAV.get_term_label() : NAV.get_ontology_label()),
				content: $download_ontology_modal,
				fixed_footer: false,
				bottom_sheet: false,
				display_buttons: false,
				close_button: true
			});
		}
	}]);

	return modals;
}();

exports.default = modals;

},{"../../src/es6/_navigation.es6":10,"../../src/es6/_str.es6":12,"../../src/es6/data.es6":13}],17:[function(require,module,exports){
"use strict";
/* jshint esversion: 6 */
"strict mode";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _str = require("../../src/es6/_str.es6");

var _str2 = _interopRequireDefault(_str);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var STR = new _str2.default();

var pagination = function () {
	function pagination() {
		_classCallCheck(this, pagination);
	}

	_createClass(pagination, [{
		key: "build_pagination",

		/**
  * Build a pagination menu
  * @param  integer 						total_pages							The amount of pages
  */
		value: function build_pagination(options) {
			var _this = this;

			var defaults = {
				id: "",
				context_class: "group",
				content: "",
				items: "",
				current_page: 1,
				total_pages: 1
			},
			    settings = $.extend({}, defaults, options);
			var prev_page = settings.current_page <= 1 ? 1 : settings.current_page - 1,
			    next_page = settings.current_page >= settings.total_pages ? settings.total_pages : settings.current_page + 1,
			    $pagination = $('<ul>', {
				"id": settings.id,
				"class": settings.context_class + " pagination center",
				"data-current_page": settings.current_page,
				"data-total_pages": settings.total_pages
			}),
			    $left_arrow_btn = $('<li>', { "class": "prev_page_btn", disabled: true }).append($('<a>', { "href": "javascript:;" }).append($('<span>', { "class": "fa fa-chevron-left" }))).click(function (e) {
				_this.goto(e, settings.context_class, "prev", settings.content, settings.items);
			}),
			    $right_arrow_btn = $('<li>', { "class": "next_page_btn" }).append($('<a>', { "href": "javascript:;" }).append($('<span>', { "class": "fa fa-chevron-right" }))).click(function (e) {
				_this.goto(e, settings.context_class, "next", settings.content, settings.items);
			});

			var _loop = function _loop(p) {
				var pagelink_class = p == settings.current_page ? "waves-effect active" : "waves-effect",
				    left_arrow_class = settings.current_page <= 1 ? "disabled" : "",
				    right_arrow_class = settings.current_page >= settings.total_pages ? "disabled" : "";

				$left_arrow_btn.addClass(left_arrow_class);
				$right_arrow_btn.addClass(right_arrow_class);
				$pagination.append($('<li>', { "class": pagelink_class + " page_" + p }).append($('<a>', { "href": "javascript:;" }).text(p).click(function (e) {
					_this.goto(e, settings.context_class, p, settings.content, settings.items);
				})));
			};

			for (var p = 1; p <= settings.total_pages; p++) {
				_loop(p);
			}
			return $pagination.prepend($left_arrow_btn).append($right_arrow_btn);
		}
	}, {
		key: "goto",
		value: function goto(e, context_class, page, content, items) {
			if (!$(e.target).closest("li").attr("disabled")) {
				var current_page = parseInt($("." + context_class).data("current_page")),
				    total_pages = parseInt($("." + context_class).data("total_pages")),
				    prev_page = current_page <= 1 ? 1 : current_page - 1,
				    next_page = current_page >= total_pages ? total_pages : current_page + 1;

				$("." + context_class).find("li.active").removeClass("active");
				$("#" + context_class + " " + items).addClass("hide");
				switch (page) {
					case "prev":
						$("." + context_class).find("li.page_" + prev_page).addClass("active");
						$("." + context_class).data("current_page", prev_page);
						current_page = prev_page;
						break;
					case "next":
						$("." + context_class).find("li.page_" + next_page).addClass("active");
						$("." + context_class).data("current_page", next_page);
						current_page = next_page;
						break;
					default:
						$("." + context_class).find("li.page_" + page).addClass("active");
						$("." + context_class).data("current_page", page);
						current_page = page;
						break;
				}
				$(content + " " + items + ".page_" + current_page).removeClass("hide");
				if ($("#page_no").length > 0) {
					$("#page_no").text(current_page);
				}

				// Prev/next buttons
				if (current_page > 1) {
					$(".prev_page_btn").removeClass("disabled").attr("disabled", false);
				} else {
					$(".prev_page_btn").addClass("disabled").attr("disabled", true);
				}
				if (current_page < total_pages) {
					$(".next_page_btn").removeClass("disabled").attr("disabled", false);
				} else {
					$(".next_page_btn").addClass("disabled").attr("disabled", true);
				}
			}
		}
	}]);

	return pagination;
}();

exports.default = pagination;

},{"../../src/es6/_str.es6":12}]},{},[8]);
