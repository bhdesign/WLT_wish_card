/*!
 * requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
 * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 * http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 * Licensed under the MIT license */
(function(){var e=0;var t=["webkit","moz"];for(var n=0;n<t.length&&!window.requestAnimationFrame;++n){window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"]}if(!window.requestAnimationFrame)window.requestAnimationFrame=function(t,n){var r=(new Date).getTime();var i=Math.max(0,16-(r-e));var s=window.setTimeout(function(){t(r+i)},i);e=r+i;return s};if(!window.cancelAnimationFrame)window.cancelAnimationFrame=function(e){clearTimeout(e)}})();

function Animation() {
  this.container = $('#animation');
  this.path = this.container.data('path') + 'img/animation/';
  this.images = {};
  this.images.data = [
    { // Earth
      finished: true,
      src: this.path + 'earth.png', element: $('#animation-earth'), actions: [
        { property: 'top',      timeStart: 30,     duration: 120,   valueStart: 380, valueEnd: 244 }   // end 150
      ],
      reset: { 'top': 380 },
      resetImg: false
    },
    { // City
      finished: true,
      src: this.path + 'city.png', element: $('#animation-city'), actions: [
        { property: 'opacity',  timeStart: 30,    duration: 160,  valueStart: 0,    valueEnd: 100 },   // end 190
        { property: 'top',      timeStart: 30,    duration: 120,  valueStart: 280,  valueEnd: 180 }   // end 150
      ],
      reset: { 'opacity': 0, 'top': 380 },
      resetImg: false
    },
    { // Clouds
      src: this.path + 'clouds.png', element: $('#animation-clouds'), actions: [
        { property: 'left',     timeStart: 0,   duration: 1470,   valueStart: 510,   valueEnd: -1090 }
      ],
      reset: { 'left': 510 },
      resetImg: false
    },
    { // Auris
      src: this.path + 'auris.png', element: $('#animation-auris'), actions: [
        { property: 'opacity',  timeStart: 160,   duration: 60,   valueStart: 0,    valueEnd: 100 },   // end 220
        { property: 'width',    timeStart: 160,   duration: 90,   valueStart: 100,  valueEnd: 245 },   // end 250
        { property: 'width',    timeStart: 280,   duration: 30,   valueStart: 245,  valueEnd: 770 },   // end 310
        { property: 'opacity',  timeStart: 280,   duration: 15,   valueStart: 100,  valueEnd: 0 }      // end 310
      ],
      reset: { 'opacity': 0 },
      resetImg: { 'width': 100 }
    },
    { // Yaris
      src: this.path + 'yaris.png', element: $('#animation-yaris'), actions: [
        { property: 'opacity',  timeStart: 280,   duration: 30,   valueStart: 0,    valueEnd: 100 },   // end 310
        { property: 'width',    timeStart: 280,   duration: 90,   valueStart: 120,  valueEnd: 273 },   // end 370
        { property: 'width',    timeStart: 450,   duration: 30,   valueStart: 273,  valueEnd: 770 },   // end 480
        { property: 'opacity',  timeStart: 450,   duration: 15,   valueStart: 100,  valueEnd: 0 }      // end 480
      ],
      reset: { 'opacity': 0 },
      resetImg: { 'width': 120 }
    },
    { // Prius
      src: this.path + 'prius.png', element: $('#animation-prius'), actions: [
        { property: 'opacity',  timeStart: 450,   duration: 30,   valueStart: 0,    valueEnd: 100 },   // end 310
        { property: 'width',    timeStart: 450,   duration: 90,   valueStart: 118,  valueEnd: 235 },   // end 540
        { property: 'width',    timeStart: 620,   duration: 30,   valueStart: 235,  valueEnd: 770 },   // end 650
        { property: 'opacity',  timeStart: 620,   duration: 15,   valueStart: 100,  valueEnd: 0 }      // end 650
      ],
      reset: { 'opacity': 0 },
      resetImg: { 'width': 118 }
    },
    { // Prius Plus
      src: this.path + 'priusplus.png', element: $('#animation-priusplus'), actions: [
        { property: 'opacity',  timeStart: 620,   duration: 30,   valueStart: 0,    valueEnd: 100 },   // end 310
        { property: 'width',    timeStart: 620,   duration: 90,   valueStart: 130,  valueEnd: 278 },   // end 710
        { property: 'width',    timeStart: 770,   duration: 30,   valueStart: 278,  valueEnd: 770 },   // end 800
        { property: 'opacity',  timeStart: 770,   duration: 15,   valueStart: 100,  valueEnd: 0 }      // end 800
      ],
      reset: { 'opacity': 0 },
      resetImg: { 'width': 130 }
    },
    { // Auris 2
      src: this.path + 'auris2.png', element: $('#animation-auris2'), actions: [
        { property: 'opacity',  timeStart: 770,   duration: 30,   valueStart: 0,    valueEnd: 100 },   // end 800
        { property: 'width',    timeStart: 770,   duration: 90,   valueStart: 102,  valueEnd: 233 },   // end 860
        { property: 'width',    timeStart: 1100,  duration: 30,   valueStart: 233,  valueEnd: 770 },   // end 1270
        { property: 'opacity',  timeStart: 1100,  duration: 15,   valueStart: 100,  valueEnd: 0 }      // end 1270
      ],
      reset: { 'opacity': 0 },
      resetImg: { 'width': 102 }
    },
    { // Gamme
      src: this.path + 'gamme.png', element: $('#animation-gamme'), actions: [
        { property: 'opacity',  timeStart: 1100,  duration: 30,   valueStart: 0,    valueEnd: 100 },   // end 1130
        { property: 'width',    timeStart: 1100,  duration: 90,   valueStart: 360,  valueEnd: 730 },   // end 1130
        { property: 'width',    timeStart: 1270,  duration: 30,   valueStart: 730,  valueEnd: 770 },   // end 1300
        { property: 'opacity',  timeStart: 1270,  duration: 15,   valueStart: 100,  valueEnd: 0 }      // end 1300
      ],
      reset: { 'opacity': 0 },
      resetImg: { 'width': 360 }
    },
    { // Flowers 1
      src: this.path + 'flowers1.png', element: $('#animation-flowers1'), actions: [
        { property: 'opacity',  timeStart: 310,   duration: 30,   valueStart: 0,    valueEnd: 100 },   // end 340
        { property: 'width',    timeStart: 310,   duration: 60,   valueStart: 770,  valueEnd: 680 },   // end 370
        { property: 'top',      timeStart: 310,   duration: 60,   valueStart: 300,  valueEnd: 250 },   // end 370
        { property: 'opacity',  timeStart: 450,   duration: 20,   valueStart: 100,  valueEnd: 0 },     // end 470
        { property: 'width',    timeStart: 450,   duration: 30,   valueStart: 680,  valueEnd: 340 },   // end 480
        { property: 'top',      timeStart: 450,   duration: 30,   valueStart: 250,  valueEnd: 225 }    // end 480
      ],
      reset: { 'opacity': 0, 'top': 300 },
      resetImg: { 'width': 770 }
    },
    { // Flowers 2
      src: this.path + 'flowers2.png', element: $('#animation-flowers2'), actions: [
        { property: 'opacity',  timeStart: 310,   duration: 30,   valueStart: 0,    valueEnd: 100 },   // end 340
        { property: 'width',    timeStart: 310,   duration: 60,   valueStart: 770,  valueEnd: 700 },   // end 370
        { property: 'top',      timeStart: 310,   duration: 60,   valueStart: 305,  valueEnd: 280 },   // end 370
        { property: 'opacity',  timeStart: 450,   duration: 20,   valueStart: 100,  valueEnd: 0 },     // end 470
        { property: 'width',    timeStart: 450,   duration: 30,   valueStart: 700,  valueEnd: 350 },   // end 480
        { property: 'top',      timeStart: 450,   duration: 30,   valueStart: 280,  valueEnd: 255 }    // end 480
      ],
      reset: { 'opacity': 0, 'top': 305 },
      resetImg: { 'width': 770 }
    },
    { // Flowers 3
      src: this.path + 'flowers3.png', element: $('#animation-flowers3'), actions: [
        { property: 'opacity',  timeStart: 800,   duration: 30,   valueStart: 0,    valueEnd: 100 },   // end 830
        { property: 'width',    timeStart: 800,   duration: 60,   valueStart: 770,  valueEnd: 700 },   // end 860
        { property: 'top',      timeStart: 800,   duration: 60,   valueStart: 380,  valueEnd: 300 },   // end 860
        { property: 'opacity',  timeStart: 930,   duration: 20,   valueStart: 100,  valueEnd: 0 },     // end 950
        { property: 'width',    timeStart: 930,   duration: 30,   valueStart: 700,  valueEnd: 350 },   // end 960
        { property: 'top',      timeStart: 930,   duration: 30,   valueStart: 300,  valueEnd: 255 }    // end 960
      ],
      reset: { 'opacity': 0, 'top': 380 },
      resetImg: { 'width': 770 }
    },
    { // Tree 1
      src: this.path + 'tree1.png', element: $('#animation-tree1'), actions: [
        { property: 'width',    timeStart: 330,   duration: 40,  valueStart: 770,   valueEnd: 700 },   // end 370
        { property: 'top',      timeStart: 330,   duration: 40,  valueStart: 110,   valueEnd: 80 },    // end 370
        { property: 'left',     timeStart: 330,   duration: 40,  valueStart: -168,  valueEnd: 0 },     // end 370
        { property: 'left',     timeStart: 450,   duration: 30,  valueStart: 0,     valueEnd: -168 },  // end 480
        { property: 'opacity',  timeStart: 450,   duration: 30,  valueStart: 100,   valueEnd: 0 }      // end 480
      ],
      reset: { 'left': -168, 'opacity': 1, 'top': 110 },
      resetImg: { 'width': 770 }
    },
    { // Tree 2
      src: this.path + 'tree2.png', element: $('#animation-tree2'), actions: [
        { property: 'width',    timeStart: 500,   duration: 40,  valueStart: 228,  valueEnd: 198 },    // end 540
        { property: 'top',      timeStart: 500,   duration: 40,  valueStart: 150,  valueEnd: 110 },    // end 540
        { property: 'left',     timeStart: 500,   duration: 40,  valueStart: -228, valueEnd: -70 },    // end 540
        { property: 'width',    timeStart: 770,   duration: 30,  valueStart: 198,  valueEnd: 130 },    // end 650
        { property: 'top',      timeStart: 770,   duration: 30,  valueStart: 110,  valueEnd: 120 },    // end 650
        { property: 'left',     timeStart: 770,   duration: 30,  valueStart: -70,  valueEnd: 30 },     // end 650
        { property: 'opacity',  timeStart: 770,   duration: 20,  valueStart: 100,  valueEnd: 0 }       // end 640
      ],
      reset: { 'left': -228, 'opacity': 1, 'top': 150 },
      resetImg: { 'width': 228 }
    },
    { // Tree 3
      src: this.path + 'tree3.png', element: $('#animation-tree3'), actions: [
        { property: 'width',    timeStart: 820,   duration: 40,  valueStart: 180,  valueEnd: 155 },    // end 860
        { property: 'top',      timeStart: 820,   duration: 40,  valueStart: 130,  valueEnd: 90 },     // end 860
        { property: 'left',     timeStart: 820,   duration: 40,  valueStart: 770,  valueEnd: 607 },    // end 860
        { property: 'width',    timeStart: 930,   duration: 30,  valueStart: 155,  valueEnd: 130 },    // end 960
        { property: 'top',      timeStart: 930,   duration: 30,  valueStart: 90,   valueEnd: 120 },    // end 960
        { property: 'left',     timeStart: 930,   duration: 30,  valueStart: 607,  valueEnd: 470 },    // end 960
        { property: 'opacity',  timeStart: 930,   duration: 20,  valueStart: 100,  valueEnd: 0 }       // end 950
      ],
      reset: { 'left': 770, 'opacity': 1, 'top': 130 },
      resetImg: { 'width': 180 }
    },
    { // Pig
      src: this.path + 'pig.png', element: $('#animation-pig'), actions: [
        { property: 'width',    timeStart: 480,   duration: 60,  valueStart: 148,  valueEnd: 108 },    // end 540
        { property: 'top',      timeStart: 480,   duration: 60,  valueStart: 240,  valueEnd: 190 },    // end 540
        { property: 'left',     timeStart: 480,   duration: 60,  valueStart: 770,  valueEnd: 574 },    // end 540
        { property: 'width',    timeStart: 770,   duration: 30,  valueStart: 108,  valueEnd: 70 },     // end 800
        { property: 'top',      timeStart: 770,   duration: 30,  valueStart: 190,  valueEnd: 220 },    // end 800
        { property: 'left',     timeStart: 770,   duration: 30,  valueStart: 574,  valueEnd: 480 },    // end 800
        { property: 'opacity',  timeStart: 770,   duration: 20,  valueStart: 100,  valueEnd: 0 }       // end 790
      ],
      reset: { 'left': 770, 'opacity': 1, 'top': 240 },
      resetImg: { 'width': 148 }
    },
    { // Coins
      src: this.path + 'coins.png', element: $('#animation-coins'), actions: [
        { property: 'opacity',  timeStart: 539,   duration: 1,   valueStart: 0,    valueEnd: 100 },    // end 540
        { property: 'top',      timeStart: 570,   duration: 10,  valueStart: 220,  valueEnd: 120 },    // end 580
        { property: 'top',      timeStart: 620,   duration: 10,  valueStart: 120,  valueEnd: 220 },    // end 630
        { property: 'opacity',  timeStart: 770,   duration: 1,   valueStart: 100,  valueEnd: 0 }       // end 771
      ],
      reset: { 'opacity': 0, 'top': 220 },
      resetImg: false
    },
    { // Sign 1
      src: this.path + 'sign1.png', element: $('#animation-sign1'), actions: [
        { property: 'top',      timeStart: 370,   duration: 10,  valueStart: 380,   valueEnd: 193 },   // end 380
        { property: 'left',     timeStart: 450,   duration: 10,  valueStart: 0,     valueEnd: -270 }   // end 460
      ],
      reset: { 'left': 0, 'top': 380 },
      resetImg: false
    },
    { // Sign 2
      src: this.path + 'sign2.png', element: $('#animation-sign2'), actions: [
        { property: 'top',      timeStart: 710,   duration: 10,  valueStart: 380,   valueEnd: 203 },   // end 720
        { property: 'left',     timeStart: 770,   duration: 10,  valueStart: 26,    valueEnd: -210 }   // end 780
      ],
      reset: { 'left': 26, 'top': 380 },
      resetImg: false
    },
    { // Sign 3
      src: this.path + 'sign3.png', element: $('#animation-sign3'), actions: [
        { property: 'top',      timeStart: 860,   duration: 10,  valueStart: 380,   valueEnd: 197 },   // end 870
        { property: 'left',     timeStart: 930,   duration: 10,  valueStart: 7,     valueEnd: -210 }   // end 940
      ],
      reset: { 'left': 7, 'top': 380 },
      resetImg: false
    },
    { // Text 1
      src: this.path + 'text1.png', element: $('#animation-text1'), actions: [
        { property: 'opacity',  timeStart: 80,    duration: 60,   valueStart: 0,    valueEnd: 100 },   // end 140
        { property: 'opacity',  timeStart: 265,   duration: 30,   valueStart: 100,  valueEnd: 0 }      // end 310
      ],
      reset: { 'opacity': 0 },
      resetImg: false
    },
    { // Text 2
      src: this.path + 'text2.png', element: $('#animation-text2'), actions: [
        { property: 'opacity',  timeStart: 295,   duration: 30,   valueStart: 0,    valueEnd: 100 },   // end 310
        { property: 'opacity',  timeStart: 435,   duration: 30,   valueStart: 100,  valueEnd: 0 }      // end 480
      ],
      reset: { 'opacity': 0 },
      resetImg: false
    },
    { // Text 3
      src: this.path + 'text3.png', element: $('#animation-text3'), actions: [
        { property: 'opacity',  timeStart: 465,   duration: 30,   valueStart: 0,    valueEnd: 100 },   // end 480
        { property: 'opacity',  timeStart: 755,   duration: 30,   valueStart: 100,  valueEnd: 0 }      // end 800
      ],
      reset: { 'opacity': 0 },
      resetImg: false
    },
    { // Text 4
      finished: true,
      src: this.path + 'text4.png', element: $('#animation-text4'), actions: [
        { property: 'opacity',  timeStart: 785,   duration: 30,   valueStart: 0,    valueEnd: 100 },   // end 800
        { property: 'opacity',  timeStart: 915,   duration: 30,   valueStart: 100,  valueEnd: 0 }      // end 960
      ],
      reset: { 'opacity': 0 },
      resetImg: false
    },
    { // Text 5
      finished: true,
      src: this.path + 'text5.png', element: $('#animation-text5'), actions: [
        { property: 'opacity',  timeStart: 945,   duration: 30,   valueStart: 0,    valueEnd: 100 },   // end 960
        { property: 'opacity',  timeStart: 1085,  duration: 30,   valueStart: 100,  valueEnd: 0 }      // end 1130
      ],
      reset: { 'opacity': 0 },
      resetImg: false
    },
    { // Text 6
      finished: true,
      src: this.path + 'text6.png', element: $('#animation-text6'), actions: [
        { property: 'opacity',  timeStart: 1115,  duration: 30,   valueStart: 0,    valueEnd: 100 },   // end 1130
        { property: 'opacity',  timeStart: 1255,  duration: 30,   valueStart: 100,  valueEnd: 0 }      // end 1300
      ],
      reset: { 'opacity': 0 },
      resetImg: false
    },
    { // Text 7
      finished: true,
      src: this.path + 'text7.png', element: $('#animation-text7'), actions: [
        { property: 'opacity',  timeStart: 1285,  duration: 30,   valueStart: 0,    valueEnd: 100 }    // end 1300
      ],
      reset: { 'opacity': 0 },
      resetImg: false
    }
  ];
  this.images.size = this.images.data.length;
  this.images.loaded = 0;
  this.timer = 0;
  this.ie8 = false;
  this.init();
}

Animation.prototype = {
  init: function () {
    if ($('html').hasClass('lt-ie9')) {
      this.ie8 = true;
    }
    var that = this;
    for (var i = 0; i < this.images.size; i++) {
      var img = new Image();
      $(img).on('load', function () {
        that.onLoad();
      });
      img.src = this.images.data[i].src;
      this.images.data[i].element.append(img);
    }
  },
  onLoad: function () {
    if (++this.images.loaded == this.images.size) {
      $('#animation-loader').remove();
      this.container.find('div').show();
      this.doAnimation();
    }
  },
  doAnimation: function () {
    var that = this;
    this.timer += .75;
    if (this.timer <= 1470) {
      requestAnimationFrame(function () {
        that.doAnimation();
      });
      this.animate();
    } else {
      if (!this.ie8) {
        for (var i = 0; i < this.images.size; i++) {
          this.images.data[i].element.css(this.images.data[i].reset);
          if (this.images.data[i].resetImg) {
            this.images.data[i].element.find('img').css(this.images.data[i].resetImg);
          }
        }
        this.timer = 0;
        that.doAnimation();
      }
    }
  },
  animate: function () {
    var column, row, prop, val, tS, d, vS, vE;
    for (var i = 0; i < this.images.size; i++) {
      column = this.images.data[i];
      var columnMaxTime = 0;
      for (var j = 0; j < column.actions.length; j++) {
        row = column.actions[j];
        prop = row['property'];
        tS = row.timeStart;
        d = row.duration;
        columnMaxTime = Math.max(columnMaxTime, tS + d);
        if (prop == 'opacity' && !this.ie8) {
          vS = row.valueStart / 100;
          vE = row.valueEnd / 100;
        } else {
          vS = row.valueStart;
          vE = row.valueEnd;
        }
        if (this.timer <= tS) {
          val = vS;
          break;
        } else
        if (this.timer >= (tS + d)) {
          val = vE;
        } else
        if (this.timer > tS && this.timer < (tS + d)) {
          //val = this.tweenLinearPosition((this.timer - tS), d, vS, vE);
          val = this.easeInOutCubic((this.timer - tS ), d, vS, vE);
        }
        if (prop == 'opacity' && this.ie8) {
          column.element.css('filter', 'alpha(opacity=' + val + ')');
        } else
        if (prop == 'width') {
          column.element.find('img').css(prop, val);
        } else {
          column.element.css(prop, val);
        }
      }
      if (this.ie8 && this.timer > columnMaxTime && !column.finished) {
        column.finished = true;
        column.element.remove();
      }
    }
  },
  tweenLinearPosition: function (timeStart, duration, valueStart, valueEnd) {
    return ((valueEnd - valueStart) * (timeStart / duration) + valueStart);
  },
  easeInOutCubic: function (timeStart, duration, valueStart, valueEnd) {
    if ((timeStart /= duration / 2) < 1) return (valueEnd - valueStart) / 2 * timeStart  * timeStart + valueStart;
    return (valueEnd - valueStart)  / 2 * ((timeStart -= 2) * timeStart * timeStart + 2) + valueStart;
  }
};
