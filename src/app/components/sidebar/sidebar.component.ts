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
    {
        path: 'dashboard', title: 'Dashboard', icon: 'dashboard', class: '',
        sub:  [
            {
                path: 'sub01', title: 'Sub 01', icon: 'dashboard', class: '',

            },
            { path: 'sub02', title: 'Sub 02', icon: 'person', class: '' },
            { path: 'sub03', title: 'Sub 03', icon: 'content_paste', class: '' },
            { path: 'sub04', title: 'Sub 04', icon: 'library_books', class: '' },
            { path: 'sub05', title: 'Sub 05', icon: 'bubble_chart', class: '' },
          
           
        ]
    },
    { path: 'user-profile', title: 'User Profile', icon: 'person', class: '',sub: [] },
    { path: 'table-list', title: 'Table List', icon: 'content_paste', class: '',sub: [] },
    { path: 'typography', title: 'Typography', icon: 'library_books', class: '',sub: [] },
    { path: 'icons', title: 'Icons', icon: 'bubble_chart', class: '',sub: [] },
    { path: 'maps', title: 'Maps', icon: 'location_on', class: '',sub: [] },
    { path: 'notifications', title: 'Notifications', icon: 'notifications', class: '',sub: [] },
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
