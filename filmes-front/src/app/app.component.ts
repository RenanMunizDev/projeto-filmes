import { Component } from '@angular/core';
import { CreateFilmeComponent } from './components/create-filme/create-filme.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CreateFilmeComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
