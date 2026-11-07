import { Module } from '@nestjs/common';
import { NavigationController } from './navigation.controller.js';

@Module({
  controllers: [NavigationController],
})
export class NavigationModule {}
