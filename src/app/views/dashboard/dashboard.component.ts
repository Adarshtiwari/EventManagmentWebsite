import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import {APIcallService} from '../../Service/apicall.service'
import { DashboardChartsData, IChartProps } from './dashboard-charts-data';
import { FormBuilder, FormGroup } from '@angular/forms';
import { isForInitializer } from 'typescript/lib/tsserverlibrary';

interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private chartsData: DashboardChartsData,private service:APIcallService,
    private formBuilder: FormBuilder) {
   
  }
  

  public users: IUser[] = [
    {
      name: 'Adarsh Tiwari',
      state: '2year Exprience',
      registered: 'Jan 1, 2021',
      country: 'indore',
      usage: 50,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: '+91 7805824855',
      activity: 'IT enginner,working as Part time',
      avatar: './assets/img/avatars/face1.jpg',
      status: 'Birthday Party, baby Shower',
      color: 'success',
    
    },
    {
      name: 'yogesh patel',
      state: '2year Exprience',
      registered: 'march 19, 2021',
      country: 'indore',
      usage: 10,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Visa',
      activity: 'Full time Event Management',
      avatar: './assets/img/avatars/face2.jpg',
      status: 'Wedding Decoration, baby Shower',
      color: 'success'
    },
    {
      name: 'Rohan Surathwale',
      state: '1year Exprience',
      registered: 'feb 12, 2022',
      country: 'Pithampur',
      usage: 74,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Stripe',
      activity: 'Teacher ,working as Part time',
      avatar: './assets/img/avatars/face3.jpg',
      status: 'Wedding Decoration, corporate gathering',
      color: 'success'
    },
    {
      name: 'mohit Rathore',
      state: 'new',
      registered: 'sept 1, 2023',
      country: 'bhopal',
      usage: 6,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Paypal',
      activity: 'IT enginner,working as Part time',
      avatar: './assets/img/avatars/face4.jpg',
      status: 'Birthday Party',
      color: 'success'
    },
 
  ];

  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month')
  });
  visible = false;
  dismissible = false;
  visibleerror=false
  dismissibleerror=false
  sucessmsg=""
  ngOnInit(): void {
    this.initCharts();
   this.Initializevariable()

  }


  Initializevariable()
  {
     this.myForm = this.formBuilder.group({
    // For example:
    name: [''],
    email: [''],
    address: [''],
    phonenumber: [''],
    pincode: [''],
    date: [],
    aboutevent: [''],
    // Add more controls as needed
  });
  }
  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }

  onSubmit() {
    // Do something with the form data
    console.log(this.myForm.value);
    let data=  {
      "name": "Adarsh Tiwari",
      "email": "aaaadarshtiwari1996@gmail.com",
      "address": "213",
      "phonenumber": "07999022579",
      "pincode": 453443,
      "date": "12-10-2019",
      "aboutevent": "adarsg"
  }
    this.service.eventRequest(data).subscribe(
      (data)=>{
        this.visible=true
        this.dismissible=true
       this.sucessmsg="data save and we also get your request"
      },
      (error)=>{
        this.visibleerror=true
        this.dismissibleerror=true
        console.log(' the error',error)
      }
      
    )
  }
}
