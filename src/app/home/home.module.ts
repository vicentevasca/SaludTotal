import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { VisualizarPageModule } from '../cliente/visualizar/visualizar.page.module';
import { AsignarPageModule } from '../medico/horarios/asignar/asignar.page.module';

@NgModule({
  declarations: [HomePage], // SOLO el home
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizarPageModule,  // Importas sus módulos
    AsignarPageModule
  ]
})
export class HomePageModule {}