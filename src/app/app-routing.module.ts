import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'paciente/visualizar',
    loadChildren: () => import('./cliente/visualizar/visualizar.page.module').then(m => m.VisualizarPageModule)
  },
  {
    path: 'medico/horario/asignar',
    loadChildren: () => import('./medico/horarios/asignar/asignar.page.module').then(m => m.AsignarPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
