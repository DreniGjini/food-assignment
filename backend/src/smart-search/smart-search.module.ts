import { Module } from '@nestjs/common';
import { SmartSearchService } from './smart-search.service';
import { SmartSearchResolver } from './smart-search.resolver';

@Module({
  providers: [SmartSearchResolver, SmartSearchService],
})
export class SmartSearchModule {}
