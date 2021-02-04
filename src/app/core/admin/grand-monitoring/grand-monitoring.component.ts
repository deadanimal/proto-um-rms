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
import { User } from 'src/assets/mock/admin-user/users.model';

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-grand-monitoring',
  templateUrl: './grand-monitoring.component.html',
  styleUrls: ['./grand-monitoring.component.scss']
})
export class GrandMonitoringComponent implements OnInit, OnDestroy {

  private chartGrantMonitoringPie1: any
  private chartGrantMonitoringPie2: any
  private chartGrantMonitoringGroupedSorted1: any
  private chartGrantMonitoringTimeline1: any

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
      typeGrant: "A",
      researchDuration: "9 Months",
      submissionData : "1/1/2020",
    },
    {
      nicheArea: "2",
      typeGrant: "B",
      researchDuration: "9 Months",
      submissionData : "1/1/2020",
    },
    {
      nicheArea: "3",
      typeGrant: "C",
      researchDuration: "9 Months",
      submissionData : "1/1/2020",
    },
    {
      nicheArea: "4",
      typeGrant: "D",
      researchDuration: "9 Months",
      submissionData : "1/1/2020",
    },
    {
      nicheArea: "5",
      typeGrant: "E",
      researchDuration: "9 Months",
      submissionData : "1/1/2020",
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
        if (this.chartGrantMonitoringPie1) {
          console.log('Chart disposed')
          this.chartGrantMonitoringPie1.dispose()
        }
        if (this.chartGrantMonitoringPie2) {
          console.log('Chart disposed')
          this.chartGrantMonitoringPie2.dispose()
        }
        if (this.chartGrantMonitoringGroupedSorted1) {
          console.log('Chart disposed')
          this.chartGrantMonitoringGroupedSorted1.dispose()
        }
        if (this.chartGrantMonitoringTimeline1) {
          console.log('Chart disposed')
          this.chartGrantMonitoringTimeline1.dispose()
        }
      }
    )
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChartGrantMonitoringPie1()
      this.getChartGrantMonitoringPie2()
      this.getChartGrantMonitoringGroupedSorted1()
      this.getChartGrantMonitoringTimeline1()
    })
  }

  getChartGrantMonitoringPie1 () {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chartGrantMonitoringPie1 = am4core.create("chartgrantmonitoringpie1", am4charts.PieChart);

    // Add data
    chartGrantMonitoringPie1.data = [ {
      "country": "1",
      "litres": 501.9
    }, {
      "country": "2",
      "litres": 301.9
    }, {
      "country": "3",
      "litres": 201.1
    }, {
      "country": "4",
      "litres": 165.8
    }, ];

    // Add and configure Series
    let pieSeries = chartGrantMonitoringPie1.series.push(new am4charts.PieSeries());
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

  getChartGrantMonitoringPie2 () {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_moonrisekingdom);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chartGrantMonitoringPie2 = am4core.create("chartgrantmonitoringpie2", am4charts.PieChart);

    // Add data
    chartGrantMonitoringPie2.data = [ {
      "country": "Area 1",
      "litres": 501.9
    }, {
      "country": "Area 2",
      "litres": 301.9
    }, {
      "country": " Area 3",
      "litres": 201.1
    }, {
      "country": " Area 4",
      "litres": 452.1
    }, ];

    // Add and configure Series
    let pieSeries = chartGrantMonitoringPie2.series.push(new am4charts.PieSeries());
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

  getChartGrantMonitoringGroupedSorted1 () {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("chartgrantmonitoringgroupedsorted1", am4charts.XYChart);

    // some extra padding for range labels
    chart.paddingBottom = 50;

    chart.cursor = new am4charts.XYCursor();
    chart.scrollbarX = new am4core.Scrollbar();

    // will use this to store colors of the same items
    let colors = {};

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.minGridDistance = 60;
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataItems.template.text = "{realName}";
    categoryAxis.adapter.add("tooltipText", function(tooltipText, target){
      let abc = categoryAxis.tooltipDataItem.dataContext as any;
      return abc.realName;
    })

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.min = 0;

    // single column series for all data
    let columnSeries = chart.series.push(new am4charts.ColumnSeries());
    columnSeries.columns.template.width = am4core.percent(80);
    columnSeries.tooltipText = "{provider}: {realName}, {valueY}";
    columnSeries.dataFields.categoryX = "category";
    columnSeries.dataFields.valueY = "value";

    // second value axis for quantity
    let valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis2.renderer.opposite = true;
    valueAxis2.syncWithAxis = valueAxis;
    valueAxis2.tooltip.disabled = true;

    // quantity line series
    let lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.tooltipText = "{valueY}";
    lineSeries.dataFields.categoryX = "category";
    lineSeries.dataFields.valueY = "quantity";
    lineSeries.yAxis = valueAxis2;
    lineSeries.bullets.push(new am4charts.CircleBullet());
    lineSeries.stroke = chart.colors.getIndex(13);
    lineSeries.fill = lineSeries.stroke;
    lineSeries.strokeWidth = 2;
    lineSeries.snapTooltip = true;

    // when data validated, adjust location of data item based on count
    lineSeries.events.on("datavalidated", function(){
    lineSeries.dataItems.each(function(dataItem){
      // if count divides by two, location is 0 (on the grid)
      let wasd = dataItem.dataContext as any;
      if(wasd.count / 2 == Math.round(wasd.count / 2)){
      dataItem.setLocation("categoryX", 0);
      }
      // otherwise location is 0.5 (middle)
      else{
        dataItem.setLocation("categoryX", 0.5);
      }
    })
    })

    // fill adapter, here we save color value to colors object so that each time the item has the same name, the same color is used
    columnSeries.columns.template.adapter.add("fill", function(fill, target) {
    let qwerty = target.dataItem.dataContext as any;
    let name = qwerty.realName;
    if (!colors[name]) {
      colors[name] = chart.colors.next();
    }
    target.stroke = colors[name];
    return colors[name];
    })


    let rangeTemplate = categoryAxis.axisRanges.template;
    rangeTemplate.tick.disabled = false;
    rangeTemplate.tick.location = 0;
    rangeTemplate.tick.strokeOpacity = 0.6;
    rangeTemplate.tick.length = 60;
    rangeTemplate.grid.strokeOpacity = 0.5;
    rangeTemplate.label.tooltip = new am4core.Tooltip();
    rangeTemplate.label.tooltip.dy = -10;
    rangeTemplate.label.cloneTooltip = false;

    ///// DATA
    let chartData = [];
    let lineSeriesData = [];

    let data =
    {
    "Provider 1": {
      "item 1": 10,
      "item 2": 35,
      "item 3": 5,
      "item 4": 20,
      "quantity":430
    },
    "Provider 2": {
      "item 1": 15,
      "item 3": 21,
      "quantity":210
    },
    "Provider 3": {
      "item 2": 25,
      "item 3": 11,
      "item 4": 17,
      "quantity":265
    },
    "Provider 4": {
      "item 3": 12,
      "item 4": 15,
      "quantity":98
    }
    }

    // process data ant prepare it for the chart
    for (var providerName in data) {
    let providerData = data[providerName];

    // add data of one provider to temp array
    let tempArray = [];
    let count = 0;
    // add items
    for (var itemName in providerData) {
      if(itemName != "quantity"){
      count++;
      // we generate unique category for each column (providerName + "_" + itemName) and store realName
      tempArray.push({ category: providerName + "_" + itemName, realName: itemName, value: providerData[itemName], provider: providerName})
      }
    }
    // sort temp array
    tempArray.sort(function(a, b) {
      if (a.value > b.value) {
      return 1;
      }
      else if (a.value < b.value) {
      return -1
      }
      else {
      return 0;
      }
    })

    // add quantity and count to middle data item (line series uses it)
    let lineSeriesDataIndex = Math.floor(count / 2);
    tempArray[lineSeriesDataIndex].quantity = providerData.quantity;
    tempArray[lineSeriesDataIndex].count = count;
    // push to the final data
    am4core.array.each(tempArray, function(item) {
      chartData.push(item);
    })

    // create range (the additional label at the bottom)
    let range = categoryAxis.axisRanges.create();
    range.category = tempArray[0].category;
    range.endCategory = tempArray[tempArray.length - 1].category;
    range.label.text = tempArray[0].provider;
    range.label.dy = 30;
    range.label.truncate = true;
    range.label.fontWeight = "bold";
    range.label.tooltipText = tempArray[0].provider;

    range.label.adapter.add("maxWidth", function(maxWidth, target){
      let range = target.dataItem as any;
      let startPosition = categoryAxis.categoryToPosition(range.category, 0);
      let endPosition = categoryAxis.categoryToPosition(range.endCategory, 1);
      let startX = categoryAxis.positionToCoordinate(startPosition);
      let endX = categoryAxis.positionToCoordinate(endPosition);
      return endX - startX;
    })
    }

    chart.data = chartData;


    // last tick
    let range = categoryAxis.axisRanges.create();
    range.category = chart.data[chart.data.length - 1].category;
    range.label.disabled = true;
    range.tick.location = 1;
    range.grid.location = 1;
  }

  getChartGrantMonitoringTimeline1() {
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chartGrantMonitoringTimeline1 = am4core.create("chartgrantmonitoringtimeline1", am4plugins_timeline.SerpentineChart);
    chartGrantMonitoringTimeline1.curveContainer.padding(50, 20, 50, 20);
    chartGrantMonitoringTimeline1.levelCount = 4;
    chartGrantMonitoringTimeline1.yAxisRadius = am4core.percent(25);
    chartGrantMonitoringTimeline1.yAxisInnerRadius = am4core.percent(-25);
    chartGrantMonitoringTimeline1.maskBullets = false;

    let colorSet = new am4core.ColorSet();
    colorSet.saturation = 0.5;

    chartGrantMonitoringTimeline1.data = [{
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

    chartGrantMonitoringTimeline1.dateFormatter.dateFormat = "yyyy-MM-dd";
    chartGrantMonitoringTimeline1.dateFormatter.inputDateFormat = "yyyy-MM-dd";
    chartGrantMonitoringTimeline1.fontSize = 11;

    let yAxis = chartGrantMonitoringTimeline1.yAxes.push(new am4charts.CategoryAxis() as any);
    yAxis.title.text = "category";
    yAxis.renderer.grid.template.disabled = true;
    yAxis.renderer.labels.template.paddingRight = 25;
    yAxis.renderer.minGridDistance = 10;
    yAxis.renderer.innerRadius = -60;
    yAxis.renderer.radius = 60;

    let dateAxis = chartGrantMonitoringTimeline1.xAxes.push(new am4charts.DateAxis() as any);
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

    let series = chartGrantMonitoringTimeline1.series.push(new am4plugins_timeline.CurveColumnSeries());
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


    let eventSeries = chartGrantMonitoringTimeline1.series.push(new am4plugins_timeline.CurveLineSeries());
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

    chartGrantMonitoringTimeline1.scrollbarX = new am4core.Scrollbar();
    chartGrantMonitoringTimeline1.scrollbarX.align = "center"
    chartGrantMonitoringTimeline1.scrollbarX.width = am4core.percent(85);

    let cursor = new am4plugins_timeline.CurveCursor();
    chartGrantMonitoringTimeline1.cursor = cursor;
    cursor.xAxis = dateAxis;
    cursor.yAxis = yAxis;
    cursor.lineY.disabled = true;
    cursor.lineX.strokeDasharray = "1,4";
    cursor.lineX.strokeOpacity = 1;

    dateAxis.renderer.tooltipLocation2 = 0;
    yAxis.cursorTooltipEnabled = false;
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

  successSwal() {
    swal.fire({
      title: "Submitted",
      text: "The data have been submitted",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success"
    });
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
