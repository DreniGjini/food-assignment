import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';
import * as csvParser from 'csv-parser';

const prisma = new PrismaClient();

// Helper function to read and parse CSV file
async function readCSVFile(filePath: string): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (err) => reject(err));
  });
}

async function seed() {
  try {
    const csvFolderPath = path.join(__dirname, '..', 'csv');

    const cities = await readCSVFile(path.join(csvFolderPath, 'cities.csv'));
    for (const city of cities) {
      await prisma.city.upsert({
        where: { id: Number(city.id) },
        update: {},
        create: {
          id: Number(city.id),
          name: city.name,
        },
      });
    }

    const diets = await readCSVFile(path.join(csvFolderPath, 'diets.csv'));
    for (const diet of diets) {
      await prisma.diet.upsert({
        where: { id: Number(diet.id) },
        update: {},
        create: {
          id: Number(diet.id),
          name: diet.name,
        },
      });
    }

    const dishTypes = await readCSVFile(
      path.join(csvFolderPath, 'dish-types.csv'),
    );
    for (const dishType of dishTypes) {
      await prisma.dishType.upsert({
        where: { id: Number(dishType.id) },
        update: {},
        create: {
          id: Number(dishType.id),
          name: dishType.name,
        },
      });
    }

    const brands = await readCSVFile(path.join(csvFolderPath, 'brands.csv'));
    for (const brand of brands) {
      await prisma.brand.upsert({
        where: { id: Number(brand.id) },
        update: {},
        create: {
          id: Number(brand.id),
          name: brand.name,
        },
      });
    }

    console.log('Database seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
