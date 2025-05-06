import { Component } from '@angular/core';

interface Medico {
    id: number;
    nombre: string;
    especialidad: string;
    horario: string;
}

@Component({
    standalone: false,
    selector: 'app-asignar',
    templateUrl: './asignar.page.html',
    styleUrls: ['./asignar.page.scss'],
})
export class AsignarPage {
    medicos: Medico[] = [
        { id: 1, nombre: 'Dr. Juan Rivera', especialidad: 'Pediatría', horario: 'Lun-Vie 09:00 - 13:00' },
        { id: 2, nombre: 'Dra. Paula Fernández', especialidad: 'Cardiología', horario: 'Lun-Mie 14:00 - 18:00' },
        { id: 3, nombre: 'Dr. Luis Ramírez', especialidad: 'Dermatología', horario: 'Mar-Jue 10:00 - 16:00' },
    ];

    selectedMedico: Medico | null = null;
    nuevoHorario: string = '';

    seleccionarMedico(medico: Medico) {
        this.selectedMedico = { ...medico };
        this.nuevoHorario = medico.horario;
    }

    guardarHorario() {
        if (this.selectedMedico) {
            const index = this.medicos.findIndex(m => m.id === this.selectedMedico!.id);
            if (index > -1) {
                this.medicos[index].horario = this.nuevoHorario;
                this.selectedMedico = null;
                this.nuevoHorario = '';
            }
        }
    }

    cancelarEdicion() {
        this.selectedMedico = null;
        this.nuevoHorario = '';
    }
}