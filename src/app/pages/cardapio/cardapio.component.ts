import { Component, OnInit } from '@angular/core';
import { CardMenu } from '../../components/card-menu/card-menu.component';
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

  public listMenu: Array<CardMenu> = [
    {
      menu: 'Sessão Rosh',
      selected: true,
      itens: [
        {
          img: '/assets/images/cervejas/corona-330.jpg',
          description: 'Rosh',
          value: 15
        },
        {
          img: '/assets/images/cervejas/stella-330.jpg',
          description: 'Rosh',
          value: 15
        },
        {
          img: '/assets/images/cervejas/heineken-330.jpg',
          description: 'Rosh',
          value: 15
        },
        {
          img: '/assets/images/cervejas/budweiser-330.png',
          description: 'Rosh',
          value: 15
        },
      ]
    },
    {
      menu: 'Cervejas',
      selected: false,
      itens: [
        {
          img: '/assets/images/cervejas/corona-330.jpg',
          description: 'Cerveja Corona Extra 330ml',
          value: 15
        },
        {
          img: '/assets/images/cervejas/stella-330.jpg',
          description: 'Stella Artois 330ml',
          value: 15
        },
        {
          img: '/assets/images/cervejas/heineken-330.jpg',
          description: 'Heineken 330ml',
          value: 15
        },
        {
          img: '/assets/images/cervejas/budweiser-330.png',
          description: 'Budweiser 330ml',
          value: 15
        },
      ]
    },
    {
      menu: 'Refrigerantes',
      selected: false,
      itens: [
        {
          img: '/assets/images/cervejas/corona-330.jpg',
          description: 'Cerveja Corona Extra 330ml',
          value: 15
        },
        {
          img: '/assets/images/cervejas/stella-330.jpg',
          description: 'Stella Artois 330ml',
          value: 15
        },
        {
          img: '/assets/images/cervejas/heineken-330.jpg',
          description: 'Heineken 330ml',
          value: 15
        },
        {
          img: '/assets/images/cervejas/budweiser-330.png',
          description: 'Budweiser 330ml',
          value: 15
        },
      ]
    }
  ]

  public listItems: Array<CardItem>;

  public valueTesteMoeda: number = 100.30;

  constructor(
    private readonly util: UtilService
  ) { }

  ngOnInit(): void {
  }

  public receiverClick(product: string): void {
    const route = product;
    const teste = 'teste';
    this.util.goToPage(route);
  }

  public menuSelected(items: Array<CardItem>): void {
    this.listItems = items;
  }

}

