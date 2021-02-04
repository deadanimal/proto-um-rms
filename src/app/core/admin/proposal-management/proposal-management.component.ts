import { Component, OnInit, NgZone, OnDestroy, TemplateRef, ViewChild } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_moonrisekingdom from "@amcharts/amcharts4/themes/moonrisekingdom";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import swal from "sweetalert2";
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-proposal-management',
  templateUrl: './proposal-management.component.html',
  styleUrls: ['./proposal-management.component.scss']
})
export class ProposalManagementComponent implements OnInit, OnDestroy {

  // Tab
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
 
  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }
  
  // Chart
  private chartProposalManagementPie1: any
  private chartProposalManagementPie2: any
  private chartProposalManagementClustered1: any
  
  defaultModal: BsModalRef;
  default = {
    keyboard: true,
    class: "modal-dialog-centered"
  };

  constructor(
    private zone: NgZone,
    private modalService: BsModalService,
  ) { }

  ngOnInit() {
    this.getCharts()
  }

  openModal(modalDefault: TemplateRef<any>) {
    this.defaultModal = this.modalService.show(modalDefault, this.default);
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(
      () => {
        if (this.chartProposalManagementPie1) {
          console.log('Chart disposed')
          this.chartProposalManagementPie1.dispose()
        }
        if (this.chartProposalManagementPie2) {
          console.log('Chart disposed')
          this.chartProposalManagementPie2.dispose()
        }
        if (this.chartProposalManagementClustered1) {
          console.log('Chart disposed')
          this.chartProposalManagementClustered1.dispose()
        }
      }
    )
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChartProposalManagementPie1()
      this.getChartProposalManagementPie2()
      this.getChartProposalManagementClustered1()
    })
  }

  getChartProposalManagementPie1 () {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chartProposalManagementPie1 = am4core.create("chartproposalmanagementpie1", am4charts.PieChart);

    // Add data
    chartProposalManagementPie1.data = [ {
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
    let pieSeries = chartProposalManagementPie1.series.push(new am4charts.PieSeries());
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

  getChartProposalManagementPie2 () {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_moonrisekingdom);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chartProposalManagementPie2 = am4core.create("chartproposalmanagementpie2", am4charts.PieChart);

    // Add data
    chartProposalManagementPie2.data = [ {
      "country": "Approved",
      "litres": 501.9
    }, {
      "country": "Pending",
      "litres": 301.9
    }, {
      "country": "Reject",
      "litres": 201.1
    }, ];

    // Add and configure Series
    let pieSeries = chartProposalManagementPie2.series.push(new am4charts.PieSeries());
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

  getChartProposalManagementClustered1 () {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chartProposalManagementClustered1 = am4core.create('chartproposalmanagementclustered1', am4charts.XYChart)
    chartProposalManagementClustered1.colors.step = 2;

    chartProposalManagementClustered1.legend = new am4charts.Legend()
    chartProposalManagementClustered1.legend.position = 'top'
    chartProposalManagementClustered1.legend.paddingBottom = 20
    chartProposalManagementClustered1.legend.labels.template.maxWidth = 95

    let xAxis = chartProposalManagementClustered1.xAxes.push(new am4charts.CategoryAxis())
    xAxis.dataFields.category = 'category'
    xAxis.renderer.cellStartLocation = 0.1
    xAxis.renderer.cellEndLocation = 0.9
    xAxis.renderer.grid.template.location = 0;

    let yAxis = chartProposalManagementClustered1.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;

    function createSeries(value, name) {
        let series = chartProposalManagementClustered1.series.push(new am4charts.ColumnSeries())
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

    chartProposalManagementClustered1.data = [
        {
            category: 'Area 1',
            approved: 40,
            pending: 55,
            reject: 60,
        },
        {
            category: 'Area 2',
            approved: 30,
            pending: 78,
            reject: 69,
        },
        {
            category: 'Area 3',
            approved: 27,
            pending: 40,
            reject: 45,
        },
        {
            category: 'Area 4',
            approved: 50,
            pending: 33,
            reject: 22,
        }
    ]


    createSeries('approved', 'Approved');
    createSeries('pending', 'Pending');
    createSeries('reject', 'Reject');

    function arrangeColumns() {

        let series = chartProposalManagementClustered1.series.getIndex(0);

        let w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
        if (series.dataItems.length > 1) {
            let x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
            let x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
            let delta = ((x1 - x0) / chartProposalManagementClustered1.series.length) * w;
            if (am4core.isNumber(delta)) {
                let middle = chartProposalManagementClustered1.series.length / 2;

                let newIndex = 0;
                chartProposalManagementClustered1.series.each(function(series) {
                    if (!series.isHidden && !series.isHiding) {
                        series.dummyData = newIndex;
                        newIndex++;
                    }
                    else {
                        series.dummyData = chartProposalManagementClustered1.series.indexOf(series);
                    }
                })
                let visibleCount = newIndex;
                let newMiddle = visibleCount / 2;

                chartProposalManagementClustered1.series.each(function(series) {
                    let trueIndex = chartProposalManagementClustered1.series.indexOf(series);
                    let newIndex = series.dummyData;

                    let dx = (newIndex - trueIndex + middle - newMiddle) * delta

                    series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                    series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                })
            }
        }
    }
  }

  successSwal() {
    swal.fire({
      title: "Submitted",
      text: "Successfully submitted",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success"
    });
    this.defaultModal.hide()
  }

  warningSwal() {
    swal.fire({
      title: "Reject?",
      text: "Are you sure to reject? This cannot be undo.",
      type: "warning",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-warning"
    });
    this.defaultModal.hide()
  }

}
