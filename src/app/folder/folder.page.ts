import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})


export class FolderPage implements OnInit {
  public topic: any;
  public newsData: any;
  public folder!: string;
  //name: any;


  constructor(private activatedRoute: ActivatedRoute, public api:ApiService) { }
  
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  };

  search(){
    this.api.getNews(this.topic).subscribe(result=>{
      console.log(result);
      this.newsData=result['articles'];
    });

  }
}
