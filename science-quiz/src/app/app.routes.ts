import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { ResultsComponent } from './results/results.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'question/:id', component: QuestionComponent },
    { path: 'results', component: ResultsComponent }
];

