import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'cli-weekly-new-small',
  templateUrl: './weekly-new-small.component.html',
  styleUrls: ['./weekly-new-small.component.scss']
})
export class WeeklyNewSmallComponent implements OnInit {
  ngOnInit(): void {
    $('.weekly2-news-active').slick({
      dots: true,
      infinite: true,
      speed: 600,
      arrows: false,
      slidesToShow: 4,
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
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }

}
