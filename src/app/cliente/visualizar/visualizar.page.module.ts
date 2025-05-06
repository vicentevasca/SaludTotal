import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { VisualizarPage } from './visualizar.page';

@NgModule({
  declarations: [VisualizarPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: VisualizarPage }])
  ],
  exports: [VisualizarPage] // ✅ Esto es clave
})
export class VisualizarPageModule {}