import { Component, OnInit, NgZone, OnDestroy, TemplateRef } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_moonrisekingdom from "@amcharts/amcharts4/themes/moonrisekingdom";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: 'app-applicant-matchup',
  templateUrl: './applicant-matchup.component.html',
  styleUrls: ['./applicant-matchup.component.scss']
})
export class ApplicantMatchupComponent implements OnInit, OnDestroy {

  private chartApplicantMatchupPie1: any

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
        if (this.chartApplicantMatchupPie1) {
          console.log('Chart disposed')
          this.chartApplicantMatchupPie1.dispose()
        }
      }
    )
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getchartApplicantMatchupPie1()
    })
  }

  getchartApplicantMatchupPie1 () {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_moonrisekingdom);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chartApplicantMatchupPie1 = am4core.create("chartapplicantmatchuppie1", am4charts.PieChart);

    // Add data
    chartApplicantMatchupPie1.data = [ {
      "country": "0-24",
      "litres": 501.9
    }, {
      "country": "25-49",
      "litres": 301.9
    }, {
      "country": "50-74",
      "litres": 201.1
    }, {
      "country": "74-100",
      "litres": 165.8
    }, ];

    // Add and configure Series
    let pieSeries = chartApplicantMatchupPie1.series.push(new am4charts.PieSeries());
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
}
