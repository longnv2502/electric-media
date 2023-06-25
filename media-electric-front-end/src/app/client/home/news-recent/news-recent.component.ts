import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'cli-news-recent',
  templateUrl: './news-recent.component.html',
  styleUrls: ['./news-recent.component.scss']
})
export class NewsRecentComponent implements OnInit {
  ngOnInit(): void {
    // recent-active
    $('.recent-active').slick({
      dots: true,
      infinite: true,
      speed: 600,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev"> <span class="flaticon-arrow"></span></button>',
      nextArrow: '<button type="button" class="slick-next"> <span class="flaticon-arrow"><span></button>',
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
