import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { ChartsModule } from './charts/charts.module';
import { ComponentsModule } from './components/components.module';
import { DashboardsModule } from './dashboards/dashboards.module';
import { FormsModule } from './forms/forms.module';
import { IconsModule } from './icons/icons.module';
import { LayoutModule } from './layout/layout.module';
import { TablesModule } from './tables/tables.module';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    ComponentsModule,
    DashboardsModule,
    FormsModule,
    IconsModule,
    LayoutModule,
    TablesModule
  ]
})
export class StructureModule { }
