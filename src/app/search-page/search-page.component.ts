import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DataBusService} from '../data/data-bus.service';
import {DataRoute, IDataBusMessage} from '../interfaces';
import {AppModel} from '../AppModel';
import {SearchService} from '../search.service';
import {EDishType, TPositionsCollection} from 'FPKFOOD-models/dist';

type dishViewType = { name: string, type?: EDishType };

@Component({
  selector: 'app-searh-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit, AfterViewInit{

  constructor(
    private  databusService:DataBusService,
    private searchService:SearchService
  ) {


  }
  filter={
    dishType:undefined,
  };


  dishTypes= [
      {name:'Все'},
      {name:'Салаты', type:EDishType.salad},
      {name:'Супы', type:EDishType.soup},
      {name:'Основное', type:EDishType.main},
      {name:'Десерты', type:EDishType.desert},
      {name:'Закуски', type:EDishType.snack},

    ]

  setDishTypeFilter(type){
    this.filter.dishType = type;
    this.search();
  }

  addItem(item){

  }

  results:Partial<TPositionsCollection>[];

  search(){
    const message:IDataBusMessage ={
      id: "search",
      sessionId: AppModel.sessionId,
      route: DataRoute.Outward,
      data:{
        filter:this.filter
      },
    };


    this.databusService.send(message);

  }

  ngOnInit(): void {

    this.searchService.results$.subscribe(
      (data)=>{
      this.results = data;
    }
    )
  }

  ngAfterViewInit(): void {
    this.search()
  }

}
