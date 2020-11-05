import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { HeaderComponent } from './header/header.component';

export const appRoutes: Routes = [
    {
        path: 'cv', component: CvComponent,
    },
    {
        path: 'header', component: HeaderComponent
    },
    {
        path: '',
        component: AppComponent
    }
]