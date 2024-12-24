import { Controller, Get ,Param,Put,Delete,Post,Body,ParseIntPipe} from '@nestjs/common';
import { AppService, budgets, optional_budget } from './app.service';

@Controller('budget')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll(): budgets[]|string {
    return this.appService.getHello();
  }

  @Get(':id')
  getByidcon(@Param('id',ParseIntPipe) id:number):budgets[]|string{
    return this.appService.getByid(+id)
  }

  @Post()
  createCon(@Body() createbudget:budgets):string{
    return this.appService.create(createbudget)
  }

  @Put(':id')
  updateCon(@Param('id',ParseIntPipe) id:number,@Body() createbudget:optional_budget):string{
    return this.appService.update(createbudget,id)
  }

  @Delete(':id')
  deleteCon(@Param('id',ParseIntPipe) id:number):string{
    return this.appService.deletedata(id)
  }
  
  
}
