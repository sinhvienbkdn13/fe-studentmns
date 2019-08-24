import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MajorService} from '../major.service';
import {Major} from '../major';

@Component({
  selector: 'app-majoradd',
  templateUrl: './majoradd.component.html',
  styleUrls: ['./majoradd.component.css']
})
export class MajoraddComponent implements OnInit {
  major: Major = new Major();
  constructor(private majorService: MajorService) { }

  ngOnInit() {
  }

  save(): void {
    this.majorService.addMajor(this.major).subscribe(data => console.log(data), error => console.log(error));
    this.major = new Major();
  }

}
