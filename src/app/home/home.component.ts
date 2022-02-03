import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;

  constructor(private http:HttpClient) { }
getData(){
  // const url =`http://www.omdbapi.com/?apikey=fdc8eb20&movies`
  const url =`https://api.tvmaze.com/shows`
  return this.http.get(url).subscribe((res)=>{
    this.data=res;
    console.log(res);
    
  })
}
  ngOnInit(): void {
    this.getData()
    
  }

}
