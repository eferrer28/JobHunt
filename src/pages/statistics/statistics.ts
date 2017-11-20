import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
/**
 * Generated class for the StatisticsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()

@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})
export class StatisticsPage {

  entries = [];
  applicationTotal = 0;
  rejectionTotal = 0;
  ghostedTotal = 0;
  selectionCount = 0;
  pendingCount = 0;
  responseRate = 0;
  rejectionRate = 0;
  ghostedRate = 0;

  //@ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  //@ViewChild('lineCanvas') lineCanvas;

  //barChart: any;
  doughnutChart: any;
  //lineChart: any;

  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  
  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FirebaseProvider) {
  }

  ionViewDidLoad() {
    this.fb.authState.subscribe(user => {
      if (user) {


    console.log('ionViewDidEnter JobstatusPage');

    

    this.fb.getStats().subscribe(data => {
      console.log(data);
      this.applicationTotal = 0;
      this.rejectionTotal = 0;
      this.ghostedTotal = 0;
      this.selectionCount = 0;
      this.pendingCount = 0;
      //this.entries = data;
      let value = data.company;
      let value1 = data.position; 
      let value2 = data.date;
      console.log(data);
      //this.func();
      Object.keys(data).forEach(key => {

        //add one to the applied list
        this.applicationTotal += 1
        this.entries = data;
        //this.entries.push(key);
        //this.entries.push(data[key]);
        console.log(key);
        console.log(data[key]);
        console.log(this.entries[key]['company']);
        if (this.entries[key]['status'] == 'pending'){
          this.pendingCount += 1;
        }
        if (this.entries[key]['status'] == 'rejected'){
          this.rejectionTotal += 1;
        }
        if (this.entries[key]['status'] == 'ghosted'){
          this.ghostedTotal += 1;
        }
        if (this.entries[key]['status'] == 'selected'){
          this.selectionCount += 1;
        }
      })
      console.log("appliction count is " + this.applicationTotal);
      console.log("rejection count is " + this.rejectionTotal);
      console.log("ghosted count is " + this.ghostedTotal);
      console.log("Selection count is " + this.selectionCount);
      console.log("Pending count is " + this.pendingCount);

      this.responseRate = (this.pendingCount / this.applicationTotal) * 100;
      this.rejectionRate =  (this.rejectionTotal / this.applicationTotal) * 100;
      this.ghostedRate = (this.ghostedTotal / this.applicationTotal) * 100;
      

      this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
        
                   type: 'doughnut',
                   data: {
                       labels: ["Rejections", "Ghosted", "Selected For Interview", "Awaiting Response"],
                       datasets: [{
                           label: 'Applications Breakdown',
                           data: [this.rejectionTotal, this.ghostedTotal, this.selectionCount, this.pendingCount],
                           backgroundColor: [
                               'rgba(255, 99, 132, 0.2)',
                               'rgba(54, 162, 235, 0.2)',
                               'rgba(255, 206, 86, 0.2)',
                               'rgba(75, 192, 192, 0.2)',
  
                           ],
                           hoverBackgroundColor: [
                               "#FF6384",
                               "#36A2EB",
                               "#FFCE56",
                               "#FF6384",
  
                           ]
                       }]
                   }
        
               });
      
    }, err => {
      console.log('some err: ', err);
    });

  }

}
    )
    

  }


    



}