import { Component, OnInit } from '@angular/core';
import { CardItem } from '../../components/card-item/card-item.component';
import { UtilService } from '../../services/utils/util.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  public list = [
    {name:'Promoção', route:'promocao'},
    {name:'Cervejas', route:'cervejas'},
    {name:'Pingas', route:'pingas'},
    {name:'Whiskys', route:'whiskys'},
    {name:'Combos', route:'combos'},
    {name:'Águas', route:'aguas'},
    {name:'Energéticos', route:'energeticos'},
    {name:'Cooler', route:'cooler'},
  ];

  public listItems: Array<CardItem> = [
    {
      img: '/assets/images/cervejas/corona-330.jpg',
      description: 'Cerveja Corona Extra 330ml',
      value: 1340.32
    },
    {
      img: '/assets/images/cervejas/stella-330.jpg',
      description: 'Stella Artois 330ml',
      value: 1340.32
    },
    {
      img: '/assets/images/cervejas/heineken-330.jpg',
      description: 'Heineken 330ml',
      value: 1340.32
    }
  ];

  public valueTesteMoeda: number = 100.30;

  constructor(
    private readonly util: UtilService
  ) { }

  ngOnInit(): void {
  }

  public receiverClick(product: string): void {
    const route = product;
    this.util.goToPage(route);
  }

}

