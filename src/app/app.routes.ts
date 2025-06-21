import { Routes } from '@angular/router';
import { ShowcaseComponent } from './main-screens/showcase/showcase.component';
import { GreetingComponent } from './main-screens/greeting/greeting.component';
import { MainBodyComponent } from './main-screens/main-body/main-body.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectDisplayComponent } from './project-display/project-display.component';

export const routes: Routes = [
    {
        path:'',pathMatch:'full',redirectTo:'greetings'
    },
    {
        path:'greetings',
        component:GreetingComponent,
    },
    {
        path:'home',
        component:ShowcaseComponent,
    },
    {
        path:'projects',
        component:MainBodyComponent,
        children:[
            {
                path:'',
                redirectTo:'dashboard',
                pathMatch:'full',
            },
            {
                path:'dashboard',
                component:DashboardComponent,
            },
            {
                path:':link',
                component:ProjectDisplayComponent,
            }
        ]
    },
];
