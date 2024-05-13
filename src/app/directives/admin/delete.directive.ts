import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent, DeleteState } from '../../dialogs/delete-dialog/delete-dialog.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from '../../base/base.component';
import { HttpClientService } from '../../services/common/http-client.service';
import { AlertifyService, MessageType, PositionType } from '../../services/admin/alertify.service';
declare var $: any;

@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(
    private alertfy: AlertifyService,
    private spinner : NgxSpinnerService,
    private element: ElementRef,
    private _renderer: Renderer2,
    private httpClientService: HttpClientService,
    public dialog: MatDialog
  ) 
  {
      const img = _renderer.createElement("img");
      img.setAttribute("src", "../../../../../assets/delete.png");
      img.setAttribute("style", "cursor: pointer");
      img.width = 25;
      img.height = 25;
      _renderer.appendChild(element.nativeElement, img);
  }
  @Input() id: string;
  @Input() controller: string;
  @Output() callback: EventEmitter<any> = new EventEmitter();
  @HostListener("click")
  async onclick(){
    this.openDialog(async () => {
      this.spinner.show(SpinnerType.BallAtom);
      const td: HTMLTableCellElement = this.element.nativeElement;
      this.httpClientService.delete({
        controller: this.controller 
      }, this.id).subscribe(data => {
        $(td.parentElement).animate({
          opacity: 0,
          left: "+=50",
          height: "toogle"
        }, 700, () => {
          this.callback.emit();
          this.alertfy.message(`ID'si :${this.id}           Olan Kayıt Başarıyla Silinmiştir`,{messageType: MessageType.Success, position: PositionType.TopRight})
        });
      });
    });
  }

  openDialog(afterClosed: any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: DeleteState.Yes,
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == DeleteState.Yes){
        afterClosed();
      }
    });
  }
}
