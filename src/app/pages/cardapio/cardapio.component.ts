import { Component, OnInit } from '@angular/core';
import { CardMenu } from '../../components/card-menu/card-menu.component';
import { CardItem } from '../../components/card-item/card-item.component';
import { UtilService } from '../../services/utils/util.service';
import { listaCardapios } from '../../mocks/listaDeCardapio.mock';

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

  public listMenu: Array<CardMenu> = listaCardapios;

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

