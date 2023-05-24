import { Component, Input, OnInit } from '@angular/core';
import { CardItem } from '../../models/card-item.model';


@Component({
  selector: 'card-item-extend',
  templateUrl: './card-item-extend.component.html',
  styleUrls: ['./card-item-extend.component.css']
})

export class CardItemExtendComponent {

  private _item: CardItem;

  @Input() public set item(value: CardItem) {
    this._item = value;
  }

  public get item(): CardItem {
    return this._item;
  }

}
