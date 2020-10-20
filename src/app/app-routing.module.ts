import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './layout/home/home.component';


// const routes: Routes = [];

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'blogs',
        component: BlogComponent
      },
    ]
  },
  { path: '**', redirectTo: 'blogs' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
