import { Component } from "@angular/core";

@Component({
  selector: "datepicker-min-max-example",
  templateUrl: "datepicker-min-max-example.html"
})
export class DatepickerMinMaxExample {
  dateDepart = new Date(2017, 0, 1);

  minDate = new Date(2017, 0, 1);
  maxDate = new Date(2017, 11, 31);
}
