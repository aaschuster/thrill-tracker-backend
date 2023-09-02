/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema
        .createTable("parks-main", table => {
            table.increments("park-main-id");
            table.string("name")
                .notNullable();
            table.string("chain");
            table.string("state");
            table.string("country");
        })
        .createTable("rides-main", table => {
            table.increments("rides-main-id");
            table.string("name");
            table.integer("manufacturers-main-id")
                .unsigned()
                .references("manufacturers-main-id")
                .inTable("manufacturers-main")
                .onDelete("RESTRICT")
                .onUpdate("RESTRICT");
            table.integer("duration")
                .unsigned()
            table.decimal("track-length")
                .unsigned()
            table.integer("inversions")
                .unsigned()
            table.decimal("drop-height")
                .unsigned()
        })
        .createTable("rides-ride-types", table => {
            table.increments("rides-ride-types");
            table.integer("ride-types-id")
                .unsigned()
                .notNullable()
                .references("ride-types-id")
                .inTable("ride-types")
                .onDelete("RESTRICT")
                .onUpdate("RESTRICT");
            table.integer("rides-main-id")
                .unsigned()
                .references("rides-main-id")
                .inTable("rides-main")
                .onDelete("RESTRICT")
                .onUpdate("RESTRICT");
            table.integer("rides-custom-id")
                .unsigned()
                .references("rides-custom-id")
                .inTable("rides-custom")
                .onDelete("RESTRICT")
                .onUpdate("RESTRICT");                                
        })
        .createTable("ride-types", table => {
            table.increments("ride-types-id");                        
        })
        .createTable("manufacturers-main", table => {
            table.increments("manufacturers-main-id");
        })
        .createTable("parks-custom", table => {
            table.increments("parks-custom-id");
        })
        .createTable("rides-custom", table => {
            table.increments("rides-custom-id");
        })
        .createTable("manufactuers-custom", table => {
            table.increments("manufactuers-custom-id");
        })
        .createTable("history", table => {
            table.increments("history-id");
        })  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists("parks-main")
    .dropTableIfExists("rides-main")
    .dropTableIfExists("rides-ride-types")
    .dropTableIfExists("ride-types")
    .dropTableIfExists("manufacturers-main")
    .dropTableIfExists("parks-custom")
    .dropTableIfExists("rides-custom")
    .dropTableIfExists("manufactuers-custom")
    .dropTableIfExists("history");  
};
