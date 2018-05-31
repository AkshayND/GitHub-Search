import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GithubService } from '../../../services/github.service';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	username: string;
	user: any;
	repos: any[];

	constructor(private route: ActivatedRoute, private ghService: GithubService) { }

	ngOnInit() {
		this.route.params
			.subscribe(
				(params: Params) => {
					this.username = params['id'];
					this.ghService.getUser(this.username).subscribe(user =>{
						this.user = user;
						  console.log(this.user);
					  });
				  
					  this.ghService.getRepos(this.username).subscribe(repos =>{
					    this.repos = repos;
					    console.log(repos);
					  });
				}
			)
	}

}
