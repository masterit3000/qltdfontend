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
import { ThemKhachHangComponent } from './them-khach-hang/them-khach-hang.component';
import { SuaThongTinKhachHangComponent } from './sua-thong-tin-khach-hang/sua-thong-tin-khach-hang.component';
import { ThemCuaHangComponent } from './them-cua-hang/them-cua-hang.component';
import { SuaThongTinCuaHangComponent } from './sua-thong-tin-cua-hang/sua-thong-tin-cua-hang.component';
import { ThemHangHoaComponent } from './them-hang-hoa/them-hang-hoa.component';
import { SuaHangHoaComponent } from './sua-hang-hoa/sua-hang-hoa.component';
import { CamDoDongTienLaiComponent } from './cam-do/cam-do-chuc-nang/cam-do-dong-tien-lai/cam-do-dong-tien-lai.component';
import { CamDoTraBotGocComponent } from './cam-do/cam-do-chuc-nang/cam-do-tra-bot-goc/cam-do-tra-bot-goc.component';
import { CamDoVayThemComponent } from './cam-do/cam-do-chuc-nang/cam-do-vay-them/cam-do-vay-them.component';
import { CamDoChuocDoComponent } from './cam-do/cam-do-chuc-nang/cam-do-chuoc-do/cam-do-chuoc-do.component';
import { CamDoNoComponent } from './cam-do/cam-do-chuc-nang/cam-do-no/cam-do-no.component';
import { CamDoLichSuComponent } from './cam-do/cam-do-chuc-nang/cam-do-lich-su/cam-do-lich-su.component';
import { CamDoLichSuTraChamComponent } from './cam-do/cam-do-chuc-nang/cam-do-lich-su-tra-cham/cam-do-lich-su-tra-cham.component';
import { CamDoHenGioComponent } from './cam-do/cam-do-chuc-nang/cam-do-hen-gio/cam-do-hen-gio.component';
import { CamDoThanhLyComponent } from './cam-do/cam-do-chuc-nang/cam-do-thanh-ly/cam-do-thanh-ly.component';
import { VaylaiDongLaiComponent } from './vaylai/vaylai-chuc-nang/vaylai-dong-lai/vaylai-dong-lai.component';
import { VaylaiTraBotGocComponent } from './vaylai/vaylai-chuc-nang/vaylai-tra-bot-goc/vaylai-tra-bot-goc.component';
import { VaylaiVayThemComponent } from './vaylai/vaylai-chuc-nang/vaylai-vay-them/vaylai-vay-them.component';
import { VaylaiGiaHanComponent } from './vaylai/vaylai-chuc-nang/vaylai-gia-han/vaylai-gia-han.component';
import { VaylaiDongHdComponent } from './vaylai/vaylai-chuc-nang/vaylai-dong-hd/vaylai-dong-hd.component';
import { VaylaiNoComponent } from './vaylai/vaylai-chuc-nang/vaylai-no/vaylai-no.component';
import { VaylaiLichSuComponent } from './vaylai/vaylai-chuc-nang/vaylai-lich-su/vaylai-lich-su.component';
import { VaylaiLichSuTraChamComponent } from './vaylai/vaylai-chuc-nang/vaylai-lich-su-tra-cham/vaylai-lich-su-tra-cham.component';
import { VaylaiHenGioComponent } from './vaylai/vaylai-chuc-nang/vaylai-hen-gio/vaylai-hen-gio.component';


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
    ThemKhachHangComponent,
    SuaThongTinKhachHangComponent,
    ThemCuaHangComponent,
    SuaThongTinCuaHangComponent,
    ThemHangHoaComponent,
    SuaHangHoaComponent,
    CamDoDongTienLaiComponent,
    CamDoTraBotGocComponent,
    CamDoVayThemComponent,
    CamDoChuocDoComponent,
    CamDoNoComponent,
    CamDoLichSuComponent,
    CamDoLichSuTraChamComponent,
    CamDoHenGioComponent,
    CamDoThanhLyComponent,
    VaylaiDongLaiComponent,
    VaylaiTraBotGocComponent,
    VaylaiVayThemComponent,
    VaylaiGiaHanComponent,
    VaylaiDongHdComponent,
    VaylaiNoComponent,
    VaylaiLichSuComponent,
    VaylaiLichSuTraChamComponent,
    VaylaiHenGioComponent,

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
