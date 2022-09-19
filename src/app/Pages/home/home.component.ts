import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  times = [
    {
      name: 'Easy',
      text: 'Make your first transfer in less than 5 minutes',
    },
    {
      name: 'Fast',
      text: 'We deliver your funds in minutes 24/7 (even on weekends).',
    },
    {
      name: 'Reliable',
      text: 'Trust us to deliver with our certified secure, encrypted and stable technology.',
    },
  ];

  cards = [
    {
      id: 1,
      name: 'Create an Account',
      text: 'Sign up online for free. All you need is an email address.',
    },
    {
      id: 2,
      name: 'Set up transfers',
      text: 'Enter easy transfer details such as amount and recipient details.',
    },
    {
      id: 3,
      name: 'Pay for trasnfers',
      text: 'Send your money with a bank transfer, or a debit or credit card.',
    },
    {
      id: 4,
      name: 'Relax',
      text: 'We ll handle the rest. You can track your transfer in your account easily.',
    },
  ];
}
