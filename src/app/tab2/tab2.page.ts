import { Component } from '@angular/core';
import { EndpointService } from '../service/endpoint.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  array:any;

  constructor(private endpointeervice:EndpointService) {

      this.endpointeervice.getPoint().subscribe(x=>this.array=x.motoratones)




  }




}
