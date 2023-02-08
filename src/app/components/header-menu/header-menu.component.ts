import { Component, Input, OnInit } from '@angular/core';

export class CardItem {
  public img: string;
  public description: string;
  public value: number;
}

@Component({
  selector: 'header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})

export class HeaderMenuComponent {

  private _item: CardItem;

  @Input() public set item(value: CardItem) {
    this._item = value;
  }

  public get item(): CardItem {
    return this._item;
  }

}
