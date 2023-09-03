/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex("chains").insert([
    {name: "Cedar Fair"},       //id1
    {name: "Six Flags"},        //id2
    {name: "Herschend"},        //id3
    {name: "Busch-SeaWorld"},   //id4
    {name: "Universal"},        //id5
    {name: "Disney"},           //id6
    {name: "Merlin"}            //id7
  ])
  await knex("countries").insert([
    {name: "USA"},        //id1
    {name: "UK"},         //id2
    {name: "Germany"},    //id3
    {name: "Japan"},      //id4
    {name: "Poland"},     //id5
    {name: "Mexico"},     //id6
    {name: "Canada"}    //id7
  ])
  await knex("states").insert([
    {name: "Alabama"}, //id	1
    {name: "Alaska"}, //id	2
    {name: "Arizona"}, //id	3
    {name: "Arkansas"}, //id	4
    {name: "California"}, //id	5
    {name: "Colorado"}, //id	6
    {name: "Connecticut"}, //id	7
    {name: "Delaware"}, //id	8
    {name: "Florida"}, //id	9
    {name: "Georgia"}, //id	10
    {name: "Hawaii"}, //id	11
    {name: "Idaho"}, //id	12
    {name: "Illinois"}, //id	13
    {name: "Indiana"}, //id	14
    {name: "Iowa"}, //id	15
    {name: "Kansas"}, //id	16
    {name: "Kentucky"}, //id	17
    {name: "Louisiana"}, //id	18
    {name: "Maine"}, //id	19
    {name: "Maryland"}, //id	20
    {name: "Massachusetts"}, //id	21
    {name: "Michigan"}, //id	22
    {name: "Minnesota"}, //id	23
    {name: "Mississippi"}, //id	24
    {name: "Missouri"}, //id	25
    {name: "Montana"}, //id	26
    {name: "Nebraska"}, //id	27
    {name: "Nevada"}, //id	28
    {name: "New Hampshire"}, //id	29
    {name: "New Jersey"}, //id	30
    {name: "New Mexico"}, //id	31
    {name: "New York"}, //id	32
    {name: "North Carolina"}, //id	33
    {name: "North Dakota"}, //id	34
    {name: "Ohio"}, //id	35
    {name: "Oklahoma"}, //id	36
    {name: "Oregon"}, //id	37
    {name: "Pennsylvania"}, //id	38
    {name: "Rhode Island"}, //id	39
    {name: "South Carolina"}, //id	40
    {name: "South Dakota"}, //id	41
    {name: "Tennessee"}, //id	42
    {name: "Texas"}, //id	43
    {name: "Utah"}, //id	44
    {name: "Vermont"}, //id	45
    {name: "Virginia"}, //id	46
    {name: "Washington"}, //id	47
    {name: "West Virginia"}, //id	48
    {name: "Wisconsin"}, //id	49
    {name: "Wyoming"} //id	50
  ])
  await knex("parks").insert([
    {
      name: "Cedar Point",
      chains_id: 1,
      states_id: 35,
      countries_id: 1
    },
    {
      name: "Six Flags Great Adventure",
      chains_id: 2,
      states_id: 30,
      countries_id: 1
    },
    {
      name: "Busch Gardens Tampa",
      chains_id: 4,
      states_id: 9,
      countries_id: 1
    },
    {
      name: "Alton Towers",
      chains_id: 7,
      countries_id: 2
    },
    {
      name: "Dollywood",
      chains_id: 3,
      states_id: 42,
      countries_id: 1
    },
    {
      name: "Disneyland",
      chains_id: 6,
      states_id: 5,
      countries_id: 1
    },
    {
      name: "Universal Hollywood",
      chains_id: 5,
      states_id: 5,
      countries_id: 1
    }
  ])
  await knex("manufacturers").insert([
    {name: "Chance Rides"}, //id	1
    {name: "Chance Morgan"}, //id	2
    {name: "DH Morgan"}, //id	3
    {name: "Dynamic Attractions"}, //id	4
    {name: "Funtime"}, //id	5
    {name: "Gerstlauer"}, //id	6
    {name: "Giovanola"}, //id	7
    {name: "Allan Herschell"}, //id	8
    {name: "Hopkins"}, //id	9
    {name: "Fabbri"}, //id	10
    {name: "HUSS"}, //id	11
    {name: "S&S"}, //id	12
    {name: "Sally"}, //id	13
    {name: "Zamperla"}, //id	14
    {name: "Intamin"}, //id	15
    {name: "Kumbak"}, //id	16
    {name: "Mack"}, //id	17
    {name: "John A Miller"}, //id	18
    {name: "Mondial"}, //id	19
    {name: "Moser's"}, //id	20
    {name: "Philadelphia Tobggan Coasters"}, //id	21
    {name: "Reverchon"}, //id	22
    {name: "Wisdom Rides"}, //id	23
    {name: "Vekoma"}, //id	24
    {name: "Walt Disney Imagineering"}, //id	25
    {name: "Zierer"}, //id	26
    {name: "Arrow"}, //id	27
    {name: "ART Engineering"}, //id	28
    {name: "Bolliger & Mabillard"}, //id	29
    {name: "Custom Coasters International"}, //id	30
    {name: "Dinn Rides"}, //id	31
    {name: "E&F Miler"}, //id	32
    {name: "Great Coasters International"}, //id	33
    {name: "Gravity Group"}, //id	34
    {name: "Martin & Vleminckx"}, //id	35
    {name: "Maurer"}, //id	36
    {name: "Miler"}, //id	37
    {name: "Pax"}, //id	38
    {name: "Pinfari"}, //id	39
    {name: "Premier"}, //id	40
    {name: "Rocky Mountain Construction"}, //id	41
    {name: "Roller Coaster Corporation of America"}, //id	42
    {name: "SBF Visa"}, //id	43
    {name: "Schwarzkopf"}, //id	44
    {name: "Wiegand"}, //id	45
    {name: "Jinma"}, //id	46
    {name: "Skyline"}, //id	47
    {name: "In-House"} //id	48
  ]);
  await knex("ride_types").insert([
    {ride_type: "Rollercoaster"}, 
    {ride_type: "Thrill Ride"}, 
    {ride_type: "Family Ride"},     
    {ride_type: "Kiddie Ride"}, 
    {ride_type: "Flat Ride"}, 
    {ride_type: "Water Ride"}, 
    {ride_type: "Dark Ride"}, 
    {ride_type: "Show"}, 
    {ride_type: "Dining Experience"}
  ]);
  await knex("rides").insert([
    { 
      name: "Steel Vengeance",
      manufacturers_id: 41,
      duration: 150,
      track_length: 5740,
      inversions: 4,
      drop_height: 200,
      parks_id: 1
    },
    { 
      name: "Maverick",
      manufacturers_id: 15,
      duration: 150,
      track_length: 4450,
      inversions: 2,
      drop_height: 100,
      parks_id: 1
    },
    { 
      name: "Top Thrill Dragster",
      manufacturers_id: 15,
      duration: 30,
      track_length: 2800,
      inversions: 0,
      drop_height: 400,
      parks_id: 1
    },
    { 
      name: "Top Thrill 2",
      manufacturers_id: 14,
      duration: 120,
      track_length: 3422,
      inversions: 0,
      drop_height: 400,
      parks_id: 1
    },
    {
      name: "Millennium Force",
      manufacturers_id: 15,
      duration: 100,
      track_length: 6595,
      inversions: 0,
      drop_height: 300,
      parks_id: 1
    },
    {
      name: "Valravn",
      manufacturers_id: 29,
      duration: 143,
      track_length: 3415,
      inversions: 3,
      drop_height: 214,
      parks_id: 1
    },
    {
      name: "Gatekeeper",
      manufacturers_id: 29,
      duration: 160,
      track_length: 4164,
      inversions: 6,
      drop_height: 164,
      parks_id: 1
    },
    {
      name: "Raptor",
      manufacturers_id: 29,
      duration: 136,
      track_length: 3790,
      inversions: 6,
      drop_height: 119,
      parks_id: 1
    },
    {
      name: "Rougarou",
      manufacturers_id: 29,
      duration: 160,
      track_length: 3900,
      inversions: 4,
      drop_height: 137,
      parks_id: 1
    },
    {
      name: "Magnum XL-200",
      manufacturers_id: 27,
      duration: 120,
      track_length: 5106,
      inversions: 0,
      drop_height: 194.7,
      parks_id: 1
    },
    {
      name: "Gemini",
      manufacturers_id: 27,
      duration: 140,
      track_length: 3935,
      inversions: 0,
      drop_height: 118,
      parks_id: 1
    },
    {
      name: "Blue Streak",
      manufacturers_id: 21,
      duration: 105,
      track_length: 2558,
      inversions: 0,
      drop_height: 72,
      parks_id: 1
    },
    {
      name: "Cedar Creek Mine Ride",
      manufacturers_id: 27,
      duration: 162,
      track_length: 2540,
      inversions: 0,
      parks_id: 1
    },
    {
      name: "Corkscrew",
      manufacturers_id: 27,
      duration: 120,
      track_length: 2050,
      inversions: 3,
      parks_id: 1
    },
    {
      name: "Iron Dragon",
      manufacturers_id: 27,
      duration: 120,
      track_length: 2800,
      inversions: 0,
      parks_id: 1
    },
    {
      name: "Wild Mouse",
      manufacturers_id: 14,
      duration: 70,
      track_length: 1312,
      inversions: 0,
      parks_id: 1
    },
    {
      name: "Wilderness Run",
      manufacturers_id: 15,
      duration: 50,
      track_length: 443,
      inversions: 0,
      parks_id: 1
    },
    {
      name: "Woodstock Express",
      manufacturers_id: 24,
      duration: 66,
      track_length: 1099,
      inversions: 0,
      parks_id: 1
    },
    {
      name: "4x4's",
      inversions: 0,
      parks_id: 1
    },
    {
      name: "Atomic Scrambler",
      inversions: 0,
      parks_id: 1
    },
    {
      name: "Cadillac Cars",
      inversions: 0,
      parks_id: 1
    },
    {
      name: "Cedar Point and Lake Erie Railroad",
      inversions: 0,
      parks_id: 1
    },
    {
      name: "MaxAir",
      manufacturers_id: 11,
      inversions: 0,
      parks_id: 1
    },
    {
      name: "Power Tower",
      manufacturers_id: 12,
      inversions: 0,
      parks_id: 1
    },    
    {
      name: "Skyhawk",
      manufacturers_id: 12,
      inversions: 0,
      parks_id: 1
    },
  ])
  await knex("rides_ride_types").insert([
    {
      ride_types_id: 1,
      rides_id: 1
    },
    {
      ride_types_id: 2,
      rides_id: 1
    },
    {
      ride_types_id: 1,
      rides_id: 2
    },
    {
      ride_types_id: 2,
      rides_id: 2
    },
    {
      rides_id: 3,
      ride_types_id: 1
    },
    {
      rides_id: 3,
      ride_types_id: 2
    },
    {
      rides_id: 4,
      ride_types_id: 1
    },
    {
      rides_id: 4,
      ride_types_id: 2
    },
    {
      rides_id: 5,
      ride_types_id: 1
    },
    {
      rides_id: 5,
      ride_types_id: 2
    },
    {
      rides_id: 6,
      ride_types_id: 1
    },
    {
      rides_id: 6,
      ride_types_id: 2
    },
    {
      rides_id: 7,
      ride_types_id: 1
    },
    {
      rides_id: 7,
      ride_types_id: 2
    },
    {
      rides_id: 8,
      ride_types_id: 1
    },
    {
      rides_id: 8,
      ride_types_id: 2
    },
    {
      rides_id: 9,
      ride_types_id: 1
    },
    {
      rides_id: 9,
      ride_types_id: 2
    },
    {
      rides_id: 10,
      ride_types_id: 1
    },
    {
      rides_id: 10,
      ride_types_id: 2
    },
    {
      rides_id: 11,
      ride_types_id: 1
    },
    {
      rides_id: 11,
      ride_types_id: 2
    },
    {
      rides_id: 11,
      ride_types_id: 3
    },
    {
      rides_id: 12,
      ride_types_id: 1
    },
    {
      rides_id: 12,
      ride_types_id: 2
    },
    {
      rides_id: 12,
      ride_types_id: 3
    },
    {
      rides_id: 13,
      ride_types_id: 1
    },
    {
      rides_id: 13,
      ride_types_id: 3
    },
    {
      rides_id: 14,
      ride_types_id: 1
    },
    {
      rides_id: 14,
      ride_types_id: 2
    },
    {
      rides_id: 15,
      ride_types_id: 1
    },
    {
      rides_id: 15,
      ride_types_id: 3
    },
    {
      rides_id: 16,
      ride_types_id: 1
    },
    {
      rides_id: 16,
      ride_types_id: 3
    },
    {
      rides_id: 17,
      ride_types_id: 1
    },
    {
      rides_id: 17,
      ride_types_id: 4
    },
    {
      rides_id: 18,
      ride_types_id: 1
    },
    {
      rides_id: 18,
      ride_types_id: 3
    },
    {
      rides_id: 18,
      ride_types_id: 4
    },
    {
      rides_id: 19,
      ride_types_id: 4
    },
    {
      rides_id: 20,
      ride_types_id: 5
    },
    {
      rides_id: 21,
      ride_types_id: 3
    },
    {
      rides_id: 22,
      ride_types_id: 3
    },
    {
      rides_id: 23,
      ride_types_id: 2
    },
    {
      rides_id: 24,
      ride_types_id: 2
    },
    {
      rides_id: 25,
      ride_types_id: 2
    }    
  ])
};
