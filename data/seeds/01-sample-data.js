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
    {name: "Canada"},     //id7
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
};
