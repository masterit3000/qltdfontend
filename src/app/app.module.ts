import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { CamDoComponent } from './cam-do/cam-do.component';
import { CamDoNewComponent } from './cam-do/cam-do-new/cam-do-new.component';
import { VaylaiComponent } from './vaylai/vaylai.component';
import { BatHoComponent } from './bat-ho/bat-ho.component';
import { DanhSachKhachHangComponent } from './danh-sach-khach-hang/danh-sach-khach-hang.component';
import { KhachCanVayComponent } from './khach-can-vay/khach-can-vay.component';
import { CheckThongTinKhachHangComponent } from './check-thong-tin-khach-hang/check-thong-tin-khach-hang.component';
import { TongQuatChuoiCuaHangComponent } from './tong-quat-chuoi-cua-hang/tong-quat-chuoi-cua-hang.component';
import { ThongTinChiTietCuaHangComponent } from './thong-tin-chi-tiet-cua-hang/thong-tin-chi-tiet-cua-hang.component';
import { DanhSachCuaHangComponent } from './danh-sach-cua-hang/danh-sach-cua-hang.component';
import { CauHinhHangHoaComponent } from './cau-hinh-hang-hoa/cau-hinh-hang-hoa.component';
import { NhapTienQuyDauNgayComponent } from './nhap-tien-quy-dau-ngay/nhap-tien-quy-dau-ngay.component';
import { ChiHoatDongComponent } from './chi-hoat-dong/chi-hoat-dong.component';
import { ThuHoatDongComponent } from './thu-hoat-dong/thu-hoat-dong.component';
import { QuanLyNguonVonComponent } from './quan-ly-nguon-von/quan-ly-nguon-von.component';
import { DanhSachNhanVienComponent } from './danh-sach-nhan-vien/danh-sach-nhan-vien.component';
import { PhanQuyenNhanVienComponent } from './phan-quyen-nhan-vien/phan-quyen-nhan-vien.component';
import { ThuTienVayLaiComponent } from './thu-tien-vay-lai/thu-tien-vay-lai.component';
import { ThuTienHoComponent } from './thu-tien-ho/thu-tien-ho.component';
import { SoQuyTienMatComponent } from './so-quy-tien-mat/so-quy-tien-mat.component';
import { TongKetGiaoDichComponent } from './tong-ket-giao-dich/tong-ket-giao-dich.component';
import { TongKetLoiNhuanComponent } from './tong-ket-loi-nhuan/tong-ket-loi-nhuan.component';
import { ChiTietTienLaiComponent } from './chi-tiet-tien-lai/chi-tiet-tien-lai.component';
import { BaoCaoDangChoVayComponent } from './bao-cao-dang-cho-vay/bao-cao-dang-cho-vay.component';
import { BaoCaoHangChoThanhLyComponent } from './bao-cao-hang-cho-thanh-ly/bao-cao-hang-cho-thanh-ly.component';
import { BaoCaoChuocDoDongHopDongComponent } from './bao-cao-chuoc-do-dong-hop-dong/bao-cao-chuoc-do-dong-hop-dong.component';
import { BaoCaoThanhLyDoComponent } from './bao-cao-thanh-ly-do/bao-cao-thanh-ly-do.component';
import { BaoCaoHopDongDaXoaComponent } from './bao-cao-hop-dong-da-xoa/bao-cao-hop-dong-da-xoa.component';
import { BaoCaoTinNhanComponent } from './bao-cao-tin-nhan/bao-cao-tin-nhan.component';
import { BanGiaoCaComponent } from './ban-giao-ca/ban-giao-ca.component';
import { DongTienTheoNgayComponent } from './dong-tien-theo-ngay/dong-tien-theo-ngay.component';
import { CamDoChucNangComponent } from './cam-do/cam-do-chuc-nang/cam-do-chuc-nang.component';
import { BatHoNewComponent } from './bat-ho/bat-ho-new/bat-ho-new.component';
import { VaylaiNewComponent } from './vaylai/vaylai-new/vaylai-new.component';
import { BatHoChucNangComponent } from './bat-ho/bat-ho-chuc-nang/bat-ho-chuc-nang.component';
import { VaylaiChucNangComponent } from './vaylai/vaylai-chuc-nang/vaylai-chuc-nang.component';
import { BatHoLichDongTienComponent } from './bat-ho/bat-ho-chuc-nang/bat-ho-lich-dong-tien/bat-ho-lich-dong-tien.component';
import { BatHoDongHopDongComponent } from './bat-ho/bat-ho-chuc-nang/bat-ho-dong-hop-dong/bat-ho-dong-hop-dong.component';
import { BatHoNoComponent } from './bat-ho/bat-ho-chuc-nang/bat-ho-no/bat-ho-no.component';
import { BatHoLichSuComponent } from './bat-ho/bat-ho-chuc-nang/bat-ho-lich-su/bat-ho-lich-su.component';
import { BatHoDaoHoComponent } from './bat-ho/bat-ho-chuc-nang/bat-ho-dao-ho/bat-ho-dao-ho.component';
import { BatHoHenGioComponent } from './bat-ho/bat-ho-chuc-nang/bat-ho-hen-gio/bat-ho-hen-gio.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    CamDoComponent,
    VaylaiComponent,
    BatHoComponent,
    DanhSachKhachHangComponent,
    KhachCanVayComponent,
    CheckThongTinKhachHangComponent,
    TongQuatChuoiCuaHangComponent,
    ThongTinChiTietCuaHangComponent,
    DanhSachCuaHangComponent,
    CauHinhHangHoaComponent,
    NhapTienQuyDauNgayComponent,
    ChiHoatDongComponent,
    ThuHoatDongComponent,
    QuanLyNguonVonComponent,
    DanhSachNhanVienComponent,
    PhanQuyenNhanVienComponent,
    ThuTienVayLaiComponent,
    ThuTienHoComponent,
    SoQuyTienMatComponent,
    TongKetGiaoDichComponent,
    TongKetLoiNhuanComponent,
    ChiTietTienLaiComponent,
    BaoCaoDangChoVayComponent,
    BaoCaoHangChoThanhLyComponent,
    BaoCaoChuocDoDongHopDongComponent,
    BaoCaoThanhLyDoComponent,
    BaoCaoHopDongDaXoaComponent,
    BaoCaoTinNhanComponent,
    BanGiaoCaComponent,
    DongTienTheoNgayComponent,
    CamDoNewComponent,
    CamDoChucNangComponent,
    BatHoNewComponent,
    VaylaiNewComponent,
    BatHoChucNangComponent,
    VaylaiChucNangComponent,
    BatHoLichDongTienComponent,
    BatHoDongHopDongComponent,
    BatHoNoComponent,
    BatHoLichSuComponent,
    BatHoDaoHoComponent,
    BatHoHenGioComponent,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
