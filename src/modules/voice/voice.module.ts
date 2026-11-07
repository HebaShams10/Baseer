import { Module } from '@nestjs/common';
import { VoiceController } from './voice.controller.js';

@Module({
  controllers: [VoiceController],
})
export class VoiceModule {}
