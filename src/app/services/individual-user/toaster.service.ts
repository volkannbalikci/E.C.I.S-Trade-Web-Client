import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  constructor(private toastr: ToastrService) { }
  message(message: string, title: string, toastrOptions: Partial<ToastrOptions>){
    this.toastr[toastrOptions.messageType](message, title, {positionClass: toastrOptions.position});
  }
}

export class ToastrOptions{
  messageType: ToastrMessageType;
  position: ToastrPositionType;
}

export enum ToastrMessageType{
  Success = "success",
  Info = "info",
  Warning = "warning",
  Error = "error"
}

export enum ToastrPositionType{
  TopRight = "toast-top-right",
  BottomRight = "toast-bottom-right",
  BottomLeft = "toast-bottom-left",
  TopLeft = "toast-top-left",
  TopFullWitdh= "toast-top-full-witdh",
  BottomFullWitdh= "toast-bottom-full-Witdh",
  TopCenter = "toast-top-center",
  BottomCenter = "toast-bottom-center"
}
