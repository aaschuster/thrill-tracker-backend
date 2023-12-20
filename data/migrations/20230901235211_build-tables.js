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
                .notNullable()
                .unsigned()
                .references("countries_id")
                .inTable("countries")
                .onDelete("RESTRICT")
                .onUpdate("RESTRICT");
            table.integer("users_id")
                .unsigned()
                .references("users_id")
                .inTable("users")
                .onDelete("RESTRICT")
                .onUpdate("RESTRICT");
            table.boolean("maindb")
                .notNullable()
                .defaultTo(0)
            table.string("city")
                .notNullable()
            table.integer("opened")
                .unsigned()
        })
        .createTable("manufacturers", table => {
            table.increments("manufacturers_id")
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
            table.decimal("ride_height")
                .unsigned()
            table.decimal("drop_height")
                .unsigned()
            table.integer("rows")
                .unsigned()
            table.integer("seats")
                .unsigned()
            table.integer("users_id")
                .unsigned()
                .references("users_id")
                .inTable("users")
                .onDelete("RESTRICT")
                .onUpdate("RESTRICT");
            table.boolean("maindb")
                .notNullable()
                .defaultTo(0)
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
        .createTable("users", table => {
            table.increments("users_id");
            table.string("username")
                .notNullable()
                .unique();
            table.string("email")
                .unique();
            table.string("password");
            table.boolean("kmh")
                .notNullable()
                .defaultTo(0);
            table.boolean("meters")
                .notNullable()
                .defaultTo(0);
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
            table.integer("users_id")
                .unsigned()
                .notNullable()
                .references("users_id")
                .inTable("users")
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
        .createTable("user_park_favorites", table => {
            table.increments("user_park_favorites_id");
            table.integer("users_id")
                .unsigned()
                .notNullable()
                .references("users_id")
                .inTable("users")
                .onDelete("RESTRICT")
                .onUpdate("RESTRICT");
            table.integer("parks_id")
                .unsigned()
                .notNullable()
                .references("parks_id")
                .inTable("parks")
                .onDelete("RESTRICT")
                .onUpdate("RESTRICT");
        })
        .createTable("user_ride_favorites", table => {
            table.increments("user_ride_favorites_id");
            table.integer("users_id")
                .unsigned()
                .notNullable()
                .references("users_id")
                .inTable("users")
                .onDelete("RESTRICT")
                .onUpdate("RESTRICT");
            table.integer("rides_id")
                .unsigned()
                .notNullable()
                .references("rides_id")
                .inTable("rides")
                .onDelete("RESTRICT")
                .onUpdate("RESTRICT");            
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists("history")
    .dropTableIfExists("users")
    .dropTableIfExists("rides_ride_types")
    .dropTableIfExists("ride_types")
    .dropTableIfExists("rides")
    .dropTableIfExists("manufacturers")
    .dropTableIfExists("parks")
    .dropTableIfExists("chains")
    .dropTableIfExists("states")
    .dropTableIfExists("countries")
};
