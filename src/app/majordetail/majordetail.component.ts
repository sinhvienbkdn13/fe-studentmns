import { Component, OnInit } from '@angular/core';
import {Major} from '../major';
import {MajorService} from '../major.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-majordetail',
  templateUrl: './majordetail.component.html',
  styleUrls: ['./majordetail.component.css']
})
export class MajordetailComponent implements OnInit {
  majorDetail: Major;

  constructor(private majorService: MajorService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getMajorDetails(id);
  }

  getMajorDetails(id): void {
    this.majorService.getMajorById(id).subscribe(major => {
      this.majorDetail = major;
      console.log(this.majorDetail);
    });
  }

}
