import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  imports: [MatIconModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {

  constructor(private router:Router){
  }

  @Output() ToggleMenu =new EventEmitter<void>();

  onClickedMenu(icon:string){
    switch(icon){
      case 'menu':this.ToggleMenu.emit();
        break;
      case 'home':this.router.navigate(['home']);
        break;
    }
  }

}
