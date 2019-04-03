import { Component, OnInit } from '@angular/core';
import { ProvService } from 'src/app/services/prov.service';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.page.html',
  styleUrls: ['./spells.page.scss'],
})
export class SpellsPage implements OnInit {

  spells:any=[];

  constructor(private prov: ProvService) { }

  ngOnInit() {
    this.spell();
  }
  
  spell(){
    this.prov.getSpell().subscribe(
      
      data=>{ 
      let resposta = (data as any)._body;
      resposta = JSON.parse(resposta);
      this.spells = resposta;
    },
      error=>{
        console.log(error);
      }
    ).add();
  }
}
