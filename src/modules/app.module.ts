import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RepositoryEntity } from 'src/entities/repository.entity';
import { User } from 'src/entities/user.entity';
import { ormConfig } from '../config/ormconfig';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { DataModule } from './data.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }),
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: ormConfig.host,
    port: Number(ormConfig.port),
    username: ormConfig.username,
    password: ormConfig.password,
    migrations: ormConfig.migrations,
    entities: ormConfig.entities,
    synchronize: false,
    database: ormConfig.database,
  }), TypeOrmModule.forFeature([User, RepositoryEntity]), DataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
