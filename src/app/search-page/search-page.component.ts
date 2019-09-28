import { Component, OnInit } from '@angular/core';
import {DataBusService} from '../data/data-bus.service';
import {DataRoute, IDataBusMessage} from '../interfaces';
import {AppModel} from '../AppModel';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-searh-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit{

  constructor(
    private  databusService:DataBusService,
    private searchService:SearchService
  ) {


  }

  results:any[];

  search(){
    const message:IDataBusMessage ={
      id: "search",
      sessionId: AppModel.sessionId,
      route: DataRoute.Outward,
      data:{},
    };


    this.databusService.send(message);

  }

  ngOnInit(): void {
    this.searchService.results$.subscribe((data)=>{
      this.results = data;
    })
  }

}
