import { Component, OnInit } from '@angular/core';

declare const webkitSpeechRecognition: any;

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})
export class HomeSearchComponent implements OnInit {

  searchedKeyword: string;
  error = true;
  gSearch:any;
  searchKey:any;
  recognition = new webkitSpeechRecognition();
  isStoppedSpeechRecog = false;
  text = '';
  tempWords: any;

  filterResultDataSet = [
    {
      category: 'Plumbing',
      subCategory: 'test1',
      Location: 'Pourtgal',
      rating:'4'
    },
    {
      category: 'Electrical',
      subCategory: 'test2',
      Location: 'Argentina',
      rating:'4'
    },
    {
      category: 'Security Services',
      subCategory: 'test3',
      Location: 'BRAZIL',
      rating:'4'
    },
    {
      category: 'Pest Control',
      subCategory: 'test4',
      Location: 'SPAIN',
      rating:'4'
    },
    {
      category: 'Plant Maintenance',
      subCategory: 'test5',
      Location: 'France',
      rating:'4'
    },
    {
      category: 'Appliance Service',
      subCategory: 'test6',
      Location: 'SPAIN',
      rating:'4'
    }
  ]
 
  
  ngOnInit(): void {
    this.init();
  }
  
  startService(): void {
    this.text = '';
    this.start();
    this.error = false;
  }
  init(): void {
    this.recognition.interimResults = true;
    //this.recognition.lang = 'es-ES';

    this.recognition.addEventListener('result', (e: any) => {
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      this.tempWords = transcript;
    });
  }

  start(): void {
    this.isStoppedSpeechRecog = false;
    this.recognition.start();
    this.recognition.addEventListener('end', () => {
      if (this.isStoppedSpeechRecog) {
        this.recognition.stop();
      } else {
        this.wordConcat();
        this.recognition.start();
        if (this.text.trim() !== 'hola') {
          this.searchedKeyword=this.text.trim();
          this.stop();
          this.text = 'ERROR!!!';
          this.error = true;
        } else {
          this.stop();
             this.searchedKeyword=this.text.trim();
          //window.open('https://www.youtube.com/channel/UCBOEbPRBeq0pJJnUlyNrz2g');
          this.error = true;
        }
      }
    });
  }
  stop(): void {
    this.text = '';
    this.recognition.stop();
    this.isStoppedSpeechRecog = true;
    this.wordConcat();
  }

  wordConcat(): void {
    this.text = this.text + this.tempWords + ' ';
    this.tempWords = ' ';
  }
}
