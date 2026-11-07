import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AuthModule } from './modules/auth/auth.module.js';
import { UsersModule } from './modules/users/users.module.js';
import { TasksModule } from './modules/tasks/tasks.module.js';
import { NavigationModule } from './modules/navigation/navigation.module.js';
import { OcrModule } from './modules/ocr/ocr.module.js';
import { VoiceModule } from './modules/voice/voice.module.js';
import { VisionModule } from './modules/vision/vision.module.js';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TasksModule,
    NavigationModule,
    OcrModule,
    VoiceModule,
    VisionModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
