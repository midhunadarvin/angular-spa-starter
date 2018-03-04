import { Component, OnInit, ComponentRef } from '@angular/core';
import { IModalDialog, IModalDialogButton, IModalDialogOptions } from 'ngx-modal-dialog';

@Component({
	selector: 'ngx-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements IModalDialog {
	actionButtons: Array<IModalDialogButton>;
	options: IModalDialogOptions;
	constructor() {
		this.actionButtons = [
			{ text: 'Close' }, // no special processing here
			{ text: 'I will always close', onAction: () => true },
			{ text: 'I never close', onAction: () => false }
		];
	}

	dialogInit(reference: ComponentRef<IModalDialog>, options?: IModalDialogOptions): void {
		// no processing needed
		this.options = options;
	}

	closeDialog(): void {
		//
		this.options.closeDialogSubject.next();
	}
}
