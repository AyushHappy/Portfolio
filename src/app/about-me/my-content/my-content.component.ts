import { Component } from '@angular/core';
import {projectContent} from '../../shared/project-content.model'
import {myProfessnalInfo} from '../../shared/about-me.model'
import { DatePipe } from '@angular/common';
import { Data } from '@angular/router';

@Component({
  selector: 'app-my-content',
  imports: [DatePipe],
  templateUrl: './my-content.component.html',
  styleUrl: './my-content.component.css'
})
export class MyContentComponent {
  protected skills:any[]=[];
  protected myPersonalInfo=myProfessnalInfo;
  protected todayDate:Data=new Date(new Date().toDateString());

  ngOnInit(){
    const techSkill=new Set<string>();

    projectContent.forEach(project =>{
      project.technology.forEach(tech=>techSkill.add(tech))
    })

    this.skills=Array.from(techSkill).sort();
  }

  isPresent(endDate: Date): boolean {
    const todayDate = new Date(new Date().toDateString());
    return endDate?.toDateString() === todayDate.toDateString();
  }


}
