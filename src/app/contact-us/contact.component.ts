import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  public registerForm: FormGroup;
  public submitted = false;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['Arvind', Validators.required],
      lastName: ['Tomar', Validators.required],
      email: ['vipintomar6@gmail.com', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)')
  }

}
