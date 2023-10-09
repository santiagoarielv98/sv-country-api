import { Module } from '@nestjs/common';
import { CountriesModule } from './countries/countries.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [CountriesModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
