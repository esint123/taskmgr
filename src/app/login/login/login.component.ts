import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {QuoteService} from '../../services/quote.service';
import {Quote} from '../../domain/quote.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  quote: Quote = {
    id: '',
    cn: '',
    en: '',
    pic: ''
  };

  constructor(private fb: FormBuilder, private quoteService$: QuoteService) {
    this.quoteService$
      .getQuote()
      .subscribe(value => this.quote = value);
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['403012577@qq.com', Validators.compose([Validators.required, Validators.email, this.validate])],
      password: ['', Validators.required]
    });
  }

  onSubmit({value, valid}, event: Event) {
    event.preventDefault();
    console.log(JSON.stringify(value));
    console.log(valid);
    /*this.form.controls['email'].setValidators(this.validate);*/
  }

  validate(c: FormControl): { [key: string]: any } {
    console.log(c.value);
    if (!c.value) {
      return null;
    }
    const pattern = /^wang+/;
    if (pattern.test(c.value)) {
      return null;
    }
    return {
      emailNotValid: '邮件以wang开头'
    };
  }
}
