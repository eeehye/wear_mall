// main.js
$(function(){

  // 상품리스트 추가
  var item_list = $('.item_list'); // 상품 목록 위치
  var list = ''; // 삽입 될 html data (변수 추가)
  var list_num = 10; // 상품 목록 갯수
  var kwd = '원';
  var origin_price = '';

  for(var i = 0; i < list_num; i++) {
    list += '<li>';
    list += '<a href="#">';
    list += '<img src="' + product_data[i].img_url + '" alt="노카라 트위드 자켓">';
    list += '<span class="title">' + product_data[i].title + '</span>';
    list += '<span class="name">' + product_data[i].name + '</span>'

    if(product_data[i].origin_price == "") {
      kwd = "&nbsp;";
      origin_price = "";
    } else { origin_price = product_data[i].origin_price;}

    list += '<del class="origin_price">' + origin_price + kwd + '</del>';
    list += '<class="sale_price"><strong>' + product_data[i].sale_price + '원</strong></ins>';
  }

  item_list.append(list);
  
  // 카테고리 버튼
  $('#category_btn').click(function(){
    $(this).toggleClass('on');
  })
  $('header, section').click(function(){
    $('#category_btn.on').toggleClass('on');
    return false;
  })

  // 카테고리 토글 버튼
  $('#category_btn').click(function(){
    $('#category').slideToggle();
   });

  // 다른데 누르면 자동으로 닫히기
  $('header, section').click(function(){
    $('#category').slideUp();
    return false;
  })

  // 핫딜 하트 클릭
  $('#hot_d ul > li .fa-heart').click(function(){
    $(this).toggleClass('on');
  })
  // 브랜드 하트 클릭
  $('#brand .container > ul > li .fa-heart').click(function(){
    $(this).toggleClass('on');
  })


  // BX슬라이더
  $('.bx-slider').bxSlider({
    // 여기에 옵션 설정
    mode: 'horizontal',     // 효과설정
    auto: true,             // 자동재생
    easing: "ease-in-out",  // 가속도(timing-function)
    pause: 4000,            // 정지시간(대기)
    controls: false,        // prev, next 표시/비표시
    pager: true,           // 하단 인디케이터 표시/비표시
    responsive: false,     // 끄지 않으면 가변으로 움직인다(지금 베너는 고정 시켜뒀기 때문에 끔.)
  });

});