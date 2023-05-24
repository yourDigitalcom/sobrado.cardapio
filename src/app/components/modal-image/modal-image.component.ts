import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.css']
})

export class ModalImageComponent {

  private _image: string;

  @Input() public set image(value: string) {
    this._image = value;
  }

  public get image(): string {
    return this._image;
  }

  private 

}
