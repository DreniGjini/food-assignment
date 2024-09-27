import { Resolver, Query, Args } from '@nestjs/graphql';
import { SmartSearchService } from './smart-search.service';
import { SmartSearch } from './entities/smart-search.entity';

@Resolver(() => SmartSearch)
export class SmartSearchResolver {
  constructor(private readonly searchService: SmartSearchService) {}

  @Query(() => [SmartSearch], { name: 'smartSearch' })
  async search(
    @Args('searchTerm', { type: () => String }) searchTerm: string,
  ): Promise<SmartSearch[]> {
    return this.searchService.extractEntities(searchTerm);
  }
}
