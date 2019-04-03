import { Component, OnInit } from '@angular/core';
import { ProvService } from 'src/app/services/prov.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  characters:any = [];
  private arrayCategory = ["characters"];
  private characters_name:string;

  constructor(private prov: ProvService, loadingController:LoadingController) { }

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
  async consultaCharacters(index?) {    
    // verifica se o index não está definido.
    if (typeof index === 'undefined') index = 2;

    // Define o parametro a ser passado
    let param = (typeof this.characters_name === "undefined") ? `characters/${this.arrayCategory[index]}?` : `search/characters?query=${this.characters_name}&name=`;


}
}