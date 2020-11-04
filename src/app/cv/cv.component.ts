import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { jsPDF } from 'jspdf';
declare var jsPDF: any;
import html2pdf from 'html2pdf.js';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  @ViewChild('cv', { static: false }) cv: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  public download() {
    const doc = new jsPDF('p', 'mm', 'a4');

    // const specialElementHandlers = {
    //   '#editor': function (element, renderer) {
    //     return true;
    //   }
    // };

    const cv = this.cv.nativeElement;

    // doc.addHTML(cv.innerHTML, function () {
    //   doc.save('cv.pdf');
    // });

    doc.fromHTML(document.getElementById('cv'), 0, 0, {
      // width: 190,
      // 'elementHandlers': specialElementHandlers
    }, function () {
      doc.save('test.pdf');
    });

    // doc.save('tableToPdf.pdf');
  }


  // download() {
  //   const options = {
  //     filename: 'cv.pdf',
  //     image: { type: 'jpeg' },
  //     html2canvas: { scale: 1 },
  //     jsPDF: {
  //       orientation: 'p',
  //       unit: 'in',
  //       format: 'a4',
  //       putOnlyUsedFonts: true,
  //       floatPrecision: 16 // or "smart", default is 16
  //     }
  //   };
  //   const element = document.getElementById('cv');
  //   html2pdf()
  //     .set(options)
  //     .from(element)
  //     .save();
  // }

}
