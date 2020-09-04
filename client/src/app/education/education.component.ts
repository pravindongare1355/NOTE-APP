import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  
  
  public fbFormGroup = this.fb.group({
    title: ['', Validators.required],
    note: ['', Validators.required],

  });
  
  public imgsrc = 'assets/me.jpg';

  public list = [
    { img: 'assets/me.jpg' },
    { img: 'assets/me.jpg' },
    { img: 'assets/me.jpg' },
    { img: 'assets/me.jpg' },
    { img: 'assets/me.jpg' },
    { img: 'assets/me.jpg' },
  ];

  constructor(   
     private fb: FormBuilder,
    private router: Router,
    private http: HttpClient) {}
    arr = []; 
  ngOnInit(): void {}
  async createHere() {
    console.log("asdf");
    const data = this.fbFormGroup.value;
    const url = 'http://localhost:3025/addnote';
    console.log(data);
  
    await this.http.post(url, data).toPromise();
    this.arr.push(data);

    // this.router.navigate(['education']);
  }

  delete(){

    document.querySelector("#note").innerHTML ="";

  }
  
  
}
