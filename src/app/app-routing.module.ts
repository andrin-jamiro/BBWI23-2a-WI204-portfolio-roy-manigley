import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CVComponent } from './components/cv/cv.component';
import { CreateUpdateComponent } from './components/cv/create-update/create-update.component';
import { DeleteComponent } from './components/cv/delete/delete.component';
import { CvListResolverService } from './services/resolvers/cv-list-resolver.service';
import { CvDetailResolverService } from './services/resolvers/cv-detail-resolver.service';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { HasChangesGuardService } from './services/guards/has-changes-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService] },
  { path: 'about-me', component: AboutMeComponent, canActivate: [AuthGuardService] },
  { path: 'cv', component: CVComponent, resolve: {records: CvListResolverService}, canActivate: [AuthGuardService]},
  { path: 'cv/new', component: CreateUpdateComponent, canActivate: [AuthGuardService], canDeactivate: [HasChangesGuardService] },
  { path: 'cv/:id/edit', component: CreateUpdateComponent, resolve: {record: CvDetailResolverService}, canActivate: [AuthGuardService], canDeactivate: [HasChangesGuardService]},
  { path: 'cv/:id/delete', component: DeleteComponent, resolve: {record: CvDetailResolverService}, canActivate: [AuthGuardService]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

