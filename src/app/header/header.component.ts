import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() downscale2:boolean = true;
  @Input() isAbsolute:boolean;

  constructor(router: Router) {
    router.events.subscribe((event:any) =>{
      if(this.isAbsolute===undefined){
        this.isAbsolute=event.url !=='/' && event!==undefined
      }
      console.log(event)

    });

  }

  ngOnInit() {
  }

}
