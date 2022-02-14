import { NgModule } from "@angular/core";
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

@NgModule({
    imports:[
        MatDividerModule,
        MatListModule,
        MatTabsModule,
        MatToolbarModule,
        MatExpansionModule,
        MatInputModule,
        MatButtonModule,
        MatDialogModule,
        MatCardModule,
        MatTableModule
    ],
    exports:[
        MatDividerModule,
        MatListModule,
        MatTabsModule,
        MatToolbarModule,
        MatExpansionModule,
        MatInputModule,
        MatButtonModule,
        MatDialogModule,
        MatCardModule,
        MatTableModule
    ]
})

export class MaterialModule{}