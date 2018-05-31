import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private client_id = '300d75a1975f21f8d90d';
    private client_secret = '3eb9e25656813946f6e16d72401d32b1ad02ee54';

    constructor( private _http: Http){
        console.log('GitHub Works!');
    }

    getUser(username: string){
        return this._http.get('http://api.github.com/users/' + username + '?client_id=' + this.client_id +
            '&client_secret=' + this.client_secret)
            .map(res => res.json())
    }

    getUsers(name: string, pageNo: number){
        // return this._http.get('http://api.github.com/legacy/user/search/' + this.username + '?client_id=' + this.client_id +
        //     '&client_secret=' + this.client_secret)
        //     .map(res => res.json())
        return this._http.get('http://api.github.com/search/users?q=' + name + '+in%3Alogin&type=Users&page=' + pageNo + 
            '&per_page=10&client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json())
    }

    getRepos(username: string){
        return this._http.get('http://api.github.com/users/' + username + '/repos?client_id=' + this.client_id +
            '&client_secret=' + this.client_secret)
            .map(res => res.json())
    }

}
