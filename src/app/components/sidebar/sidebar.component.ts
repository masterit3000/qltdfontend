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
    { path: 'dashboard', title: 'CẦM ĐỒ', icon: 'desktop_windows', class: '',sub:[] },
    // test vay lãi
    { path: 'user-profile', title: 'VAY LÃI', icon: 'desktop_windows', class: '',sub: [] },
        //test bát họ
    { path: 'table-list', title: 'BÁT HỌ ', icon: 'desktop_windows', class: '',sub: [] },
    //test khách hàng
    { path: 'typography', title: 'KHÁCH HÀNG ', icon: 'desktop_windows', class: '',
        sub: [
            //test component danh sách kh
            {  path: 'danhsach-kh', title: 'Danh sách khách hàng', icon: 'keyboard_arrow_right', class: ''},
            { path: 'sub02', title: 'Khách cần vay', icon: 'keyboard_arrow_right', class: '' },
            { path: 'sub03', title: 'Check thông tin khách hàng', icon: 'keyboard_arrow_right', class: '' },
        ] 
    },
    //test cửa hàng
    { path: 'icons', title: 'QUẢN LÝ CỬA HÀNG', icon: 'desktop_windows', class: '',
        sub: [
            { path: 'sub01', title: 'Tổng quát chuối cửa hàng', icon: 'keyboard_arrow_right', class: '' },
            { path: 'sub02', title: 'Thông tin chi tiết cửa hàng', icon: 'keyboard_arrow_right', class: '' },
            { path: 'sub03', title: 'Danh sách cửa hàng', icon: 'keyboard_arrow_right', class: '' },
            { path: 'sub04', title: 'Cấu hình hàng hóa', icon: 'keyboard_arrow_right', class: '' },
            { path: 'sub05', title: 'Nhập tiền quỹ đầu ngày', icon: 'keyboard_arrow_right', class: '' },
        ]
    },
    //test thu chi
    { path: 'maps', title: 'QUẢN LÝ THU CHI', icon: 'desktop_windows', class: '',
        sub: [
            { path: 'sub01', title: 'Chi hoạt động', icon: 'keyboard_arrow_right', class: '' },
            { path: 'sub02', title: 'Thu hoạt động', icon: 'keyboard_arrow_right', class: '' },
        ] 
    },
    //test nguồn vốn
    { path: 'notifications', title: 'QUẢN LÝ NGUỒN VỐN', icon: 'desktop_windows', class: '',sub: [] },
    //test nhân viên
    { path: '#', title: 'QUẢN LÝ NHÂN VIÊN', icon: 'desktop_windows', class: '',
        sub: [ 
            { path: 'sub01', title: 'Danh sách nhân viên', icon: 'keyboard_arrow_right', class: '' },
            { path: 'sub02', title: 'Phân quyền nhân viên', icon: 'keyboard_arrow_right', class: '' },
        ]
    },
    //test thống kê
    { path: '#', title: 'THỐNG KÊ', icon: 'desktop_windows', class: '',
        sub: [
            { path: 'sub01', title: 'Thu tiền vay lãi', icon: 'keyboard_arrow_right', class: '' },
            { path: 'sub02', title: 'Thu tiền họ', icon: 'keyboard_arrow_right', class: '' },
        ]
    },
    //test báo cáo
    { path: '#', title: 'BÁO CÁO', icon: 'desktop_windows', class: '',
        sub: [
            { path: 'sub01', title: 'Số quỹ tiền mặt', icon: 'keyboard_arrow_right', class: '' },
            { path: 'sub02', title: 'Tổng kết giao dịch', icon: 'keyboard_arrow_right', class: '' },
            { path: 'sub03', title: 'Tổng kết lợi nhuận', icon: 'keyboard_arrow_right', class: '' },
            { path: 'sub04', title: 'Chi tiết tiền lãi', icon: 'keyboard_arrow_right', class: '' },
            { path: 'sub05', title: 'Báo cáo đang cho vay', icon: 'keyboard_arrow_right', class: '' },
            { path: 'sub06', title: 'Báo cáo hàng chờ thanh lý', icon: 'keyboard_arrow_right', class: '' },
            { path: 'sub07', title: 'Báo cáo chuộc đồ, đóng HĐ', icon: 'keyboard_arrow_right', class: '' },
            { path: 'sub08', title: 'Báo cáo thanh lý đồ', icon: 'keyboard_arrow_right', class: '' },
            { path: 'sub09', title: 'Báo cáo hợp đồng đã xóa', icon: 'keyboard_arrow_right', class: '' },
            { path: 'sub10', title: 'Báo cáo tin nhắn', icon: 'keyboard_arrow_right', class: '' },
            { path: 'sub11', title: 'Bàn giao ca', icon: 'keyboard_arrow_right', class: '' },
            { path: 'sub12', title: 'Dòng tiền theo ngày', icon: 'keyboard_arrow_right', class: '' },

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

    ngOnInit() {
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
