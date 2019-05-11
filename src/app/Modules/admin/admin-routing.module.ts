import { EditSessionComponent } from './components/edit-session/edit-session.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { EditFormationComponent } from './components/edit-formation/edit-formation.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ListUserComponent } from './components/list-user/list-user.component';
import { CrudComponent } from './components/crud/crud.component';
import { FormListComponent } from './components/form-list/form-list.component';
import { HomeComponent } from './components/home/home.component';
import { CrudUsersComponent } from './components/crud-users/crud-users.component';
import { AuthGuard } from 'src/app/auth.guard';
import { ProfileAdminComponent } from './components/profile-admin/profile-admin.component';
import { DemandesComponent } from './components/demandes/demandes.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CrudSessionsComponent } from './components/crud-sessions/crud-sessions.component';
import { AddSessionComponent } from './components/add-session/add-session.component';



const routes: Routes = [
  {
  path : 'admin',
  component : NavbarComponent,
  canActivate : [AuthGuard],
  canActivateChild :[AuthGuard],

  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
      path: 'home',
      component: HomeComponent
    },
    { path: 'addSession', component: AddSessionComponent },
    { path: 'addFormation', component: CrudComponent },
    { path: 'users', component: ListUserComponent },
    { path: 'editUser/:id', component: CrudUsersComponent },
    { path: 'listFormation', component: FormListComponent },
    { path: 'listSessions', component: CrudSessionsComponent },
    {path: 'editFormation/:id', component: EditFormationComponent},
    {path: 'editSessions/:id', component: EditSessionComponent},
    { path: 'profileadmin', component: ProfileAdminComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'demandes', component: DemandesComponent },
    { path: 'partenaire', component: PartenaireComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
