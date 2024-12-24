import { Injectable } from '@nestjs/common';
export interface budgets{
  id?:number,
  name:string,
  price:string
}

export type optional_budget=Partial<budgets>


@Injectable()
export class AppService {
  budget: budgets[]=[]

  getHello(): budgets[]|string {
    if(this.budget.length>=1){
      return this.budget;
    }
    return "Budgetlar topilmadi"
  }

  getByid(id:number):budgets[]|string{
    const result=this.budget.find((item)=>item.id===id)
    if(!result){
      return "Budgetlar topilmadi"
    }
    return [result]
  }

  create(createdata:budgets):string{
      const id=this.budget.length+1
      const result=this.budget.push({id,...createdata})
      return "Budget yaratildi"
  }

  update(updatedata:optional_budget,id:number):string{
    for(let i=0;i<this.budget.length;i++){
      if(this.budget[i].id==id){
        this.budget[i].name=updatedata.name
        this.budget[i].price=updatedata.price
      }
    }
    return "Budget yangilandi"
  }

  deletedata(id:number):string{
    const result=this.budget.filter((item)=>item.id!==id)
    this.budget=result
    return "Budget o'chirildi"
  }

}
