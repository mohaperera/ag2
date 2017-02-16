import { Injectable }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { Http }    from '@angular/http';
import 'rxjs/add/operator/Map';
@Injectable()
export class apiData  {  


constructor (public http:Http){
console.log('data now')

}

getdata(){
    console.log(this.http.get('https://www.reddit.com/r/gifs/top/.json?limit10&sort=hot').subscribe(data=>{
        console.log(data)
    }));
}


 }