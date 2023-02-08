import { Component, Input, OnInit } from '@angular/core';

export class CardItem {
  public img: string;
  public description: string;
  public value: number;
}

@Component({
  selector: 'card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.css']
})

export class CardMenuComponent {

  private _item: CardItem;

  @Input() public set item(value: CardItem) {
    this._item = value;
  }

  public get item(): CardItem {
    return this._item;
  }

}
