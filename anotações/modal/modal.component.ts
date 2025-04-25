import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pp-modal', 
  templateUrl: './pp-modal.component.html', 
  styleUrls: ['./pp-modal.component.scss']
})
export class PpModalComponent implements OnInit {
  modalService: any;

  constructor() { }

  ngOnInit(): void {
  }
  
  closeModal() {
    this.modalService.dismissAll()
  }
}
