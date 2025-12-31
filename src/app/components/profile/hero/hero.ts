import { Component } from '@angular/core';
import { AboutMe } from '../about-me/about-me';
import { Experience } from '../experience/experience';
import { Footer } from '../footer/footer';
import { Home } from '../home/home';
import { Projects } from '../projects/projects';
import { ResumeDownload } from '../resume-download/resume-download';
import { Skills } from '../skills/skills';
import { Settings } from "../settings/settings";

@Component({
  selector: 'app-hero',
  imports: [Home, ResumeDownload, AboutMe, Skills, Projects, Experience, Footer, Settings],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

}
