import { Component, OnInit } from '@angular/core';
import {MajorService} from '../major.service';
import {Major} from '../major';

@Component({
  selector: 'app-major',
  templateUrl: './major.component.html',
  styleUrls: ['./major.component.css']
})
export class MajorComponent implements OnInit {
  majors: Major[];
  constructor(private majorService: MajorService) { }

  ngOnInit() {
    this.getMajors();
  }

  getMajors(): void {
    this.majorService.getMajorList().subscribe(majors => {
      this.majors = majors;
      console.log(this.majors);
    });
  }

}
