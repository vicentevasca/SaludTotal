import { Component } from '@angular/core';

interface Paciente {
    nombre: string;
    fecha: string;
    diagnostico: string;
    doctor: string;
    estado: string;
}

@Component({
    standalone: false,
    selector: 'app-visualizar',
    templateUrl: './visualizar.page.html',
    styleUrls: ['./visualizar.page.scss'],
})
export class VisualizarPage {
    pacientes: Paciente[] = [
        {
            nombre: 'Juan Pérez',
            fecha: '2025-05-03 14:20',
            diagnostico: 'Hipertensión',
            doctor: 'Dra. Martínez',
            estado: 'Atendido',
        },
        {
            nombre: 'Ana Gómez',
            fecha: '2025-05-03 13:00',
            diagnostico: 'Fiebre alta',
            doctor: 'Dr. Ramírez',
            estado: 'Atendido',
        },
        {
            nombre: 'Carlos Ruiz',
            fecha: '2025-05-02 17:45',
            diagnostico: 'Dolor abdominal',
            doctor: 'Dra. Silva',
            estado: 'Atendido',
        },
    ];

    get totalAtendidos(): number {
        return this.pacientes.length;
    }
}