import { Injectable } from '@angular/core';
import {DataTransportService, IMessages} from './data/data-transport.service';
import {filter} from 'rxjs/operators';
import {IIDClass} from './interfaces';
import {createLogger, ILogger} from './utils/Logger';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService implements IIDClass {
  ID: string = 'DataTransportService';
  logger: ILogger = createLogger(this.ID);

  private results:Subject<any> = new Subject<any>();
  results$ = this.results.asObservable();


  constructor(
    private dataTransportService:DataTransportService
  ) {

    this.dataTransportService.dataSubject$.pipe(filter(message => message.id==="search-result")).subscribe(this.searchHandler)

  }

  searchHandler = (message:IMessages) =>{
    this.results.next(message.data);
  }

}
