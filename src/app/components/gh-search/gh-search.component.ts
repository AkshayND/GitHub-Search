import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-gh-search',
  templateUrl: './gh-search.component.html',
  styleUrls: ['./gh-search.component.css']
})
export class GhSearchComponent{

  users: any[];
  repos: any[];
  username: string;
  search = true;
  pageNo = 1;
  usersRetrived = false;
  totalUsers: number = 0;

  constructor(private _githubService: GithubService) {
    this.users = [];
  }

  searchAgain(){
    this.search = true;
    this.pageNo = 1;
    this.totalUsers = 0;
  }


  searchUser(){
    this.search = false;

    this._githubService.getUsers(this.username, this.pageNo).subscribe(user =>{
      this.users = user.items;
      this.totalUsers = user.total_count;
      console.log(user);
      this.usersRetrived = true;
    });

    // this._githubService.getRepos().subscribe(repos =>{
    //   this.repos = repos;
    //   console.log(repos);
    // });
  }

  nextPage(){
    this.pageNo++;
    this.usersRetrived = false;
    this.searchUser();
  }
  
  prevPage(){
    this.pageNo--;
    this.usersRetrived = false;
    this.searchUser();
  }

}
