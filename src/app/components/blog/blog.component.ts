import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectBlog } from 'src/app/root-store/blog-management-store/blog-selectors';
import { State } from 'src/app/root-store/root-state';
import { BlogService } from 'src/app/services/blog.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { loadBlogs } from './../../root-store/blog-management-store/blog-actions';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { BlogDto } from './../../models/blog-dto';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
    listBlogs$: Observable<any[] | any> = this.store.pipe(select(selectBlog));
    fakeData: any;
    modalRef: any;


    settings = {
        attr: {
            class: 'table table-bordered'
        },
        hideSubHeader: true,
        mode: 'external',
        delete: {
            confirmDelete: true,

            deleteButtonContent: 'Delete data',
            saveButtonContent: 'save',
            cancelButtonContent: 'cancel'
        },
        actions: {
            add: false,
            position: 'right',
            columnTitle: 'Thao tác'
        },
        columns: {
            id: {
                title: 'ID',
            },
            name: {
                title: 'BlogName',
            },
            avarta: {
                title: 'avarta',
            },
            age: {
                title: 'age',
            },
        },
    };

    constructor(
        private store: Store<State>,
        private blogService: BlogService,
        private modalService: NgbModal,
    ) {
        this.openModal = this.openModal.bind(this);
    }

    ngOnInit(): void {

        this.blogService.getListBlogs(null)
            .subscribe(results => {
                this.fakeData = results;
                console.log(this.fakeData);

            });
        this.store.dispatch(loadBlogs());
    }

    onDeleteConfirm($event) {
    }

    onSaveConfirm($event) {
    }


    openModal() {
        const ngbModalOptions: NgbModalOptions = {
            backdrop: 'static',
            keyboard: false
        };

        this.modalRef = this.modalService.open(EditBlogComponent, ngbModalOptions);
    }

    openAddNew() {
        this.openModal();
        const instance = this.modalRef.componentInstance;
        instance.title = 'Thêm mới Blog';
        instance.titleSave = 'Lưu';
        instance.model = new BlogDto();
        instance.onSubmitting = this.onAddSubmitting;
    }

    onCreateConfirm($event) { }

    onAddSubmitting() {
    }

}
