import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Import components */
import { ClientComponent } from './components/client/client.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterClientComponent } from './components/register-client/register-client.component';
import { RegisterOrderComponent } from './components/register-order/register-order.component';
import { RegisterProductComponent } from './components/register-product/register-product.component';


/* Define Routes */
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mi-tienda', component: HomeComponent,children: [
    {
      path: 'clientes',
      component: HomeComponent,
      children: [
        {
          path: 'agregar',
          component: RegisterClientComponent
        },
        {
          path: 'mostrar',
          component: HomeComponent
        }
        
      ]
    },
    {
      path: 'productos',
      component: HomeComponent,
      children: [
        {
          path: 'agregar',
          component: RegisterProductComponent
        },
        {
          path: 'mostrar',
          component: HomeComponent
        }
        
      ]
    },
    {
      path: 'crear-orden',
      component: RegisterOrderComponent
    },
    {
      path: 'ordenes',
      component: OrderComponent
    }
  ] },
  { path: '**', component: ErrorComponent },
];

/* Export Config */
export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders<any>= RouterModule.forRoot(appRoutes)
