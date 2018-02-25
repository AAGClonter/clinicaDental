import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { EspecialidadesComponent } from '../especialidades/especialidades.component';
import { ClinicaComponent } from '../clinica/clinica.component';
import { OpinionComponent } from '../opinion/opinion.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'especialidades', component: EspecialidadesComponent },
    { path: 'clinica', component: ClinicaComponent },
    { path: 'opinion', component: OpinionComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class NavRoutingModule {}