import { Component} from '@angular/core';
import {ChartDataService} from '../../../services/chart.data.service';
 
@Component({
    moduleId: module.id,
    selector: 'polarAreaChart-cmp',
    templateUrl: 'polarAreaChart.component.html'
})
export class PolarAreaChartComponent {
 
  // PolarArea
  public polarAreaChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
  public polarAreaChartData:number[] = [300, 500, 100, 40, 120];
  public polarAreaLegend:boolean = true;
 
  public polarAreaChartType:string = 'polarArea';
   private closeConfigWindow:boolean = false;
  private service: ChartDataService;
  private serviceURL: string;
  private title: string;


  public constructor(){this.service = new ChartDataService();}


  private connectToService(serviceURL: string){

    this.closeConfigWindow = true;

    this.service.connect(serviceURL);

    this.service.getObservableData().subscribe(newValue => {
     // for(let i=0; i<this.lineChartData.length;i++)
     
        //this.zone.run(() => {
          this.polarAreaChartData.push(parseInt(newValue));
          this.polarAreaChartData.shift();
          this.polarAreaChartData = this.polarAreaChartData.slice(0);
        //});

        /*if(this.polarAreaChartData.length == this.doughnutChartLabels.length){
          this.zone.run(() => {
            this.polarAreaChartData = this.polarAreaChartData.slice(0);
            this.polarAreaChartData.length = 0;
          });
        }*/
    });
    this.serviceURL = serviceURL;
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.service.closeConnection(this.serviceURL);
  }

  // events
  public chartClicked(e:any):void {  }
  
  public chartHovered(e:any):void {  }
}