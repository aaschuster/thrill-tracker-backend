/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex("chains").truncate();
  await knex("parks").truncate();
  await knex("rides").truncate();
  await knex("rides_ride_types").truncate();
  await knex("ride_types").truncate();
  await knex("manufacturers").truncate();
  await knex("history").truncate();
};
