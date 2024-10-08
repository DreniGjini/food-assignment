/*
  Warnings:

  - You are about to drop the `Brands` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Cities` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Diets` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DishTypes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Brands";

-- DropTable
DROP TABLE "Cities";

-- DropTable
DROP TABLE "Diets";

-- DropTable
DROP TABLE "DishTypes";

-- CreateTable
CREATE TABLE "City" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Brand" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DishType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "DishType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Diet" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Diet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "City_name_key" ON "City"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Brand_name_key" ON "Brand"("name");

-- CreateIndex
CREATE UNIQUE INDEX "DishType_name_key" ON "DishType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Diet_name_key" ON "Diet"("name");
