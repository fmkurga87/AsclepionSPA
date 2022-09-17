import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UsersService } from '../../_services/users.service';
import { userRole } from 'src/app/_models/userRole';
import { paginatedSearchResult } from 'src/app/_models/paginatedSearchResult';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  response: paginatedSearchResult;
  users: userRole[];
  
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(){
    this.userService.getUsers().subscribe({
                                          next: response => {
                                                              this.response = response;
                                                              this.users = response.elementos;
                                                            },
                                          })
  }

}
