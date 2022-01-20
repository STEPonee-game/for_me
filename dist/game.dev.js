"use strict";

var pjs = new PointJS(1920, 1080, {
  Background: '#fff'
});
var game = pjs.game;
var key = pjs.keyControl;
var k = key.isDown;
var brush = pjs.brush.drawText;
var p = pjs.vector.point;
var mouse = pjs.mouseControl;
var ss = pjs.system;
var WH = game.getWH();
key.initControl();
var width = WH.w;
var height = WH.h;
mouse.initControl();
ss.initFullScreen();
if (mouse.isPress('RIGHT') && ss.initFullScreen() == true) ss.exitFullScreen();
var psC = pjs.camera.getPositionC(); //var point = obj.getPositionC();

var txt = ["image/01.png", "image/02.png", "image/03.png", "image/04.png", "image/05.png", "image/06.png", "image/07.png", "image/08.png", "image/09.png", "image/10.png", "image/11.png", "image/11.png", "image/12.png", "image/13.png", "image/14.png", "image/15.png", "image/16.png", "image/17.png", "image/18.png", "image/19.png", "image/20.png", "image/21.png", "image/22.png", "image/23.png", "image/24.png", "image/25.png", "image/26.png", "image/27.png", "image/28.png", "image/29.png", "image/30.png", "image/31.png", "image/32.png", "image/33.png", "image/34.png", "image/35.png", "image/36.png", "image/37.png", "image/38.png", "image/39.png", "image/40.png", "image/41.png", "image/42.png", "image/43.png", "image/44.png", "image/45.png", "image/46.png", "image/47.png", "image/48.png", "image/49.png", "image/50.png", "image/51.png", "image/52.png", "image/53.png", "image/54.png", "image/55.png", "image/56.png", "image/57.png", "image/58.png", "image/59.png", "image/60.png", "image/61.png", "image/62.png", "image/63.png", "image/64.png", "image/65.png"];
var cI = '#A0FF84'; // рубашка Маша

var cM = '#85A9FF'; // рубашка Макс

var cN = '#FFC4C4'; // рубашка Нати

var cO = '#FFE951'; // рубашка Общак

var cH = '#B0CECD'; // общая рубашка

var cF = '#FDFFDF'; //фон карточки

var cNatalya = '#C48BB5';
var cAlla = '#90D5D8';
var cCveta = '#A1FFB4';
var cDmitr = '#E15478';
var cEliza = '#A1CDFF';
var cMaksim = '#DCDCDC';
var cMixail = '#FFFF75';
var cLera = '#FFCE8D';
var cVera = '#E8A6FF';
var back = game.newBackgroundObject({
  x: 0,
  y: 0,
  w: 1920,
  h: 1080,
  countX: 0,
  countY: 0,
  file: "image/fon.png"
});
var back1 = game.newBackgroundObject({
  x: 0,
  y: 0,
  w: 1920,
  h: 1080,
  countX: 50,
  countY: 50,
  file: "image/fon1.jpg"
});
var button = game.newImageObject({
  file: "image/button.png",
  x: width - WH.h / 2,
  y: height - WH.w / 2,
  w: 200,
  h: 200 //scale : 0.5, // уменьшить картинку в 2 раза, если не заданы ширина и высота

});
var button1 = game.newImageObject({
  x: width - WH.h / 2,
  y: height - WH.w / 2,
  w: 200,
  h: 200,
  file: "image/button1.png",
  alpha: 0 //scale : 0.5, // уменьшить картинку в 2 раза, если не заданы ширина и высота

});
var field = game.newImageObject({
  file: "image/field.png",
  x: psC.x - 498,
  y: psC.y - 291,
  // w : 200, 
  //h : 200,
  shadowColor: "#333333",
  shadowBlur: 5,
  alpha: 0,
  scale: 1 // уменьшить картинку в 2 раза, если не заданы ширина и высота

}); //цвет канта e7fbff

var s = 143,
    s2 = 143,
    fon = [];

for (var x = 0; x < 10; x++) {
  for (var y = 0; y < 6; y++) {
    fon.push(game.newRectObject({
      x: 60 + s * x,
      y: 10 + s2 * y,
      w: s - 15,
      h: s2 - 15,
      fillColor: cF,
      shadowColor: "#333333",
      shadowBlur: 5,
      alpha: 0,
      box: {
        offset: {
          x: -5,
          y: -5
        },
        size: {
          w: 10,
          h: 10
        }
      }
    }));
  }
}

;
var s = 143, s2 = 143, fon1 = [];

for (var file = 0; file < 65; file++) {
  for (var x = 0; x < 11; x++) {
    for (var y = 0; y < 6; y++) {
      fon1.push(game.newImageObject({
        file: txt[file++],
        x: 60 + s * x,
        y: 10 + s2 * y,
        w: s - 15,
        h: s2 - 15,
        alpha: 0,
        box: {
          offset: {
            x: -5,
            y: -5
          },
          size: {
            w: 10,
            h: 10
          }
        }
      }));
    }
  }
};
var s = 143, s2 = 143, fon2 = [];

for (var x = 0; x < 10; x++) {
  for (var y = 0; y < 6; y++) {
    fon2.push(game.newImageObject({
      file: "image/LOGO.png",
      x: 60 + s * x,
      y: 10 + s2 * y,
      w: s - 15,
      h: s2 - 15,
      alpha: 0,
      box: {
        offset: {
          x: -5,
          y: -5
        },
        size: {
          w: 10,
          h: 10
        }
      } //scale : 0.5, // уменьшить картинку в 2 раза, если не заданы ширина и высота

    }));
  }
}

;
var s = 138,
    s2 = 138,
    fon3 = [];

for (var x = 0; x < 7; x++) {
  for (var y = 0; y < 5; y++) {
    fon3.push(game.newRectObject({
      x: 290 + s * x,
      y: 90 + s2 * y,
      w: s - 10,
      h: s2 - 10,
      fillColor: 0,
      shadowColor: 0,
      strokeColor: "#e7fbff",
      strokeWidth: 3,
      shadowBlur: 5,
      alpha: 0,
      box: {
        offset: {
          x: -110,
          y: -110
        },
        size: {
          w: 0,
          h: 0
        }
      }
    }));
  }
};
var a1 = fon[0];var a2 = fon[1];var a3 = fon[2];var a4 = fon[3];var a5 = fon[4];var a6 = fon[5];var a7 = fon[6];var a8 = fon[7];var a9 = fon[8];var a10 = fon[9];var a11 = fon[10];
var a12 = fon[11];var a13 = fon[12];var a14 = fon[13];var a15 = fon[14];var a16 = fon[15];var a17 = fon[16];var a18 = fon[17];var a19 = fon[18];var a20 = fon[19];var a21 = fon[20];1
var a22 = fon[21];var a23 = fon[22];var a24 = fon[23];var a25 = fon[24];var a26 = fon[25];var a27 = fon[26];var a28 = fon[27];var a29 = fon[28];var a30 = fon[29];var a31 = fon[30];
var a32 = fon[31];var a33 = fon[32];var a34 = fon[33];var a35 = fon[34];var a36 = fon[35];var a37 = fon[36];var a38 = fon[37];var a39 = fon[38];var a40 = fon[39];var a41 = fon[40];
var a42 = fon[41];var a43 = fon[42];var a44 = fon[43];var a45 = fon[44];var a46 = fon[45];var a47 = fon[46];var a48 = fon[47];var a49 = fon[48];var a50 = fon[49];var a51 = fon[50];
var a52 = fon[51];var a53 = fon[52];var a54 = fon[53];var a55 = fon[54];var a56 = fon[55];var a57 = fon[56];var a58 = fon[57];var a59 = fon[58];var a60 = fon[59];var t1 = fon1[0];
var t2 = fon1[1];var t3 = fon1[2];var t4 = fon1[3];var t5 = fon1[4];var t6 = fon1[5];var t7 = fon1[6];var t8 = fon1[7];var t9 = fon1[8];var t10 = fon1[9];var t11 = fon1[10];var t12 = fon1[11];
var t13 = fon1[12];var t14 = fon1[13];var t15 = fon1[14];var t16 = fon1[15];var t17 = fon1[16];var t18 = fon1[17];var t19 = fon1[18];var t20 = fon1[19];var t21 = fon1[20];var t22 = fon1[21];
var t23 = fon1[22];var t24 = fon1[23];var t25 = fon1[24];var t26 = fon1[25];var t27 = fon1[26];var t28 = fon1[27];var t29 = fon1[28];var t30 = fon1[29];var t31 = fon1[30];
var t32 = fon1[31];var t33 = fon1[32];var t34 = fon1[33];var t35 = fon1[34];var t36 = fon1[35];var t37 = fon1[36];var t38 = fon1[37];var t39 = fon1[38];var t40 = fon1[39];var t41 = fon1[40];
var t42 = fon1[41];var t43 = fon1[42];var t44 = fon1[43];var t45 = fon1[44];var t46 = fon1[45];var t47 = fon1[46];var t48 = fon1[47];var t49 = fon1[48];var t50 = fon1[49];var t51 = fon1[50];
var t52 = fon1[51];var t53 = fon1[52];var t54 = fon1[53];var t55 = fon1[54];var t56 = fon1[55];var t57 = fon1[56];var t58 = fon1[57];var t59 = fon1[58];var t60 = fon1[59];var l1 = fon2[0];

var l2 = fon2[1];var l3 = fon2[2];var l4 = fon2[3];var l5 = fon2[4];var l6 = fon2[5];var l7 = fon2[6];var l8 = fon2[7];var l9 = fon2[8];var l10 = fon2[9];var l11 = fon2[10];var l12 = fon2[11];
var l13 = fon2[12];
var l14 = fon2[13];
var l15 = fon2[14];
var l16 = fon2[15];
var l17 = fon2[16];
var l18 = fon2[17];
var l19 = fon2[18];
var l20 = fon2[19];
var l21 = fon2[20];
var l22 = fon2[21];
var l23 = fon2[22];
var l24 = fon2[23];
var l25 = fon2[24];
var l26 = fon2[25];
var l27 = fon2[26];
var l28 = fon2[27];
var l29 = fon2[28];
var l30 = fon2[29];
var l31 = fon2[30];
var l32 = fon2[31];
var l33 = fon2[32];
var l34 = fon2[33];
var l35 = fon2[34];
var l36 = fon2[35];
var l37 = fon2[36];
var l38 = fon2[37];
var l39 = fon2[38];
var l40 = fon2[39];
var l41 = fon2[40];
var l42 = fon2[41];
var l43 = fon2[42];
var l44 = fon2[43];
var l45 = fon2[44];
var l46 = fon2[45];
var l47 = fon2[46];
var l48 = fon2[47];
var l49 = fon2[48];
var l50 = fon2[49];
var l51 = fon2[50];
var l52 = fon2[51];
var l53 = fon2[52];
var l54 = fon2[53];
var l55 = fon2[54];
var l56 = fon2[55];
var l57 = fon2[56];
var l58 = fon2[57];
var l59 = fon2[58];
var l60 = fon2[59];
var alp = 0.05;
var alp1 = 0.06;
/*
var proba = (game.newImageObject(   { 
     file : txt1, 
     x : 500,
     y : 300,
     w : 128, 
     h : 128, 
     alpha : 1,
     //scale : 0.5, // уменьшить картинку в 2 раза, если не заданы ширина и высота
   }));*/

var time = 0;
var p1 = p(1347, 725);
var p2 = p(640, 305);
var p3 = p(290, 90);
var x1 = 17;
var y1 = 15;
game.newLoop('start', function () {
  var wh = game.getWH();
  var WIDTH = wh.w;
  var HEIGHT = wh.h;
  if (WIDTH != width) width = wh.w;
  if (HEIGHT != height) height = wh.h;
  button.setPositionS(p(width - wh.w / 2 - 100, height - wh.h / 2 - 100));
  button1.setPositionS(p(width - wh.w / 2 - 100, height - wh.h / 2 - 100)); //text1.setPositionS(p(width-wh.w/2-100, height-wh.h/2-50));
  //mouse.isPeekObject( "LEFT", button)

  if (mouse.isPeekObject('LEFT', button)) {
    button1.alpha = 1;
    game.setLoop('myGame');
  }

  ; // else {button1.visible = false};
  //text1.draw();

  back.draw();
  button.draw();
  button1.draw();
}); // game.newLoop('start', function () {

game.setLoop('start');
game.newLoop('myGame', function () {
  back1.draw(); //proba.file = txt1;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var n in fon1) {
    fon1[n].draw();
  }

  ;

  for (var m in fon2) {
    fon2[m].draw();
  }

  ;

  if (a60.alpha < 1) {
    //var at1 = Object.assign(a1.alpha,t1.alpha);
    if (a1.alpha < 1 && t1.alpha < 1) {
      //1
      //t1.file = txt1;
      a1.alpha += alp;
      t1.alpha += alp; //a1.drawStaticBox(0,0,0,0,"black");
      //pjs.brush.drawImage(t1);
    }

    if (a1.alpha >= 1 && a2.alpha < 1 && t1.alpha >= 1) {
      // 2,7,8
      a2.alpha += alp;
      a7.alpha += alp;
      a8.alpha += alp;
      t2.alpha += alp;
      t7.alpha += alp;
      t8.alpha += alp;
    }

    if (a2.alpha >= 1 && a3.alpha < 1) {
      //3,9,15,14,13
      a3.alpha += alp;
      a9.alpha += alp;
      a15.alpha += alp;
      a14.alpha += alp;
      a13.alpha += alp;
      t3.alpha += alp;
      t9.alpha += alp;
      t15.alpha += alp;
      t14.alpha += alp;
      t13.alpha += alp;
    }

    if (a3.alpha >= 1 && a4.alpha < 1) {
      //4,10,16,22,21,20,19
      a4.alpha += alp;
      a10.alpha += alp;
      a16.alpha += alp;
      a22.alpha += alp;
      a21.alpha += alp;
      a20.alpha += alp;
      a19.alpha += alp;
      t4.alpha += alp;
      t10.alpha += alp;
      t16.alpha += alp;
      t22.alpha += alp;
      t21.alpha += alp;
      t20.alpha += alp;
      t19.alpha += alp;
    }

    if (a4.alpha >= 1 && a5.alpha < 1) {
      //5,11,17,23,29,28,27,26,25
      a5.alpha += alp;
      a11.alpha += alp;
      a17.alpha += alp;
      a23.alpha += alp;
      a29.alpha += alp;
      a28.alpha += alp;
      a27.alpha += alp;
      a26.alpha += alp;
      a25.alpha += alp;
      t5.alpha += alp;
      t11.alpha += alp;
      t17.alpha += alp;
      t23.alpha += alp;
      t29.alpha += alp;
      t28.alpha += alp;
      t27.alpha += alp;
      t26.alpha += alp;
      t25.alpha += alp;
    }

    if (a5.alpha >= 1 && a6.alpha < 1) {
      //6,12,18,24,30,36,35,34,33,32,31
      a6.alpha += alp;
      a12.alpha += alp;
      a18.alpha += alp;
      a24.alpha += alp;
      a30.alpha += alp;
      a36.alpha += alp;
      a35.alpha += alp;
      a34.alpha += alp;
      a33.alpha += alp;
      a32.alpha += alp;
      a31.alpha += alp;
      t6.alpha += alp;
      t12.alpha += alp;
      t18.alpha += alp;
      t24.alpha += alp;
      t30.alpha += alp;
      t36.alpha += alp;
      t35.alpha += alp;
      t34.alpha += alp;
      t33.alpha += alp;
      t32.alpha += alp;
      t31.alpha += alp;
    }

    if (a6.alpha >= 1 && a37.alpha < 1) {
      //37,38,39,40,41,42
      a37.alpha += alp;
      a38.alpha += alp;
      a39.alpha += alp;
      a40.alpha += alp;
      a41.alpha += alp;
      a42.alpha += alp;
      t37.alpha += alp;
      t38.alpha += alp;
      t39.alpha += alp;
      t40.alpha += alp;
      t41.alpha += alp;
      t42.alpha += alp;
    }

    if (a37.alpha >= 1 && a43.alpha < 1) {
      // 43,44,45,46,47,48
      a43.alpha += alp;
      a44.alpha += alp;
      a45.alpha += alp;
      a46.alpha += alp;
      a47.alpha += alp;
      a48.alpha += alp;
      t43.alpha += alp;
      t44.alpha += alp;
      t45.alpha += alp;
      t46.alpha += alp;
      t47.alpha += alp;
      t48.alpha += alp;
    }

    if (a48.alpha >= 1 && a49.alpha < 1) {
      //49,50,51,52,53,54
      a49.alpha += alp;
      a50.alpha += alp;
      a51.alpha += alp;
      a52.alpha += alp;
      a53.alpha += alp;
      a54.alpha += alp;
      t49.alpha += alp;
      t50.alpha += alp;
      t51.alpha += alp;
      t52.alpha += alp;
      t53.alpha += alp;
      t54.alpha += alp;
    }

    if (a54.alpha >= 1 && a55.alpha < 1) {
      // 55,56,57,58,59,60
      a55.alpha += alp;
      a56.alpha += alp;
      a57.alpha += alp;
      a58.alpha += alp;
      a59.alpha += alp;
      a60.alpha += alp;
      t55.alpha += alp;
      t56.alpha += alp;
      t57.alpha += alp;
      t58.alpha += alp;
      t59.alpha += alp;
      t60.alpha += alp;
    }
  }

  if (key.isPress('SPACE') && a60.alpha >= 1) {
    game.setLoop('myGame1');
  }
}); //game.newLoop('myGame', function

game.newLoop('myGame1', function () {
  back1.draw();

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var n in fon1) {
    fon1[n].draw();
  }

  ;

  for (var m in fon2) {
    fon2[m].draw();
  }

  ;

  if (a60.alpha >= 1) {
    //1
    //a1.drawStaticBox(0,0,0,0,"black");
    if (a1.alpha >= 0) {
      a1.fillColor = cVera;
      l1.alpha += alp;
      t1.alpha -= alp1;
    }

    if (t1.alpha <= 0) {
      //2,8,7
      l1.alpha = 1;
      t1.alpha = 0;
      a2.fillColor = cVera;
      a7.fillColor = cLera;
      a8.fillColor = cLera;
      l2.alpha += alp;
      l7.alpha += alp;
      l8.alpha += alp;
      t2.alpha -= alp1;
      t7.alpha -= alp1;
      t8.alpha -= alp1;
    }

    if (t2.alpha <= 0) {
      //3,9,15,14,13
      l2.alpha = 1;
      l7.alpha = 1;
      l8.alpha = 1;
      t2.alpha = 0;
      t7.alpha = 0;
      t8.alpha = 0;
      a3.fillColor = cVera;
      a9.fillColor = cMixail;
      a15.fillColor = cMaksim;
      a14.fillColor = cMaksim;
      a13.fillColor = cMaksim;
      l3.alpha += alp;
      l9.alpha += alp;
      l15.alpha += alp;
      l14.alpha += alp;
      l13.alpha += alp;
      t3.alpha -= alp1;
      t9.alpha -= alp1;
      t15.alpha -= alp1;
      t14.alpha -= alp1;
      t13.alpha -= alp1;
    }

    if (t3.alpha <= 0) {
      //4,10,16,22,21,20,19
      l3.alpha = 1;
      l9.alpha = 1;
      l15.alpha = 1;
      l4.alpha = 1;
      l13.alpha = 1;
      t3.alpha = 0;
      t9.alpha = 0;
      t15.alpha = 0;
      t14.alpha = 0;
      t13.alpha = 0;
      a4.fillColor = cVera;
      a10.fillColor = cMixail;
      a16.fillColor = cMaksim;
      a22.fillColor = cDmitr;
      a21.fillColor = cDmitr;
      a20.fillColor = cEliza;
      a19.fillColor = cEliza;
      l4.alpha += alp;
      l10.alpha += alp;
      l16.alpha += alp;
      l22.alpha += alp;
      l21.alpha += alp;
      l20.alpha += alp;
      l19.alpha += alp;
      t4.alpha -= alp1;
      t10.alpha -= alp1;
      t16.alpha -= alp1;
      t22.alpha -= alp1;
      t21.alpha -= alp1;
      t20.alpha -= alp1;
      t19.alpha -= alp1;
    }

    if (t4.alpha <= 0) {
      //5,11,17,23,29,28,27,26,25
      l4.alpha = 1;
      l10.alpha = 1;
      l16.alpha = 1;
      l22.alpha = 1;
      l21.alpha = 1;
      l20.alpha = 1;
      l19.alpha = 1;
      t4.alpha = 0;
      t10.alpha = 0;
      t16.alpha = 0;
      t22.alpha = 0;
      t21.alpha = 0;
      t20.alpha = 0;
      t19.alpha = 0;
      a5.fillColor = cLera;
      a11.fillColor = cMixail;
      a17.fillColor = cEliza;
      a23.fillColor = cDmitr;
      a29.fillColor = cAlla;
      a28.fillColor = cCveta;
      a27.fillColor = cCveta;
      a26.fillColor = cCveta;
      a25.fillColor = cCveta;
      l5.alpha += alp;
      l11.alpha += alp;
      l17.alpha += alp;
      l23.alpha += alp;
      l29.alpha += alp;
      l28.alpha += alp;
      l27.alpha += alp;
      l26.alpha += alp;
      l25.alpha += alp;
      t5.alpha -= alp1;
      t11.alpha -= alp1;
      t17.alpha -= alp1;
      t23.alpha -= alp1;
      t29.alpha -= alp1;
      t28.alpha -= alp1;
      t27.alpha -= alp1;
      t26.alpha -= alp1;
      t25.alpha -= alp1;
    }

    if (t5.alpha <= 0) {
      //6,12,18,24,30,36,35,34,33,32,31
      l5.alpha = 1;
      l11.alpha = 1;
      l17.alpha = 1;
      l23.alpha = 1;
      l29.alpha = 1;
      l28.alpha = 1;
      l27.alpha = 1;
      l26.alpha = 1;
      l25.alpha = 1;
      t5.alpha = 0;
      t11.alpha = 0;
      t17.alpha = 0;
      t23.alpha = 0;
      t29.alpha = 0;
      t28.alpha = 0;
      t27.alpha = 0;
      t26.alpha = 0;
      t25.alpha = 0;
      a6.fillColor = cLera;
      a12.fillColor = cMixail;
      a18.fillColor = cEliza;
      a24.fillColor = cDmitr;
      a30.fillColor = cAlla;
      a36.fillColor = cNatalya;
      a35.fillColor = cNatalya;
      a34.fillColor = cNatalya;
      a33.fillColor = cNatalya;
      a32.fillColor = cAlla;
      a31.fillColor = cAlla;
      l6.alpha += alp;
      l12.alpha += alp;
      l18.alpha += alp;
      l24.alpha += alp;
      l30.alpha += alp;
      l36.alpha += alp;
      l35.alpha += alp;
      l34.alpha += alp;
      l33.alpha += alp;
      l32.alpha += alp;
      l31.alpha += alp;
      t6.alpha -= alp1;
      t12.alpha -= alp1;
      t18.alpha -= alp1;
      t24.alpha -= alp1;
      t30.alpha -= alp1;
      t36.alpha -= alp1;
      t35.alpha -= alp1;
      t34.alpha -= alp1;
      t33.alpha -= alp1;
      t32.alpha -= alp1;
      t31.alpha -= alp1;
    }

    if (t6.alpha <= 0) {
      //37,38,39,40,41,42
      l6.alpha = 1;
      l12.alpha = 1;
      l18.alpha = 1;
      l24.alpha = 1;
      l30.alpha = 1;
      l36.alpha = 1;
      l35.alpha = 1;
      l34.alpha = 1;
      l33.alpha = 1;
      l32.alpha = 1;
      l31.alpha = 1;
      t6.alpha = 0;
      t12.alpha = 0;
      t18.alpha = 0;
      t24.alpha = 0;
      t30.alpha = 0;
      t36.alpha = 0;
      t35.alpha = 0;
      t34.alpha = 0;
      t33.alpha = 0;
      t32.alpha = 0;
      t31.alpha = 0;
      a37.fillColor = cN;
      a38.fillColor = cN;
      a39.fillColor = cN;
      a40.fillColor = cN;
      a41.fillColor = cN;
      a42.fillColor = cN;
      l37.alpha += alp;
      l38.alpha += alp;
      l39.alpha += alp;
      l40.alpha += alp;
      l41.alpha += alp;
      l42.alpha += alp;
      t37.alpha -= alp1;
      t38.alpha -= alp1;
      t39.alpha -= alp1;
      t40.alpha -= alp1;
      t41.alpha -= alp1;
      t42.alpha -= alp1;
    }

    if (t37.alpha <= 0) {
      //43,44,45,46,47,48
      l37.alpha = 1;
      l38.alpha = 1;
      l39.alpha = 1;
      l40.alpha = 1;
      l41.alpha = 1;
      l42.alpha = 1;
      t37.alpha = 0;
      t38.alpha = 0;
      t39.alpha = 0;
      t40.alpha = 0;
      t41.alpha = 0;
      t42.alpha = 0;
      a43.fillColor = cN;
      a44.fillColor = cN;
      a45.fillColor = cN;
      a46.fillColor = cN;
      a47.fillColor = cM;
      a48.fillColor = cM;
      l43.alpha += alp;
      l44.alpha += alp;
      l45.alpha += alp;
      l46.alpha += alp;
      l47.alpha += alp;
      l48.alpha += alp;
      t43.alpha -= alp1;
      t44.alpha -= alp1;
      t45.alpha -= alp1;
      t46.alpha -= alp1;
      t47.alpha -= alp1;
      t48.alpha -= alp1;
    }

    if (t43.alpha <= 0) {
      //49,50,51,52,53,54
      l43.alpha = 1;
      l44.alpha = 1;
      l45.alpha = 1;
      l46.alpha = 1;
      l47.alpha = 1;
      l48.alpha = 1;
      t43.alpha = 0;
      t44.alpha = 0;
      t45.alpha = 0;
      t46.alpha = 0;
      t47.alpha = 0;
      t48.alpha = 0;
      a49.fillColor = cM;
      a50.fillColor = cM;
      a51.fillColor = cM;
      a52.fillColor = cM;
      a53.fillColor = cM;
      a54.fillColor = cM;
      l48.alpha += alp;
      l49.alpha += alp;
      l50.alpha += alp;
      l51.alpha += alp;
      l52.alpha += alp;
      l53.alpha += alp;
      l54.alpha += alp;
      t48.alpha -= alp1;
      t49.alpha -= alp1;
      t50.alpha -= alp1;
      t51.alpha -= alp1;
      t52.alpha -= alp1;
      t53.alpha -= alp1;
      t54.alpha -= alp1;
    }

    if (t48.alpha <= 0) {
      //55,56,57,58,59,60
      l48.alpha = 1;
      l49.alpha = 1;
      l50.alpha = 1;
      l51.alpha = 1;
      l52.alpha = 1;
      l53.alpha = 1;
      l54.alpha = 1;
      t48.alpha = 0;
      t49.alpha = 0;
      t50.alpha = 0;
      t51.alpha = 0;
      t52.alpha = 0;
      t53.alpha = 0;
      t54.alpha = 0;
      a55.fillColor = cM;
      a56.fillColor = cM;
      a57.fillColor = cI;
      a58.fillColor = cI;
      a59.fillColor = cI;
      a60.fillColor = cI;
      l55.alpha += alp;
      l56.alpha += alp;
      l57.alpha += alp;
      l58.alpha += alp;
      l59.alpha += alp;
      l60.alpha += alp;
      t55.alpha -= alp1;
      t56.alpha -= alp1;
      t57.alpha -= alp1;
      t58.alpha -= alp1;
      t59.alpha -= alp1;
      t60.alpha -= alp1;
    }

    if (t55.alpha < 0) {
      l55.alpha = 1;
      l56.alpha = 1;
      l57.alpha = 1;
      l58.alpha = 1;
      l59.alpha = 1;
      l60.alpha = 1;
      t55.alpha = 0;
      t56.alpha = 0;
      t57.alpha = 0;
      t58.alpha = 0;
      t59.alpha = 0;
      t60.alpha = 0;
    }
  }

  if (t60.alpha <= 0) {
    if (t60.alpha <= 0) {
      a60.moveTo(p1, x1, y1);
      t60.moveTo(p1, x1, y1);
      l60.moveTo(p1, x1, y1);
      a60.fillColor = cH;
    }

    if (a60.x >= 1347 && a60.y >= 725) {
      a60.setPosition(p1);
      t60.setPosition(p1);
      l60.setPosition(p1);
      a59.moveTo(p1, x1, y1);
      l59.moveTo(p1, x1, y1);
      t59.moveTo(p1, x1, y1);
      a54.moveTo(p1, x1, y1);
      l54.moveTo(p1, x1, y1);
      t54.moveTo(p1, x1, y1);
      a53.moveTo(p1, x1, y1);
      l53.moveTo(p1, x1, y1);
      t53.moveTo(p1, x1, y1);
      a59.fillColor = cH;
      a54.fillColor = cH;
      a53.fillColor = cH;
    }

    if (a59.x >= 1347 && a59.y >= 725) {
      a59.setPosition(p1);
      l59.setPosition(p1);
      t59.setPosition(p1);
      a54.setPosition(p1);
      l54.setPosition(p1);
      t54.setPosition(p1);
      a53.setPosition(p1);
      l53.setPosition(p1);
      t53.setPosition(p1);
      a58.moveTo(p1, x1, y1);
      l58.moveTo(p1, x1, y1);
      t58.moveTo(p1, x1, y1);
      a52.moveTo(p1, x1, y1);
      t52.moveTo(p1, x1, y1);
      l52.moveTo(p1, x1, y1);
      a46.moveTo(p1, x1, y1);
      l46.moveTo(p1, x1, y1);
      t46.moveTo(p1, x1, y1);
      a47.moveTo(p1, x1, y1);
      t47.moveTo(p1, x1, y1);
      l47.moveTo(p1, x1, y1);
      a48.moveTo(p1, x1, y1);
      t48.moveTo(p1, x1, y1);
      l48.moveTo(p1, x1, y1);
      a58.fillColor = cH;
      a52.fillColor = cH;
      a46.fillColor = cH;
      a47.fillColor = cH;
      a48.fillColor = cH;
    }

    if (a58.x >= 1347 && a58.y >= 725) {
      a58.setPosition(p1);
      t58.setPosition(p1);
      l58.setPosition(p1);
      a52.setPosition(p1);
      t52.setPosition(p1);
      l52.setPosition(p1);
      a46.setPosition(p1);
      t46.setPosition(p1);
      l46.setPosition(p1);
      a47.setPosition(p1);
      t47.setPosition(p1);
      l47.setPosition(p1);
      a48.setPosition(p1);
      t48.setPosition(p1);
      l48.setPosition(p1);
      a57.moveTo(p1, x1, y1);
      t57.moveTo(p1, x1, y1);
      l57.moveTo(p1, x1, y1);
      a51.moveTo(p1, x1, y1);
      t51.moveTo(p1, x1, y1);
      l51.moveTo(p1, x1, y1);
      a45.moveTo(p1, x1, y1);
      t45.moveTo(p1, x1, y1);
      l45.moveTo(p1, x1, y1);
      a39.moveTo(p1, x1, y1);
      t39.moveTo(p1, x1, y1);
      l39.moveTo(p1, x1, y1);
      a40.moveTo(p1, x1, y1);
      t40.moveTo(p1, x1, y1);
      l40.moveTo(p1, x1, y1);
      a41.moveTo(p1, x1, y1);
      t41.moveTo(p1, x1, y1);
      l41.moveTo(p1, x1, y1);
      a42.moveTo(p1, x1, y1);
      t42.moveTo(p1, x1, y1);
      l42.moveTo(p1, x1, y1);
      a57.fillColor = cH;
      a51.fillColor = cH;
      a45.fillColor = cH;
      a39.fillColor = cH;
      a40.fillColor = cH;
      a41.fillColor = cH;
      a42.fillColor = cH;
    }

    if (a57.x >= 1347 && a57.y >= 725) {
      a57.setPosition(p1);
      t57.setPosition(p1);
      l57.setPosition(p1);
      a51.setPosition(p1);
      t51.setPosition(p1);
      l51.setPosition(p1);
      a45.setPosition(p1);
      t45.setPosition(p1);
      l45.setPosition(p1);
      a39.setPosition(p1);
      t39.setPosition(p1);
      l39.setPosition(p1);
      a40.setPosition(p1);
      t40.setPosition(p1);
      l40.setPosition(p1);
      a41.setPosition(p1);
      t41.setPosition(p1);
      l41.setPosition(p1);
      a42.setPosition(p1);
      t42.setPosition(p1);
      l42.setPosition(p1);
      a56.moveTo(p1, x1, y1);
      t56.moveTo(p1, x1, y1);
      l56.moveTo(p1, x1, y1);
      a50.moveTo(p1, x1, y1);
      t50.moveTo(p1, x1, y1);
      l50.moveTo(p1, x1, y1);
      a44.moveTo(p1, x1, y1);
      t44.moveTo(p1, x1, y1);
      l44.moveTo(p1, x1, y1);
      a38.moveTo(p1, x1, y1);
      t38.moveTo(p1, x1, y1);
      l38.moveTo(p1, x1, y1);
      a32.moveTo(p1, x1, y1);
      t32.moveTo(p1, x1, y1);
      l32.moveTo(p1, x1, y1);
      a33.moveTo(p1, x1, y1);
      t33.moveTo(p1, x1, y1);
      l33.moveTo(p1, x1, y1);
      a34.moveTo(p1, x1, y1);
      t34.moveTo(p1, x1, y1);
      l34.moveTo(p1, x1, y1);
      a35.moveTo(p1, x1, y1);
      t35.moveTo(p1, x1, y1);
      l35.moveTo(p1, x1, y1);
      a36.moveTo(p1, x1, y1);
      t36.moveTo(p1, x1, y1);
      l36.moveTo(p1, x1, y1);
      a56.fillColor = cH;
      a50.fillColor = cH;
      a44.fillColor = cH;
      a38.fillColor = cH;
      a32.fillColor = cH;
      a33.fillColor = cH;
      a34.fillColor = cH;
      a35.fillColor = cH;
      a36.fillColor = cH;
    }

    if (a56.x >= 1347 && a56.y >= 725) {
      a56.setPosition(p1);
      t56.setPosition(p1);
      l56.setPosition(p1);
      a50.setPosition(p1);
      t50.setPosition(p1);
      l50.setPosition(p1);
      a44.setPosition(p1);
      t44.setPosition(p1);
      l44.setPosition(p1);
      a38.setPosition(p1);
      t38.setPosition(p1);
      l38.setPosition(p1);
      a32.setPosition(p1);
      t32.setPosition(p1);
      l32.setPosition(p1);
      a33.setPosition(p1);
      t33.setPosition(p1);
      l33.setPosition(p1);
      a34.setPosition(p1);
      t34.setPosition(p1);
      l34.setPosition(p1);
      a35.setPosition(p1);
      t35.setPosition(p1);
      l35.setPosition(p1);
      a36.setPosition(p1);
      t36.setPosition(p1);
      l36.setPosition(p1);
      a55.moveTo(p1, x1, y1);
      t55.moveTo(p1, x1, y1);
      l55.moveTo(p1, x1, y1);
      a49.moveTo(p1, x1, y1);
      t49.moveTo(p1, x1, y1);
      l49.moveTo(p1, x1, y1);
      a43.moveTo(p1, x1, y1);
      t43.moveTo(p1, x1, y1);
      l43.moveTo(p1, x1, y1);
      a37.moveTo(p1, x1, y1);
      t37.moveTo(p1, x1, y1);
      l37.moveTo(p1, x1, y1);
      a31.moveTo(p1, x1, y1);
      t31.moveTo(p1, x1, y1);
      l31.moveTo(p1, x1, y1);
      a25.moveTo(p1, x1, y1);
      t25.moveTo(p1, x1, y1);
      l25.moveTo(p1, x1, y1);
      a26.moveTo(p1, x1, y1);
      t26.moveTo(p1, x1, y1);
      l26.moveTo(p1, x1, y1);
      a27.moveTo(p1, x1, y1);
      t27.moveTo(p1, x1, y1);
      l27.moveTo(p1, x1, y1);
      a28.moveTo(p1, x1, y1);
      t28.moveTo(p1, x1, y1);
      l28.moveTo(p1, x1, y1);
      a29.moveTo(p1, x1, y1);
      t29.moveTo(p1, x1, y1);
      l29.moveTo(p1, x1, y1);
      a30.moveTo(p1, x1, y1);
      t30.moveTo(p1, x1, y1);
      l30.moveTo(p1, x1, y1);
      a55.fillColor = cH;
      a49.fillColor = cH;
      a43.fillColor = cH;
      a37.fillColor = cH;
      a31.fillColor = cH;
      a25.fillColor = cH;
      a26.fillColor = cH;
      a27.fillColor = cH;
      a28.fillColor = cH;
      a29.fillColor = cH;
      a30.fillColor = cH;
    }

    if (a55.x >= 1347 && a55.y >= 725) {
      a55.setPosition(p1);
      t55.setPosition(p1);
      l55.setPosition(p1);
      a49.setPosition(p1);
      t49.setPosition(p1);
      l49.setPosition(p1);
      a43.setPosition(p1);
      t43.setPosition(p1);
      l43.setPosition(p1);
      a37.setPosition(p1);
      t37.setPosition(p1);
      l37.setPosition(p1);
      a31.setPosition(p1);
      t31.setPosition(p1);
      l31.setPosition(p1);
      a25.setPosition(p1);
      t25.setPosition(p1);
      l25.setPosition(p1);
      a26.setPosition(p1);
      t26.setPosition(p1);
      l26.setPosition(p1);
      a27.setPosition(p1);
      t27.setPosition(p1);
      l27.setPosition(p1);
      a28.setPosition(p1);
      t28.setPosition(p1);
      l28.setPosition(p1);
      a29.setPosition(p1);
      t29.setPosition(p1);
      l29.setPosition(p1);
      a30.setPosition(p1);
      t30.setPosition(p1);
      l30.setPosition(p1);
      a1.moveTo(p1, x1, y1);
      t1.moveTo(p1, x1, y1);
      l1.moveTo(p1, x1, y1);
      a7.moveTo(p1, x1, y1);
      t7.moveTo(p1, x1, y1);
      l7.moveTo(p1, x1, y1);
      a2.moveTo(p1, x1, y1);
      t2.moveTo(p1, x1, y1);
      l2.moveTo(p1, x1, y1);
      a8.moveTo(p1, x1, y1);
      t8.moveTo(p1, x1, y1);
      l8.moveTo(p1, x1, y1);
      a1.fillColor = cH;
      a7.fillColor = cH;
      a2.fillColor = cH;
      a8.fillColor = cH;
    }

    if (a1.x >= 1347 && a1.y >= 725) {
      a1.setPosition(p1);
      t1.setPosition(p1);
      l1.setPosition(p1);
      a7.setPosition(p1);
      t7.setPosition(p1);
      l7.setPosition(p1);
      a2.setPosition(p1);
      t2.setPosition(p1);
      l2.setPosition(p1);
      a8.setPosition(p1);
      t8.setPosition(p1);
      l8.setPosition(p1);
      a15.moveTo(p1, x1, y1);
      t15.moveTo(p1, x1, y1);
      l15.moveTo(p1, x1, y1);
      a21.moveTo(p1, x1, y1);
      t21.moveTo(p1, x1, y1);
      l21.moveTo(p1, x1, y1);
      a16.moveTo(p1, x1, y1);
      t16.moveTo(p1, x1, y1);
      l16.moveTo(p1, x1, y1);
      a22.moveTo(p1, x1, y1);
      t22.moveTo(p1, x1, y1);
      l22.moveTo(p1, x1, y1);
      a15.fillColor = cH;
      a21.fillColor = cH;
      a16.fillColor = cH;
      a22.fillColor = cH;
    }

    if (a15.x >= 1347 && a15.y >= 725) {
      a15.setPosition(p1);
      t15.setPosition(p1);
      l15.setPosition(p1);
      a21.setPosition(p1);
      t21.setPosition(p1);
      l21.setPosition(p1);
      a16.setPosition(p1);
      t16.setPosition(p1);
      l16.setPosition(p1);
      a22.setPosition(p1);
      t22.setPosition(p1);
      l22.setPosition(p1);
      a5.moveTo(p1, x1, y1);
      t5.moveTo(p1, x1, y1);
      l5.moveTo(p1, x1, y1);
      a11.moveTo(p1, x1, y1);
      t11.moveTo(p1, x1, y1);
      l11.moveTo(p1, x1, y1);
      a6.moveTo(p1, x1, y1);
      t6.moveTo(p1, x1, y1);
      l6.moveTo(p1, x1, y1);
      a12.moveTo(p1, x1, y1);
      t12.moveTo(p1, x1, y1);
      l12.moveTo(p1, x1, y1);
      a5.fillColor = cH;
      a11.fillColor = cH;
      a6.fillColor = cH;
      a12.fillColor = cH;
    }

    if (a5.x >= 1347 && a5.y >= 725) {
      a5.setPosition(p1);
      t5.setPosition(p1);
      l5.setPosition(p1);
      a11.setPosition(p1);
      t11.setPosition(p1);
      l11.setPosition(p1);
      a6.setPosition(p1);
      t6.setPosition(p1);
      l6.setPosition(p1);
      a12.setPosition(p1);
      t12.setPosition(p1);
      l12.setPosition(p1);
      a13.moveTo(p1, x1, y1);
      t13.moveTo(p1, x1, y1);
      l13.moveTo(p1, x1, y1);
      a19.moveTo(p1, x1, y1);
      t19.moveTo(p1, x1, y1);
      l19.moveTo(p1, x1, y1);
      a14.moveTo(p1, x1, y1);
      t14.moveTo(p1, x1, y1);
      l14.moveTo(p1, x1, y1);
      a20.moveTo(p1, x1, y1);
      t20.moveTo(p1, x1, y1);
      l20.moveTo(p1, x1, y1);
      a13.fillColor = cH;
      a19.fillColor = cH;
      a14.fillColor = cH;
      a20.fillColor = cH;
    }

    if (a13.x >= 1347 && a13.y >= 725) {
      a13.setPosition(p1);
      t13.setPosition(p1);
      l13.setPosition(p1);
      a19.setPosition(p1);
      t19.setPosition(p1);
      l19.setPosition(p1);
      a14.setPosition(p1);
      t14.setPosition(p1);
      l14.setPosition(p1);
      a20.setPosition(p1);
      t20.setPosition(p1);
      l20.setPosition(p1);
      a3.moveTo(p1, x1, y1);
      t3.moveTo(p1, x1, y1);
      l3.moveTo(p1, x1, y1);
      a9.moveTo(p1, x1, y1);
      t9.moveTo(p1, x1, y1);
      l9.moveTo(p1, x1, y1);
      a4.moveTo(p1, x1, y1);
      t4.moveTo(p1, x1, y1);
      l4.moveTo(p1, x1, y1);
      a10.moveTo(p1, x1, y1);
      t10.moveTo(p1, x1, y1);
      l10.moveTo(p1, x1, y1);
      a3.fillColor = cH;
      a9.fillColor = cH;
      a4.fillColor = cH;
      a10.fillColor = cH;
    }

    if (a3.x >= 1347 && a3.y >= 725) {
      a3.setPosition(p1);
      t3.setPosition(p1);
      l3.setPosition(p1);
      a9.setPosition(p1);
      t9.setPosition(p1);
      l9.setPosition(p1);
      a4.setPosition(p1);
      t4.setPosition(p1);
      l4.setPosition(p1);
      a10.setPosition(p1);
      t10.setPosition(p1);
      l10.setPosition(p1);
      a17.moveTo(p1, x1, y1);
      t17.moveTo(p1, x1, y1);
      l17.moveTo(p1, x1, y1);
      a23.moveTo(p1, x1, y1);
      t23.moveTo(p1, x1, y1);
      l23.moveTo(p1, x1, y1);
      a18.moveTo(p1, x1, y1);
      t18.moveTo(p1, x1, y1);
      l18.moveTo(p1, x1, y1);
      a24.moveTo(p1, x1, y1);
      t24.moveTo(p1, x1, y1);
      l24.moveTo(p1, x1, y1);
      a17.fillColor = cH;
      a23.fillColor = cH;
      a18.fillColor = cH;
      a24.fillColor = cH;
    }

    if (a17.x >= 1347 && a17.y >= 725) {
      a17.setPosition(p1);
      t17.setPosition(p1);
      l17.setPosition(p1);
      a23.setPosition(p1);
      t23.setPosition(p1);
      l23.setPosition(p1);
      a18.setPosition(p1);
      t18.setPosition(p1);
      l18.setPosition(p1);
      a24.setPosition(p1);
      t24.setPosition(p1);
      l24.setPosition(p1);
    }

    if (key.isPress('SPACE') && a24.x >= 1347 && a24.y >= 725) {
      game.setLoop('myGame2');
    }
  }
}); //game.newLoop('myGame', function

game.newLoop('myGame2', function () {
  back1.draw();
  field.draw();

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  ;

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  if (field.alpha < 1) {
    field.alpha += alp;
    fon3.forEach(function (item) {
      item.alpha += alp;
    });

    if (field.alpha >= 1) {
      fon1.pop();
      pjs.math.randomFY(fon1);
    }
  }

  if (field.alpha >= 1 && key.isPress('SPACE')) {
    game.setLoop('myGame3');
  }
});
game.newLoop('myGame3', function () {
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  ;

  if (field.alpha >= 1) {
    if (a1.alpha >= 1) {
      a1.moveTo(p(290, 90), x1, y1);
      t1.moveTo(p(290, 90), x1, y1);
      l1.moveTo(p(290, 90), x1, y1); //a1.drawStaticBox(0,0,0,0,"black");
    }

    if (a1.isStaticIntersect(fon3[0].getStaticBox()) == true) {
      a1.setPosition(p(290, 90));
      t1.setPosition(p(290, 90));
      l1.setPosition(p(290, 90));
      a2.moveTo(p(290 + 138, 90), x1, y1);
      t2.moveTo(p(290 + 138, 90), x1, y1);
      l2.moveTo(p(290 + 138, 90), x1, y1);
    }

    if (a2.isStaticIntersect(fon3[5].getStaticBox()) == true) {
      a2.setPosition(p(290 + 138, 90));
      t2.setPosition(p(290 + 138, 90));
      l2.setPosition(p(290 + 138, 90));
      a3.moveTo(p(290 + 138 * 2, 90), x1, y1);
      t3.moveTo(p(290 + 138 * 2, 90), x1, y1);
      l3.moveTo(p(290 + 138 * 2, 90), x1, y1);
    }

    if (a3.isStaticIntersect(fon3[10].getStaticBox()) == true) {
      a3.setPosition(p(290 + 138 * 2, 90), x1, y1);
      t3.setPosition(p(290 + 138 * 2, 90), x1, y1);
      l3.setPosition(p(290 + 138 * 2, 90), x1, y1);
      a4.moveTo(p(290 + 138 * 3, 90), x1, y1);
      t4.moveTo(p(290 + 138 * 3, 90), x1, y1);
      l4.moveTo(p(290 + 138 * 3, 90), x1, y1);
    }

    if (a4.isStaticIntersect(fon3[15].getStaticBox()) == true) {
      a4.setPosition(p(290 + 138 * 3, 90), x1, y1);
      t4.setPosition(p(290 + 138 * 3, 90), x1, y1);
      l4.setPosition(p(290 + 138 * 3, 90), x1, y1);
      a5.moveTo(p(290 + 138 * 4, 90), x1, y1);
      t5.moveTo(p(290 + 138 * 4, 90), x1, y1);
      l5.moveTo(p(290 + 138 * 4, 90), x1, y1);
    }

    if (a5.isStaticIntersect(fon3[20].getStaticBox()) == true) {
      a5.setPosition(p(290 + 138 * 4, 90), x1, y1);
      t5.setPosition(p(290 + 138 * 4, 90), x1, y1);
      l5.setPosition(p(290 + 138 * 4, 90), x1, y1);
      a6.moveTo(p(290 + 138 * 5, 90), x1, y1);
      t6.moveTo(p(290 + 138 * 5, 90), x1, y1);
      l6.moveTo(p(290 + 138 * 5, 90), x1, y1);
    }

    if (a6.isStaticIntersect(fon3[25].getStaticBox()) == true) {
      a6.setPosition(p(290 + 138 * 5, 90), x1, y1);
      t6.setPosition(p(290 + 138 * 5, 90), x1, y1);
      l6.setPosition(p(290 + 138 * 5, 90), x1, y1);
      a7.moveTo(p(290 + 138 * 6, 90), x1, y1);
      t7.moveTo(p(290 + 138 * 6, 90), x1, y1);
      l7.moveTo(p(290 + 138 * 6, 90), x1, y1);
    }

    if (a7.isStaticIntersect(fon3[30].getStaticBox()) == true) {
      a7.setPosition(p(290 + 138 * 6, 90), x1, y1);
      t7.setPosition(p(290 + 138 * 6, 90), x1, y1);
      l7.setPosition(p(290 + 138 * 6, 90), x1, y1);
      a8.moveTo(p(290, 228), x1, y1);
      t8.moveTo(p(290, 228), x1, y1);
      l8.moveTo(p(290, 228), x1, y1);
    }

    if (a8.isStaticIntersect(fon3[1].getStaticBox()) == true) {
      a8.setPosition(p(290, 228), x1, y1);
      t8.setPosition(p(290, 228), x1, y1);
      l8.setPosition(p(290, 228), x1, y1);
      a9.moveTo(p(290 + 138, 228), x1, y1);
      t9.moveTo(p(290 + 138, 228), x1, y1);
      l9.moveTo(p(290 + 138, 228), x1, y1);
    }

    if (a9.isStaticIntersect(fon3[6].getStaticBox()) == true) {
      a9.setPosition(p(290 + 138, 228), x1, y1);
      t9.setPosition(p(290 + 138, 228), x1, y1);
      l9.setPosition(p(290 + 138, 228), x1, y1);
      a10.moveTo(p(290 + 138 * 2, 228), x1, y1);
      t10.moveTo(p(290 + 138 * 2, 228), x1, y1);
      l10.moveTo(p(290 + 138 * 2, 228), x1, y1);
    }

    if (a10.isStaticIntersect(fon3[11].getStaticBox()) == true) {
      a10.setPosition(p(290 + 138 * 2, 228), x1, y1);
      t10.setPosition(p(290 + 138 * 2, 228), x1, y1);
      l10.setPosition(p(290 + 138 * 2, 228), x1, y1);
      a11.moveTo(p(290 + 138 * 3, 228), x1, y1);
      t11.moveTo(p(290 + 138 * 3, 228), x1, y1);
      l11.moveTo(p(290 + 138 * 3, 228), x1, y1);
    }

    if (a11.isStaticIntersect(fon3[16].getStaticBox()) == true) {
      a11.setPosition(p(290 + 138 * 3, 228), x1, y1);
      t11.setPosition(p(290 + 138 * 3, 228), x1, y1);
      l11.setPosition(p(290 + 138 * 3, 228), x1, y1);
      a12.moveTo(p(290 + 138 * 4, 228), x1, y1);
      t12.moveTo(p(290 + 138 * 4, 228), x1, y1);
      l12.moveTo(p(290 + 138 * 4, 228), x1, y1);
    }

    if (a12.isStaticIntersect(fon3[21].getStaticBox()) == true) {
      a12.setPosition(p(290 + 138 * 4, 228), x1, y1);
      t12.setPosition(p(290 + 138 * 4, 228), x1, y1);
      l12.setPosition(p(290 + 138 * 4, 228), x1, y1);
      a13.moveTo(p(290 + 138 * 5, 228), x1, y1);
      t13.moveTo(p(290 + 138 * 5, 228), x1, y1);
      l13.moveTo(p(290 + 138 * 5, 228), x1, y1);
    }

    if (a13.isStaticIntersect(fon3[26].getStaticBox()) == true) {
      a13.setPosition(p(290 + 138 * 5, 228), x1, y1);
      t13.setPosition(p(290 + 138 * 5, 228), x1, y1);
      l13.setPosition(p(290 + 138 * 5, 228), x1, y1);
      a14.moveTo(p(290 + 138 * 6, 228), x1, y1);
      t14.moveTo(p(290 + 138 * 6, 228), x1, y1);
      l14.moveTo(p(290 + 138 * 6, 228), x1, y1);
    }

    if (a14.isStaticIntersect(fon3[31].getStaticBox()) == true) {
      a14.setPosition(p(290 + 138 * 6, 228), x1, y1);
      t14.setPosition(p(290 + 138 * 6, 228), x1, y1);
      l14.setPosition(p(290 + 138 * 6, 228), x1, y1);
      a15.moveTo(p(290, 228 + 138), x1, y1);
      t15.moveTo(p(290, 228 + 138), x1, y1);
      l15.moveTo(p(290, 228 + 138), x1, y1);
    }

    if (a15.isStaticIntersect(fon3[2].getStaticBox()) == true) {
      a15.setPosition(p(290, 228 + 138), x1, y1);
      t15.setPosition(p(290, 228 + 138), x1, y1);
      l15.setPosition(p(290, 228 + 138), x1, y1);
      a16.moveTo(p(290 + 138, 228 + 138), x1, y1);
      t16.moveTo(p(290 + 138, 228 + 138), x1, y1);
      l16.moveTo(p(290 + 138, 228 + 138), x1, y1);
    }

    if (a16.isStaticIntersect(fon3[7].getStaticBox()) == true) {
      a16.setPosition(p(290 + 138, 228 + 138), x1, y1);
      t16.setPosition(p(290 + 138, 228 + 138), x1, y1);
      l16.setPosition(p(290 + 138, 228 + 138), x1, y1);
      a17.moveTo(p(290 + 138 * 2, 228 + 138), x1, y1);
      t17.moveTo(p(290 + 138 * 2, 228 + 138), x1, y1);
      l17.moveTo(p(290 + 138 * 2, 228 + 138), x1, y1);
    }

    if (a17.isStaticIntersect(fon3[12].getStaticBox()) == true) {
      a17.setPosition(p(290 + 138 * 2, 228 + 138), x1, y1);
      t17.setPosition(p(290 + 138 * 2, 228 + 138), x1, y1);
      l17.setPosition(p(290 + 138 * 2, 228 + 138), x1, y1);
      a18.moveTo(p(290 + 138 * 3, 228 + 138), x1, y1);
      t18.moveTo(p(290 + 138 * 3, 228 + 138), x1, y1);
      l18.moveTo(p(290 + 138 * 3, 228 + 138), x1, y1);
    }

    if (a18.isStaticIntersect(fon3[17].getStaticBox()) == true) {
      a18.setPosition(p(290 + 138 * 3, 228 + 138), x1, y1);
      t18.setPosition(p(290 + 138 * 3, 228 + 138), x1, y1);
      l18.setPosition(p(290 + 138 * 3, 228 + 138), x1, y1);
      a19.moveTo(p(290 + 138 * 4, 228 + 138), x1, y1);
      t19.moveTo(p(290 + 138 * 4, 228 + 138), x1, y1);
      l19.moveTo(p(290 + 138 * 4, 228 + 138), x1, y1);
    }

    if (a19.isStaticIntersect(fon3[22].getStaticBox()) == true) {
      a19.setPosition(p(290 + 138 * 4, 228 + 138), x1, y1);
      t19.setPosition(p(290 + 138 * 4, 228 + 138), x1, y1);
      l19.setPosition(p(290 + 138 * 4, 228 + 138), x1, y1);
      a20.moveTo(p(290 + 138 * 5, 228 + 138), x1, y1);
      t20.moveTo(p(290 + 138 * 5, 228 + 138), x1, y1);
      l20.moveTo(p(290 + 138 * 5, 228 + 138), x1, y1);
    }

    if (a20.isStaticIntersect(fon3[27].getStaticBox()) == true) {
      a20.setPosition(p(290 + 138 * 5, 228 + 138), x1, y1);
      t20.setPosition(p(290 + 138 * 5, 228 + 138), x1, y1);
      l20.setPosition(p(290 + 138 * 5, 228 + 138), x1, y1);
      a21.moveTo(p(290 + 138 * 6, 228 + 138), x1, y1);
      t21.moveTo(p(290 + 138 * 6, 228 + 138), x1, y1);
      l21.moveTo(p(290 + 138 * 6, 228 + 138), x1, y1);
    }

    if (a21.isStaticIntersect(fon3[32].getStaticBox()) == true) {
      a21.setPosition(p(290 + 138 * 6, 228 + 138), x1, y1);
      t21.setPosition(p(290 + 138 * 6, 228 + 138), x1, y1);
      l21.setPosition(p(290 + 138 * 6, 228 + 138), x1, y1);
      a22.moveTo(p(290, 228 + 138 * 2), x1, y1);
      t22.moveTo(p(290, 228 + 138 * 2), x1, y1);
      l22.moveTo(p(290, 228 + 138 * 2), x1, y1);
    }

    if (a22.isStaticIntersect(fon3[3].getStaticBox()) == true) {
      a22.setPosition(p(290, 228 + 138 * 2), x1, y1);
      t22.setPosition(p(290, 228 + 138 * 2), x1, y1);
      l22.setPosition(p(290, 228 + 138 * 2), x1, y1);
      a23.moveTo(p(290 + 138, 228 + 138 * 2), x1, y1);
      t23.moveTo(p(290 + 138, 228 + 138 * 2), x1, y1);
      l23.moveTo(p(290 + 138, 228 + 138 * 2), x1, y1);
    }

    if (a23.isStaticIntersect(fon3[8].getStaticBox()) == true) {
      a23.setPosition(p(290 + 138, 228 + 138 * 2), x1, y1);
      t23.setPosition(p(290 + 138, 228 + 138 * 2), x1, y1);
      l23.setPosition(p(290 + 138, 228 + 138 * 2), x1, y1);
      a24.moveTo(p(290 + 138 * 2, 228 + 138 * 2), x1, y1);
      t24.moveTo(p(290 + 138 * 2, 228 + 138 * 2), x1, y1);
      l24.moveTo(p(290 + 138 * 2, 228 + 138 * 2), x1, y1);
    }

    if (a24.isStaticIntersect(fon3[13].getStaticBox()) == true) {
      a24.setPosition(p(290 + 138 * 2, 228 + 138 * 2), x1, y1);
      t24.setPosition(p(290 + 138 * 2, 228 + 138 * 2), x1, y1);
      l24.setPosition(p(290 + 138 * 2, 228 + 138 * 2), x1, y1);
      a25.moveTo(p(290 + 138 * 3, 228 + 138 * 2), x1, y1);
      t25.moveTo(p(290 + 138 * 3, 228 + 138 * 2), x1, y1);
      l25.moveTo(p(290 + 138 * 3, 228 + 138 * 2), x1, y1);
    }

    if (a25.isStaticIntersect(fon3[18].getStaticBox()) == true) {
      a25.setPosition(p(290 + 138 * 3, 228 + 138 * 2), x1, y1);
      t25.setPosition(p(290 + 138 * 3, 228 + 138 * 2), x1, y1);
      l25.setPosition(p(290 + 138 * 3, 228 + 138 * 2), x1, y1);
      a26.moveTo(p(290 + 138 * 4, 228 + 138 * 2), x1, y1);
      t26.moveTo(p(290 + 138 * 4, 228 + 138 * 2), x1, y1);
      l26.moveTo(p(290 + 138 * 4, 228 + 138 * 2), x1, y1);
    }

    if (a26.isStaticIntersect(fon3[23].getStaticBox()) == true) {
      a26.setPosition(p(290 + 138 * 4, 228 + 138 * 2), x1, y1);
      t26.setPosition(p(290 + 138 * 4, 228 + 138 * 2), x1, y1);
      l26.setPosition(p(290 + 138 * 4, 228 + 138 * 2), x1, y1);
      a27.moveTo(p(290 + 138 * 5, 228 + 138 * 2), x1, y1);
      t27.moveTo(p(290 + 138 * 5, 228 + 138 * 2), x1, y1);
      l27.moveTo(p(290 + 138 * 5, 228 + 138 * 2), x1, y1);
    }

    if (a27.isStaticIntersect(fon3[28].getStaticBox()) == true) {
      a27.setPosition(p(290 + 138 * 5, 228 + 138 * 2), x1, y1);
      t27.setPosition(p(290 + 138 * 5, 228 + 138 * 2), x1, y1);
      l27.setPosition(p(290 + 138 * 5, 228 + 138 * 2), x1, y1);
      a28.moveTo(p(290 + 138 * 6, 228 + 138 * 2), x1, y1);
      t28.moveTo(p(290 + 138 * 6, 228 + 138 * 2), x1, y1);
      l28.moveTo(p(290 + 138 * 6, 228 + 138 * 2), x1, y1);
    }

    if (a28.isStaticIntersect(fon3[33].getStaticBox()) == true) {
      a28.setPosition(p(290 + 138 * 6, 228 + 138 * 2), x1, y1);
      t28.setPosition(p(290 + 138 * 6, 228 + 138 * 2), x1, y1);
      l28.setPosition(p(290 + 138 * 6, 228 + 138 * 2), x1, y1);
      a29.moveTo(p(290, 228 + 138 * 3), x1, y1);
      t29.moveTo(p(290, 228 + 138 * 3), x1, y1);
      l29.moveTo(p(290, 228 + 138 * 3), x1, y1);
    }

    if (a29.isStaticIntersect(fon3[4].getStaticBox()) == true) {
      a29.setPosition(p(290, 228 + 138 * 3), x1, y1);
      t29.setPosition(p(290, 228 + 138 * 3), x1, y1);
      l29.setPosition(p(290, 228 + 138 * 3), x1, y1);
      a30.moveTo(p(290 + 138, 228 + 138 * 3), x1, y1);
      t30.moveTo(p(290 + 138, 228 + 138 * 3), x1, y1);
      l30.moveTo(p(290 + 138, 228 + 138 * 3), x1, y1);
    }

    if (a30.isStaticIntersect(fon3[9].getStaticBox()) == true) {
      a30.setPosition(p(290 + 138, 228 + 138 * 3), x1, y1);
      t30.setPosition(p(290 + 138, 228 + 138 * 3), x1, y1);
      l30.setPosition(p(290 + 138, 228 + 138 * 3), x1, y1);
      a31.moveTo(p(290 + 138 * 2, 228 + 138 * 3), x1, y1);
      t31.moveTo(p(290 + 138 * 2, 228 + 138 * 3), x1, y1);
      l31.moveTo(p(290 + 138 * 2, 228 + 138 * 3), x1, y1);
    }

    if (a31.isStaticIntersect(fon3[14].getStaticBox()) == true) {
      a31.setPosition(p(290 + 138 * 2, 228 + 138 * 3), x1, y1);
      t31.setPosition(p(290 + 138 * 2, 228 + 138 * 3), x1, y1);
      l31.setPosition(p(290 + 138 * 2, 228 + 138 * 3), x1, y1);
      a32.moveTo(p(290 + 138 * 3, 228 + 138 * 3), x1, y1);
      t32.moveTo(p(290 + 138 * 3, 228 + 138 * 3), x1, y1);
      l32.moveTo(p(290 + 138 * 3, 228 + 138 * 3), x1, y1);
    }

    if (a32.isStaticIntersect(fon3[19].getStaticBox()) == true) {
      a32.setPosition(p(290 + 138 * 3, 228 + 138 * 3), x1, y1);
      t32.setPosition(p(290 + 138 * 3, 228 + 138 * 3), x1, y1);
      l32.setPosition(p(290 + 138 * 3, 228 + 138 * 3), x1, y1);
      a33.moveTo(p(290 + 138 * 4, 228 + 138 * 3), x1, y1);
      t33.moveTo(p(290 + 138 * 4, 228 + 138 * 3), x1, y1);
      l33.moveTo(p(290 + 138 * 4, 228 + 138 * 3), x1, y1);
    }

    if (a33.isStaticIntersect(fon3[24].getStaticBox()) == true) {
      a33.setPosition(p(290 + 138 * 4, 228 + 138 * 3), x1, y1);
      t33.setPosition(p(290 + 138 * 4, 228 + 138 * 3), x1, y1);
      l33.setPosition(p(290 + 138 * 4, 228 + 138 * 3), x1, y1);
      a34.moveTo(p(290 + 138 * 5, 228 + 138 * 3), x1, y1);
      t34.moveTo(p(290 + 138 * 5, 228 + 138 * 3), x1, y1);
      l34.moveTo(p(290 + 138 * 5, 228 + 138 * 3), x1, y1);
    }

    if (a34.isStaticIntersect(fon3[29].getStaticBox()) == true) {
      a34.setPosition(p(290 + 138 * 5, 228 + 138 * 3), x1, y1);
      t34.setPosition(p(290 + 138 * 5, 228 + 138 * 3), x1, y1);
      l34.setPosition(p(290 + 138 * 5, 228 + 138 * 3), x1, y1);
      a35.moveTo(p(290 + 138 * 6, 228 + 138 * 3), x1, y1);
      t35.moveTo(p(290 + 138 * 6, 228 + 138 * 3), x1, y1);
      l35.moveTo(p(290 + 138 * 6, 228 + 138 * 3), x1, y1);
    }

    if (a35.isStaticIntersect(fon3[34].getStaticBox()) == true) {
      a35.setPosition(p(290 + 138 * 6, 228 + 138 * 3), x1, y1);
      t35.setPosition(p(290 + 138 * 6, 228 + 138 * 3), x1, y1);
      l35.setPosition(p(290 + 138 * 6, 228 + 138 * 3), x1, y1);

      if (a35.isStaticIntersect(fon3[34].getStaticBox()) == true) {
        //	if (a32.isStaticIntersect(fon[31].getStaticBox())==true) {
        //	fon[32].alpha-=alp;fon[33].alpha-=alp; fon[34].alpha-=alp;
        //	fon2[32].alpha-=alp;fon2[33].alpha-=alp; fon2[34].alpha-=alp;
        fon[35].alpha -= alp;
        fon[36].alpha -= alp;
        fon[37].alpha -= alp;
        fon[38].alpha -= alp;
        fon[39].alpha -= alp;
        fon[40].alpha -= alp;
        fon[41].alpha -= alp;
        fon[42].alpha -= alp;
        fon[43].alpha -= alp;
        fon[44].alpha -= alp;
        fon[45].alpha -= alp;
        fon[46].alpha -= alp;
        fon[47].alpha -= alp;
        fon[48].alpha -= alp;
        fon[49].alpha -= alp;
        fon[50].alpha -= alp;
        fon[51].alpha -= alp;
        fon[52].alpha -= alp;
        fon[53].alpha -= alp;
        fon[54].alpha -= alp;
        fon[55].alpha -= alp;
        fon[56].alpha -= alp;
        fon[57].alpha -= alp;
        fon[58].alpha -= alp;
        fon[59].alpha -= alp;
        fon2[35].alpha -= alp;
        fon2[36].alpha -= alp;
        fon2[37].alpha -= alp;
        fon2[38].alpha -= alp;
        fon2[39].alpha -= alp;
        fon2[40].alpha -= alp;
        fon2[41].alpha -= alp;
        fon2[42].alpha -= alp;
        fon2[43].alpha -= alp;
        fon2[44].alpha -= alp;
        fon2[45].alpha -= alp;
        fon2[46].alpha -= alp;
        fon2[47].alpha -= alp;
        fon2[48].alpha -= alp;
        fon2[49].alpha -= alp;
        fon2[50].alpha -= alp;
        fon2[51].alpha -= alp;
        fon2[52].alpha -= alp;
        fon2[53].alpha -= alp;
        fon2[54].alpha -= alp;
        fon2[55].alpha -= alp;
        fon2[56].alpha -= alp;
        fon2[57].alpha -= alp;
        fon2[58].alpha -= alp;
        fon2[59].alpha -= alp;
      }

      if (fon[59].alpha <= 0.1) {
        //fon[32].alpha=0;fon[33].alpha=0; fon[34].alpha=0;
        //fon2[32].alpha=0;fon2[33].alpha=0; fon2[34].alpha=0;			
        fon[35].alpha = 0;
        fon[36].alpha = 0;
        fon[37].alpha = 0;
        fon[38].alpha = 0;
        fon[39].alpha = 0;
        fon[40].alpha = 0;
        fon[41].alpha = 0;
        fon[42].alpha = 0;
        fon[43].alpha = 0;
        fon[44].alpha = 0;
        fon[45].alpha = 0;
        fon[46].alpha = 0;
        fon[47].alpha = 0;
        fon[48].alpha = 0;
        fon[49].alpha = 0;
        fon[50].alpha = 0;
        fon[51].alpha = 0;
        fon[52].alpha = 0;
        fon[53].alpha = 0;
        fon[54].alpha = 0;
        fon[55].alpha = 0;
        fon[56].alpha = 0;
        fon[57].alpha = 0;
        fon[58].alpha = 0;
        fon[59].alpha = 0;
        fon2[35].alpha = 0;
        fon2[36].alpha = 0;
        fon2[37].alpha = 0;
        fon2[38].alpha = 0;
        fon2[39].alpha = 0;
        fon2[40].alpha = 0;
        fon2[41].alpha = 0;
        fon2[42].alpha = 0;
        fon2[43].alpha = 0;
        fon2[44].alpha = 0;
        fon2[45].alpha = 0;
        fon2[46].alpha = 0;
        fon2[47].alpha = 0;
        fon2[48].alpha = 0;
        fon2[49].alpha = 0;
        fon2[50].alpha = 0;
        fon2[51].alpha = 0;
        fon2[52].alpha = 0;
        fon2[53].alpha = 0;
        fon2[54].alpha = 0;
        fon2[55].alpha = 0;
        fon2[56].alpha = 0;
        fon2[57].alpha = 0;
        fon2[58].alpha = 0;
        fon2[59].alpha = 0;
        game.setLoop('myGame4');
      }
    }
  }
});
/*
var dis = function () {

	for (var i=1; i>0; i-=0.01) {
		a1.alpha=i;
		fon1[5].alpha=i;
		l1.alpha=i;
	}
};*/

game.newLoop('myGame4', function () {
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  ;

  if (mouse.isPeekObject("LEFT", a1)) {
    game.setLoop('a1');
  }

  if (mouse.isPeekObject("LEFT", a2)) {
    game.setLoop('a2');
  }

  if (mouse.isPeekObject("LEFT", a3)) {
    game.setLoop('a3');
  }

  if (mouse.isPeekObject("LEFT", a4)) {
    game.setLoop('a4');
  }

  if (mouse.isPeekObject("LEFT", a5)) {
    game.setLoop('a5');
  }

  if (mouse.isPeekObject("LEFT", a6)) {
    game.setLoop('a6');
  }

  if (mouse.isPeekObject("LEFT", a7)) {
    game.setLoop('a7');
  }

  if (mouse.isPeekObject("LEFT", a8)) {
    game.setLoop('a8');
  }

  if (mouse.isPeekObject("LEFT", a9)) {
    game.setLoop('a9');
  }

  if (mouse.isPeekObject("LEFT", a10)) {
    game.setLoop('a10');
  }

  if (mouse.isPeekObject("LEFT", a11)) {
    game.setLoop('a11');
  }

  if (mouse.isPeekObject("LEFT", a12)) {
    game.setLoop('a12');
  }

  if (mouse.isPeekObject("LEFT", a13)) {
    game.setLoop('a13');
  }

  if (mouse.isPeekObject("LEFT", a14)) {
    game.setLoop('a14');
  }

  if (mouse.isPeekObject("LEFT", a15)) {
    game.setLoop('a15');
  }

  if (mouse.isPeekObject("LEFT", a16)) {
    game.setLoop('a16');
  }

  if (mouse.isPeekObject("LEFT", a17)) {
    game.setLoop('a17');
  }

  if (mouse.isPeekObject("LEFT", a18)) {
    game.setLoop('a18');
  }

  if (mouse.isPeekObject("LEFT", a19)) {
    game.setLoop('a19');
  }

  if (mouse.isPeekObject("LEFT", a20)) {
    game.setLoop('a20');
  }

  if (mouse.isPeekObject("LEFT", a21)) {
    game.setLoop('a21');
  }

  if (mouse.isPeekObject("LEFT", a22)) {
    game.setLoop('a22');
  }

  if (mouse.isPeekObject("LEFT", a23)) {
    game.setLoop('a23');
  }

  if (mouse.isPeekObject("LEFT", a24)) {
    game.setLoop('a24');
  }

  if (mouse.isPeekObject("LEFT", a25)) {
    game.setLoop('a25');
  }

  if (mouse.isPeekObject("LEFT", a26)) {
    game.setLoop('a26');
  }

  if (mouse.isPeekObject("LEFT", a27)) {
    game.setLoop('a27');
  }

  if (mouse.isPeekObject("LEFT", a28)) {
    game.setLoop('a28');
  }

  if (mouse.isPeekObject("LEFT", a29)) {
    game.setLoop('a29');
  }

  if (mouse.isPeekObject("LEFT", a30)) {
    game.setLoop('a30');
  }

  if (mouse.isPeekObject("LEFT", a31)) {
    game.setLoop('a31');
  }

  if (mouse.isPeekObject("LEFT", a32)) {
    game.setLoop('a32');
  }

  if (mouse.isPeekObject("LEFT", a33)) {
    game.setLoop('a33');
  }

  if (mouse.isPeekObject("LEFT", a34)) {
    game.setLoop('a34');
  }

  if (mouse.isPeekObject("LEFT", a35)) {
    game.setLoop('a35');
  }

  if (key.isPress('SPACE') && a1.alpha >= 1 && a3.alpha >= 1 && a5.alpha >= 1 && a7.alpha >= 1 && a9.alpha >= 1 && a11.alpha >= 1 && a13.alpha >= 1 && a15.alpha >= 1 && a17.alpha >= 1 && a19.alpha >= 1 && a21.alpha >= 1 && a23.alpha >= 1 && a25.alpha >= 1 && a27.alpha >= 1) {
    a1.setPosition(p(290, 90));
    fon1[0].setPosition(p(290, 90));
    a1.h = 128;
    a1.w = 128;
    fon1[0].h = 128;
    fon1[0].w = 128;
    a2.setPosition(p(290 + 138, 90));
    fon1[1].setPosition(p(290 + 138, 90));
    a2.h = 128;
    a2.w = 128;
    fon1[1].h = 128;
    fon1[1].w = 128;
    a3.setPosition(p(290 + 138 * 2, 90), x1, y1);
    fon1[2].setPosition(p(290 + 138 * 2, 90), x1, y1);
    a3.h = 128;
    a3.w = 128;
    fon1[2].h = 128;
    fon1[2].w = 128;
    a4.setPosition(p(290 + 138 * 3, 90), x1, y1);
    fon1[3].setPosition(p(290 + 138 * 3, 90), x1, y1);
    a4.h = 128;
    a4.w = 128;
    fon1[3].h = 128;
    fon1[3].w = 128;
    a5.setPosition(p(290 + 138 * 4, 90), x1, y1);
    fon1[4].setPosition(p(290 + 138 * 4, 90), x1, y1);
    a5.h = 128;
    a5.w = 128;
    fon1[4].h = 128;
    fon1[4].w = 128;
    a6.setPosition(p(290 + 138 * 5, 90), x1, y1);
    fon1[5].setPosition(p(290 + 138 * 5, 90), x1, y1);
    a6.h = 128;
    a6.w = 128;
    fon1[5].h = 128;
    fon1[5].w = 128;
    a7.setPosition(p(290 + 138 * 6, 90), x1, y1);
    fon1[6].setPosition(p(290 + 138 * 6, 90), x1, y1);
    a7.h = 128;
    a7.w = 128;
    fon1[6].h = 128;
    fon1[6].w = 128;
    a8.setPosition(p(290, 228), x1, y1);
    fon1[7].setPosition(p(290, 228), x1, y1);
    a8.h = 128;
    a8.w = 128;
    fon1[7].h = 128;
    fon1[7].w = 128;
    a9.setPosition(p(290 + 138, 228), x1, y1);
    fon1[8].setPosition(p(290 + 138, 228), x1, y1);
    a9.h = 128;
    a9.w = 128;
    fon1[8].h = 128;
    fon1[8].w = 128;
    a10.setPosition(p(290 + 138 * 2, 228), x1, y1);
    fon1[9].setPosition(p(290 + 138 * 2, 228), x1, y1);
    a10.h = 128;
    a10.w = 128;
    fon1[9].h = 128;
    fon1[9].w = 128;
    a11.setPosition(p(290 + 138 * 3, 228), x1, y1);
    fon1[10].setPosition(p(290 + 138 * 3, 228), x1, y1);
    a11.h = 128;
    a11.w = 128;
    fon1[10].h = 128;
    fon1[10].w = 128;
    a12.setPosition(p(290 + 138 * 4, 228), x1, y1);
    fon1[11].setPosition(p(290 + 138 * 4, 228), x1, y1);
    a12.h = 128;
    a12.w = 128;
    fon1[11].h = 128;
    fon1[11].w = 128;
    a13.setPosition(p(290 + 138 * 5, 228), x1, y1);
    fon1[12].setPosition(p(290 + 138 * 5, 228), x1, y1);
    a13.h = 128;
    a13.w = 128;
    fon1[12].h = 128;
    fon1[12].w = 128;
    a14.setPosition(p(290 + 138 * 6, 228), x1, y1);
    fon1[13].setPosition(p(290 + 138 * 6, 228), x1, y1);
    a14.h = 128;
    a14.w = 128;
    fon1[13].h = 128;
    fon1[13].w = 128;
    a15.setPosition(p(290, 228 + 138), x1, y1);
    fon1[14].setPosition(p(290, 228 + 138), x1, y1);
    a15.h = 128;
    a15.w = 128;
    fon1[14].h = 128;
    fon1[14].w = 128;
    a16.setPosition(p(290 + 138, 228 + 138), x1, y1);
    fon1[15].setPosition(p(290 + 138, 228 + 138), x1, y1);
    a16.h = 128;
    a16.w = 128;
    fon1[15].h = 128;
    fon1[15].w = 128;
    a17.setPosition(p(290 + 138 * 2, 228 + 138), x1, y1);
    fon1[16].setPosition(p(290 + 138 * 2, 228 + 138), x1, y1);
    a17.h = 128;
    a17.w = 128;
    fon1[16].h = 128;
    fon1[16].w = 128;
    a18.setPosition(p(290 + 138 * 3, 228 + 138), x1, y1);
    fon1[17].setPosition(p(290 + 138 * 3, 228 + 138), x1, y1);
    a18.h = 128;
    a18.w = 128;
    fon1[17].h = 128;
    fon1[17].w = 128;
    a19.setPosition(p(290 + 138 * 4, 228 + 138), x1, y1);
    fon1[18].setPosition(p(290 + 138 * 4, 228 + 138), x1, y1);
    a19.h = 128;
    a19.w = 128;
    fon1[18].h = 128;
    fon1[18].w = 128;
    a20.setPosition(p(290 + 138 * 5, 228 + 138), x1, y1);
    fon1[19].setPosition(p(290 + 138 * 5, 228 + 138), x1, y1);
    a20.h = 128;
    a20.w = 128;
    fon1[19].h = 128;
    fon1[19].w = 128;
    a21.setPosition(p(290 + 138 * 6, 228 + 138), x1, y1);
    fon1[20].setPosition(p(290 + 138 * 6, 228 + 138), x1, y1);
    a21.h = 128;
    a21.w = 128;
    fon1[20].h = 128;
    fon1[20].w = 128;
    a22.setPosition(p(290, 228 + 138 * 2), x1, y1);
    fon1[21].setPosition(p(290, 228 + 138 * 2), x1, y1);
    a22.h = 128;
    a22.w = 128;
    fon1[21].h = 128;
    fon1[21].w = 128;
    a23.setPosition(p(290 + 138, 228 + 138 * 2), x1, y1);
    fon1[22].setPosition(p(290 + 138, 228 + 138 * 2), x1, y1);
    a23.h = 128;
    a23.w = 128;
    fon1[22].h = 128;
    fon1[22].w = 128;
    a24.setPosition(p(290 + 138 * 2, 228 + 138 * 2), x1, y1);
    fon1[23].setPosition(p(290 + 138 * 2, 228 + 138 * 2), x1, y1);
    a24.h = 128;
    a24.w = 128;
    fon1[23].h = 128;
    fon1[23].w = 128;
    a25.setPosition(p(290 + 138 * 3, 228 + 138 * 2), x1, y1);
    fon1[24].setPosition(p(290 + 138 * 3, 228 + 138 * 2), x1, y1);
    a25.h = 128;
    a25.w = 128;
    fon1[24].h = 128;
    fon1[24].w = 128;
    a26.setPosition(p(290 + 138 * 4, 228 + 138 * 2), x1, y1);
    fon1[25].setPosition(p(290 + 138 * 4, 228 + 138 * 2), x1, y1);
    a26.h = 128;
    a26.w = 128;
    fon1[25].h = 128;
    fon1[25].w = 128;
    a27.setPosition(p(290 + 138 * 5, 228 + 138 * 2), x1, y1);
    fon1[26].setPosition(p(290 + 138 * 5, 228 + 138 * 2), x1, y1);
    a27.h = 128;
    a27.w = 128;
    fon1[26].h = 128;
    fon1[26].w = 128;
    a28.setPosition(p(290 + 138 * 6, 228 + 138 * 2), x1, y1);
    fon1[27].setPosition(p(290 + 138 * 6, 228 + 138 * 2), x1, y1);
    a28.h = 128;
    a28.w = 128;
    fon1[27].h = 128;
    fon1[27].w = 128;
    a29.setPosition(p(290, 228 + 138 * 3), x1, y1);
    fon1[28].setPosition(p(290, 228 + 138 * 3), x1, y1);
    a29.h = 128;
    a29.w = 128;
    fon1[28].h = 128;
    fon1[28].w = 128;
    a30.setPosition(p(290 + 138, 228 + 138 * 3), x1, y1);
    fon1[29].setPosition(p(290 + 138, 228 + 138 * 3), x1, y1);
    a30.h = 128;
    a30.w = 128;
    fon1[29].h = 128;
    fon1[29].w = 128;
    a31.setPosition(p(290 + 138 * 2, 228 + 138 * 3), x1, y1);
    fon1[30].setPosition(p(290 + 138 * 2, 228 + 138 * 3), x1, y1);
    a31.h = 128;
    a31.w = 128;
    fon1[30].h = 128;
    fon1[30].w = 128;
    a32.setPosition(p(290 + 138 * 3, 228 + 138 * 3), x1, y1);
    fon1[31].setPosition(p(290 + 138 * 3, 228 + 138 * 3), x1, y1);
    a32.h = 128;
    a32.w = 128;
    fon1[31].h = 128;
    fon1[31].w = 128;
    a33.setPosition(p(290 + 138 * 4, 228 + 138 * 3), x1, y1);
    fon1[32].setPosition(p(290 + 138 * 4, 228 + 138 * 3), x1, y1);
    a33.h = 128;
    a33.w = 128;
    fon1[32].h = 128;
    fon1[32].w = 128;
    a34.setPosition(p(290 + 138 * 5, 228 + 138 * 3), x1, y1);
    fon1[33].setPosition(p(290 + 138 * 5, 228 + 138 * 3), x1, y1);
    a34.h = 128;
    a34.w = 128;
    fon1[33].h = 128;
    fon1[33].w = 128;
    a35.setPosition(p(290 + 138 * 6, 228 + 138 * 3), x1, y1);
    fon1[34].setPosition(p(290 + 138 * 6, 228 + 138 * 3), x1, y1);
    a35.h = 128;
    a35.w = 128;
    fon1[34].h = 128;
    fon1[34].w = 128;
  }
});
game.newLoop('a1', function () {
  //var p2 = p(704,369);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a1.x <= 640 && a1.w < 256) {
    a1.draw();
    l1.draw();
    fon1[0].draw();
    a1.setPosition(p2);
    fon1[0].setPosition(p2);
    l1.setPosition(p2); //	a1.moveTo(p2, x1, y1);
    //	fon1[0].moveTo(p2, x1, y1);
    //	l1.moveTo(p2, x1, y1);
  }

  if (a1.x >= 640 && l1.alpha > 0) {
    a1.draw();
    l1.draw();
    fon1[0].draw();
    a1.w = 256;
    a1.h = 256;
    fon1[0].w = 256;
    fon1[0].h = 256;
    l1.w = 256;
    l1.h = 256; //	a1.fillColor = cI;
    //a1.w+=5; a1.h+=5;
    //fon1[0].w+=5; fon1[0].h+=5; 
    //l1.w+=5; l1.h+=5;
  }

  if (mouse.isPeekObject("LEFT", a1) && fon1[0].alpha == 1) {
    /*fon1[0].visible=false; fon1[0].setPosition(p(0,0));
    a1.visible=false; a1.setPosition(p(0,0)); l1.setPosition(p(0,0));*/
    fon1[0].setPosition(p(1300, 15));
    fon1[0].w = 100;
    fon1[0].h = 100;
    a1.setPosition(p(1300, 15));
    a1.w = 100;
    a1.h = 100;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l1) && fon1[0].alpha <= 0) {
    a1.fillColor = cF;
    l1.alpha = 0;
    fon1[0].alpha = 1;
    /*if (l1.alpha<=0) {
    	l1.visible=false;
    }*/
  } else {
    a1.draw();
    l1.draw();
    fon1[0].draw();
  }
});
game.newLoop('a2', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a2.x <= 640 && a2.w < 256) {
    a2.draw();
    l2.draw();
    fon1[1].draw();
    a2.setPosition(p2);
    fon1[1].setPosition(p2);
    l2.setPosition(p2);
  }

  if (a2.x >= 640 && l2.alpha > 0) {
    a2.draw();
    l2.draw();
    fon1[1].draw();
    a2.w = 256;
    a2.h = 256;
    fon1[1].w = 256;
    fon1[1].h = 256;
    l2.w = 256;
    l2.h = 256; //	a2.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a2) && fon1[1].alpha == 1) {
    //fon1[1].visible=false; fon1[1].setPosition(p(0,0));
    //a2.visible=false; a2.setPosition(p(0,0)); l2.setPosition(p(0,0));
    fon1[1].setPosition(p(1410, 15));
    fon1[1].w = 100;
    fon1[1].h = 100;
    a2.setPosition(p(1410, 15));
    a2.w = 100;
    a2.h = 100;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l2) && fon1[1].alpha <= 0) {
    a2.fillColor = cF;
    l2.alpha = 0;
    fon1[1].alpha = 1;
  } else {
    a2.draw();
    l2.draw();
    fon1[1].draw();
  }
});
game.newLoop('a3', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a3.x <= 640 && a3.w < 256) {
    a3.draw();
    l3.draw();
    fon1[2].draw();
    a3.setPosition(p2);
    fon1[2].setPosition(p2);
    l3.setPosition(p2);
  }

  if (a3.x >= 640 && l3.alpha > 0) {
    a3.draw();
    l3.draw();
    fon1[2].draw();
    a3.w = 256;
    a3.h = 256;
    fon1[2].w = 256;
    fon1[2].h = 256;
    l3.w = 256;
    l3.h = 256; //	a3.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a3) && fon1[2].alpha == 1) {
    //fon1[2].visible=false; fon1[2].setPosition(p(0,0));
    //a3.visible=false; a3.setPosition(p(0,0)); l3.setPosition(p(0,0));
    fon1[2].setPosition(p(1300, 120));
    fon1[2].w = 100;
    fon1[2].h = 100;
    a3.setPosition(p(1300, 120));
    a3.w = 100;
    a3.h = 100;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l3) && fon1[2].alpha <= 0) {
    a3.fillColor = cF;
    l3.alpha = 0;
    fon1[2].alpha = 1;
  } else {
    a3.draw();
    l3.draw();
    fon1[2].draw();
  }
});
game.newLoop('a4', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a4.x <= 704 && a4.w < 256) {
    a4.draw();
    l4.draw();
    fon1[3].draw();
    a4.setPosition(p2);
    fon1[3].setPosition(p2);
    l4.setPosition(p2);
  }

  if (a4.x >= 640 && l4.alpha > 0) {
    a4.draw();
    l4.draw();
    fon1[3].draw();
    a4.w = 256;
    a4.h = 256;
    fon1[3].w = 256;
    fon1[3].h = 256;
    l4.w = 256;
    l4.h = 256; //	a4.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a4) && fon1[3].alpha == 1) {
    //fon1[3].visible=false; fon1[3].setPosition(p(0,0));
    //a4.visible=false; a4.setPosition(p(0,0)); l4.setPosition(p(0,0));
    fon1[3].setPosition(p(1410, 120));
    fon1[3].w = 100;
    fon1[3].h = 100;
    a4.setPosition(p(1410, 120));
    a4.w = 100;
    a4.h = 100;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l4) && fon1[3].alpha <= 0) {
    a4.fillColor = cF;
    l4.alpha = 0;
    fon1[3].alpha = 1;
  } else {
    a4.draw();
    l4.draw();
    fon1[3].draw();
  }
});
game.newLoop('a5', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a5.x <= 842 && a5.w < 256) {
    a5.draw();
    l5.draw();
    fon1[4].draw();
    a5.setPosition(p2);
    fon1[4].setPosition(p2);
    l5.setPosition(p2);
  }

  if (a5.x >= 640 && l5.alpha > 0) {
    a5.draw();
    l5.draw();
    fon1[4].draw();
    a5.w = 256;
    a5.h = 256;
    fon1[4].w = 256;
    fon1[4].h = 256;
    l5.w = 256;
    l5.h = 256; //	a5.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a5) && fon1[4].alpha == 1) {
    //	fon1[4].visible=false; fon1[4].setPosition(p(0,0));
    //	a5.visible=false; a5.setPosition(p(0,0)); l5.setPosition(p(0,0));
    fon1[4].setPosition(p(1300, 120 + 105));
    fon1[4].w = 100;
    fon1[4].h = 100;
    a5.setPosition(p(1300, 120 + 105));
    a5.w = 100;
    a5.h = 100;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l5) && fon1[4].alpha <= 0) {
    a5.fillColor = cF;
    l5.alpha = 0;
    fon1[4].alpha = 1;
  } else {
    a5.draw();
    l5.draw();
    fon1[4].draw();
  }
});
game.newLoop('a6', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a6.x <= 980 && a6.w < 256) {
    a6.draw();
    l6.draw();
    fon1[5].draw();
    a6.setPosition(p2);
    fon1[5].setPosition(p2);
    l6.setPosition(p2);
  }

  if (a6.x >= 640 && l6.alpha > 0) {
    a6.draw();
    l6.draw();
    fon1[5].draw();
    a6.w = 256;
    a6.h = 256;
    fon1[5].w = 256;
    fon1[5].h = 256;
    l6.w = 256;
    l6.h = 256; //	a6.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a6) && fon1[5].alpha == 1) {
    //fon1[5].visible=false; fon1[5].setPosition(p(0,0));
    //a6.visible=false; a6.setPosition(p(0,0)); l6.setPosition(p(0,0));
    fon1[5].setPosition(p(1410, 120 + 105));
    fon1[5].w = 100;
    fon1[5].h = 100;
    a6.setPosition(p(1410, 120 + 105));
    a6.w = 100;
    a6.h = 100;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l6) && fon1[5].alpha <= 0) {
    a6.fillColor = cF;
    l6.alpha = 0;
    fon1[5].alpha = 1;
  } else {
    a6.draw();
    l6.draw();
    fon1[5].draw();
  }
});
game.newLoop('a7', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a7.x <= 1118 && a7.w < 256) {
    a7.draw();
    l7.draw();
    fon1[6].draw();
    a7.setPosition(p2);
    fon1[6].setPosition(p2);
    l7.setPosition(p2);
  }

  if (a7.x >= 640 && l7.alpha > 0) {
    a7.draw();
    l7.draw();
    fon1[6].draw();
    a7.w = 256;
    a7.h = 256;
    fon1[6].w = 256;
    fon1[6].h = 256;
    l7.w = 256;
    l7.h = 256; //	a7.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a7) && fon1[6].alpha == 1) {
    //fon1[6].visible=false; fon1[6].setPosition(p(0,0));
    //a7.visible=false; a7.setPosition(p(0,0)); l7.setPosition(p(0,0));
    fon1[6].setPosition(p(1300, 120 + 105 * 2));
    fon1[6].w = 100;
    fon1[6].h = 100;
    a7.setPosition(p(1300, 120 + 105 * 2));
    a7.w = 100;
    a7.h = 100;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l7) && fon1[6].alpha <= 0) {
    a7.fillColor = cF;
    l7.alpha = 0;
    fon1[6].alpha = 1;
  } else {
    a7.draw();
    l7.draw();
    fon1[6].draw();
  }
});
game.newLoop('a8', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a8.x <= 640 && a8.w < 256) {
    a8.draw();
    l8.draw();
    fon1[7].draw();
    a8.setPosition(p2);
    fon1[7].setPosition(p2);
    l8.setPosition(p2);
  }

  if (a8.x >= 640 && l8.alpha > 0) {
    a8.draw();
    l8.draw();
    fon1[7].draw();
    a8.w = 256;
    a8.h = 256;
    fon1[7].w = 256;
    fon1[7].h = 256;
    l8.w = 256;
    l8.h = 256; //	a8.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a8) && fon1[7].alpha == 1) {
    //fon1[7].visible=false; fon1[7].setPosition(p(0,0));
    //a8.visible=false; a8.setPosition(p(0,0)); l8.setPosition(p(0,0));
    fon1[7].setPosition(p(1410, 120 + 105 * 2));
    fon1[7].w = 100;
    fon1[7].h = 100;
    a8.setPosition(p(1410, 120 + 105 * 2));
    a8.w = 100;
    a8.h = 100;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l8) && fon1[7].alpha <= 0) {
    a8.fillColor = cF;
    l8.alpha = 0;
    fon1[7].alpha = 1;
  } else {
    a8.draw();
    l8.draw();
    fon1[7].draw();
  }
});
game.newLoop('a9', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a9.x <= 640 && a9.w < 256) {
    a9.draw();
    l9.draw();
    fon1[8].draw();
    a9.setPosition(p2);
    fon1[8].setPosition(p2);
    l9.setPosition(p2);
  }

  if (a9.x >= 640 && l9.alpha > 0) {
    a9.draw();
    l9.draw();
    fon1[8].draw();
    a9.w = 256;
    a9.h = 256;
    fon1[8].w = 256;
    fon1[8].h = 256;
    l9.w = 256;
    l9.h = 256; //	a9.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a9) && fon1[8].alpha == 1) {
    //fon1[8].visible=false; fon1[8].setPosition(p(0,0));
    //a9.visible=false; a9.setPosition(p(0,0)); l9.setPosition(p(0,0));
    fon1[8].setPosition(p(1300, 120 + 105 * 3));
    fon1[8].w = 100;
    fon1[8].h = 100;
    a9.setPosition(p(1300, 120 + 105 * 3));
    a9.w = 100;
    a9.h = 100;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l9) && fon1[8].alpha <= 0) {
    a9.fillColor = cF;
    l9.alpha = 0;
    fon1[8].alpha = 1;
  } else {
    a9.draw();
    l9.draw();
    fon1[8].draw();
  }
});
game.newLoop('a10', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a10.x <= 640 && a10.w < 256) {
    a10.draw();
    l10.draw();
    fon1[9].draw();
    a10.setPosition(p2);
    fon1[9].setPosition(p2);
    l10.setPosition(p2);
  }

  if (a10.x >= 640 && l10.alpha > 0) {
    a10.draw();
    l10.draw();
    fon1[9].draw();
    a10.w = 256;
    a10.h = 256;
    fon1[9].w = 256;
    fon1[9].h = 256;
    l10.w = 256;
    l10.h = 256; //	a10.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a10) && fon1[9].alpha == 1) {
    //fon1[9].visible=false; fon1[9].setPosition(p(0,0));
    //a10.visible=false; a10.setPosition(p(0,0)); l10.setPosition(p(0,0));
    fon1[9].setPosition(p(1410, 120 + 105 * 3));
    fon1[9].w = 100;
    fon1[9].h = 100;
    a10.setPosition(p(1410, 120 + 105 * 3));
    a10.w = 100;
    a10.h = 100;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l10) && fon1[9].alpha <= 0) {
    a10.fillColor = cF;
    l10.alpha = 0;
    fon1[9].alpha = 1;
  } else {
    a10.draw();
    l10.draw();
    fon1[9].draw();
  }
});
game.newLoop('a11', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a11.x <= 704 && a11.w < 256) {
    a11.draw();
    l11.draw();
    fon1[10].draw();
    a11.setPosition(p2);
    fon1[10].setPosition(p2);
    l11.setPosition(p2);
  }

  if (a11.x >= 640 && l11.alpha > 0) {
    a11.draw();
    l11.draw();
    fon1[10].draw();
    a11.w = 256;
    a11.h = 256;
    fon1[10].w = 256;
    fon1[10].h = 256;
    l11.w = 256;
    l11.h = 256; //	a11.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a11) && fon1[10].alpha == 1) {
    //fon1[10].visible=false; fon1[10].setPosition(p(0,0));
    //a11.visible=false; a11.setPosition(p(0,0)); l11.setPosition(p(0,0));
    fon1[10].setPosition(p(1300, 120 + 105 * 4));
    fon1[10].w = 100;
    fon1[10].h = 100;
    a11.setPosition(p(1300, 120 + 105 * 4));
    a11.w = 100;
    a11.h = 100;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l11) && fon1[10].alpha <= 0) {
    a11.fillColor = cF;
    l11.alpha = 0;
    fon1[10].alpha = 1;
  } else {
    a11.draw();
    l11.draw();
    fon1[10].draw();
  }
});
game.newLoop('a12', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a12.x <= 842 && a12.w < 256) {
    a12.draw();
    l12.draw();
    fon1[11].draw();
    a12.setPosition(p2);
    fon1[11].setPosition(p2);
    l12.setPosition(p2);
  }

  if (a12.x >= 640 && l12.alpha > 0) {
    a12.draw();
    l12.draw();
    fon1[11].draw();
    a12.w = 256;
    a12.h = 256;
    fon1[11].w = 256;
    fon1[11].h = 256;
    l12.w = 256;
    l12.h = 256; //	a12.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a12) && fon1[11].alpha == 1) {
    //fon1[11].visible=false; fon1[11].setPosition(p(0,0));
    //a12.visible=false; a12.setPosition(p(0,0)); l12.setPosition(p(0,0));
    fon1[11].setPosition(p(1410, 120 + 105 * 4));
    fon1[11].w = 100;
    fon1[11].h = 100;
    a12.setPosition(p(1410, 120 + 105 * 4));
    a12.w = 100;
    a12.h = 100;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l12) && fon1[11].alpha <= 0) {
    a12.fillColor = cF;
    l12.alpha = 0;
    fon1[11].alpha = 1;
  } else {
    a12.draw();
    l12.draw();
    fon1[11].draw();
  }
});
game.newLoop('a13', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a13.x <= 980 && a13.w < 256) {
    a13.draw();
    l13.draw();
    fon1[12].draw();
    a13.setPosition(p2);
    fon1[12].setPosition(p2);
    l13.setPosition(p2);
  }

  if (a13.x >= 640 && l13.alpha > 0) {
    a13.draw();
    l13.draw();
    fon1[12].draw();
    a13.w = 256;
    a13.h = 256;
    fon1[12].w = 256;
    fon1[12].h = 256;
    l13.w = 256;
    l13.h = 256; //	a13.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a13) && fon1[12].alpha == 1) {
    //fon1[12].visible=false; fon1[12].setPosition(p(0,0));
    //a13.visible=false; a13.setPosition(p(0,0)); l13.setPosition(p(0,0));
    fon1[12].setPosition(p(1300, 120 + 105 * 5));
    fon1[12].w = 100;
    fon1[12].h = 100;
    a13.setPosition(p(1300, 120 + 105 * 5));
    a13.w = 100;
    a13.h = 100;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l13) && fon1[12].alpha <= 0) {
    a13.fillColor = cF;
    l13.alpha = 0;
    fon1[12].alpha = 1;
  } else {
    a13.draw();
    l13.draw();
    fon1[12].draw();
  }
});
game.newLoop('a14', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a14.x <= 1118 && a14.w < 256) {
    a14.draw();
    l14.draw();
    fon1[13].draw();
    a14.setPosition(p2);
    fon1[13].setPosition(p2);
    l14.setPosition(p2);
  }

  if (a14.x >= 640 && l14.alpha > 0) {
    a14.draw();
    l14.draw();
    fon1[13].draw();
    a14.w = 256;
    a14.h = 256;
    fon1[13].w = 256;
    fon1[13].h = 256;
    l14.w = 256;
    l14.h = 256; //	a14.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a14) && fon1[13].alpha == 1) {
    //fon1[13].visible=false; fon1[13].setPosition(p(0,0));
    //a14.visible=false; a14.setPosition(p(0,0)); l14.setPosition(p(0,0));
    fon1[13].setPosition(p(1410, 120 + 105 * 5));
    fon1[13].w = 100;
    fon1[13].h = 100;
    a14.setPosition(p(1410, 120 + 105 * 5));
    a14.w = 100;
    a14.h = 100;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l14) && fon1[13].alpha <= 0) {
    a14.fillColor = cF;
    l14.alpha = 0;
    fon1[13].alpha = 1;
  } else {
    a14.draw();
    l14.draw();
    fon1[13].draw();
  }
});
game.newLoop('a15', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a15.x <= 640 && a15.w < 256) {
    a15.draw();
    l15.draw();
    fon1[14].draw();
    a15.setPosition(p2);
    fon1[14].setPosition(p2);
    l15.setPosition(p2);
  }

  if (a15.x >= 640 && l15.alpha > 0) {
    a15.draw();
    l15.draw();
    fon1[14].draw();
    a15.w = 256;
    a15.h = 256;
    fon1[14].w = 256;
    fon1[14].h = 256;
    l15.w = 256;
    l15.h = 256; //	a15.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a15) && fon1[14].alpha == 1) {
    //fon1[14].visible=false; fon1[14].setPosition(p(0,0));
    //a15.visible=false; a15.setPosition(p(0,0)); l15.setPosition(p(0,0));
    fon1[14].setPosition(p(1300, 120 + 105 * 6));
    fon1[14].w = 100;
    fon1[14].h = 100;
    a15.setPosition(p(1300, 120 + 105 * 6));
    a15.w = 100;
    a15.h = 100;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l15) && fon1[14].alpha <= 0) {
    a15.fillColor = cF;
    l15.alpha = 0;
    fon1[14].alpha = 1;
  } else {
    a15.draw();
    l15.draw();
    fon1[14].draw();
  }
});
game.newLoop('a16', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a16.x <= 640 && a16.w < 256) {
    a16.draw();
    l16.draw();
    fon1[15].draw();
    a16.setPosition(p2);
    fon1[15].setPosition(p2);
    l16.setPosition(p2);
  }

  if (a16.x >= 640 && l16.alpha > 0) {
    a16.draw();
    l16.draw();
    fon1[15].draw();
    a16.w = 256;
    a16.h = 256;
    fon1[15].w = 256;
    fon1[15].h = 256;
    l16.w = 256;
    l16.h = 256; //	a16.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a16) && fon1[15].alpha == 1) {
    //fon1[15].visible=false; fon1[15].setPosition(p(0,0));
    //a16.visible=false; a16.setPosition(p(0,0)); l16.setPosition(p(0,0));
    fon1[15].setPosition(p(1410, 120 + 105 * 6));
    fon1[15].w = 100;
    fon1[15].h = 100;
    a16.setPosition(p(1410, 120 + 105 * 6));
    a16.w = 100;
    a16.h = 100;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l16) && fon1[15].alpha <= 0) {
    a16.fillColor = cF;
    l16.alpha = 0;
    fon1[15].alpha = 1;
  } else {
    a16.draw();
    l16.draw();
    fon1[15].draw();
  }
});
game.newLoop('a17', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a17.x <= 640 && a17.w < 256) {
    a17.draw();
    l17.draw();
    fon1[16].draw();
    a17.setPosition(p2);
    fon1[16].setPosition(p2);
    l17.setPosition(p2);
  }

  if (a17.x >= 640 && l17.alpha > 0) {
    a17.draw();
    l17.draw();
    fon1[16].draw();
    a17.w = 256;
    a17.h = 256;
    fon1[16].w = 256;
    fon1[16].h = 256;
    l17.w = 256;
    l17.h = 256; //	a17.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a17) && fon1[16].alpha == 1) {
    //fon1[16].visible=false; fon1[16].setPosition(p(0,0));
    //a17.visible=false; a17.setPosition(p(0,0)); l17.setPosition(p(0,0));
    fon1[16].setPosition(p(25, 15));
    fon1[16].w = 100;
    fon1[16].h = 100;
    a17.setPosition(p(25, 15));
    a17.w = 100;
    a17.h = 100;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l17) && fon1[16].alpha <= 0) {
    a17.fillColor = cF;
    l17.alpha = 0;
    fon1[16].alpha = 1;
  } else {
    a17.draw();
    l17.draw();
    fon1[16].draw();
  }
});
game.newLoop('a18', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a18.x <= 704 && a18.w < 256) {
    a18.draw();
    l18.draw();
    fon1[17].draw();
    a18.setPosition(p2);
    fon1[17].setPosition(p2);
    l18.setPosition(p2);
  }

  if (a18.x >= 640 && l18.alpha > 0) {
    a18.draw();
    l18.draw();
    fon1[17].draw();
    a18.w = 256;
    a18.h = 256;
    fon1[17].w = 256;
    fon1[17].h = 256;
    l18.w = 256;
    l18.h = 256; //	a18.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a18) && fon1[17].alpha == 1) {
    //fon1[17].visible=false; fon1[17].setPosition(p(0,0));
    //a18.visible=false; a18.setPosition(p(0,0)); l18.setPosition(p(0,0));
    fon1[17].setPosition(p(135, 15));
    fon1[17].w = 100;
    fon1[17].h = 100;
    a18.setPosition(p(135, 15));
    a18.w = 100;
    a18.h = 100;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l18) && fon1[17].alpha <= 0) {
    a18.fillColor = cF;
    l18.alpha = 0;
    fon1[17].alpha = 1;
  } else {
    a18.draw();
    l18.draw();
    fon1[17].draw();
  }
});
game.newLoop('a19', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a19.x <= 842 && a19.w < 256) {
    a19.draw();
    l19.draw();
    fon1[18].draw();
    a19.setPosition(p2);
    fon1[18].setPosition(p2);
    l19.setPosition(p2);
  }

  if (a19.x >= 640 && l19.alpha > 0) {
    a19.draw();
    l19.draw();
    fon1[18].draw();
    a19.w = 256;
    a19.h = 256;
    fon1[18].w = 256;
    fon1[18].h = 256;
    l19.w = 256;
    l19.h = 256; //	a19.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a19) && fon1[18].alpha == 1) {
    //fon1[18].visible=false; fon1[18].setPosition(p(0,0));
    //a19.visible=false; a19.setPosition(p(0,0)); l19.setPosition(p(0,0));
    fon1[18].setPosition(p(25, 15 + 105));
    fon1[18].w = 100;
    fon1[18].h = 100;
    a19.setPosition(p(25, 15 + 105));
    a19.w = 100;
    a19.h = 100;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l19) && fon1[18].alpha <= 0) {
    a19.fillColor = cF;
    l19.alpha = 0;
    fon1[18].alpha = 1;
  } else {
    a19.draw();
    l19.draw();
    fon1[18].draw();
  }
});
game.newLoop('a20', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a20.x <= 980 && a20.w < 256) {
    a20.draw();
    l20.draw();
    fon1[19].draw();
    a20.setPosition(p2);
    fon1[19].setPosition(p2);
    l20.setPosition(p2);
  }

  if (a20.x >= 640 && l20.alpha > 0) {
    a20.draw();
    l20.draw();
    fon1[19].draw();
    a20.w = 256;
    a20.h = 256;
    fon1[19].w = 256;
    fon1[19].h = 256;
    l20.w = 256;
    l20.h = 256; //	a20.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a20) && fon1[19].alpha == 1) {
    //fon1[19].visible=false; fon1[19].setPosition(p(0,0));
    //a20.visible=false; a20.setPosition(p(0,0)); l20.setPosition(p(0,0));
    fon1[19].setPosition(p(135, 15 + 105));
    fon1[19].w = 100;
    fon1[19].h = 100;
    a20.setPosition(p(135, 15 + 105));
    a20.w = 100;
    a20.h = 100;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l20) && fon1[19].alpha <= 0) {
    a20.fillColor = cF;
    l20.alpha = 0;
    fon1[19].alpha = 1;
  } else {
    a20.draw();
    l20.draw();
    fon1[19].draw();
  }
});
game.newLoop('a21', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a21.x <= 1118 && a21.w < 256) {
    a21.draw();
    l21.draw();
    fon1[20].draw();
    a21.setPosition(p2);
    fon1[20].setPosition(p2);
    l21.setPosition(p2);
  }

  if (a21.x >= 640 && l21.alpha > 0) {
    a21.draw();
    l21.draw();
    fon1[20].draw();
    a21.w = 256;
    a21.h = 256;
    fon1[20].w = 256;
    fon1[20].h = 256;
    l21.w = 256;
    l21.h = 256; //	a21.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a21) && fon1[20].alpha == 1) {
    //fon1[20].visible=false; fon1[20].setPosition(p(0,0));
    //a21.visible=false; a21.setPosition(p(0,0)); l21.setPosition(p(0,0));
    fon1[20].setPosition(p(25, 15 + 105 * 2));
    fon1[20].w = 100;
    fon1[20].h = 100;
    a21.setPosition(p(25, 15 + 105 * 2));
    a21.w = 100;
    a21.h = 100;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l21) && fon1[20].alpha <= 0) {
    a21.fillColor = cF;
    l21.alpha = 0;
    fon1[20].alpha = 1;
  } else {
    a21.draw();
    l21.draw();
    fon1[20].draw();
  }
});
game.newLoop('a22', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a22.x <= 640 && a22.w < 256) {
    a22.draw();
    l22.draw();
    fon1[21].draw();
    a22.setPosition(p2);
    fon1[21].setPosition(p2);
    l22.setPosition(p2);
  }

  if (a22.x >= 640 && l22.alpha > 0) {
    a22.draw();
    l22.draw();
    fon1[21].draw();
    a22.w = 256;
    a22.h = 256;
    fon1[21].w = 256;
    fon1[21].h = 256;
    l22.w = 256;
    l22.h = 256; //	a22.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a22) && fon1[21].alpha == 1) {
    //fon1[21].visible=false; fon1[21].setPosition(p(0,0));
    //a22.visible=false; a22.setPosition(p(0,0)); l22.setPosition(p(0,0));
    fon1[21].setPosition(p(135, 15 + 105 * 2));
    fon1[21].w = 100;
    fon1[21].h = 100;
    a22.setPosition(p(135, 15 + 105 * 2));
    a22.w = 100;
    a22.h = 100;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l22) && fon1[21].alpha <= 0) {
    a22.fillColor = cF;
    l22.alpha = 0;
    fon1[21].alpha = 1;
  } else {
    a22.draw();
    l22.draw();
    fon1[21].draw();
  }
});
game.newLoop('a23', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a23.x <= 640 && a23.w < 256) {
    a23.draw();
    l23.draw();
    fon1[22].draw();
    a23.setPosition(p2);
    fon1[22].setPosition(p2);
    l23.setPosition(p2);
  }

  if (a23.x >= 640 && l23.alpha > 0) {
    a23.draw();
    l23.draw();
    fon1[22].draw();
    a23.w = 256;
    a23.h = 256;
    fon1[22].w = 256;
    fon1[22].h = 256;
    l23.w = 256;
    l23.h = 256; //	a23.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a23) && fon1[22].alpha == 1) {
    //fon1[22].visible=false; fon1[22].setPosition(p(0,0));
    //a23.visible=false; a23.setPosition(p(0,0)); l23.setPosition(p(0,0));
    fon1[22].setPosition(p(25, 15 + 105 * 3));
    fon1[22].w = 100;
    fon1[22].h = 100;
    a23.setPosition(p(25, 15 + 105 * 3));
    a23.w = 100;
    a23.h = 100;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l23) && fon1[22].alpha <= 0) {
    a23.fillColor = cF;
    l23.alpha = 0;
    fon1[22].alpha = 1;
  } else {
    a23.draw();
    l23.draw();
    fon1[22].draw();
  }
});
game.newLoop('a24', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a24.x <= 640 && a24.w < 256) {
    a24.draw();
    l24.draw();
    fon1[23].draw();
    a24.setPosition(p2);
    fon1[23].setPosition(p2);
    l24.setPosition(p2);
  }

  if (a24.x >= 640 && l24.alpha > 0) {
    a24.draw();
    l24.draw();
    fon1[23].draw();
    a24.w = 256;
    a24.h = 256;
    fon1[23].w = 256;
    fon1[23].h = 256;
    l24.w = 256;
    l24.h = 256; //	a24.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a24) && fon1[23].alpha == 1) {
    //fon1[23].visible=false; fon1[23].setPosition(p(0,0));
    //a24.visible=false; a24.setPosition(p(0,0)); l24.setPosition(p(0,0));
    fon1[23].setPosition(p(135, 15 + 105 * 3));
    fon1[23].w = 100;
    fon1[23].h = 100;
    a24.setPosition(p(135, 15 + 105 * 3));
    a24.w = 100;
    a24.h = 100;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l24) && fon1[23].alpha <= 0) {
    a24.fillColor = cF;
    l24.alpha = 0;
    fon1[23].alpha = 1;
  } else {
    a24.draw();
    l24.draw();
    fon1[23].draw();
  }
});
game.newLoop('a25', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a25.x <= 704 && a25.w < 256) {
    a25.draw();
    l25.draw();
    fon1[24].draw();
    a25.setPosition(p2);
    fon1[24].setPosition(p2);
    l25.setPosition(p2);
  }

  if (a25.x >= 640 && l25.alpha > 0) {
    a25.draw();
    l25.draw();
    fon1[24].draw();
    a25.w = 256;
    a25.h = 256;
    fon1[24].w = 256;
    fon1[24].h = 256;
    l25.w = 256;
    l25.h = 256; //	a25.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a25) && fon1[24].alpha == 1) {
    //fon1[24].visible=false; fon1[24].setPosition(p(0,0));
    //a25.visible=false; a25.setPosition(p(0,0)); l25.setPosition(p(0,0));
    fon1[24].setPosition(p(25, 15 + 105 * 4));
    fon1[24].w = 100;
    fon1[24].h = 100;
    a25.setPosition(p(25, 15 + 105 * 4));
    a25.w = 100;
    a25.h = 100;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l25) && fon1[24].alpha <= 0) {
    a25.fillColor = cF;
    l25.alpha = 0;
    fon1[24].alpha = 1;
  } else {
    a25.draw();
    l25.draw();
    fon1[24].draw();
  }
});
game.newLoop('a26', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a26.x <= 842 && a26.w < 256) {
    a26.draw();
    l26.draw();
    fon1[25].draw();
    a26.setPosition(p2);
    fon1[25].setPosition(p2);
    l26.setPosition(p2);
  }

  if (a26.x >= 640 && l26.alpha > 0) {
    a26.draw();
    l26.draw();
    fon1[25].draw();
    a26.w = 256;
    a26.h = 256;
    fon1[25].w = 256;
    fon1[25].h = 256;
    l26.w = 256;
    l26.h = 256; //	a26.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a26) && fon1[25].alpha == 1) {
    //fon1[25].visible=false; fon1[25].setPosition(p(0,0));
    //a26.visible=false; a26.setPosition(p(0,0)); l26.setPosition(p(0,0));
    fon1[25].setPosition(p(135, 15 + 105 * 4));
    fon1[25].w = 100;
    fon1[25].h = 100;
    a26.setPosition(p(135, 15 + 105 * 4));
    a26.w = 100;
    a26.h = 100;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l26) && fon1[25].alpha <= 0) {
    a26.fillColor = cF;
    l26.alpha = 0;
    fon1[25].alpha = 1;
  } else {
    a26.draw();
    l26.draw();
    fon1[25].draw();
  }
});
game.newLoop('a27', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a27.x <= 980 && a27.w < 256) {
    a27.draw();
    l27.draw();
    fon1[26].draw();
    a27.setPosition(p2);
    fon1[26].setPosition(p2);
    l27.setPosition(p2);
  }

  if (a27.x >= 640 && l27.alpha > 0) {
    a27.draw();
    l27.draw();
    fon1[26].draw();
    a27.w = 256;
    a27.h = 256;
    fon1[26].w = 256;
    fon1[26].h = 256;
    l27.w = 256;
    l27.h = 256; //	a27.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a27) && fon1[26].alpha == 1) {
    //fon1[26].visible=false; fon1[26].setPosition(p(0,0));
    //a27.visible=false; a27.setPosition(p(0,0)); l27.setPosition(p(0,0));
    fon1[26].setPosition(p(25, 15 + 105 * 5));
    fon1[26].w = 100;
    fon1[26].h = 100;
    a27.setPosition(p(25, 15 + 105 * 5));
    a27.w = 100;
    a27.h = 100;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l27) && fon1[26].alpha <= 0) {
    a27.fillColor = cF;
    l27.alpha = 0;
    fon1[26].alpha = 1;
  } else {
    a27.draw();
    l27.draw();
    fon1[26].draw();
  }
});
game.newLoop('a28', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a28.x <= 1118 && a28.w < 256) {
    a28.draw();
    l28.draw();
    fon1[27].draw();
    a28.setPosition(p2);
    fon1[27].setPosition(p2);
    l28.setPosition(p2);
  }

  if (a28.x >= 640 && l28.alpha > 0) {
    a28.draw();
    l28.draw();
    fon1[27].draw();
    a28.w = 256;
    a28.h = 256;
    fon1[27].w = 256;
    fon1[27].h = 256;
    l28.w = 256;
    l28.h = 256; //	a28.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a28) && fon1[27].alpha == 1) {
    //fon1[27].visible=false; fon1[27].setPosition(p(0,0));
    //a28.visible=false; a28.setPosition(p(0,0)); l28.setPosition(p(0,0));
    fon1[27].setPosition(p(135, 15 + 105 * 5));
    fon1[27].w = 100;
    fon1[27].h = 100;
    a28.setPosition(p(135, 15 + 105 * 5));
    a28.w = 100;
    a28.h = 100;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l28) && fon1[27].alpha <= 0) {
    a28.fillColor = cF;
    l28.alpha = 0;
    fon1[27].alpha = 1;
  } else {
    a28.draw();
    l28.draw();
    fon1[27].draw();
  }
});
game.newLoop('a29', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a29.x <= 640 && a29.w < 256) {
    a29.draw();
    l29.draw();
    fon1[28].draw();
    a29.setPosition(p2);
    fon1[28].setPosition(p2);
    l29.setPosition(p2);
  }

  if (a29.x >= 640 && l29.alpha > 0) {
    a29.draw();
    l29.draw();
    fon1[28].draw();
    a29.w = 256;
    a29.h = 256;
    fon1[28].w = 256;
    fon1[28].h = 256;
    l29.w = 256;
    l29.h = 256; //	a29.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a29) && fon1[28].alpha == 1) {
    //fon1[28].visible=false; fon1[28].setPosition(p(0,0));
    //a29.visible=false; a29.setPosition(p(0,0)); l29.setPosition(p(0,0));
    fon1[28].setPosition(p(25, 15 + 105 * 6));
    fon1[28].w = 100;
    fon1[28].h = 100;
    a29.setPosition(p(25, 15 + 105 * 6));
    a29.w = 100;
    a29.h = 100;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l29) && fon1[28].alpha <= 0) {
    a29.fillColor = cF;
    l29.alpha = 0;
    fon1[28].alpha = 1;
  } else {
    a29.draw();
    l29.draw();
    fon1[28].draw();
  }
});
game.newLoop('a30', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a30.x <= 640 && a30.w < 256) {
    a30.draw();
    l30.draw();
    fon1[29].draw();
    a30.setPosition(p2);
    fon1[29].setPosition(p2);
    l30.setPosition(p2);
  }

  if (a30.x >= 640 && l30.alpha > 0) {
    a30.draw();
    l30.draw();
    fon1[29].draw();
    a30.w = 256;
    a30.h = 256;
    fon1[29].w = 256;
    fon1[29].h = 256;
    l30.w = 256;
    l30.h = 256; //	a30.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a30) && fon1[29].alpha == 1) {
    //fon1[29].visible=false; fon1[29].setPosition(p(0,0));
    //a30.visible=false; a30.setPosition(p(0,0)); l30.setPosition(p(0,0));
    fon1[29].setPosition(p(135, 15 + 105 * 6));
    fon1[29].w = 100;
    fon1[29].h = 100;
    a30.setPosition(p(135, 15 + 105 * 6));
    a30.w = 100;
    a30.h = 100;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l30) && fon1[29].alpha <= 0) {
    a30.fillColor = cF;
    l30.alpha = 0;
    fon1[29].alpha = 1;
  } else {
    a30.draw();
    l30.draw();
    fon1[29].draw();
  }
});
game.newLoop('a31', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a31.x <= 640 && a31.w < 256) {
    a31.draw();
    l31.draw();
    fon1[30].draw();
    a31.setPosition(p2);
    fon1[30].setPosition(p2);
    l31.setPosition(p2);
  }

  if (a31.x >= 640 && l31.alpha > 0) {
    a31.draw();
    l31.draw();
    fon1[30].draw();
    a31.w = 256;
    a31.h = 256;
    fon1[30].w = 256;
    fon1[30].h = 256;
    l31.w = 256;
    l31.h = 256; //	a31.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a31) && fon1[30].alpha == 1) {
    //fon1[30].visible=false; fon1[30].setPosition(p(0,0));
    //a31.visible=false; a31.setPosition(p(0,0)); l31.setPosition(p(0,0));
    fon1[30].setPosition(p(25, 15 + 105 * 7));
    fon1[30].w = 100;
    fon1[30].h = 100;
    a31.setPosition(p(25, 15 + 105 * 7));
    a31.w = 100;
    a31.h = 100;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l31) && fon1[30].alpha <= 0) {
    a31.fillColor = cF;
    l31.alpha = 0;
    fon1[30].alpha = 1;
  } else {
    a31.draw();
    l31.draw();
    fon1[30].draw();
  }
});
game.newLoop('a32', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a32.x <= 704 && a32.w < 256) {
    a32.draw();
    l32.draw();
    fon1[31].draw();
    a32.setPosition(p2);
    fon1[31].setPosition(p2);
    l32.setPosition(p2);
  }

  if (a32.x >= 640 && l32.alpha > 0) {
    a32.draw();
    l32.draw();
    fon1[31].draw();
    a32.w = 256;
    a32.h = 256;
    fon1[31].w = 256;
    fon1[31].h = 256;
    l32.w = 256;
    l32.h = 256; //	a32.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a32) && fon1[31].alpha == 1) {
    //fon1[31].visible=false; fon1[31].setPosition(p(0,0));
    //a32.visible=false; a32.setPosition(p(0,0)); l32.setPosition(p(0,0));
    fon1[31].setPosition(p(135, 15 + 105 * 7));
    fon1[31].w = 100;
    fon1[31].h = 100;
    a32.setPosition(p(135, 15 + 105 * 7));
    a32.w = 100;
    a32.h = 100;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l32) && fon1[31].alpha <= 0) {
    a32.fillColor = cF;
    l32.alpha = 0;
    fon1[31].alpha = 1;
  } else {
    a32.draw();
    l32.draw();
    fon1[31].draw();
  }
});
game.newLoop('a33', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a33.x <= 842 && a33.w < 256) {
    a33.draw();
    l33.draw();
    fon1[32].draw();
    a33.setPosition(p2);
    fon1[32].setPosition(p2);
    l33.setPosition(p2);
  }

  if (a33.x >= 640 && l33.alpha > 0) {
    a33.draw();
    l33.draw();
    fon1[32].draw();
    a33.w = 256;
    a33.h = 256;
    fon1[32].w = 256;
    fon1[32].h = 256;
    l33.w = 256;
    l33.h = 256; //	a33.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a33) && fon1[32].alpha == 1) {
    //fon1[32].visible=false; fon1[32].setPosition(p(0,0));
    //a33.visible=false; a33.setPosition(p(0,0)); l33.setPosition(p(0,0));
    fon1[32].setPosition(p(250, 770));
    fon1[32].w = 90;
    fon1[32].h = 90;
    a33.setPosition(p(250, 770));
    a33.w = 90;
    a33.h = 90;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l33) && fon1[32].alpha <= 0) {
    a33.fillColor = cF;
    l33.alpha = 0;
    fon1[32].alpha = 1;
  } else {
    a33.draw();
    l33.draw();
    fon1[32].draw();
  }
});
game.newLoop('a34', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a34.x <= 980 && a34.w < 256) {
    a34.draw();
    l34.draw();
    fon1[33].draw();
    a34.setPosition(p2);
    fon1[33].setPosition(p2);
    l34.setPosition(p2);
  }

  if (a34.x >= 640 && l34.alpha > 0) {
    a34.draw();
    l34.draw();
    fon1[33].draw();
    a34.w = 256;
    a34.h = 256;
    fon1[33].w = 256;
    fon1[33].h = 256;
    l34.w = 256;
    l34.h = 256; //	a34.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a34) && fon1[33].alpha == 1) {
    //fon1[33].visible=false; fon1[33].setPosition(p(0,0));
    //a34.visible=false; a34.setPosition(p(0,0)); l34.setPosition(p(0,0));
    fon1[33].setPosition(p(725, 770));
    fon1[33].w = 90;
    fon1[33].h = 90;
    a34.setPosition(p(725, 770));
    a34.w = 90;
    a34.h = 90;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l34) && fon1[33].alpha <= 0) {
    a34.fillColor = cF;
    l34.alpha = 0;
    fon1[33].alpha = 1;
  } else {
    a34.draw();
    l34.draw();
    fon1[33].draw();
  }
});
game.newLoop('a35', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a35.x <= 640 && a35.w < 256) {
    a35.draw();
    l35.draw();
    fon1[34].draw();
    a35.setPosition(p2);
    fon1[34].setPosition(p2);
    l35.setPosition(p2);
  }

  if (a35.x >= 640 && l35.alpha > 0) {
    a35.draw();
    l35.draw();
    fon1[34].draw();
    a35.w = 256;
    a35.h = 256;
    fon1[34].w = 256;
    fon1[34].h = 256;
    l35.w = 256;
    l35.h = 256; //	a35.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a35) && fon1[34].alpha == 1) {
    fon1[34].visible = false;
    fon1[34].setPosition(p(0, 0));
    a35.visible = false;
    a35.setPosition(p(0, 0));
    l35.setPosition(p(0, 0));
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l35) && fon1[34].alpha <= 0) {
    a35.fillColor = cF;
    l35.alpha = 0;
    fon1[34].alpha = 1;
  } else {
    a35.draw();
    l35.draw();
    fon1[34].draw();
  }
});
game.newLoop('a35', function () {
  //var p2 = p(768-128/2,433-128/2);
  back1.draw();
  field.draw();

  for (var i in fon3) {
    fon3[i].draw();
  }

  ;

  for (var i in fon) {
    fon[i].draw();
  }

  ;

  for (var i in fon1) {
    fon1[i].draw();
  }

  ;

  for (var i in fon2) {
    fon2[i].draw();
  }

  if (a35.x <= 1118 && a35.w < 256) {
    a35.draw();
    l35.draw();
    fon1[34].draw();
    a35.setPosition(p2);
    fon1[34].setPosition(p2);
    l35.setPosition(p2);
  }

  if (a35.x >= 640 && l35.alpha > 0) {
    a35.draw();
    l35.draw();
    fon1[34].draw();
    a35.w = 256;
    a35.h = 256;
    fon1[34].w = 256;
    fon1[34].h = 256;
    l35.w = 256;
    l35.h = 256; //	a35.fillColor = cI;
  }

  if (mouse.isPeekObject("LEFT", a35) && fon1[34].alpha == 1) {
    //fon1[34].visible=false; fon1[34].setPosition(p(0,0));
    //a35.visible=false; a35.setPosition(p(0,0)); l35.setPosition(p(0,0));
    fon1[34].setPosition(p(1185, 770));
    fon1[34].w = 90;
    fon1[34].h = 90;
    a35.setPosition(p(1185, 770));
    a35.w = 90;
    a35.h = 90;
    game.setLoop('myGame4');
  }

  if (mouse.isPeekObject("LEFT", l35) && fon1[34].alpha <= 0) {
    a35.fillColor = cF;
    l35.alpha = 0;
    fon1[34].alpha = 1;
  } else {
    a35.draw();
    l35.draw();
    fon1[34].draw();
  }
});
game.start();