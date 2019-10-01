import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  constructor() { }

  message: string =  "You've got mail!";
  messages: any[] = [
    {id: 0, text: 'Test1'},
    {id: 1, text: 'Test2'},
    {id: 2, text: 'Test3'}
  ];

  update(id: number, text: string) {
    this.messages = this.messages.map(m => m.id === id ? {id, text} : m)
  }
}
