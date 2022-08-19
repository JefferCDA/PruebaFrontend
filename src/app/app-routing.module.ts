import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/navigation/navigation.module').then(m => m.NavigationModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
