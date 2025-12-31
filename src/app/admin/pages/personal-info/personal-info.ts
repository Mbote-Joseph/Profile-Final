import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface PersonalInfoModel {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  avatarUrl: string;
  bio: string;
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
}


@Component({
  selector: 'app-personal-info',
  imports: [FormsModule],
  templateUrl: './personal-info.html',
  styleUrl: './personal-info.css',
})
export class PersonalInfo {
  model: PersonalInfoModel = {
    name: 'John Doe',
    title: 'Full Stack Software Engineer',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    avatarUrl: 'https://images.unsplash.com/photo-1719400471588-575b23e27bd7?w=400',
    bio: 'Passionate software engineer with 5+ years of experience in building scalable web applications. Specialized in React, Node.js, and cloud technologies.',
    githubUrl: 'https://github.com/johndoe',
    linkedinUrl: 'https://linkedin.com/in/johndoe',
    twitterUrl: 'https://twitter.com/johndoe',
  };

  save() {
    // TODO: call API
    alert('Personal info saved!');
  }
}
