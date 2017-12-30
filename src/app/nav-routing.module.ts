import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { EspecialidadesComponent } from './especialidades.component';
import { ClinicaComponent } from './clinica.component';
import { OpinionComponent } from './opinion.component';

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