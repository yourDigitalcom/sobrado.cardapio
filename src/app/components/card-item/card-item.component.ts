import { Component, Input, OnInit } from '@angular/core';

export class CardItem {
  public img: string;
  public description: string;
  public value: number;
  public title?: string;
}

@Component({
  selector: 'card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})

export class CardItemComponent {

  private _item: CardItem;

  @Input() public set item(value: CardItem) {
    this._item = value;
  }

  public get item(): CardItem {
    return this._item;
  }

}
