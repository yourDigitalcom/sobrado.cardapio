import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../services/utils/util.service';
import { listaCardapios } from '../../mocks/listaDeCardapio.mock';
import { CardMenu } from '../../models/card-menu.model';
import { CardItem } from '../../models/card-item.model';
import { MenuSelected } from '../../models/menu-selected.model';

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

  public extend: boolean = false;

  public subMenuSelected: CardItem;

  constructor(
    private readonly util: UtilService
  ) { }

  ngOnInit(): void {
  }

  public receiverClick(product: string): void {
    const route = product;
    this.util.goToPage(route);
  }

  public menuSelected(selected: CardItem): void {

    // console.log('listMenu', this.listMenu);
    
    console.log('menuSelected', selected);

    this.subMenuSelected = selected;
    
    // this.extend = selected.title;
    // this.listItems = selected.itens;
    
  }

}

