import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlogRootStoreModule } from './blog-management-store/blog-root-store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { blogReducer } from './blog-management-store/blog-reducer';
import { StoreModule } from '@ngrx/store';
import { BlogStoreEffects } from './blog-management-store/blog-effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        BlogRootStoreModule,
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        StoreModule.forRoot({ blog: blogReducer }),
        EffectsModule.forRoot([BlogStoreEffects])
    ]
})
export class RootStoreModule { }
