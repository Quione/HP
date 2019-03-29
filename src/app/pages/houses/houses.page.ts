import { Component, OnInit } from '@angular/core';
import { ProvService } from 'src/app/services/prov.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.page.html',
  styleUrls: ['./houses.page.scss'],
})
export class HousesPage implements OnInit {

  houses:any = [];

  constructor(private prov: ProvService) { }

  ngOnInit() {
    this.house();
  }
  house(){
    this.prov.getHouse().subscribe(
      
      data=>{ 
      let resposta = (data as any)._body;
      resposta = JSON.parse(resposta);
      this.houses = resposta;
    },
      error=>{
        console.log(error);
      }
    ).add();
  }
}
