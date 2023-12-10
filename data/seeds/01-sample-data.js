/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const bcrypt = require("bcryptjs");

exports.seed = async function(knex) {
  await knex("chains").insert([
    {name: "Cedar Fair"},       //id1
    {name: "Six Flags"},        //id2
    {name: "Herschend"},        //id3
    {name: "Busch-SeaWorld"},   //id4
    {name: "Universal"},        //id5
    {name: "Disney"},           //id6
    {name: "Merlin"},            //id7
    {name: "Fun Spot America"} //id8
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
      countries_id: 1,
      maindb: true,
      city: "Sandusky",
      opened: 1870
    },
    {
      name: "Six Flags Great Adventure",
      chains_id: 2,
      states_id: 30,
      countries_id: 1,
      maindb: true,
      city: "Jackson", 
      opened: 1974
    },
    {
      name: "Busch Gardens Tampa",
      chains_id: 4,
      states_id: 9,
      countries_id: 1,
      maindb: true,
      city: "Tampa",
      opened: 1959
    },
    {
      name: "Alton Towers",
      chains_id: 7,
      countries_id: 2,
      maindb: true,
      city: "Alton",
      opened: 1980
    },
    {
      name: "Dollywood",
      chains_id: 3,
      states_id: 42,
      countries_id: 1,
      maindb: true,
      city: "Pigeon Forge",
      opened: 1961
    },
    {
      name: "Disneyland",
      chains_id: 6,
      states_id: 5,
      countries_id: 1,
      maindb: true,
      city: "Anaheim",
      opened: 1955
    },
    {
      name: "Universal Studios Hollywood",
      chains_id: 5,
      states_id: 5,
      countries_id: 1,
      maindb: true,
      city: "Universal City",
      opened: 1964
    },
    {
      name: "Thorpe Park",
      chains_id: 7,
      countries_id: 2,
      maindb: true,
      city: "Chertsey",
      opened: 1979
    },
    {
      name: "SeaWorld Orlando",
      chains_id: 4,
      states_id: 9,
      countries_id: 1,
      maindb: true,
      city: "Orlando",
      opened: 1973
    },
    {
      name: "Busch Gardens Williamsburg",
      chains_id: 4,
      states_id: 46,
      countries_id: 1,
      maindb: true,
      city: "Williamsburg",
      opened: 1975
    },
    {
      name: "Silver Dollar City",
      chains_id: 3,
      states_id: 25,
      countries_id: 1,
      maindb: true,
      city: "Branson",
      opened: 1960
    },
    {
      name: "Dollywood",
      chains_id: 3,
      states_id: 42,
      countries_id: 1,
      maindb: true,
      city: "Pigeon Forge",
      opened: 1961
    },
    {
      name: "Six Flags Over Georgia",
      chains_id: 2,
      states_id: 10,
      countries_id: 1,
      maindb: true,
      city: "Austell",
      opened: 1967
    },
    {
      name: "Six Flags Over Texas",
      chains_id: 2,
      states_id: 43,
      countries_id: 1,
      maindb: true,
      city: "Arlington",
      opened: 1961
    },
    {
      name: "Six Flags Fiesta Texas",
      chains_id: 2,
      states_id: 43,
      countries_id: 1,
      maindb: true,
      city: "San Antonio",
      opened: 1992
    },
    {
      name: "Carowinds",
      chains_id: 1,
      states_id: 33,
      countries_id: 1,
      maindb: true,
      city: "Charlotte",
      opened: 1973
    },
    {
      name: "Fun Spot America Atlanta",
      chains_id: 8,
      states_id: 10,
      countries_id: 1,
      maindb: true,
      city: "Fayetteville",
      opened: 1990
    },

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
    {ride_type: "Dining Experience"},
    {ride_type: "Haunt"}
  ]);
  await knex("rides").insert([
    { 
      name: "Steel Vengeance",
      manufacturers_id: 41,
      duration: 150,
      track_length: 5740,
      inversions: 4,
      ride_height: 205,
      drop_height: 200,
      parks_id: 1,
      rows: 12,
      seats: 2,
      maindb: true
    },
    { 
      name: "Maverick",
      manufacturers_id: 15,
      duration: 150,
      track_length: 4450,
      inversions: 2,
      ride_height: 105,
      drop_height: 100,
      parks_id: 1,
      rows: 6,
      seats: 2,
      maindb: true
    },
    { 
      name: "Top Thrill Dragster",
      manufacturers_id: 15,
      duration: 30,
      track_length: 2800,
      inversions: 0,
      ride_height: 420,
      drop_height: 400,
      parks_id: 1,
      rows: 9,
      seats: 2,
      maindb: true
    },
    { 
      name: "Top Thrill 2",
      manufacturers_id: 14,
      duration: 120,
      track_length: 3422,
      inversions: 0,
      ride_height: 420,
      drop_height: 400,
      parks_id: 1,
      rows: 10,
      seats: 2,
      maindb: true
    },
    {
      name: "Millennium Force",
      manufacturers_id: 15,
      duration: 100,
      track_length: 6595,
      inversions: 0,
      ride_height: 310,
      drop_height: 300,
      parks_id: 1,
      rows: 18,
      seats: 2,
      maindb: true
    },
    {
      name: "Valravn",
      manufacturers_id: 29,
      duration: 143,
      track_length: 3415,
      inversions: 3,
      ride_height: 223,
      drop_height: 214,
      parks_id: 1,
      rows: 3,
      seats: 8,
      maindb: true
    },
    {
      name: "Gatekeeper",
      manufacturers_id: 29,
      duration: 160,
      track_length: 4164,
      inversions: 6,
      ride_height: 170,
      drop_height: 164,
      parks_id: 1,
      rows: 8,
      seats: 4,
      maindb: true
    },
    {
      name: "Raptor",
      manufacturers_id: 29,
      duration: 136,
      track_length: 3790,
      inversions: 6,
      ride_height: 137,
      drop_height: 119,
      parks_id: 1,
      rows: 8,
      seats: 4,
      maindb: true
    },
    {
      name: "Rougarou",
      manufacturers_id: 29,
      duration: 160,
      track_length: 3900,
      inversions: 4,
      ride_height: 145,
      drop_height: 137,
      parks_id: 1,
      rows: 8,
      seats: 4,
      maindb: true
    },
    {
      name: "Magnum XL-200",
      manufacturers_id: 27,
      duration: 120,
      track_length: 5106,
      inversions: 0,
      ride_height: 205,
      drop_height: 194.7,
      parks_id: 1,
      rows: 18,
      seats: 2,
      maindb: true
    },
    {
      name: "Gemini",
      manufacturers_id: 27,
      duration: 140,
      track_length: 3935,
      inversions: 0,
      ride_height: 125,
      drop_height: 118,
      parks_id: 1,
      rows: 15,
      seats: 2,
      maindb: true
    },
    {
      name: "Blue Streak",
      manufacturers_id: 21,
      duration: 105,
      track_length: 2558,
      inversions: 0,
      ride_height: 78,
      drop_height: 72,
      parks_id: 1,
      rows: 12,
      seats: 2,
      maindb: true
    },
    {
      name: "Cedar Creek Mine Ride",
      manufacturers_id: 27,
      duration: 162,
      track_length: 2540,
      inversions: 0,
      ride_height: 48,
      parks_id: 1,
      rows: 15,
      seats: 2,
      maindb: true
    },
    {
      name: "Corkscrew",
      manufacturers_id: 27,
      duration: 120,
      track_length: 2050,
      inversions: 3,
      ride_height: 85,
      parks_id: 1,
      rows: 12,
      seats: 2,
      maindb: true
    },
    {
      name: "Iron Dragon",
      manufacturers_id: 27,
      duration: 120,
      track_length: 2800,
      inversions: 0,
      ride_height: 76,
      parks_id: 1,
      rows: 14,
      seats: 2,
      maindb: true
    },
    {
      name: "Wild Mouse",
      manufacturers_id: 14,
      duration: 70,
      track_length: 1312,
      inversions: 0,
      ride_height: 52,
      parks_id: 1,
      rows: 1,
      seats: 4,
      maindb: true
    },
    {
      name: "Wilderness Run",
      manufacturers_id: 15,
      duration: 50,
      track_length: 443,
      inversions: 0,
      ride_height: 19,
      parks_id: 1,
      rows: 8,
      seats: 2,
      maindb: true
    },
    {
      name: "Woodstock Express",
      manufacturers_id: 24,
      duration: 66,
      track_length: 1099,
      inversions: 0,
      ride_height: 42.7,
      parks_id: 1,
      rows: 8,
      seats: 2,
      maindb: true
    },
    {
      name: "4x4's",
      inversions: 0,
      parks_id: 1,
      maindb: true
    },
    {
      name: "Atomic Scrambler",
      inversions: 0,
      parks_id: 1,
      maindb: true
    },
    {
      name: "Cadillac Cars",
      inversions: 0,
      parks_id: 1,
      maindb: true
    },
    {
      name: "Cedar Point and Lake Erie Railroad",
      inversions: 0,
      parks_id: 1,
      maindb: true
    },
    {
      name: "MaxAir",
      manufacturers_id: 11,
      inversions: 0,
      parks_id: 1,
      maindb: true
    },
    {
      name: "Power Tower",
      manufacturers_id: 12,
      inversions: 0,
      parks_id: 1,
      maindb: true
    },    
    {
      name: "Skyhawk",
      manufacturers_id: 12,
      inversions: 0,
      parks_id: 1,
      maindb: true
    },
    {
      name: "Kingda Ka",
      manufacturers_id: 15,
      duration: 28,
      track_length: 3118,
      inversions: 0,
      ride_height: 456,
      drop_height: 418,
      parks_id: 2,
      rows: 10,
      seats: 2,
      maindb: true
    },
    {
      name: "El Toro",
      manufacturers_id: 15,
      duration: 102,
      track_length: 4400,
      inversions: 0,
      ride_height: 181,
      drop_height: 176,
      parks_id: 2,
      rows: 18,
      seats: 2,
      maindb: true
    },
    {
      name: "Batman The Ride",
      manufacturers_id: 29,
      duration: 90,
      track_length: 2693,
      inversions: 0,
      ride_height: 105,
      parks_id: 2,
      rows: 8,
      seats: 4,
      maindb: true
    },
    {
      name: "Dark Knight",
      manufacturers_id: 17,
      duration: 120,
      track_length: 1213,
      inversions: 0,
      parks_id: 2,
      rows: 1,
      seats: 4,
      maindb: true
    },
    {
      name: "Green Lantern",
      manufacturers_id: 29,
      duration: 150,
      track_length: 4155,
      inversions: 5,
      ride_height: 154,
      drop_height: 144,
      parks_id: 2,
      rows: 7,
      seats: 4,
      maindb: true
    },
    {
      name: "Harley Quinn Crazy Train",
      manufacturers_id: 26,
      duration: 65,
      track_length: 1181.1,
      inversions: 0,
      parks_id: 2,
      rows: 20,
      seats: 2,
      maindb: true
    },
    {
      name: "Jersey Devil Coaster",
      manufacturers_id: 41,
      duration: 125,
      track_length: 3000,
      inversions: 3,
      ride_height: 130,
      parks_id: 2,
      rows: 12,
      seats: 1,
      maindb: true
    },
    {
      name: "Joker",
      manufacturers_id: 12,
      track_length: 1019,
      ride_height: 120,
      drop_height: 54,
      parks_id: 2,
      rows: 2,
      seats: 4,
      maindb: true
    },
    {
      name: "Lil' Devil Coaster",
      manufacturers_id: 14,
      duration: 40,
      track_length: 262.5,
      inversions: 0,
      parks_id: 2,
      rows: 6,
      seats: 2,
      maindb: true
    },
    {
      name: "Medusa",
      manufacturers_id: 29,
      duration: 140,
      track_length: 3985,
      inversions: 7,
      ride_height: 142,
      drop_height: 132,
      parks_id: 2,
      rows: 8,
      seats: 4,
      maindb: true
    },
    {
      name: "Nitro",
      manufacturers_id: 29,
      duration: 140,
      track_length: 5394,
      inversions: 0,
      ride_height: 230,
      drop_height: 215,
      parks_id: 2,
      rows: 9,
      seats: 4,
      maindb: true
    },
    {
      name: "Runaway Mine Train",
      manufacturers_id: 27,
      duration: 120,
      inversions: 0,
      drop_height: 39,
      parks_id: 2,
      rows: 15,
      seats: 2,
      maindb: true
    },
    {
      name: "Skull Mountain",
      manufacturers_id: 15,
      duration: 84,
      track_length: 1377,
      inversions: 0,
      drop_height: 37,
      parks_id: 2,
      rows: 14,
      seats: 2,
      maindb: true
    },
    {
      name: "Superman - Ultimate Flight",
      manufacturers_id: 29,
      duration: 126,
      track_length: 2759,
      inversions: 2,
      ride_height: 106,
      drop_height: 100,
      parks_id: 2,
      rows: 8,
      seats: 4,
      maindb: true
    },
    {
      name: "Air Jumbo",
      inversions: 0,
      parks_id: 2,
      maindb: true
    },
    {
      name: "Big Wheel",
      inversions: 0,
      parks_id: 2,
      maindb: true
    },
    {
      name: "Cyborg Cyber Spin",
      inversions: 0,
      parks_id: 2,
      maindb: true
    },
    {
      name: "Justice League: Battle for Metropilis",
      manufacturers_id: 13,
      inversions: 0,
      parks_id: 2,
      maindb: true
    },
    {
      name: "SkyScreamer",
      inversions: 0,
      parks_id: 2,
      maindb: true
    },
    {
      name: "Twister",
      inversions: 0,
      parks_id: 2,
      maindb: true
    },
    {
      name: "Wonder Woman Lasso of Truth",
      inversions: 0,
      parks_id: 2,
      maindb: true
    },
    {
      name: "Zumanjaro: Drop of Doom",
      manufacturers_id: 15,
      inversions: 0,
      parks_id: 2,
      maindb: true
    },
    {
      name: "Flash: Vertical Velocity",
      manufacturers_id: 24,
      track_length: 1430.4,
      inversions: 0,
      parks_id: 2,
      maindb: true
    },
    {
      name: "Bloodbath",
      parks_id: 1,
      maindb: true
    },
    {
      name: "Midnight",
      parks_id: 1,
      maindb: true
    },
    {
      name: "Fearground Freakshow",
      parks_id: 1,
      maindb: true
    },
    {
      name: "Slaughter House",
      parks_id: 1,
      maindb: true
    },
    {
      name: "The Haunting of Eerie Estate",
      parks_id: 1,
      maindb: true
    },
    {
      name: "Clownz: Death Metal Tour",
      parks_id: 1,
      maindb: true
    },
    {
      name: "Blood on the Bayou",
      parks_id: 1,
      maindb: true
    },
    {
      name: "CornStalkers 2.0: Revenge of the Pumpkin Heads",
      parks_id: 1,
      maindb: true
    },
    {
      name: "Cut Throat Cove",
      parks_id: 1,
      maindb: true
    },
    {
      name: "Tombstone Terror-tory",
      parks_id: 1,
      maindb: true
    }
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
    },
    {
      rides_id: 26,
      ride_types_id: 1
    },
    {
      rides_id: 26,
      ride_types_id: 2
    },
    {
      rides_id: 27,
      ride_types_id: 1
    },
    {
      rides_id: 27,
      ride_types_id: 2
    },
    {
      rides_id: 28,
      ride_types_id: 1
    },
    {
      rides_id: 28,
      ride_types_id: 2
    },
    {
      rides_id: 29,
      ride_types_id: 1
    },
    {
      rides_id: 29,
      ride_types_id: 2
    },
    {
      rides_id: 30,
      ride_types_id: 1
    },
    {
      rides_id: 30,
      ride_types_id: 2
    },                
    {
      rides_id: 31,
      ride_types_id: 1
    },                
    {
      rides_id: 31,
      ride_types_id: 3
    },    
    {
      rides_id: 31,
      ride_types_id: 4
    },
    {
      rides_id: 32,
      ride_types_id: 1
    },
    {
      rides_id: 32,
      ride_types_id: 2
    },
    {
      rides_id: 33,
      ride_types_id: 1
    },
    {
      rides_id: 33,
      ride_types_id: 2
    },
    {
      rides_id: 34,
      ride_types_id: 1
    },
    {
      rides_id: 34,
      ride_types_id: 4
    },
    {
      rides_id: 35,
      ride_types_id: 1
    },
    {
      rides_id: 35,
      ride_types_id: 2
    },
    {
      rides_id: 36,
      ride_types_id: 1
    },
    {
      rides_id: 36,
      ride_types_id: 2
    },
    {
      rides_id: 37,
      ride_types_id: 1
    },
    {
      rides_id: 37,
      ride_types_id: 3
    },
    {
      rides_id: 38,
      ride_types_id: 1
    },
    {
      rides_id: 38,
      ride_types_id: 3
    },
    {
      rides_id: 39,
      ride_types_id: 1
    },
    {
      rides_id: 39,
      ride_types_id: 2
    },
    {
      rides_id: 40,
      ride_types_id: 4
    },
    {
      rides_id: 41,
      ride_types_id: 3
    },
    {
      rides_id: 42,
      ride_types_id: 2
    },
    {
      rides_id: 43,
      ride_types_id: 7
    },
    {
      rides_id: 44,
      ride_types_id: 2
    },
    {
      rides_id: 45,
      ride_types_id: 2
    },
    {
      rides_id: 46,
      ride_types_id: 2
    },
    {
      rides_id: 47,
      ride_types_id: 2
    },
    {
      rides_id: 48,
      ride_types_id: 1
    },
    {
      rides_id: 48,
      ride_types_id: 2
    },
    {
      rides_id: 49,
      ride_types_id: 10
    },
    {
      rides_id: 50,
      ride_types_id: 10
    },
    {
      rides_id: 51,
      ride_types_id: 10
    },
    {
      rides_id: 52,
      ride_types_id: 10
    },
    {
      rides_id: 53,
      ride_types_id: 10
    },
    {
      rides_id: 54,
      ride_types_id: 10
    },
    {
      rides_id: 55,
      ride_types_id: 10
    },
    {
      rides_id: 56,
      ride_types_id: 10
    },
    {
      rides_id: 57,
      ride_types_id: 10
    },
    {
      rides_id: 58,
      ride_types_id: 10
    }
  ]),
  await knex("users").insert([
    {
      username: "jonnyeg",
      password: bcrypt.hashSync("pass", 8)
    }
  ])
  await knex("history").insert([
    {
      rides_id: 1,
      timestamp: new Date("09-03-2023, 12:00 PM").toLocaleString([], {dateStyle: "short", timeStyle: "short"}),
      notes: "Rain ride!",
      row: 12,
      seat: 1,
      users_id: 1
    },
    {
      rides_id: 26,
      timestamp: new Date("09-03-2023, 12:00 PM").toLocaleString([], {dateStyle: "short", timeStyle: "short"}),
      users_id: 1
    }
  ])
};
