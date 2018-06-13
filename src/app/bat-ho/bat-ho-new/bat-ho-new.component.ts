import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bat-ho-new',
  templateUrl: './bat-ho-new.component.html',
  styleUrls: ['./bat-ho-new.component.scss']
})
export class BatHoNewComponent implements OnInit {

  constructor() { }

  khachang ={
    ten:"",
    diachi:"",
    cmt:"",
    dienthoai:""
  }
  themMoiKhachHang = function(){

    console.log(this.khachang);
  }
  ngOnInit() {
  }

}
