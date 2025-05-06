import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { AsignarPage } from './asignar.page';

@NgModule({
  declarations: [AsignarPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: AsignarPage }])
  ],
  exports: [AsignarPage] // ✅ Exportarlo
})
export class AsignarPageModule {}