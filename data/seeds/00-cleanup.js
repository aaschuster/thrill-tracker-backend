/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex("history").truncate();
  await knex("users").truncate();
  await knex("rides_ride_types").truncate();
  await knex("ride_types").truncate();
  await knex("rides").truncate();
  await knex("manufacturers").truncate();
  await knex("parks").truncate();
  await knex("chains").truncate();
  await knex("states").truncate();
  await knex("countries").truncate();
};
