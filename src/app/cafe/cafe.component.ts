import { Component, OnInit } from '@angular/core';
import { Cafe } from './cafe';
import { CafeService } from './cafe.service';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.css'],
})
export class CafeComponent implements OnInit {
  cafe: Array<Cafe> = [];
  countTypeBlend: number = 0;
  countTypeOrigen: number = 0;
  constructor(private httpCafeService: CafeService) {}

  ngOnInit() {
    this.getCafe();
  }

  getCafe() {
    this.httpCafeService.getCafe().subscribe((cafe) => {
      this.cafe = cafe;
      this.countTypeBlend = cafe.reduce((count, item) => {
        if (item.tipo === 'Blend') {
          count++;
        }
        return count;
      }, 0);
      this.countTypeOrigen = cafe.reduce((count, item) => {
        if (item.tipo === 'Café de Origen') {
          count++;
        }
        return count;
      }, 0);
    });
  }

}
