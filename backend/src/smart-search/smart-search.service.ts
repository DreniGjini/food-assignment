import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { getPrismaResults } from './queries/prisma.queries';
import { filterSearchWords } from 'src/common/helpers/stop-words.helper';
import { generateCombinations } from 'src/common/helpers/combinations.helper';

@Injectable()
export class SmartSearchService {
  constructor(private prisma: PrismaService) {}

  async extractEntities(searchTerm: string) {
    const searchWords = filterSearchWords(searchTerm);

    if (searchWords.length === 0) {
      return [{ message: 'No matching entities found' }];
    }

    const results = await getPrismaResults(this.prisma, searchWords);
    const [cities, brands, dishTypes, diets] = results;

    const combinations = generateCombinations(
      cities,
      diets,
      dishTypes,
      brands,
      this.cleanNullValues,
    );

    return combinations.length > 0
      ? combinations
      : [{ message: 'No matching entities found' }];
  }

  cleanNullValues(entity: Record<string, any>) {
    return Object.fromEntries(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Object.entries(entity).filter(([_, value]) => value !== null),
    );
  }
}
