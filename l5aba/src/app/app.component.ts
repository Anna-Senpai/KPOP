import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular3';

  input: string = '';
  data: any = [];
  favourites: any[] = [];
  inputValue = '';

  theBoundCallback: Function=()=>{};

  ngOnInit() {
    this.theBoundCallback = this.theCallback.bind(this);
  }

  theCallback(item: any) {
    this.onFavourite(item);
  }

  constructor(public dialog: MatDialog) {}

  openDialog(item: any, func: any): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
      data: { ...item, func: func },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  change(event: any) {
    console.log(event.target.value);
    this.input = event.target.value;
  }

  onFavourite(item: any) {
    console.log('favourited', item);
    this.favourites = [...this.favourites, item];
  }

  onSave = async () => {
    const newData: any = await fetch(
      'https://cors-proxy-temp1.herokuapp.com/https://www.metaweather.com/api/location/search/?query=' +
        this.input,
      {
        // mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'GET',
      }
    );
    const processed = await newData.json();
    console.log(processed);
    const id = processed[0]?.woeid;
    console.log(id);

    const forecastData = await fetch(
      'https://cors-proxy-temp1.herokuapp.com/https://www.metaweather.com/api/location/' +
        id +
        '/2021/10/26',
      {
        headers: {
          'Content-Type': 'application/json',
         },
        method: 'GET',
      }
    );
    const processedForecast = await forecastData.json();
    console.log(processedForecast[0]);
    this.data = [
      ...this.data,
      { ...processedForecast[0], name: processed[0].title },
    ];
    this.input = '';
  };
}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: ` {{ data.name }}
    <button (click)="data.func(data)">Favourite</button>
    <br />Тиск:{{ data.air_pressure }}<br />
    Температура:{{ data.the_temp }} <br />Опади:{{ data.humidity }}<br />
    Швидкість вітру:{{ data.wind_speed }}`,
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}