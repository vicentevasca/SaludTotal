import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  currentView: 'welcome' | 'visualizar' | 'asignar' = 'welcome';

  mostrar(pagina: string) {
    this.currentView = pagina as any;
  }
}