-- CreateTable
CREATE TABLE "device" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "device_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sensor" (
    "id" SERIAL NOT NULL,
    "device_id" INTEGER NOT NULL,

    CONSTRAINT "sensor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sensor_data" (
    "sensor_id" INTEGER NOT NULL,
    "unit_id" INTEGER NOT NULL,
    "value" VARCHAR(100) NOT NULL,
    "timestmp" TIMESTAMPTZ(6) NOT NULL
);

-- CreateTable
CREATE TABLE "unit" (
    "id" SERIAL NOT NULL,
    "type" VARCHAR(50) NOT NULL,

    CONSTRAINT "unit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sensor_data_sensor_id_timestmp_key" ON "sensor_data"("sensor_id", "timestmp");

-- AddForeignKey
ALTER TABLE "sensor" ADD CONSTRAINT "sensor_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "device"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sensor_data" ADD CONSTRAINT "sensor_data_sensor_id_fkey" FOREIGN KEY ("sensor_id") REFERENCES "sensor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sensor_data" ADD CONSTRAINT "sensor_data_unit_id_fkey" FOREIGN KEY ("unit_id") REFERENCES "unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
