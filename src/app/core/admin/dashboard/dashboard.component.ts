import { Component, OnInit, NgZone, OnDestroy } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_moonrisekingdom from "@amcharts/amcharts4/themes/moonrisekingdom";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import { Router } from '@angular/router';
import { ProgressbarConfig } from 'ngx-bootstrap/progressbar';

export function getProgressbarConfig(): ProgressbarConfig {
  return Object.assign(new ProgressbarConfig(), { animate: true, striped: true,  max: 100 });
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [{ provide: ProgressbarConfig, useFactory: getProgressbarConfig }]
})
export class DashboardComponent implements OnInit, OnDestroy {

  // Date 
  today: number = Date.now();

  // Chart
  private chartDashboardBar1: any
  private chartDashboardPie1: any
  private chartDashboardPie2: any
  private chartDashboardStacked1: any
  private chartDashboardClustered1: any
  private clicked: any = true
  private clicked1: any = false

  constructor(
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.getCharts()
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(
      () => {
        if (this.chartDashboardBar1) {
          console.log('Chart disposed')
          this.chartDashboardBar1.dispose()
        }
        if (this.chartDashboardPie1) {
          console.log('Chart disposed')
          this.chartDashboardPie1.dispose()
        }
        if (this.chartDashboardPie2) {
          console.log('Chart disposed')
          this.chartDashboardPie2.dispose()
        }
        if (this.chartDashboardStacked1) {
          console.log('Chart disposed')
          this.chartDashboardStacked1.dispose()
        }
        if (this.chartDashboardClustered1) {
          console.log('Chart disposed')
          this.chartDashboardClustered1.dispose()
        }
      }
    )
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChartDashboardBar1()
      this.getChartDashboardPie1()
      this.getChartDashboardPie2()
      this.getChartDashboardStacked1()
      this.getChartDashboardClustered1()
    })
  }

  getChartDashboardBar1 () {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chartDashboardBar1 = am4core.create("chartdashboardbar1", am4charts.XYChart);

    chartDashboardBar1.data = [{
    "month": "January",
    "grantCall": 2025
    }, {
    "month": "February",
    "grantCall": 1882
    }, {
    "month": "March",
    "grantCall": 1809
    }, {
    "month": "April",
    "grantCall": 1322
    }, {
    "month": "May",
    "grantCall": 1122
    }, {
    "month": "June",
    "grantCall": 1114
    }, {
    "month": "July",
    "grantCall": 984
    }, {
    "month": "August",
    "grantCall": 711
    }, {
    "month": "September",
    "grantCall": 665
    }, {
    "month": "October",
    "grantCall": 580
    }, {
    "month": "November",
    "grantCall": 443
    }, {
    "month": "December",
    "grantCall": 441
    }];

    chartDashboardBar1.padding(40, 40, 40, 40);

    let categoryAxis = chartDashboardBar1.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "month";
    categoryAxis.renderer.minGridDistance = 60;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.disabled = true;

    let valueAxis = chartDashboardBar1.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.extraMax = 0.1;
    //valueAxis.rangeChangeEasing = am4core.ease.linear;
    //valueAxis.rangeChangeDuration = 1500;

    let series = chartDashboardBar1.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "month";
    series.dataFields.valueY = "grantCall";
    series.tooltipText = "{valueY.value}"
    series.columns.template.strokeOpacity = 0;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.cornerRadiusTopLeft = 10;
    //series.interpolationDuration = 1500;
    //series.interpolationEasing = am4core.ease.linear;
    let labelBullet = series.bullets.push(new am4charts.LabelBullet());
    labelBullet.label.verticalCenter = "bottom";
    labelBullet.label.dy = -10;
    labelBullet.label.text = "{values.valueY.workingValue.formatNumber('#.')}";

    chartDashboardBar1.zoomOutButton.disabled = true;

    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add("fill", function (fill, target) {
    return chartDashboardBar1.colors.getIndex(target.dataItem.index);
    });

    setInterval(function () {
    am4core.array.each(chartDashboardBar1.data, function (item) {
      item.grantCall += Math.round(Math.random() * 200 - 100);
      item.grantCall = Math.abs(item.grantCall);
    })
    chartDashboardBar1.invalidateRawData();
    }, 2000)

    categoryAxis.sortBySeries = series;
  }

  getChartDashboardPie1 () {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chartDashboardPie1 = am4core.create("chartdashboardpie1", am4charts.PieChart);

    // Add data
    chartDashboardPie1.data = [ {
      "country": "University",
      "litres": 501.9
    }, {
      "country": "Government / Agencies",
      "litres": 301.9
    }, {
      "country": "Private / Industry",
      "litres": 201.1
    }, {
      "country": "International",
      "litres": 165.8
    }, ];

    // Add and configure Series
    let pieSeries = chartDashboardPie1.series.push(new am4charts.PieSeries());
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

  getChartDashboardPie2 () {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_moonrisekingdom);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chartDashboardPie2 = am4core.create("chartdashboardpie2", am4charts.PieChart);

    // Add data
    chartDashboardPie2.data = [ {
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
    let pieSeries = chartDashboardPie2.series.push(new am4charts.PieSeries());
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

  getChartDashboardStacked1 () {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chartDashboardStacked1 = am4core.create("chartdashboardstacked1", am4charts.XYChart3D);

    // Add data
    chartDashboardStacked1.data = [{
        "category": "A",
        "year2017": 3.5,
        "year2018": 4.2
    }, {
        "category": "B",
        "year2017": 2.6,
        "year2018": 4.9
    }, {
        "category": "C",
        "year2017": 6.4,
        "year2018": 7.2
    }, {
        "category": "D",
        "year2017": 6,
        "year2018": 7.1
    }, {
        "category": "E",
        "year2017": 9.9,
        "year2018": 10.1
    }];

    // Create axes
    let categoryAxis = chartDashboardStacked1.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    let valueAxis = chartDashboardStacked1.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Grant Extension Area";
    valueAxis.renderer.labels.template.adapter.add("text", function(text) {
      return text + "%";
    });

    // Create series
    let series = chartDashboardStacked1.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "year2017";
    series.dataFields.categoryX = "category";
    series.name = "Year 2017";
    series.clustered = false;
    series.columns.template.tooltipText = "With cost: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.9;

    let series2 = chartDashboardStacked1.series.push(new am4charts.ColumnSeries3D());
    series2.dataFields.valueY = "year2018";
    series2.dataFields.categoryX = "category";
    series2.name = "Year 2018";
    series2.clustered = false;
    series2.columns.template.tooltipText = "Without cost: [bold]{valueY}[/]";
  }

  getChartDashboardClustered1 () {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_material);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chartDashboardClustered1 = am4core.create('chartdashboardclustered1', am4charts.XYChart)
    chartDashboardClustered1.colors.step = 2;

    chartDashboardClustered1.legend = new am4charts.Legend()
    chartDashboardClustered1.legend.position = 'top'
    chartDashboardClustered1.legend.paddingBottom = 20
    chartDashboardClustered1.legend.labels.template.maxWidth = 95

    let xAxis = chartDashboardClustered1.xAxes.push(new am4charts.CategoryAxis())
    xAxis.dataFields.category = 'category'
    xAxis.renderer.cellStartLocation = 0.1
    xAxis.renderer.cellEndLocation = 0.9
    xAxis.renderer.grid.template.location = 0;

    let yAxis = chartDashboardClustered1.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;

    function createSeries(value, name) {
        let series = chartDashboardClustered1.series.push(new am4charts.ColumnSeries())
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

    chartDashboardClustered1.data = [
        {
            category: 'Place #1',
            completed: 40,
            withdrawn: 55,
            terminated: 60,
            failed: 45,
        },
        {
            category: 'Place #2',
            completed: 30,
            withdrawn: 78,
            terminated: 69,
            failed: 30,
        },
        {
            category: 'Place #3',
            completed: 27,
            withdrawn: 40,
            terminated: 45,
            failed: 33,
        },
        {
            category: 'Place #4',
            completed: 50,
            withdrawn: 33,
            terminated: 22,
            failed: 40,
        }
    ]


    createSeries('completed', 'Completed');
    createSeries('withdrawn', 'Withdrawn');
    createSeries('terminated', 'Terminated');
    createSeries('failed', 'Failed');

    function arrangeColumns() {

        let series = chartDashboardClustered1.series.getIndex(0);

        let w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
        if (series.dataItems.length > 1) {
            let x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
            let x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
            let delta = ((x1 - x0) / chartDashboardClustered1.series.length) * w;
            if (am4core.isNumber(delta)) {
                let middle = chartDashboardClustered1.series.length / 2;

                let newIndex = 0;
                chartDashboardClustered1.series.each(function(series) {
                    if (!series.isHidden && !series.isHiding) {
                        series.dummyData = newIndex;
                        newIndex++;
                    }
                    else {
                        series.dummyData = chartDashboardClustered1.series.indexOf(series);
                    }
                })
                let visibleCount = newIndex;
                let newMiddle = visibleCount / 2;

                chartDashboardClustered1.series.each(function(series) {
                    let trueIndex = chartDashboardClustered1.series.indexOf(series);
                    let newIndex = series.dummyData;

                    let dx = (newIndex - trueIndex + middle - newMiddle) * delta

                    series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                    series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                })
            }
        }
    }
  }

}
