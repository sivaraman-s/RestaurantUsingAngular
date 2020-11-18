import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Feedback } from '../../shared/feedback';
import { Location } from '../../shared/Location';
 
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  @ViewChild("resetForm") formFeedbackDirective;
  
  location : Location;

  layout : string ;

  feedbackForm : FormGroup;
  feedback : Feedback;


  constructor( public fb : FormBuilder) {
    this.createForm();
   }

  ngOnInit(): void {
    this.layout = (window.innerWidth < 599 )? "100" : ( (window.innerWidth < 959) ? "50" : "25");

    this.location = {
      latitude :13.006068 ,
      longitude : 80.257451 ,
      maptype:"satellite",
      zoom:6,
      name:"Love Eat"
    }
  }

  createForm(){

    this.feedbackForm = this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required],
      phone:[0,Validators.required],
      subject:['',Validators.required],
      message:['',Validators.required]
    })
  }

  onChange(event){
      this.layout = (event.target.innerWidth < 599) ? "100" : ( (event.target.innerWidth < 959 )? "50" : "25");
  }


  onSubmit(){

    this.feedback = this.feedbackForm.value;
    alert("FirstName is "+this.feedback.firstname+"\n"+"LastName is "+this.feedback.lastname+"\n"+"Email is "+this.feedback.email+"\n"+"PhoneNumber is "+this.feedback.phone+"\n"+"Subject is "+this.feedback.subject+"\n"+"Message is "+this.feedback.message+"\n");
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstname:'',
      lastname:'',
      email:'',
      phone:'',
      subject:'',
      message:''
    });

    this.formFeedbackDirective.resetForm();
  }


}


