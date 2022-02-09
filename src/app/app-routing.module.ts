import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:'post',
    loadChildren:() => import('./post/post.module').then( m=> m.PostModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports :[
    RouterModule
  ]
})
export class AppRoutingModule { }
