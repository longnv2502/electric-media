import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'cli-weekly-new-big',
  templateUrl: './weekly-new-big.component.html',
  styleUrls: ['./weekly-new-big.component.scss']
})
export class WeeklyNewBigComponent implements OnInit {
  ngOnInit(): void {
    $('.weekly-news-active').slick({
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      initialSlide: 3,
      loop: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }

}
