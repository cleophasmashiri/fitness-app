import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './auth/signin/signin.component';
import { TrainingComponent } from './training/training.component';

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'login',
        component: SigninComponent
    },
    {
        path: 'training',
        component: TrainingComponent
    }
];

@NgModule(
    {
        imports: [
            RouterModule.forRoot(routes)
        ]
    }
)
export class AppRoutingModule {
}
