import { Component, OnInit, NgZone, OnDestroy, TemplateRef } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_moonrisekingdom from "@amcharts/amcharts4/themes/moonrisekingdom";
import * as am4plugins_timeline from "@amcharts/amcharts4/plugins/timeline";
import * as am4plugins_bullets from "@amcharts/amcharts4/plugins/bullets"
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import swal from "sweetalert2";
import { User } from 'src/assets/mock/admin-user/users.model'

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-grant-contract-management',
  templateUrl: './grant-contract-management.component.html',
  styleUrls: ['./grant-contract-management.component.scss']
})
export class GrantContractManagementComponent implements OnInit, OnDestroy {

  private chartGrantContractManagementPie1: any
  private chartGrantContractManagementPie2: any
  private chartGrantContractManagementLayered1: any
  private chartGrantContractManagementTimeline1: any

  //table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: User[] = []
  SelectionType = SelectionType;

  entries: number = 10;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      nicheArea: "1",
      background: "A",
      researchDuration: "9 Months",
      dateRegistered : "1/1/2020",
    },
    {
      nicheArea: "2",
      background: "B",
      researchDuration: "9 Months",
      dateRegistered : "1/1/2020",
    },
    {
      nicheArea: "3",
      background: "C",
      researchDuration: "9 Months",
      dateRegistered : "1/1/2020",
    },
    {
      nicheArea: "4",
      background: "D",
      researchDuration: "9 Months",
      dateRegistered : "1/1/2020",
    },
    {
      nicheArea: "5",
      background: "E",
      researchDuration: "9 Months",
      dateRegistered : "1/1/2020",
    },
  ];

  defaultModal: BsModalRef;
  default = {
    keyboard: true,
    class: "modal-dialog-centered"
  };

  constructor(
    private zone: NgZone,
    private modalService: BsModalService,
  ) {
    this.getData()
   }

  getData() {
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key
      };
    });
  }

  ngOnInit() {
    this.getCharts()
  }

  openModal(modalDefault: TemplateRef<any>) {
    this.defaultModal = this.modalService.show(modalDefault, this.default);
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(
      () => {
        if (this.chartGrantContractManagementPie1) {
          console.log('Chart disposed')
          this.chartGrantContractManagementPie1.dispose()
        }
        if (this.chartGrantContractManagementPie2) {
          console.log('Chart disposed')
          this.chartGrantContractManagementPie2.dispose()
        }
        if (this.chartGrantContractManagementLayered1) {
          console.log('Chart disposed')
          this.chartGrantContractManagementLayered1.dispose()
        }
        if (this.chartGrantContractManagementTimeline1) {
          console.log('Chart disposed')
          this.chartGrantContractManagementTimeline1.dispose()
        }
      }
    )
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChartGrantContractManagementPie1()
      this.getChartGrantContractManagementPie2()
      this.getChartGrantContractManagementLayered1()
      this.getChartGrantContractManagementTimeline1()
    })
  }

  getChartGrantContractManagementPie1 () {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chartGrantContractManagementPie1 = am4core.create("chartgrantcontractmanagementpie1", am4charts.PieChart);

    // Add data
    chartGrantContractManagementPie1.data = [ {
      "country": "Area 1",
      "litres": 501.9
    }, {
      "country": "Area 2",
      "litres": 301.9
    }, {
      "country": "Area 3",
      "litres": 201.1
    }, {
      "country": "Area 4",
      "litres": 165.8
    }, {
      "country": "Area 5",
      "litres": 60
    }, ];

    // Add and configure Series
    let pieSeries = chartGrantContractManagementPie1.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
  }

  getChartGrantContractManagementPie2 () {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_moonrisekingdom);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chartGrantContractManagementPie2 = am4core.create("chartgrantcontractmanagementpie2", am4charts.PieChart);

    // Add data
    chartGrantContractManagementPie2.data = [ {
      "country": "Legal Vetting",
      "litres": 501.9
    }, {
      "country": "Negotiation",
      "litres": 301.9
    }, {
      "country": "Ready for Offer",
      "litres": 201.1
    }, ];

    // Add and configure Series
    let pieSeries = chartGrantContractManagementPie2.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
  }

  getChartGrantContractManagementLayered1 () {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chartGrantContractManagementLayered1 = am4core.create("chartgrantcontractmanagementlayered1", am4charts.XYChart);

    // Add percent sign to all numbers
    chartGrantContractManagementLayered1.numberFormatter.numberFormat = "#.#'%'";

    // Add data
    chartGrantContractManagementLayered1.data = [{
        "country": "1",
        "year2004": 3.5,
        "year2005": 4.2
    }, {
        "country": "2",
        "year2004": 1.7,
        "year2005": 3.1
    }, {
        "country": "3",
        "year2004": 2.8,
        "year2005": 2.9
    }, {
        "country": "4",
        "year2004": 2.6,
        "year2005": 2.3
    }, {
        "country": "5",
        "year2004": 1.4,
        "year2005": 2.1
    }, ];

    // Create axes
    let categoryAxis = chartGrantContractManagementLayered1.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    let valueAxis = chartGrantContractManagementLayered1.yAxes.push(new am4charts.ValueAxis());
    let abc = valueAxis.title as any;
    abc.text = "Proposal Awarded vs Pending Proposal";
    abc.fontWeight = 500;
    

    // Create series
    let series = chartGrantContractManagementLayered1.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "year2004";
    series.dataFields.categoryX = "country";
    series.clustered = false;
    series.tooltipText = "Proposal Awarded: [bold]{valueY}[/]";

    let series2 = chartGrantContractManagementLayered1.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = "year2005";
    series2.dataFields.categoryX = "country";
    series2.clustered = false;
    series2.columns.template.width = am4core.percent(50);
    series2.tooltipText = "Pending Proposal: [bold]{valueY}[/]";

    chartGrantContractManagementLayered1.cursor = new am4charts.XYCursor();
    chartGrantContractManagementLayered1.cursor.lineX.disabled = true;
    chartGrantContractManagementLayered1.cursor.lineY.disabled = true;
  }

  getChartGrantContractManagementTimeline1() {
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chartGrantContractManagementTimeline1 = am4core.create("chartgrantcontractmanagementtimeline1", am4plugins_timeline.SerpentineChart);
    chartGrantContractManagementTimeline1.curveContainer.padding(50, 20, 50, 20);
    chartGrantContractManagementTimeline1.levelCount = 4;
    chartGrantContractManagementTimeline1.yAxisRadius = am4core.percent(25);
    chartGrantContractManagementTimeline1.yAxisInnerRadius = am4core.percent(-25);
    chartGrantContractManagementTimeline1.maskBullets = false;

    let colorSet = new am4core.ColorSet();
    colorSet.saturation = 0.5;

    chartGrantContractManagementTimeline1.data = [{
        "category": "Module #1",
        "start": "2019-01-10",
        "end": "2019-01-13",
        "color": colorSet.getIndex(0),
        "task": "Gathering requirements"
    }, {
        "category": "Module #1",
        "start": "2019-02-05",
        "end": "2019-04-18",
        "color": colorSet.getIndex(0),
        "task": "Development"
    }, {
        "category": "Module #2",
        "start": "2019-01-08",
        "end": "2019-01-10",
        "color": colorSet.getIndex(5),
        "task": "Gathering requirements"
    }, {
        "category": "Module #2",
        "start": "2019-01-12",
        "end": "2019-01-15",
        "color": colorSet.getIndex(5),
        "task": "Producing specifications"
    }, {
        "category": "Module #2",
        "start": "2019-01-16",
        "end": "2019-02-05",
        "color": colorSet.getIndex(5),
        "task": "Development"
    }, {
        "category": "Module #2",
        "start": "2019-02-10",
        "end": "2019-02-18",
        "color": colorSet.getIndex(5),
        "task": "Testing and QA"
    }, {
        "category": ""
    }, {
        "category": "Module #3",
        "start": "2019-01-01",
        "end": "2019-01-19",
        "color": colorSet.getIndex(9),
        "task": "Gathering requirements"    
    }, {
        "category": "Module #3",
        "start": "2019-02-01",
        "end": "2019-02-10",
        "color": colorSet.getIndex(9),
        "task": "Producing specifications"
    }, {
        "category": "Module #3",
        "start": "2019-03-10",
        "end": "2019-04-15",
        "color": colorSet.getIndex(9),
        "task": "Development"
    }, {
        "category": "Module #3",
        "start": "2019-04-20",
        "end": "2019-04-30",
        "color": colorSet.getIndex(9),
        "task": "Testing and QA",
        "disabled2":false,
        "image2":"/assets/img/theme/team-1.jpg",
        "location":0
    }, {
        "category": "Module #4",
        "start": "2019-01-15",
        "end": "2019-02-12",
        "color": colorSet.getIndex(15),
        "task": "Gathering requirements",
        "disabled1":false,
        "image1":"/assets/img/theme/team-4.jpg"
    }, {
        "category": "Module #4",
        "start": "2019-02-25",
        "end": "2019-03-10",
        "color": colorSet.getIndex(15),
        "task": "Development"
    }, {
        "category": "Module #4",
        "start": "2019-03-23",
        "end": "2019-04-29",
        "color": colorSet.getIndex(15),
        "task": "Testing and QA"
    }];

    chartGrantContractManagementTimeline1.dateFormatter.dateFormat = "yyyy-MM-dd";
    chartGrantContractManagementTimeline1.dateFormatter.inputDateFormat = "yyyy-MM-dd";
    chartGrantContractManagementTimeline1.fontSize = 11;

    let yAxis = chartGrantContractManagementTimeline1.yAxes.push(new am4charts.CategoryAxis() as any);
    yAxis.title.text = "category";
    yAxis.renderer.grid.template.disabled = true;
    yAxis.renderer.labels.template.paddingRight = 25;
    yAxis.renderer.minGridDistance = 10;
    yAxis.renderer.innerRadius = -60;
    yAxis.renderer.radius = 60;

    let dateAxis = chartGrantContractManagementTimeline1.xAxes.push(new am4charts.DateAxis() as any);
    dateAxis.renderer.minGridDistance = 70;
    dateAxis.baseInterval = { count: 1, timeUnit: "day" };
    dateAxis.renderer.tooltipLocation = 0;
    dateAxis.startLocation = -0.5;
    dateAxis.renderer.line.strokeDasharray = "1,4";
    dateAxis.renderer.line.strokeOpacity = 0.6;
    dateAxis.tooltip.background.fillOpacity = 0.2;
    dateAxis.tooltip.background.cornerRadius = 5;
    dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
    dateAxis.tooltip.label.paddingTop = 7;

    let labelTemplate = dateAxis.renderer.labels.template;
    labelTemplate.verticalCenter = "middle";
    labelTemplate.fillOpacity = 0.7;
    labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor("background");
    labelTemplate.background.fillOpacity = 1;
    labelTemplate.padding(7, 7, 7, 7);

    let series = chartGrantContractManagementTimeline1.series.push(new am4plugins_timeline.CurveColumnSeries());
    series.columns.template.height = am4core.percent(20);
    series.columns.template.tooltipText = "{task}: [bold]{openDateX}[/] - [bold]{dateX}[/]";

    series.dataFields.openDateX = "start";
    series.dataFields.dateX = "end";
    series.dataFields.categoryY = "category";
    series.columns.template.propertyFields.fill = "color"; // get color from data
    series.columns.template.propertyFields.stroke = "color";
    series.columns.template.strokeOpacity = 0;

    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 3;
    bullet.circle.strokeOpacity = 0;
    bullet.propertyFields.fill = "color";
    bullet.locationX = 0;


    let bullet2 = series.bullets.push(new am4charts.CircleBullet());
    bullet2.circle.radius = 3;
    bullet2.circle.strokeOpacity = 0;
    bullet2.propertyFields.fill = "color";
    bullet2.locationX = 1;


    let imageBullet1 = series.bullets.push(new am4plugins_bullets.PinBullet());
    imageBullet1.disabled = true;
    imageBullet1.propertyFields.disabled = "disabled1";
    imageBullet1.locationX = 1;
    imageBullet1.circle.radius = 20;
    imageBullet1.propertyFields.stroke = "color";
    imageBullet1.background.propertyFields.fill = "color";
    imageBullet1.image = new am4core.Image();
    imageBullet1.image.propertyFields.href = "image1";

    let imageBullet2 = series.bullets.push(new am4plugins_bullets.PinBullet());
    imageBullet2.disabled = true;
    imageBullet2.propertyFields.disabled = "disabled2";
    imageBullet2.locationX = 0;
    imageBullet2.circle.radius = 20;
    imageBullet2.propertyFields.stroke = "color";
    imageBullet2.background.propertyFields.fill = "color";
    imageBullet2.image = new am4core.Image();
    imageBullet2.image.propertyFields.href = "image2";


    let eventSeries = chartGrantContractManagementTimeline1.series.push(new am4plugins_timeline.CurveLineSeries());
    eventSeries.dataFields.dateX = "eventDate";
    eventSeries.dataFields.categoryY = "category";
    eventSeries.data = [
        { category: "", eventDate: "2019-01-15", letter: "A", description: "Something happened here" },
        { category: "", eventDate: "2019-01-23", letter: "B", description: "Something happened here" },
        { category: "", eventDate: "2019-02-10", letter: "C", description: "Something happened here" },
        { category: "", eventDate: "2019-02-29", letter: "D", description: "Something happened here" },
        { category: "", eventDate: "2019-03-06", letter: "E", description: "Something happened here" },
        { category: "", eventDate: "2019-03-12", letter: "F", description: "Something happened here" },
        { category: "", eventDate: "2019-03-22", letter: "G", description: "Something happened here" }];
    eventSeries.strokeOpacity = 0;

    let flagBullet = eventSeries.bullets.push(new am4plugins_bullets.FlagBullet())
    flagBullet.label.propertyFields.text = "letter";
    flagBullet.locationX = 0;
    flagBullet.tooltipText = "{description}";

    chartGrantContractManagementTimeline1.scrollbarX = new am4core.Scrollbar();
    chartGrantContractManagementTimeline1.scrollbarX.align = "center"
    chartGrantContractManagementTimeline1.scrollbarX.width = am4core.percent(85);

    let cursor = new am4plugins_timeline.CurveCursor();
    chartGrantContractManagementTimeline1.cursor = cursor;
    cursor.xAxis = dateAxis;
    cursor.yAxis = yAxis;
    cursor.lineY.disabled = true;
    cursor.lineX.strokeDasharray = "1,4";
    cursor.lineX.strokeOpacity = 1;

    dateAxis.renderer.tooltipLocation2 = 0;
    yAxis.cursorTooltipEnabled = false;
  }

  successSwal() {
    swal.fire({
      title: "Submitted",
      text: "The data have been submitted",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success"
    });
  }

  delete() {
    swal.fire({
      title: "Confirmation",
      text: "Are you sure to delete this?",
      type: "info",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-info",
      confirmButtonText: "Confirm",
      showCancelButton: true,
      cancelButtonClass: "btn btn-danger",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.value) {
        this.doneDelete()
      }
    })
  }

  doneDelete() {
    swal.fire({
      title: "Success",
      text: "The data have been deleted!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close"
    })
  }

  confirm() {
    swal.fire({
      title: "Confirmation",
      text: "Are you sure to reject this?",
      type: "info",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-info",
      confirmButtonText: "Confirm",
      showCancelButton: true,
      cancelButtonClass: "btn btn-danger",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.value) {
        this.register()
      }
    })
  }

  register() {
    swal.fire({
      title: "Success",
      text: "The data have been rejected!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close"
    })
  }

}
