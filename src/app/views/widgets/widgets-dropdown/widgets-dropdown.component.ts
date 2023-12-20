import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { getStyle } from '@coreui/utils';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import {APIcallService} from '../../../Service/apicall.service'
import { forEach } from 'lodash-es';
import { elementAt } from 'rxjs';
@Component({
  selector: 'app-widgets-dropdown',
  templateUrl: './widgets-dropdown.component.html',
  styleUrls: ['./widgets-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class WidgetsDropdownComponent implements OnInit, AfterContentInit {

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private service:APIcallService
  ) {}

  data: any[] = [];
  options: any[] = [];
  labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
    'January',
    'February',
    'March',
    'April'
  ];
  datasets = [
    [{
      label: 'My First dataset',
      backgroundColor: 'transparent',
      borderColor: 'rgba(255,255,255,.55)',
      pointBackgroundColor: getStyle('--cui-primary'),
      pointHoverBorderColor: getStyle('--cui-primary'),
      data: [65, 59, 84, 84, 51, 55, 40]
    }], [{
      label: 'My Second dataset',
      backgroundColor: 'transparent',
      borderColor: 'rgba(255,255,255,.55)',
      pointBackgroundColor: getStyle('--cui-info'),
      pointHoverBorderColor: getStyle('--cui-info'),
      data: [1, 18, 9, 17, 34, 22, 11]
    }], [{
      label: 'My Third dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      pointBackgroundColor: getStyle('--cui-warning'),
      pointHoverBorderColor: getStyle('--cui-warning'),
      data: [78, 81, 80, 45, 34, 12, 40],
      fill: true
    }], [{
      label: 'My Fourth dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
      barPercentage: 0.7
    }]
  ];
  optionsDefault = {
    plugins: {
      legend: {
        display: false
      }
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: false
        }
      },
      y: {
        min: 30,
        max: 89,
        display: false,
        grid: {
          display: false
        },
        ticks: {
          display: false
        }
      }
    },
    elements: {
      line: {
        borderWidth: 1,
        tension: 0.4
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4
      }
    }
  };
 
  slides: any[] = new Array().fill({id: -1, src: '', title: '', subtitle: ''});
slideArray:any
loading: boolean = true;
  ngOnInit(): void {

this.slideArray=[]
 let Imagedata:any
 Imagedata=[]

    this.setData();
 
  //    this.service.fetchALLEventDataData().subscribe(
  //     (data) => {
  //       // Access the global variable here
       
  //       console.log('Inside subscription:', data);
  //       console.log(" the slideArray ",data.data[0].Image)
  //       for(let i=0;i<data.data.length;i++)
  //       {
  //       Imagedata.push(data.data[i].Image)
  //       }
       
  //       for(let i=0;i<Imagedata.length;i++)
  //       {
       
  //         for(let j=0;j<Imagedata[i].length;j++)
  //         {
  //           console.log(" in the image array ",Imagedata)
  //         this.slideArray.push( {
  //           "id": i,
  //           "src": Imagedata[i][j],
  //           "title": "BirthDay",
  //           "subtitle": "testing _testing"
  //       })
   
  //         }
  //       }
  //       this.loading = false;
  // console.log(this.slideArray)
    
  //     },
  //     (error) => {
  //       console.error('Error in subscription:', error);
  //     }
  //      )

    // this.slides= 
    //   {
    //       "id": 0,
    //       "src": "https://s3.amazonaws.com/eventwebsiteimages/95ed57ce-3e31-4d2a-be04-ae89dd705113",
    //       "title": "BirthDay",
    //       "subtitle": "testing _testing"
    //   }
  
      this.slideArray=  [ {
        "id": 0,
        "src": "./assets/images/birthday3.jpg",
        "title": "BirthDay",
        "subtitle": "Birthday celebration Customise price "
    },
  
  {
    "id": 1,
    "src": "./assets/images/wedding3.jpg",
    "title": "wedding Decoration",
    "subtitle": "wedding full decoration 30K Rupess"
},

{
  "id": 3,
  "src": "./assets/images/babyshower.jpg",
  "title": "Baby Shower",
  "subtitle": "Baby Shower Customise Price"
},

  ]
  }

  ngAfterContentInit(): void {
    this.changeDetectorRef.detectChanges();

  }

  setData() {
    for (let idx = 0; idx < 4; idx++) {
      this.data[idx] = {
        labels: idx < 3 ? this.labels.slice(0, 7) : this.labels,
        datasets: this.datasets[idx]
      };
    }
    this.setOptions();
  }

  setOptions() {
    for (let idx = 0; idx < 4; idx++) {
      const options = JSON.parse(JSON.stringify(this.optionsDefault));
      switch (idx) {
        case 0: {
          this.options.push(options);
          break;
        }
        case 1: {
          options.scales.y.min = -9;
          options.scales.y.max = 39;
          this.options.push(options);
          break;
        }
        case 2: {
          options.scales.x = { display: false };
          options.scales.y = { display: false };
          options.elements.line.borderWidth = 2;
          options.elements.point.radius = 0;
          this.options.push(options);
          break;
        }
        case 3: {
          options.scales.x.grid = { display: false, drawTicks: false };
          options.scales.x.grid = { display: false, drawTicks: false, drawBorder: false };
          options.scales.y.min = undefined;
          options.scales.y.max = undefined;
          options.elements = {};
          this.options.push(options);
          break;
        }
      }
    }
  }

  async getImageDataFun()
  {
    let ImageData:any
  //  await this.service.fetchALLEventDataData().subscribe(
  //   (data) => {
  //     // Access the global variable here
  //     ImageData = data;
  //     console.log('Inside subscription:', ImageData);
  //     console.log(" the slideArray ",ImageData.data[0].Image)
  //       for(let i=0;i<ImageData.data[0].Image.length;i++)
  //    {let temp:any
     
  //      for(let j=0;j<ImageData.data[i].Image.length;j++)
  //      {
  //        temp={
  //        id: i,
  //        src: ImageData.data[i].Image[j],
  //        title: ImageData.data[i].Name,
  //        subtitle: 'testing _testing'
  //       }
  //      }
  //      this.slideArray.push(temp)
  //      console.log(" the slideArray ",this.slideArray)
  //    }
  //   },
  //   (error) => {
  //     console.error('Error in subscription:', error);
  //   }
  //    )
 console.log(" Image Data from Widgets dun",ImageData)
   
  }
}

@Component({
  selector: 'app-chart-sample',
  template: '<c-chart type="line" [data]="data" [options]="options" width="300" #chart></c-chart>'
})
export class ChartSample implements AfterViewInit {

  constructor() {}

  @ViewChild('chart') chartComponent!: ChartjsComponent;

  colors = {
    label: 'My dataset',
    backgroundColor: 'rgba(77,189,116,.2)',
    borderColor: '#4dbd74',
    pointHoverBackgroundColor: '#fff'
  };

  labels = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  data = {
    labels: this.labels,
    datasets: [{
      data: [65, 59, 84, 84, 51, 55, 40],
      ...this.colors,
      fill: { value: 65 }
    }]
  };

  options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    elements: {
      line: {
        tension: 0.4
      }
    }
  };

  ngAfterViewInit(): void {
    setTimeout(() => {
      const data = () => {
        return {
          ...this.data,
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
          datasets: [{
            ...this.data.datasets[0],
            data: [42, 88, 42, 66, 77],
            fill: { value: 55 }
          }, { ...this.data.datasets[0], borderColor: '#ffbd47', data: [88, 42, 66, 77, 42] }]
        };
      };
      const newLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
      const newData = [42, 88, 42, 66, 77];
      let { datasets, labels } = { ...this.data };
      // @ts-ignore
      const before = this.chartComponent?.chart?.data.datasets.length;
      console.log('before', before);
      // console.log('datasets, labels', datasets, labels)
      // @ts-ignore
      // this.data = data()
      this.data = {
        ...this.data,
        datasets: [{ ...this.data.datasets[0], data: newData }, {
          ...this.data.datasets[0],
          borderColor: '#ffbd47',
          data: [88, 42, 66, 77, 42]
        }],
        labels: newLabels
      };
      // console.log('datasets, labels', { datasets, labels } = {...this.data})
      // @ts-ignore
      setTimeout(() => {
        const after = this.chartComponent?.chart?.data.datasets.length;
        console.log('after', after);
      });
    }, 5000);
  }
}


