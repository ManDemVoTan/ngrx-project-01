import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent implements OnInit {

  @Input() title: string;
  @Input() titleSave: string;
  @Input() model: any;
  @Input() modelEdit: boolean;
  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

  onSubmit() { }

}
