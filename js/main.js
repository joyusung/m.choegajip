$(document).ready(function(){
    var sw=0;
    $('#nav-icon4').click(function(){
        if(sw==0){
            sw=1;
            $(this).addClass('open');
            $('.gnb').animate({
                right:0
            });
        }else{
            sw=0;
            $(this).removeClass('open');
            $('.gnb').animate({
                right:'-100%'
            });
            $('.sub').stop().slideUp();
            $('nav > ul > li > a').removeClass('active');
        }
    });
    $('nav > ul > li > a').click(function(){
        if($(this).attr('class')!='active'){
            $('nav>ul>li>a').removeClass('active');
            $(this).addClass('active');
            $('.sub').stop().slideUp();
            $(this).next().slideDown();
        }else{
            $(this).removeClass('active');
            $(this).next().slideUp();
        }
    });
    
    $('#fullpage').fullpage({
        navigation: true,
		navigationPosition: 'right',
        afterLoad:function(anchorLink,index){
            if(index==2){
                // 함수 호출
                addNum();
            }
            if(index==4){
                $('section.page4 ul li .icon img').addClass('active');
            }else{
                $('section.page4 ul li .icon img').removeClass('active');
            }
        }
    });

    var swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
            delay: 3500,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
    });

    // page2 숫자 증가 애니메이션
    function addNum(){
        // each() aptjem: 객체 개수만큼 반복(1번)
        // prop() 메서드: 객체에 속성(property)을 추가하거나, 객체의 속성을 알아내는 메서드, 19990225: 내가 지정한 초기값
        $('.addNumber span').each(function(){
            // $(this) : $('.addNumber span')를 가리킴
            // Counter 속성을 객체에 추가함. 초기값은 19990225, 최종값 123990225
            $(this).prop('Counter',19990225).animate({
                Counter:123990225
            },{
                // 실행시간
                duration:3000,
                // now값이 변하는 단계
                step:function(now){
                    // console.log(now);
                    // math.ceil(): 실수를 정수로 변환(올림)
                    // numberfn함수를 호출하면서 정수값now를 매개변수로 전달, 함수의 결과값을 num변수에 받아서 저장
                    var num=numberfn(Math.ceil(now));
                    // 늘어나는 num값을 span영역에 표시함.
                    $(this).text(num);
                }
            });
        });
    }
    // 정규표현식✨✨✨✨✨
    // numberfn 함수 선언
    // 매개변수 x에서 Math.ceil(now)값을 전달 받음
    function numberfn(x) {
        // tostring() 메서드 : 전달받은 x값을 문자열로 변환
        // replace() 메서드 : 문자열로 바꿔주는 메서드(치환)
        // \B : 문자가 존재하는 경계가 아닌 부분 찾기
        // \d{3} : 문자열 3글자
        // (?!\d) : 3글자 이상 초과안됨
        // g : 문자열 전체 검색
        // ?= : 기호 앞과 뒤의 조건을 합쳐줌
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
});