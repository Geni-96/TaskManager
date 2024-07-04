import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component"; 
import { HeaderComponent } from "./header/header.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations:[AppComponent],
    bootstrap:[AppComponent],
    imports:[UserComponent, TasksComponent,HeaderComponent, BrowserModule]
})
export class AppModule{

}