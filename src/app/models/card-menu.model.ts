import { CardItem } from "./card-item.model";

export class CardMenu {
    public menu: string;
    public selected: boolean;
    public itens: Array<CardItem>;
    public title?: string;
  }