import { NgModule } from "@angular/core";
import { CountComponent } from "./count/count.component";


@NgModule({
    declarations:[
        CountComponent
    ],
    exports:[
        CountComponent
    ]
})
export class CountersModule{

}