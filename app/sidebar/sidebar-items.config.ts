import { MenuType, ItemInfo } from './sidebar.metadata';
//import { ChartComponent } from '../dashboard/chart/chart.component';
import { TwitterComponent } from '../dashboard/twitter/twitter.component';
import { ClockComponent } from '../dashboard/clock/clock.component';
import { BarChartComponent } from '../dashboard/barChart/barChart.component';
import { LineChartComponent } from '../dashboard/LineChart/lineChart.component';
import { DoughnutChartComponent } from '../dashboard/DoughnutChart/doughnutChart.component';
import { PieChartComponent } from '../dashboard/PieChart/pieChart.component';
import { PolarAreaChartComponent } from '../dashboard/PolarAreaChart/polarAreaChart.component';
import { RadarChartComponent } from '../dashboard/RadarChart/radarChart.component';


import {  RouteInfo } from './sidebar.metadata';



export const ITEMS: any[] = [
    //{ path: 'dashboard', title: 'Gráfico', menuType: MenuType.LEFT, icon: 'pe-7s-graph3', widgetType: ChartComponent },
    //{ path: 'notifications', title: 'Notificações', menuType: MenuType.LEFT, icon:'pe-7s-bell' },
    { path: '', title: 'Twitter', menuType: MenuType.LEFT, icon:'pe-7s-global', widgetType: TwitterComponent},
    { path: '', title: 'Clock', menuType: MenuType.LEFT, icon:'pe-7s-clock', widgetType: ClockComponent}
    /*{ path: 'user', title: 'User profile', menuType: MenuType.LEFT, icon:'pe-7s-user' },
    { path: 'table', title: 'Table List', menuType: MenuType.LEFT, icon:'pe-7s-note2' },
    { path: 'typography', title: 'Typography', menuType: MenuType.LEFT, icon:'pe-7s-news-paper' },
    { path: 'icons', title: 'Icons', menuType: MenuType.LEFT, icon:'pe-7s-science' },
    { path: 'maps', title: 'Maps', menuType: MenuType.LEFT, icon:'pe-7s-map-marker' },
    { path: 'upgrade', title: 'Upgrade to PRO', menuType: MenuType.LEFT, icon:'pe-7s-rocket' }*/
];

export const SUBITEMS: any[] = [
    { path: '', title: 'Line', menuType: MenuType.LEFT, icon:'pe-7s-plus', widgetType: LineChartComponent},
    { path: '', title: 'Bar', menuType: MenuType.LEFT, icon:'pe-7s-plus', widgetType: BarChartComponent},
    { path: '', title: 'Radar', menuType: MenuType.LEFT, icon:'pe-7s-plus', widgetType: RadarChartComponent},
    { path: '', title: 'Pie', menuType: MenuType.LEFT, icon:'pe-7s-plus', widgetType: PieChartComponent},
    { path: '', title: 'PolarArea', menuType: MenuType.LEFT, icon:'pe-7s-plus', widgetType: PolarAreaChartComponent},
    { path: '', title: 'Doughnut', menuType: MenuType.LEFT, icon:'pe-7s-plus', widgetType: DoughnutChartComponent}
];


export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon:'pe-7s-graph', class: '' },
    { path: 'typography', title: 'Tipografia',  icon:'pe-7s-pen', class: '' },
    { path: 'notifications', title: 'Alertas',  icon:'pe-7s-bell', class: '' },
    { path: 'login', title: 'Login',  icon:'pe-7s-user', class: '' },
    { path: 'home', title: 'Home',  icon:'pe-7s-home', class: '' },
];

