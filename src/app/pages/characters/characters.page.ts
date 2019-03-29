import { Component, OnInit } from '@angular/core';
import { ProvService } from 'src/app/services/prov.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  characters:any = [];

  constructor(private prov: ProvService) { }

  ngOnInit() {
    this.character();
  }

  character(){
    this.prov.getCharacters().subscribe(
      
      data=>{ 
      let resposta = (data as any)._body;
      resposta = JSON.parse(resposta);
      this.characters = resposta;
    },
      error=>{
        console.log(error);
      }
    ).add();
  }
}
