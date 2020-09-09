import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import DecoupledDocumentEditor from '../assets/ckeditor5/ckeditor.js';
import {AppService} from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'ng-doc';
  mode = true;

  @ViewChild('editor') editor: ElementRef;
  @ViewChild('toolbar') toolbar: ElementRef;
  @ViewChild('content') content: ElementRef;

  constructor(private appService: AppService) {
  }

  ngAfterViewInit(): void {
    DecoupledDocumentEditor.create(this.editor.nativeElement, {
      toolbar: {
        items: [
          'heading',
          '|',
          'fontSize',
          'fontFamily',
          '|',
          'fontColor',
          'bold',
          'italic',
          '|',
          'alignment',
          '|',
          'numberedList',
          'bulletedList',
          '|',
          'indent',
          'outdent',
          '|',
          'link',
          'blockQuote',
          'insertTable',
          '|',
          'undo',
          'redo',
          'pageBreak',
          'restrictedEditingException',
          'removeFormat',
          'codeBlock',
          'exportPdf',
          'exportWord'
        ]
      },
      language: 'ru',
      image: {
        toolbar: [
          'imageTextAlternative',
          'imageStyle:full',
          'imageStyle:side'
        ]
      },
      table: {
        contentToolbar: [
          'tableColumn',
          'tableRow',
          'mergeTableCells',
          'tableCellProperties',
          'tableProperties'
        ]
      },
    })
      .then(editor => {
        this.appService.editor = editor;
        this.toolbar.nativeElement.appendChild( editor.ui.view.toolbar.element );
        document.querySelector( '.ck-toolbar' ).classList.add( 'ck-reset_all' );
      })
      .catch(error => console.error(error));
  }

  toggleMode() {
    this.mode = !this.mode;
    this.appService.editor.isReadOnly = !this.mode;
    const data = this.appService.editor.getData();
    this.content.nativeElement.innerHTML = data;
  }

  change($event: any) {
    this.content.nativeElement.querySelector('.placeholder').innerText = $event;
  }
}
