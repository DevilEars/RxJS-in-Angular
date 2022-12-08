import { Component, VERSION } from '@angular/core';
import { of, from, map, tap, take} from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  ngOnInit(){
    // of(2, 4, 6, 8).subscribe((item) => console.log(item));

    from([20, 15, 10, 5]).pipe(
      tap(item => console.log(`emitted item ${item}`)),
      map(item => item * 2),
      map(item => item - 10),
      map(item => {
        if (item === 0) {
          throw new Error('Null detected');
        }
       return item;
      })
    ).subscribe({
      next: (item) => console.log(`resulting item ${item}`),
      error: (err) => console.error(`error occured ${err}`),
      complete: () => console.log(`kthxbi`),
    });

    // of('Apple1', 'Apple2', 'Apple3').subscribe({
    //   next: (apple) => console.log(`Apple emitted ${apple}`),
    //   error: (err) => console.error(`To err is human, to errgetter devern ${err}`),
    //   complete: () => console.log('Done with apples, time to compare oranges'),
    // });
  }
}
