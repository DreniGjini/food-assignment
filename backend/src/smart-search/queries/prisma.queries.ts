import { PrismaService } from 'nestjs-prisma';

export async function getPrismaResults(
  prisma: PrismaService,
  searchWords: string[],
) {
  return prisma.$transaction([
    prisma.city.findMany({
      where: {
        OR: searchWords.map((word) => ({
          name: {
            contains: word,
            mode: 'insensitive',
          },
        })),
      },
    }),
    prisma.brand.findMany({
      where: {
        OR: searchWords.map((word) => ({
          name: {
            contains: word,
            mode: 'insensitive',
          },
        })),
      },
    }),
    prisma.dishType.findMany({
      where: {
        OR: searchWords.map((word) => ({
          name: {
            contains: word,
            mode: 'insensitive',
          },
        })),
      },
    }),
    prisma.diet.findMany({
      where: {
        OR: searchWords.map((word) => ({
          name: {
            contains: word,
            mode: 'insensitive',
          },
        })),
      },
    }),
  ]);
}
