import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardItem } from '../card-item/card-item.component';

export class CardMenu {
  public menu: string;
  public selected: boolean;
  public itens: Array<CardItem>;
}

@Component({
  selector: 'card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.css']
})

export class CardMenuComponent {

  private _listMenu: Array<CardMenu>;

  @Output() public menuSelected: EventEmitter<Array<CardItem>> = new EventEmitter();

  @Input() public set listMenu(value: Array<CardMenu>) {
    this.menuSelected.emit(value[0].itens);
    this._listMenu = value;
  }

  public get listMenu(): Array<CardMenu> {
    return this._listMenu;
  }

  public selectCard(index: number): void {
    this.listMenu.forEach((card, i) => {
      card.selected = i === index ? true : false;
    });
    this.menuSelected.emit(this.listMenu[index].itens);
  }

  public selectedCard(index: number): boolean {
    return this.listMenu[index].selected;
  }

}
