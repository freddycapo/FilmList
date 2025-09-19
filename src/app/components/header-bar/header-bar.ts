import { Component, output } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header-bar',
  imports: [RouterLink],
  templateUrl: './header-bar.html',
  styleUrl: './header-bar.css'
})
export class HeaderBar {
  public deleteSelected = output<string>();
  public addNew = output<string>();

  onDeleteSelected(): void {
    this.deleteSelected.emit('Delete Mode');
  }

  onAddNew(): void {
    this.addNew.emit('Add Mode');
  }
}
