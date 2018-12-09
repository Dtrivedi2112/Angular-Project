import { Component, OnInit } from '@angular/core';

import { Profile } from '../profile.model';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

	profiles: Profile[] = [

	new Profile('hi','fvs','fsd','fs','vfd','fssd','fsgf','bdfbg','gtght')


	];	

  constructor() { }

  ngOnInit() {
  }

}
