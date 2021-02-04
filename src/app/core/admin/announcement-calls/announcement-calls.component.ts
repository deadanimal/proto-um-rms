import { Component, OnInit, NgZone, OnDestroy, TemplateRef, ElementRef, ViewChild } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import { User } from 'src/assets/mock/admin-user/users.model';
import swal from "sweetalert2";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interaction from "@fullcalendar/interaction";
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { TabsetConfig } from 'ngx-bootstrap/tabs';

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

export function getTabsetConfig(): TabsetConfig {
  return Object.assign(new TabsetConfig(), { type: 'pills', isKeysAllowed: true });
}

@Component({
  selector: 'app-announcement-calls',
  templateUrl: './announcement-calls.component.html',
  styleUrls: ['./announcement-calls.component.scss'],
  providers: [{ provide: TabsetConfig, useFactory: getTabsetConfig }]
})
export class AnnouncementCallsComponent implements OnInit, OnDestroy {

  // Tab
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
 
  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }
  
  //tags
  tagItems = ["Bucharest", "Cluj", "Iasi", "Timisoara", "Piatra Neamt"];

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
      submissionDate : "1/1/2020",
      status : "publish"
    },
    {
      nicheArea: "2",
      typeGrant: "B",
      researchDuration: "9 Months",
      submissionDate : "1/1/2020",
      status : "tobepublish"
    },
    {
      nicheArea: "3",
      typeGrant: "C",
      researchDuration: "9 Months",
      submissionDate : "1/1/2020",
      status : "cancelled"
    },
    {
      nicheArea: "4",
      typeGrant: "D",
      researchDuration: "9 Months",
      submissionDate : "1/1/2020",
      status : "publish"
    },
    {
      nicheArea: "5",
      typeGrant: "E",
      researchDuration: "9 Months",
      submissionDate : "1/1/2020",
      status : "tobepublish"
    },
  ];

  //calendar
  addModal: BsModalRef;
  editModal: BsModalRef;
  @ViewChild("modalAdd") modalAdd: ElementRef;
  @ViewChild("modalEdit") modalEdit: ElementRef;
  default = {
    keyboard: true,
    class: "modal-dialog-centered modal-secondary"
  };
  radios = "bg-danger";
  eventTitle = undefined;
  eventDescription;
  eventId;
  event;
  startDate;
  endDate;
  calendar;
  today = new Date();
  y = this.today.getFullYear();
  m = this.today.getMonth();
  d = this.today.getDate();
  events = [
    {
      id: 0,
      title: "Lunch meeting",
      start: "2018-11-21",
      end: "2018-11-22",
      className: "bg-orange"
    },
    {
      id: 1,
      title: "Call with Dave",
      start: new Date(this.y, this.m, 1),
      allDay: true,
      className: "bg-red",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    },

    {
      id: 2,
      title: "Lunch meeting",
      start: new Date(this.y, this.m, this.d - 1, 10, 30),
      allDay: true,
      className: "bg-orange",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    },

    {
      id: 3,
      title: "All day conference",
      start: new Date(this.y, this.m, this.d + 7, 12, 0),
      allDay: true,
      className: "bg-green",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    },

    {
      id: 4,
      title: "Meeting with Mary",
      start: new Date(this.y, this.m, this.d - 2),
      allDay: true,
      className: "bg-blue",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    },

    {
      id: 5,
      title: "Winter Hackaton",
      start: new Date(this.y, this.m, this.d + 1, 19, 0),
      allDay: true,
      className: "bg-red",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    },

    {
      id: 6,
      title: "Digital event",
      start: new Date(this.y, this.m, 21),
      allDay: true,
      className: "bg-warning",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    },

    {
      id: 7,
      title: "Marketing event",
      start: new Date(this.y, this.m, 21),
      allDay: true,
      className: "bg-purple",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    },

    {
      id: 8,
      title: "Dinner with Family",
      start: new Date(this.y, this.m, 19),
      allDay: true,
      className: "bg-red",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    },

    {
      id: 9,
      title: "Black Friday",
      start: new Date(this.y, this.m, 23),
      allDay: true,
      className: "bg-blue",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    },

    {
      id: 10,
      title: "Cyber Week",
      start: new Date(this.y, this.m, 2),
      allDay: true,
      className: "bg-yellow",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    }
  ];

  defaultModal: BsModalRef;
  default1 = {
    keyboard: true,
    class: "modal-dialog-centered"
  };

  private chartAnnouncementCallsBar1: any
  private chartAnnouncementCallsPie1: any
  private chartAnnounceCallsBar2: any

  constructor(
    private zone: NgZone,
    private modalService: BsModalService
  ) {
    this.getData()
   }
  changeView(newView) {
  this.calendar.changeView(newView);

  currentDate: this.calendar.view.title;
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
    this.getCharts();
    this.initCalendar();
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(
      () => {
        if (this.chartAnnouncementCallsBar1) {
          console.log('Chart disposed')
          this.chartAnnouncementCallsBar1.dispose()
        }
        if (this.chartAnnouncementCallsPie1) {
          console.log('Chart disposed')
          this.chartAnnouncementCallsPie1.dispose()
        }
        if (this.chartAnnounceCallsBar2) {
          console.log('Chart disposed')
          this.chartAnnounceCallsBar2.dispose()
        }
      }
    )
  }

  openModal(modalDefault: TemplateRef<any>) {
    this.defaultModal = this.modalService.show(modalDefault, this.default1);
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChartAnnouncementCallsBar1()
      this.getChartAnnouncementCallsPie1()
      this.getChartAnnouncementCallsBar2()
    })
  }

  getChartAnnouncementCallsBar1() {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chartAnnouncementCallsBar1 = am4core.create("chartannouncementcallsbar1", am4charts.XYChart);

    chartAnnouncementCallsBar1.data = [{
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

    chartAnnouncementCallsBar1.padding(40, 40, 40, 40);

    let categoryAxis = chartAnnouncementCallsBar1.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "month";
    categoryAxis.renderer.minGridDistance = 60;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.disabled = true;

    let valueAxis = chartAnnouncementCallsBar1.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.extraMax = 0.1;
    //valueAxis.rangeChangeEasing = am4core.ease.linear;
    //valueAxis.rangeChangeDuration = 1500;

    let series = chartAnnouncementCallsBar1.series.push(new am4charts.ColumnSeries());
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

    chartAnnouncementCallsBar1.zoomOutButton.disabled = true;

    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add("fill", function (fill, target) {
    return chartAnnouncementCallsBar1.colors.getIndex(target.dataItem.index);
    });

    setInterval(function () {
    am4core.array.each(chartAnnouncementCallsBar1.data, function (item) {
      item.grantCall += Math.round(Math.random() * 200 - 100);
      item.grantCall = Math.abs(item.grantCall);
    })
    chartAnnouncementCallsBar1.invalidateRawData();
    }, 2000)

    categoryAxis.sortBySeries = series;
  }

  getChartAnnouncementCallsPie1 () {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chartAnnouncementCallsPie1 = am4core.create("chartannouncementcallspie1", am4charts.PieChart);

    // Add data
    chartAnnouncementCallsPie1.data = [ {
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
    let pieSeries = chartAnnouncementCallsPie1.series.push(new am4charts.PieSeries());
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

  getChartAnnouncementCallsBar2() {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_material);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chartAnnounceCallsBar2 = am4core.create("chartannouncecallsbar2", am4charts.XYChart);

    chartAnnounceCallsBar2.data = [{
    "country": "Annoucement 1",
    "visits": 2025
    }, {
    "country": "Annoucement 2",
    "visits": 1882
    }, {
    "country": "Annoucement 3",
    "visits": 1809
    }, {
    "country": "Annoucement 4",
    "visits": 1322
    }, {
    "country": "Annoucement 5",
    "visits": 1122
    }, {
    "country": "Annoucement 6",
    "visits": 1114
    }, {
    "country": "Annoucement 7",
    "visits": 665
    }, {
    "country": "Annoucement 8",
    "visits": 580
    }, {
    "country": "Annoucement 9",
    "visits": 443
    }, {
    "country": "Annoucement 10",
    "visits": 441
    }];

    chartAnnounceCallsBar2.padding(40, 40, 40, 40);

    let categoryAxis = chartAnnounceCallsBar2.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.minGridDistance = 60;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.disabled = true;

    let valueAxis = chartAnnounceCallsBar2.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.extraMax = 0.1;
    //valueAxis.rangeChangeEasing = am4core.ease.linear;
    //valueAxis.rangeChangeDuration = 1500;

    let series = chartAnnounceCallsBar2.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "country";
    series.dataFields.valueY = "visits";
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

    chartAnnounceCallsBar2.zoomOutButton.disabled = true;

    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add("fill", function (fill, target) {
    return chartAnnounceCallsBar2.colors.getIndex(target.dataItem.index);
    });

    setInterval(function () {
    am4core.array.each(chartAnnounceCallsBar2.data, function (item) {
      item.visits += Math.round(Math.random() * 200 - 100);
      item.visits = Math.abs(item.visits);
    })
    chartAnnounceCallsBar2.invalidateRawData();
    }, 2000)

    categoryAxis.sortBySeries = series;
  }

  initCalendar() {
    this.calendar = new Calendar(document.getElementById("calendar"), {
      plugins: [interaction, dayGridPlugin],
      defaultView: "dayGridMonth",
      selectable: true,
      editable: true,
      events: this.events,
      views: {
        month: {
          titleFormat: { month: "long", year: "numeric" }
        },
        agendaWeek: {
          titleFormat: { month: "long", year: "numeric", day: "numeric" }
        },
        agendaDay: {
          titleFormat: { month: "short", year: "numeric", day: "numeric" }
        }
      },
      // Add new event
      select: info => {
        this.addModal = this.modalService.show(this.modalAdd, this.default);
        this.startDate = info.startStr;
        this.endDate = info.endStr;
      },
      // Edit calendar event action
      eventClick: ({ event }) => {
        this.eventId = event.id;
        this.eventTitle = event.title;
        this.eventDescription = event.extendedProps.description;
        this.radios = "bg-danger";
        this.event = event;
        this.editModal = this.modalService.show(this.modalEdit, this.default);
      }
    });
    this.calendar.render();
  }
  getNewEventTitle(e) {
    this.eventTitle = e.target.value;
  }
  getNewEventDescription(e) {
    this.eventDescription = e.target.value;
  }
  addNewEvent() {
    this.events.push({
      title: this.eventTitle,
      start: this.startDate,
      end: this.endDate,
      className: this.radios,
      id: this.events.length
    });
    this.calendar.addEvent({
      title: this.eventTitle,
      start: this.startDate,
      end: this.endDate,
      className: this.radios,
      id: this.events.length
    });
    this.addModal.hide();
    this.radios = "bg-danger";
    (this.eventTitle = undefined),
      (this.eventDescription = undefined),
      (this.eventId = undefined),
      (this.event = undefined);
  }
  deleteEventSweetAlert() {
    this.editModal.hide();
    swal
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn btn-danger",
        cancelButtonClass: "btn btn-secondary",
        confirmButtonText: "Yes, delete it!",
        buttonsStyling: false
      })
      .then(result => {
        if (result.value) {
          this.events = this.events.filter(
            prop => prop.id + "" !== this.eventId
          );
          this.initCalendar();
          swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            type: "success",
            confirmButtonClass: "btn btn-primary",
            buttonsStyling: false
          });
        }
      });
    this.radios = "bg-danger";
    (this.eventTitle = undefined),
      (this.eventDescription = undefined),
      (this.eventId = undefined),
      (this.event = undefined);
  }
  updateEvent() {
    this.events = this.events.map((prop, key) => {
      if (prop.id + "" === this.eventId + "") {
        return {
          ...prop,
          title: this.eventTitle,
          className: this.radios,
          description: this.eventDescription
        };
      } else {
        return prop;
      }
    });
    this.radios = "bg-danger";
    (this.eventTitle = undefined),
      (this.eventDescription = undefined),
      (this.eventId = undefined),
      (this.event = undefined);
    this.initCalendar();
    this.editModal.hide();
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
