import { CardItem } from "./card-item.model";

export class MenuSelected {
    public itens: Array<CardItem>;
    public title: boolean;

    constructor(
        itens: Array<CardItem>,
        title: boolean
    ) {
        this.itens = itens;
        this.title = title;
    }
}