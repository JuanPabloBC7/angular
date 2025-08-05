import { Routes } from '@angular/router';
import { PrincipalComponent } from './components/layouts/principal/principal.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SimpleCrudComponent } from './components/pages/simple-crud/simple-crud.component';
import { ApiCrudComponent } from './components/pages/api-crud/api-crud.component';

export const routes: Routes = [
    {
    path: '',
    component: PrincipalComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'simple-crud',
        component: SimpleCrudComponent
      },
      {
        path: 'api-crud',
        component: ApiCrudComponent
      },
    ]
  },
];
