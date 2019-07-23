    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        arrow = document.querySelector('.arrow-bottom'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot'),
        text = document.querySelector('.text'),
        pic1 = document.querySelector('.marker1'),
        grad = document.querySelector('.grad');
        
        
       
        
        
        var fps = 50;

    showSlides(slideIndex);
    

    function showSlides (n){
        
        
        if (slideIndex == 3) {
            arrow.classList.remove('arrow-bottom');
            text.style.display = 'none';
            grad.classList.remove('grad');
            
        }
        if (slideIndex < 3) {
            arrow.classList.add('arrow-bottom');
            text.style.display = 'block';
            grad.classList.add('grad');
        }

        if (n > slides.length) {
            slideIndex = 3
        }

        if (n < 1) {
            slideIndex = 1;
        }
        

        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n){
        showSlides(slideIndex += n);
    }

    function currentSlide(n){
        showSlides(slideIndex = n);
    }

    arrow.addEventListener('click', function(){
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(event){
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });
    //Свайп по слайду
 

    slide = document.querySelectorAll('.slider-item');
    var startY = 0;
    //Прокрутка вниз
    for (let i = 0; i < slide.length; i++) {

        slide[i].addEventListener('touchstart', function(e){
            let touches = e.changedTouches[0];
            startY = parseInt(touches.clientY);
            e.preventDefault();
        });
        
        slide[i].addEventListener('touchmove', function(e){
            let touches = e.changedTouches[0];
            let move = parseInt(touches.clientY) - startY;
            
            var flag = this.flag || false;            
            if (move < -150 && !flag) {
                this.flag = true;
                plusSlides(1);   
                
                           
              }    

            var flag2 = this.flag2 || false;       
            if (move > 150 && !flag2) {
                this.flag2 = true;                                
                plusSlides(-1);
                
            } 
        });
    }
