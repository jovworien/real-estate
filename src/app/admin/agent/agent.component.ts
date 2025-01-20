import { Component } from '@angular/core';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrl: './agent.component.css'
})
export class AgentComponent {
  agents = [
    {
      name: 'John Doe',
      role: 'Real Estate Agent',
      email: 'john.doe@example.com',
      phone: '+1 123 456 7890',
      location: '123 Main Street, Anytown, USA',
      image: '../images/auth-image/profile.png',
      about:
        'John Doe is a dedicated real estate agent with over 10 years of experience helping clients buy, sell, and invest in properties.',
    },
    {
      name: 'Jane Smith',
      role: 'Real Estate Agent',
      email: 'jane.smith@example.com',
      phone: '+1 987 654 3210',
      location: '456 Elm Street, Townsville, USA',
      image: '../images/auth-image/people.png',
      about:
        'Jane Smith specializes in luxury properties and has a passion for delivering exceptional client experiences.',
    },
  ];
}
