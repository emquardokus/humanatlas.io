import { SimpleTileModule } from './../../components/simple-tile/simple-tile.module';
import { OverviewToolsComponent } from './overview-tools.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardButtonLongModule } from '../../components/card-button-long/card-button-long.module';
import { TissueInfoTableModule } from '../../components/tissue-info-table/tissue-info.module';
import { AnnouncementCardModule } from '../../components/announcement-card/announcement-card.module';


@NgModule({
  declarations: [
    OverviewToolsComponent
  ],
  imports: [
    BrowserModule,
    SimpleTileModule,
    CardButtonLongModule,
    TissueInfoTableModule,
    AnnouncementCardModule
  ],
  providers: [],
  bootstrap: []
})
export class OverviewToolsModule { }
