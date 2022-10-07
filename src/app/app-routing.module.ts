import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEmpleadoComponent } from './components/form-empleado/form-empleado.component';
import { FormBeneficiarioComponent } from './components/form-beneficiario/form-beneficiario.component';

const routes: Routes = [
  {path:'empleado', component:FormEmpleadoComponent},
  {path:'beneficiario', component:FormBeneficiarioComponent},
{path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
