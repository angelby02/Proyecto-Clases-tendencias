import { MiddlewareConsumer, Module, NestModule, RequestMethod, } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeviceModule } from './device/device.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeviceEntity } from './device/device.entity';
@Module({
  imports: [DeviceModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'luis',
      password: '1234',
      database: 'tap',
      entities: [DeviceEntity],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer):any{
    consumer.apply(VerifyDeviceMiddleware)
            .forRoutes(
              {path:'*', method: RequestMethod.POST}
            )
  }
  

}
