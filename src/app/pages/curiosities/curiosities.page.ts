import { Component, OnInit } from '@angular/core';
import { ProvService } from 'src/app/services/prov.service';

@Component({
  selector: 'app-curiosities',
  templateUrl: './curiosities.page.html',
  styleUrls: ['./curiosities.page.scss'],
})
export class CuriositiesPage implements OnInit {

  constructor(private prov: ProvService) { }

  ngOnInit() {
  }

}
