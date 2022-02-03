import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  data: any;

  constructor(private http:HttpClient) { }
getData(){
  // const url =`http://www.omdbapi.com/?apikey=fdc8eb20&movies`
  const url =`https://imdb-api.com/en/API/MostPopularTVs/k_c924ryi1`
  return this.http.get(url).subscribe((res)=>{
    this.data=res;
    console.log(res);
    
  })
}
  ngOnInit(): void {
    this.getData()
    
  }

}
