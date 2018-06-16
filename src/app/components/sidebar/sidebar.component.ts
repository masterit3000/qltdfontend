import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    sub: any[];
}
export const ROUTES: RouteInfo[] = [
    // test cầm đồ
    {
        path: 'camdo', title: 'CẦM ĐỒ', icon: 'desktop_windows', class: '',
        sub: [
            { path: 'camdoNew', title: 'Hợp đồng cầm đồ mới', icon: 'keyboard_arrow_right', class: 'andi' },
            { path: 'camdoChucNang', title: 'Thông tin chi tiết hợp đồng', icon: 'keyboard_arrow_right', class: 'andi' },
        ]
    },



    // test vay lãi
    {
        path: 'vaylai', title: 'VAY LÃI', icon: 'desktop_windows', class: '',
        sub: [
            { path: 'vaylaiNew', title: 'Hợp đồng vay lãi mới', icon: 'keyboard_arrow_right', class: 'andi' },
            { path: 'vaylaiChucNang', title: 'Thông tin chi tiết hợp đồng', icon: 'keyboard_arrow_right', class: 'andi' },
        ]
    },
    //test bát họ
    {
        path: 'batHo', title: 'BÁT HỌ ', icon: 'desktop_windows', class: '',
        sub: [
            { path: 'batHoNew', title: 'Hợp đồng bát họ mới', icon: 'keyboard_arrow_right', class: 'andi' },
            { path: 'batHoChucNang', title: 'Thông tin chi tiết hợp đồng', icon: 'keyboard_arrow_right', class: 'andi' },
        ]
    },
    //test khách hàng
    {
        path: 'typography', title: 'KHÁCH HÀNG ', icon: 'desktop_windows', class: '',
        sub: [
            //test component danh sách kh
            { path: 'danhSachKhachHang', title: 'Danh sách khách hàng', icon: 'keyboard_arrow_right', class: '' },
            { path: 'khachCanVay', title: 'Khách cần vay', icon: 'keyboard_arrow_right', class: '' },
            { path: 'checkThongTinKhachHang', title: 'Check thông tin khách hàng', icon: 'keyboard_arrow_right', class: '' },
            { path: 'themKhachHang', title: 'Them khach hang', icon: 'keyboard_arrow_right', class: 'andi' },
        ]
    },
    //test cửa hàng
    {
        path: 'icons', title: 'QUẢN LÝ CỬA HÀNG', icon: 'desktop_windows', class: '',
        sub: [
            { path: 'tongQuatChuoiCuaHang', title: 'Tổng quát chuối cửa hàng', icon: 'keyboard_arrow_right', class: '' },
            { path: 'thongTinChiTietCuaHang', title: 'Thông tin chi tiết cửa hàng', icon: 'keyboard_arrow_right', class: '' },
            { path: 'danhSachCuaHang', title: 'Danh sách cửa hàng', icon: 'keyboard_arrow_right', class: '' },
            { path: 'cauHinhHangHoa', title: 'Cấu hình hàng hóa', icon: 'keyboard_arrow_right', class: '' },
            { path: 'nhapTienQuyDauNgay', title: 'Nhập tiền quỹ đầu ngày', icon: 'keyboard_arrow_right', class: '' },
        ]
    },
    //test thu chi
    {
        path: 'maps', title: 'QUẢN LÝ THU CHI', icon: 'desktop_windows', class: '',
        sub: [
            { path: 'chiHoatDong', title: 'Chi hoạt động', icon: 'keyboard_arrow_right', class: '' },
            { path: 'thuHoatDong', title: 'Thu hoạt động', icon: 'keyboard_arrow_right', class: '' },
        ]
    },
    //test nguồn vốn
    { path: 'quanLyNguonVon', title: 'QUẢN LÝ NGUỒN VỐN', icon: 'desktop_windows', class: '', sub: [] },
    //test nhân viên
    {
        path: '#', title: 'QUẢN LÝ NHÂN VIÊN', icon: 'desktop_windows', class: '',
        sub: [
            { path: 'danhSachNhanVien', title: 'Danh sách nhân viên', icon: 'keyboard_arrow_right', class: '' },
            { path: 'phanQuyenNhanVien', title: 'Phân quyền nhân viên', icon: 'keyboard_arrow_right', class: '' },
        ]
    },
    //test thống kê
    {
        path: '#', title: 'THỐNG KÊ', icon: 'desktop_windows', class: '',
        sub: [
            { path: 'thuTienVayLai', title: 'Thu tiền vay lãi', icon: 'keyboard_arrow_right', class: '' },
            { path: 'thuTienHo', title: 'Thu tiền họ', icon: 'keyboard_arrow_right', class: '' },
        ]
    },
    //test báo cáo
    {
        path: '#', title: 'BÁO CÁO', icon: 'desktop_windows', class: '',
        sub: [
            { path: 'soQuyTienMat', title: 'Số quỹ tiền mặt', icon: 'keyboard_arrow_right', class: '' },
            { path: 'tongKetGiaoDich', title: 'Tổng kết giao dịch', icon: 'keyboard_arrow_right', class: '' },
            { path: 'tongKetLoiNhuan', title: 'Tổng kết lợi nhuận', icon: 'keyboard_arrow_right', class: '' },
            { path: 'chiTietTienLai', title: 'Chi tiết tiền lãi', icon: 'keyboard_arrow_right', class: '' },
            { path: 'baoCaoDangChoVay', title: 'Báo cáo đang cho vay', icon: 'keyboard_arrow_right', class: '' },
            { path: 'baoCaoHangChoThanhLy', title: 'Báo cáo hàng chờ thanh lý', icon: 'keyboard_arrow_right', class: '' },
            { path: 'baoCaoChuocDoDongHopDong', title: 'Báo cáo chuộc đồ, đóng HĐ', icon: 'keyboard_arrow_right', class: '' },
            { path: 'baoCaoThanhLyDo', title: 'Báo cáo thanh lý đồ', icon: 'keyboard_arrow_right', class: '' },
            { path: 'baoCaoHopDongDaXoa', title: 'Báo cáo hợp đồng đã xóa', icon: 'keyboard_arrow_right', class: '' },
            { path: 'baoCaoTinNhan', title: 'Báo cáo tin nhắn', icon: 'keyboard_arrow_right', class: '' },
            { path: 'banGiaoCa', title: 'Bàn giao ca', icon: 'keyboard_arrow_right', class: '' },
            { path: 'dongTienTheoNgay', title: 'Dòng tiền theo ngày', icon: 'keyboard_arrow_right', class: '' },

        ]
    },
    // { path: 'upgrade', title: 'Upgrade to PRO', icon: 'unarchive', class: 'active-pro',sub: [] },
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menuItems: any[];

    constructor() { }
    listKhachHang = [];
    ngOnInit() {
        this.listKhachHang = [
            {
                ten: "abc",
                diachi: "aabccc"
            },
            {
                ten: "abc",
                diachi: "aabccc"
            },
            {
                ten: "abc",
                diachi: "aabccc"
            },
            {
                ten: "abc",
                diachi: "aabccc"
            },
            {
                ten: "abc",
                diachi: "aabccc"
            },
            {
                ten: "abc",
                diachi: "aabccc"
            },
            {
                ten: "abc",
                diachi: "aabccc"
            },
            {
                ten: "abc",
                diachi: "aabccc"
            }
        ];
        // this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.menuItems = ROUTES;
        // this.menuItems.forEach((menuItem) => {
        //     menuItem.submenuitem = menuItem.sub.filter(subitem => subitem);
        // })
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
}
