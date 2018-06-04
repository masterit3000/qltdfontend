import { NgModule, Component } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { CamDoComponent } from './cam-do/cam-do.component';
import { CamDoNewComponent } from './cam-do/cam-do-new/cam-do-new.component';
import { VaylaiComponent } from './vaylai/vaylai.component';
import { VaylaiNewComponent } from './vaylai/vaylai-new/vaylai-new.component';
import { BatHoComponent } from './bat-ho/bat-ho.component';
import { BatHoNewComponent } from './bat-ho/bat-ho-new/bat-ho-new.component';
import { DanhSachKhachHangComponent } from './khach-hang/danh-sach-khach-hang/danh-sach-khach-hang.component';
import { KhachCanVayComponent } from './khach-hang/khach-can-vay/khach-can-vay.component';
import { CheckThongTinKhachHangComponent } from './khach-hang//check-thong-tin-khach-hang/check-thong-tin-khach-hang.component';
import { TongQuatChuoiCuaHangComponent } from './quan-ly-cua-hang/tong-quat-chuoi-cua-hang/tong-quat-chuoi-cua-hang.component';
import { ThongTinChiTietCuaHangComponent } from './quan-ly-cua-hang/thong-tin-chi-tiet-cua-hang/thong-tin-chi-tiet-cua-hang.component';
import { DanhSachCuaHangComponent } from './quan-ly-cua-hang/danh-sach-cua-hang/danh-sach-cua-hang.component';
import { CauHinhHangHoaComponent } from './quan-ly-cua-hang/cau-hinh-hang-hoa/cau-hinh-hang-hoa.component';
import { NhapTienQuyDauNgayComponent } from './quan-ly-cua-hang/nhap-tien-quy-dau-ngay/nhap-tien-quy-dau-ngay.component';
import { ChiHoatDongComponent } from './quan-ly-thu-chi/chi-hoat-dong/chi-hoat-dong.component';
import { ThuHoatDongComponent } from './quan-ly-thu-chi/thu-hoat-dong/thu-hoat-dong.component';
import { QuanLyNguonVonComponent } from './quan-ly-nguon-von/quan-ly-nguon-von.component';
import { DanhSachNhanVienComponent } from './quan-ly-nhan-vien/danh-sach-nhan-vien/danh-sach-nhan-vien.component';
import { PhanQuyenNhanVienComponent } from './quan-ly-nhan-vien/phan-quyen-nhan-vien/phan-quyen-nhan-vien.component';
import { ThuTienVayLaiComponent } from './thong-ke/thu-tien-vay-lai/thu-tien-vay-lai.component';
import { ThuTienHoComponent } from './thong-ke/thu-tien-ho/thu-tien-ho.component';
import { SoQuyTienMatComponent } from './bao-cao/so-quy-tien-mat/so-quy-tien-mat.component';
import { TongKetGiaoDichComponent } from './bao-cao/tong-ket-giao-dich/tong-ket-giao-dich.component';
import { TongKetLoiNhuanComponent } from './bao-cao/tong-ket-loi-nhuan/tong-ket-loi-nhuan.component';
import { ChiTietTienLaiComponent } from './bao-cao/chi-tiet-tien-lai/chi-tiet-tien-lai.component';
import { BaoCaoDangChoVayComponent } from './bao-cao/bao-cao-dang-cho-vay/bao-cao-dang-cho-vay.component';
import { BaoCaoHangChoThanhLyComponent } from './bao-cao/bao-cao-hang-cho-thanh-ly/bao-cao-hang-cho-thanh-ly.component';
import { BaoCaoChuocDoDongHopDongComponent } from './bao-cao/bao-cao-chuoc-do-dong-hop-dong/bao-cao-chuoc-do-dong-hop-dong.component';
import { BaoCaoThanhLyDoComponent } from './bao-cao/bao-cao-thanh-ly-do/bao-cao-thanh-ly-do.component';
import { BaoCaoHopDongDaXoaComponent } from './bao-cao/bao-cao-hop-dong-da-xoa/bao-cao-hop-dong-da-xoa.component';
import { BaoCaoTinNhanComponent } from './bao-cao/bao-cao-tin-nhan/bao-cao-tin-nhan.component';
import { BanGiaoCaComponent } from './bao-cao/ban-giao-ca/ban-giao-ca.component';
import { DongTienTheoNgayComponent } from './bao-cao/dong-tien-theo-ngay/dong-tien-theo-ngay.component';
import { CamDoChucNangComponent } from './cam-do/cam-do-chuc-nang/cam-do-chuc-nang.component';
import { BatHoChucNangComponent } from './bat-ho/bat-ho-chuc-nang/bat-ho-chuc-nang.component';
import { ThemKhachHangComponent } from './khach-hang/danh-sach-khach-hang/them-khach-hang/them-khach-hang.component';
import { SuaThongTinKhachHangComponent } from './khach-hang/danh-sach-khach-hang/sua-thong-tin-khach-hang/sua-thong-tin-khach-hang.component';
import { ThemCuaHangComponent } from './quan-ly-cua-hang/danh-sach-cua-hang/them-cua-hang/them-cua-hang.component';
import { SuaThongTinCuaHangComponent } from './quan-ly-cua-hang/danh-sach-cua-hang/sua-thong-tin-cua-hang/sua-thong-tin-cua-hang.component';
import { ThemHangHoaComponent } from './quan-ly-cua-hang/cau-hinh-hang-hoa/them-hang-hoa/them-hang-hoa.component';
import { SuaHangHoaComponent } from './quan-ly-cua-hang/cau-hinh-hang-hoa/sua-hang-hoa/sua-hang-hoa.component';



const routes: Routes =[
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    // tới trang cầm đồ
    { path: 'camdo',          component: CamDoComponent },
    { path: 'camdoNew',       component: CamDoNewComponent },
    { path: 'camdoChucNang',  component: CamDoChucNangComponent },
    // tới trang vay lãi
    { path: 'vaylai',          component: VaylaiComponent },
    { path: 'vaylaiNew',       component: VaylaiNewComponent },
    // tới trang bát họ
    { path: 'batHo',          component: BatHoComponent },
    { path: 'batHoNew',       component: BatHoNewComponent },
    { path: 'batHoChucNang',  component: BatHoChucNangComponent },

    // menu khách hàng
    { path: 'danhSachKhachHang',          component: DanhSachKhachHangComponent },
    { path: 'khachCanVay',          component: KhachCanVayComponent },
    { path: 'checkThongTinKhachHang',          component:CheckThongTinKhachHangComponent},
    // menu quản lý cửa hàng
    { path: 'tongQuatChuoiCuaHang',          component:TongQuatChuoiCuaHangComponent},
    { path: 'thongTinChiTietCuaHang',          component:ThongTinChiTietCuaHangComponent},
    { path: 'danhSachCuaHang',          component:DanhSachCuaHangComponent},
    { path: 'cauHinhHangHoa',          component:CauHinhHangHoaComponent},
    { path: 'nhapTienQuyDauNgay',          component:NhapTienQuyDauNgayComponent},
    
    // menu quản lý thu chi
    { path: 'chiHoatDong',          component:ChiHoatDongComponent},
    { path: 'thuHoatDong',          component:ThuHoatDongComponent},
    // tới Quản lý nguồn vốn
    { path: 'quanLyNguonVon',          component:QuanLyNguonVonComponent},
    //menu quản lí nhân viên
    { path: 'danhSachNhanVien',          component:DanhSachNhanVienComponent},
    { path: 'phanQuyenNhanVien',          component:PhanQuyenNhanVienComponent},
    // menu thống kê
    { path: 'thuTienVayLai',          component:ThuTienVayLaiComponent},
    { path: 'thuTienHo',          component:ThuTienHoComponent},
    // menu báo cáo
    { path: 'soQuyTienMat',          component:SoQuyTienMatComponent},
    { path: 'tongKetGiaoDich',          component:TongKetGiaoDichComponent},
    { path: 'tongKetLoiNhuan',          component:TongKetLoiNhuanComponent},
    { path: 'chiTietTienLai',          component:ChiTietTienLaiComponent},
    { path: 'baoCaoDangChoVay',          component:BaoCaoDangChoVayComponent},
    { path: 'baoCaoHangChoThanhLy',          component:BaoCaoHangChoThanhLyComponent},
    { path: 'baoCaoChuocDoDongHopDong',          component:BaoCaoChuocDoDongHopDongComponent},
    { path: 'baoCaoThanhLyDo',          component:BaoCaoThanhLyDoComponent},
    { path: 'baoCaoHopDongDaXoa',          component:BaoCaoHopDongDaXoaComponent},
    { path: 'baoCaoTinNhan',          component:BaoCaoTinNhanComponent},
    { path: 'banGiaoCa',          component:BanGiaoCaComponent},
    { path: 'dongTienTheoNgay',          component:DongTienTheoNgayComponent},
    // danh sách khách hàng
    { path: 'themKhachHang',          component:ThemKhachHangComponent},
    { path: 'suaThongTinKhachHang',          component:SuaThongTinKhachHangComponent},
    { path: 'themCuaHang',          component:ThemCuaHangComponent},
    { path: 'suaThongTinCuaHang',          component:SuaThongTinCuaHangComponent},
    { path: 'themHangHoa',          component:ThemHangHoaComponent},
    { path: 'suaHangHoa',          component:SuaHangHoaComponent},
   
    { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
