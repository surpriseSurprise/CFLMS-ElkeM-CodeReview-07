import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { locData } from '../destination-list';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.sass']
})
export class DestinationsComponent implements OnInit {
    locData = locData;

    constructor() { }

    ngOnInit(): void {
    }

  }
