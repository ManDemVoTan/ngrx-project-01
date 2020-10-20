import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApiResponse } from './models';
import { BlogStoreSate, BlogStoreSelector } from './root-store';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'blogAndPost';

  constructor(
    private store$: Store<BlogStoreSate.State>,
    private toastr: ToastrService
  ) {

    this.subscribeApiResponse = this.subscribeApiResponse.bind(this);
    this.showApiResponseMessage = this.showApiResponseMessage.bind(this);
  }


  subscribeApiResponse(response: ApiResponse<any>) {
    if (response != null && response.Message) {
      this.showApiResponseMessage(response);
    }
  }

  showApiResponseMessage(response: ApiResponse<any>) {
    if (response.StatusCode === 200 && !response.IsError) {
      this.toastr.success('Thành công');
    } else {
      this.toastr.warning(response.Message, 'Lỗi');
    }
  }
  ngOnInit() {
    this.store$.select(BlogStoreSelector.selectPrefixManagementApiResponse).subscribe(this.subscribeApiResponse);

  }


}
