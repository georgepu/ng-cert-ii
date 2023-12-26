import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpService } from './service/http.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'myApp';

  constructor(private httpService: HttpService) {

  }

  ngOnInit() {
    const params = new HttpParams()
    .append('name', 'England'),
    options = {
      redirect: 'follow'
    };
    this.httpService.get(params, 'countries', options).subscribe(data => {
      console.log(data);
    });
  }
}
