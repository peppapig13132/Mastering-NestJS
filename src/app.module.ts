import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [CatsService],
})
export class AppModule {}
