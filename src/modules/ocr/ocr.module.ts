import { Module } from '@nestjs/common';
import { OcrController } from './ocr.controller.js';

@Module({
  controllers: [OcrController],
})
export class OcrModule {}
