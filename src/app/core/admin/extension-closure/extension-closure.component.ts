import { Component, OnInit, NgZone, OnDestroy, TemplateRef } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import am4themes_moonrisekingdom from "@amcharts/amcharts4/themes/moonrisekingdom";
import am4themes_material from "@amcharts/amcharts4/themes/material";
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
  selector: 'app-extension-closure',
  templateUrl: './extension-closure.component.html',
  styleUrls: ['./extension-closure.component.scss']
})
export class ExtensionClosureComponent implements OnInit, OnDestroy {

  private chartExtensionClosurePie1: any
  private chartExtensionClosurePie2: any
  private chartExtensionClosure3DStacked1: any
  private chartExtensionClosureClustered1: any
  private chartExtensionClosureTimeline1: any

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
        if (this.chartExtensionClosurePie1) {
          console.log('Chart disposed')
          this.chartExtensionClosurePie1.dispose()
        }
        if (this.chartExtensionClosurePie2) {
          console.log('Chart disposed')
          this.chartExtensionClosurePie2.dispose()
        }
        if (this.chartExtensionClosure3DStacked1) {
          console.log('Chart disposed')
          this.chartExtensionClosure3DStacked1.dispose()
        }
        if (this.chartExtensionClosureClustered1) {
          console.log('Chart disposed')
          this.chartExtensionClosureClustered1.dispose()
        }
        if (this.chartExtensionClosureTimeline1) {
          console.log('Chart disposed')
          this.chartExtensionClosureTimeline1.dispose()
        }
      }
    )
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getchartExtensionClosurePie1()
      this.getchartExtensionClosurePie2()
      this.getchartExtensionClosure3DStacked1()
      this.getchartExtensionClosureClustered1()
      this.getchartExtensionClosureTimeline1()
    })
  }

  getchartExtensionClosurePie1 () {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chartExtensionClosurePie1 = am4core.create("chartextensionclosurepie1", am4charts.PieChart);

    // Add data
    chartExtensionClosurePie1.data = [ {
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
    let pieSeries = chartExtensionClosurePie1.series.push(new am4charts.PieSeries());
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

  getchartExtensionClosurePie2 () {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_moonrisekingdom);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chartExtensionClosurePie2 = am4core.create("chartextensionclosurepie2", am4charts.PieChart);

    // Add data
    chartExtensionClosurePie2.data = [ {
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
    let pieSeries = chartExtensionClosurePie2.series.push(new am4charts.PieSeries());
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

  getchartExtensionClosure3DStacked1 () {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chartExtensionClosure3DStacked1 = am4core.create("chartextensionclosure3dstacked1", am4charts.XYChart3D);

    // Add data
    chartExtensionClosure3DStacked1.data = [{
        "country": "USA",
        "year2017": 3.5,
        "year2018": 4.2
    }, {
        "country": "UK",
        "year2017": 1.7,
        "year2018": 3.1
    }, {
        "country": "Canada",
        "year2017": 2.8,
        "year2018": 2.9
    }, {
        "country": "Japan",
        "year2017": 2.6,
        "year2018": 2.3
    }, {
        "country": "France",
        "year2017": 1.4,
        "year2018": 2.1
    }, {
        "country": "Brazil",
        "year2017": 2.6,
        "year2018": 4.9
    }, {
        "country": "Russia",
        "year2017": 6.4,
        "year2018": 7.2
    }, {
        "country": "India",
        "year2017": 8,
        "year2018": 7.1
    }, {
        "country": "China",
        "year2017": 9.9,
        "year2018": 10.1
    }];

    // Create axes
    let categoryAxis = chartExtensionClosure3DStacked1.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    let valueAxis = chartExtensionClosure3DStacked1.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "GDP growth rate";
    valueAxis.renderer.labels.template.adapter.add("text", function(text) {
      return text + "%";
    });

    // Create series
    let series = chartExtensionClosure3DStacked1.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "year2017";
    series.dataFields.categoryX = "country";
    series.name = "Year 2017";
    series.clustered = false;
    series.columns.template.tooltipText = "GDP grow in {category} (2017): [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.9;

    let series2 = chartExtensionClosure3DStacked1.series.push(new am4charts.ColumnSeries3D());
    series2.dataFields.valueY = "year2018";
    series2.dataFields.categoryX = "country";
    series2.name = "Year 2018";
    series2.clustered = false;
    series2.columns.template.tooltipText = "GDP grow in {category} (2017): [bold]{valueY}[/]";
  }

  getchartExtensionClosureClustered1 () {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_material);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chartExtensionClosureClustered1 = am4core.create('chartextensionclosureclustered1', am4charts.XYChart)
    chartExtensionClosureClustered1.colors.step = 2;

    chartExtensionClosureClustered1.legend = new am4charts.Legend()
    chartExtensionClosureClustered1.legend.position = 'top'
    chartExtensionClosureClustered1.legend.paddingBottom = 20
    chartExtensionClosureClustered1.legend.labels.template.maxWidth = 95

    let xAxis = chartExtensionClosureClustered1.xAxes.push(new am4charts.CategoryAxis())
    xAxis.dataFields.category = 'category'
    xAxis.renderer.cellStartLocation = 0.1
    xAxis.renderer.cellEndLocation = 0.9
    xAxis.renderer.grid.template.location = 0;

    let yAxis = chartExtensionClosureClustered1.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;

    function createSeries(value, name) {
        let series = chartExtensionClosureClustered1.series.push(new am4charts.ColumnSeries())
        series.dataFields.valueY = value
        series.dataFields.categoryX = 'category'
        series.name = name

        series.events.on("hidden", arrangeColumns);
        series.events.on("shown", arrangeColumns);

        let bullet = series.bullets.push(new am4charts.LabelBullet())
        bullet.interactionsEnabled = false
        bullet.dy = 30;
        bullet.label.text = '{valueY}'
        bullet.label.fill = am4core.color('#ffffff')

        return series;
    }

    chartExtensionClosureClustered1.data = [
        {
            category: 'Place #1',
            first: 40,
            second: 55,
            third: 60
        },
        {
            category: 'Place #2',
            first: 30,
            second: 78,
            third: 69
        },
        {
            category: 'Place #3',
            first: 27,
            second: 40,
            third: 45
        },
        {
            category: 'Place #4',
            first: 50,
            second: 33,
            third: 22
        }
    ]


    createSeries('first', 'The First');
    createSeries('second', 'The Second');
    createSeries('third', 'The Third');

    function arrangeColumns() {

        let series = chartExtensionClosureClustered1.series.getIndex(0);

        let w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
        if (series.dataItems.length > 1) {
            let x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
            let x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
            let delta = ((x1 - x0) / chartExtensionClosureClustered1.series.length) * w;
            if (am4core.isNumber(delta)) {
                let middle = chartExtensionClosureClustered1.series.length / 2;

                let newIndex = 0;
                chartExtensionClosureClustered1.series.each(function(series) {
                    if (!series.isHidden && !series.isHiding) {
                        series.dummyData = newIndex;
                        newIndex++;
                    }
                    else {
                        series.dummyData = chartExtensionClosureClustered1.series.indexOf(series);
                    }
                })
                let visibleCount = newIndex;
                let newMiddle = visibleCount / 2;

                chartExtensionClosureClustered1.series.each(function(series) {
                    let trueIndex = chartExtensionClosureClustered1.series.indexOf(series);
                    let newIndex = series.dummyData;

                    let dx = (newIndex - trueIndex + middle - newMiddle) * delta

                    series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                    series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                })
            }
        }
    }
  }

  getchartExtensionClosureTimeline1() {
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chartExtensionClosureTimeline1 = am4core.create("chartextensionclosuretimeline1", am4plugins_timeline.SerpentineChart);
    chartExtensionClosureTimeline1.curveContainer.padding(50, 20, 50, 20);
    chartExtensionClosureTimeline1.levelCount = 4;
    chartExtensionClosureTimeline1.yAxisRadius = am4core.percent(25);
    chartExtensionClosureTimeline1.yAxisInnerRadius = am4core.percent(-25);
    chartExtensionClosureTimeline1.maskBullets = false;

    let colorSet = new am4core.ColorSet();
    colorSet.saturation = 0.5;

    chartExtensionClosureTimeline1.data = [{
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

    chartExtensionClosureTimeline1.dateFormatter.dateFormat = "yyyy-MM-dd";
    chartExtensionClosureTimeline1.dateFormatter.inputDateFormat = "yyyy-MM-dd";
    chartExtensionClosureTimeline1.fontSize = 11;

    let yAxis = chartExtensionClosureTimeline1.yAxes.push(new am4charts.CategoryAxis() as any);
    yAxis.title.text = "category";
    yAxis.renderer.grid.template.disabled = true;
    yAxis.renderer.labels.template.paddingRight = 25;
    yAxis.renderer.minGridDistance = 10;
    yAxis.renderer.innerRadius = -60;
    yAxis.renderer.radius = 60;

    let dateAxis = chartExtensionClosureTimeline1.xAxes.push(new am4charts.DateAxis() as any);
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

    let series = chartExtensionClosureTimeline1.series.push(new am4plugins_timeline.CurveColumnSeries());
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


    let eventSeries = chartExtensionClosureTimeline1.series.push(new am4plugins_timeline.CurveLineSeries());
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

    chartExtensionClosureTimeline1.scrollbarX = new am4core.Scrollbar();
    chartExtensionClosureTimeline1.scrollbarX.align = "center"
    chartExtensionClosureTimeline1.scrollbarX.width = am4core.percent(85);

    let cursor = new am4plugins_timeline.CurveCursor();
    chartExtensionClosureTimeline1.cursor = cursor;
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
