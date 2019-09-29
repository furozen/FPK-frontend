import { Component } from '@angular/core';
import {DataBusService} from './data/data-bus.service';
import {DataTransportService} from './data/data-transport.service';
import {SocketService} from './data/socket/socket.service';
import {DataRoute, IDataBusMessage, IIDClass} from './interfaces';
import uuid from 'uuid/v4';
import {createLogger, ILogger} from './utils/Logger';
import {AppModel} from './AppModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements IIDClass {
  readonly ID: string = 'AppComponent';
  private logger: ILogger = createLogger(this.ID);


  sessionId: string;

  constructor(
    private dataBusService: DataBusService,
    private dataTransportService: DataTransportService,
    private socketService: SocketService
  ) {
    this.sessionId = uuid();
  }

  async ngOnInit() {
    await this.dataTransportService.initIoConnection();
    this.logger.log('Send Handshake');
    const message: IDataBusMessage = {
      id:"Handshake",
      route:DataRoute.Outward,
      sessionId:this.sessionId,
      data:{}
    };
    this.dataBusService.send(message);
    AppModel.sessionId = this.sessionId;
    this.socketService.setSession(this.sessionId);
  }

}
