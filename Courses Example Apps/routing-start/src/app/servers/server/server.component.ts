import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private router: Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.server = this.serversService.getServer(Number(this.route.snapshot.params['id']));

    this.route.params
      .subscribe(params => {
        this.server = this.serversService.getServer(Number(params['id']));
      })
  }

  onEdit(){
    //this.router.navigate(['edit'], { relativeTo: this.route, 'preserveQueryParams': true });
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
  }

}
