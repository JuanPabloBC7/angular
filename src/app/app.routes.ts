import { Routes } from '@angular/router';
import { PrincipalComponent } from './components/layouts/principal/principal.component';
import { CrudComponent } from './components/pages/crud/crud.component';

export const routes: Routes = [
    {
    path: '',
    component: PrincipalComponent,
    children: [
      {
        path: '',
        component: CrudComponent
      },
    ]
  },
];
