/*
  Warnings:

  - A unique constraint covering the columns `[sensor_id,unit_id,timestmp]` on the table `sensor_data` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "sensor_data_sensor_id_timestmp_key";

-- CreateIndex
CREATE UNIQUE INDEX "sensor_data_sensor_id_unit_id_timestmp_key" ON "sensor_data"("sensor_id", "unit_id", "timestmp");
