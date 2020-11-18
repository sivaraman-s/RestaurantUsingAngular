import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  user = {
    username:'',
    password:'',
    remember:false
  }
  constructor( public dialogRef : MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
  }

  onSubmit(){
    alert("Username is "+this.user.username+"\n"+"Password is "+this.user.password+"\n"+"Remember me "+this.user.remember);
    this.dialogRef.close();
  }
}
