import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor() { 
    this.fetch((data) => { this.rows = data; });
  }

  ngOnInit() {
  }

  rows = [];
  
	// Team
  team: Object[] = [{
    name: 'Isabela Phelaps',
    photo: 'assets/img/user-1.jpg',
    post: 'Sr.Manager',
  }, {
    name: 'Trevor Hansen',
    photo: 'assets/img/user-2.jpg',
    post: 'Manager',
  }, {
    name: 'Sandra Adams',
    photo: 'assets/img/user-3.jpg',
    post: 'Engineer',
  },{
    name: 'Sandy Smith',
    photo: 'assets/img/user-4.jpg',
    post: 'Engineer',
  },{
    name: 'Rosy Wonn',
    photo: 'assets/img/user-5.jpg',
    post: 'Jr.Engineer',
  },{
    name: 'Alex Roddy',
    photo: 'assets/img/user-6.jpg',
    post: 'Jr.Engineer',
  }];

	// project table
	fetch(cb) {
  	const req = new XMLHttpRequest();
  	req.open('GET', `assets/data/projects.json`);
  	req.onload = () => {
    	cb(JSON.parse(req.response));
  	};
  	req.send();
	}

}
