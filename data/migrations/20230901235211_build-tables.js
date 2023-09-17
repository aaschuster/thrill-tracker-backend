/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema
        .createTable("countries", table => {
            table.increments("countries_id")
            table.string("name")
                .notNullable()
                .unique()
        })
        .createTable("states", table => {
            table.increments("states_id")
            table.string("name")
                .notNullable()
                .unique()
        })
        .createTable("chains", table => {
            table.increments("chains_id")
            table.string("name")
                .notNullable()
                .unique()
        })
        .createTable("parks", table => {
            table.increments("parks_id");
            table.string("name")
                .notNullable();
            table.integer("chains_id")
                .unsigned()
                .references("chains_id")
                .inTable("chains")
                .onDelete("RESTRICT")
                .onUpdate("RESTRICT");
            table.integer("states_id")
                .unsigned()
                .references("states_id")
                .inTable("states")
                .onDelete("RESTRICT")
                .onUpdate("RESTRICT");
            table.integer("countries_id")
                .unsigned()
                .references("countries_id")
                .inTable("countries")
                .onDelete("RESTRICT")
                .onUpdate("RESTRICT");
        })
        .createTable("manufacturers", table => {
            table.increments("manufacturers-id")
            table.string("name");
        })
        .createTable("rides", table => {
            table.increments("rides_id");
            table.string("name");
            table.integer("parks_id")
                .unsigned()
                .references("parks_id")
                .inTable("parks")
                .onDelete("RESTRICT")
                .onUpdate("RESTRICT");
            table.integer("manufacturers_id")
                .unsigned()
                .references("manufacturers_id")
                .inTable("manufacturers")
                .onDelete("RESTRICT")
                .onUpdate("RESTRICT");
            table.integer("duration")
                .unsigned()
            table.decimal("track_length")
                .unsigned()
            table.integer("inversions")
                .unsigned()
            table.decimal("drop_height")
                .unsigned()
            table.integer("rows")
                .unsigned()
            table.integer("seats")
                .unsigned()
        })
        .createTable("ride_types", table => {
            table.increments("ride_types_id");
            table.string("ride_type");
        })
        .createTable("rides_ride_types", table => {
            table.increments("rides_ride_types");
            table.integer("ride_types_id")
                .unsigned()
                .notNullable()
                .references("ride_types_id")
                .inTable("ride_types")
                .onDelete("RESTRICT")
                .onUpdate("RESTRICT");
            table.integer("rides_id")
                .unsigned()
                .references("rides_id")
                .inTable("rides")
                .onDelete("RESTRICT")
                .onUpdate("RESTRICT");                              
        })
        .createTable("history", table => {
            table.increments("history_id");
            table.integer("rides_id")
                .unsigned()
                .notNullable()
                .references("rides_id")
                .inTable("rides")
                .onDelete("RESTRICT")
                .onUpdate("RESTRICT");
            table.string("timestamp")
                .notNullable();        
            table.string("notes");
            table.integer("row")
                .unsigned();
            table.integer("seat")
                .unsigned();
        })  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists("history")
    .dropTableIfExists("rides_ride_types")
    .dropTableIfExists("ride_types")
    .dropTableIfExists("rides")
    .dropTableIfExists("manufacturers")
    .dropTableIfExists("parks")
    .dropTableIfExists("chains")
    .dropTableIfExists("states")
    .dropTableIfExists("countries")
};
