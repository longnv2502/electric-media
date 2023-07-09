import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LoginComponent} from "../auth/login/login.component";
import {RegisterComponent} from "../auth/register/register.component";
import {ConfigService} from "../../../service/config.service";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'cli-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  constructor(private modalService: NgbModal,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe({
      next: (resp) => {
        console.log(resp)
      }, error: (err) => {
        console.error(err)
      }
    })
  }

  openLoginModal() {
    const modalRef = this.modalService.open(LoginComponent, {
        backdrop: 'static',
        container: '#center-popup',
        centered: true,
      }
    )
  }

  openRegisterModal() {
    const modalRef = this.modalService.open(RegisterComponent, {
        backdrop: 'static',
        container: '#center-popup',
        centered: true,
      }
    )
  }


}
