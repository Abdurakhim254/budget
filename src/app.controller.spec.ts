import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return Array or string', () => {
      const result=appController.getAll()
      const mockresult=result
      expect(result).toBe(mockresult);
    });

    it('should return get one by id',()=>{
      const id=2
      const result=appController.getByidcon(id)
      const mockresult=result
      expect(result).toBe(mockresult)
    })

    it('should return createdata',()=>{
      const data={name:'Aziz',price:78999}
      const result=appController.createCon(data)
      expect(result).toBe("Budget yaratildi")
    })

    it('should return updated info',()=>{
      const id=3
      const data={name:'Akbar'}
      const result=appController.updateCon(id,data)
      expect(result).toBe("Budget yangilandi")
    })

    it('should return deleted info',()=>{
      const id=3
      const result=appController.deleteCon(id)
      expect(result).toBe("Budget o'chirildi")
    })
  });
});
