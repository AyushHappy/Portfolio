import { Routes } from '@angular/router';
import { ShowcaseComponent } from './showcase/showcase.component';
import { GreetingComponent } from './greeting/greeting.component';

export const routes: Routes = [
    {
        path:'',pathMatch:'full',redirectTo:'greetings'
    },
    {
        path:'greetings',
        component:GreetingComponent,
    },
    {
        path:'dashboard',
        component:ShowcaseComponent,
    }
];
