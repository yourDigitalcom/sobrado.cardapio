import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardItem } from '../../models/card-item.model';
import { MenuSelected } from '../../models/menu-selected.model';

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

  @Output() public menuSelected: EventEmitter<MenuSelected> = new EventEmitter();

  @Input() public set listMenu(value: Array<CardMenu>) {
    this._listMenu = value;
    this.selectCard(0);
  }

  public get listMenu(): Array<CardMenu> {
    return this._listMenu;
  }

  public selectCard(index: number): void {
    this.listMenu.forEach((card, i) => {
      card.selected = i === index ? true : false;
    });
    const itemSelected = this.listMenu[index].itens.some(value => value.title);
    this.menuSelected.emit(new MenuSelected(this.listMenu[index].itens, itemSelected));
  }

  public selectedCard(index: number): boolean {
    return this.listMenu[index].selected;
  }

}
