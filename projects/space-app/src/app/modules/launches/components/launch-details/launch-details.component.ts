import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchDetailsComponent {
  @Input() details: string | null = null;
  @Output() detailsUpdate = new EventEmitter<string>();

  get formattedDetails(): string {
    return this.details?.split('').map(char => char.toUpperCase()).join('') ?? '';
  }

  editorOpened = false;

  openEditor(): void {
    this.editorOpened = true;
  }

  closeEditor(): void {
    this.editorOpened = false;
  }

  update(details: string): void {
    this.detailsUpdate.emit(details);
    this.closeEditor();
  }
}
