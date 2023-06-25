import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'cli-news-youtube',
  templateUrl: './newspaper-youtube.component.html',
  styleUrls: ['./newspaper-youtube.component.scss']
})
export class NewspaperYoutubeComponent implements OnInit {
  ngOnInit(): void {
    $('.video-items-active').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor:'.testmonial-nav'
    });
    $('.testmonial-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.video-items-active',
      dots: false,
      prevArrow: '<button type="button" class="slick-prev"><span class="ti-arrow-left"></<span></button>',
      nextArrow: '<button type="button" class="slick-next"><span class="ti-arrow-right"></span></button>',
      centerMode: true,
      focusOnSelect: true,
      centerPadding: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
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
      ]
    });
  }
}
