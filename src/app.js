const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    accordionItemHeader.classList.toggle("active");
  });
});

function howItWorksServices(serviceIndex, serviceNumIndex, serviceTitleIndex, serviceImageIndex){
    document.getElementById('service-1').setAttribute("class","how-it-works__service");
    document.getElementById('service-2').setAttribute("class","how-it-works__service");
    document.getElementById('service-3').setAttribute("class","how-it-works__service");
    document.getElementById('service-4').setAttribute("class","how-it-works__service");
    document.getElementById('service-5').setAttribute("class","how-it-works__service");
    document.getElementById('service-6').setAttribute("class","how-it-works__service");
    document.getElementById('service-7').setAttribute("class","how-it-works__service");

    document.getElementById('serviceNumber1').setAttribute("class","service-number");
    document.getElementById('serviceNumber2').setAttribute("class","service-number");
    document.getElementById('serviceNumber3').setAttribute("class","service-number");
    document.getElementById('serviceNumber4').setAttribute("class","service-number");
    document.getElementById('serviceNumber5').setAttribute("class","service-number");
    document.getElementById('serviceNumber6').setAttribute("class","service-number");
    document.getElementById('serviceNumber7').setAttribute("class","service-number");

    document.getElementById('serviceNumber1_title').setAttribute("class","service-tag");
    document.getElementById('serviceNumber2_title').setAttribute("class","service-tag");
    document.getElementById('serviceNumber3_title').setAttribute("class","service-tag");
    document.getElementById('serviceNumber4_title').setAttribute("class","service-tag");
    document.getElementById('serviceNumber5_title').setAttribute("class","service-tag");
    document.getElementById('serviceNumber6_title').setAttribute("class","service-tag");
    document.getElementById('serviceNumber7_title').setAttribute("class","service-tag");

    document.getElementById('image-block-1').setAttribute("class","image-hidden");
    document.getElementById('image-block-2').setAttribute("class","image-hidden");
    document.getElementById('image-block-3').setAttribute("class","image-hidden");
    document.getElementById('image-block-4').setAttribute("class","image-hidden");
    document.getElementById('image-block-5').setAttribute("class","image-hidden");
    document.getElementById('image-block-6').setAttribute("class","image-hidden");
    document.getElementById('image-block-7').setAttribute("class","image-hidden");

    document.getElementById(serviceIndex).setAttribute("class","fix-consultation-block");
    document.getElementById(serviceNumIndex).setAttribute("class","servicenum-01");
    document.getElementById(serviceTitleIndex).setAttribute("class","service-01");
    document.getElementById(serviceImageIndex).setAttribute("class","service-imageBlock");
};

function docImageCarousel(carouselIndex,toggleIndex){
    document.getElementById('doc-carousel-1').setAttribute('class','hide-doc-carousel');
    document.getElementById('doc-carousel-2').setAttribute('class','hide-doc-carousel');
    document.getElementById('doc-carousel-3').setAttribute('class','hide-doc-carousel');
    document.getElementById('doc-carousel-4').setAttribute('class','hide-doc-carousel');
    
    
    document.getElementById('toggle-1').setAttribute('class','doctors-toggle__button');
    document.getElementById('toggle-2').setAttribute('class','doctors-toggle__button');
    document.getElementById('toggle-3').setAttribute('class','doctors-toggle__button');
    document.getElementById('toggle-4').setAttribute('class','doctors-toggle__button');

    document.getElementById(carouselIndex).setAttribute('class','doctors-block');
    document.getElementById(toggleIndex).setAttribute('class','highlited-toggle__button');
}

function treatmentImageCarousel(carouselIndex,toggleIndex){
    document.getElementById('treatment-carousel-1').setAttribute('class','hide-treatments-images');
    document.getElementById('treatment-carousel-2').setAttribute('class','hide-treatments-images');
    document.getElementById('treatment-carousel-3').setAttribute('class','hide-treatments-images');
    
    
    document.getElementById('treatment-toggle-1').setAttribute('class','doctors-toggle__button');
    document.getElementById('treatment-toggle-2').setAttribute('class','doctors-toggle__button');
    document.getElementById('treatment-toggle-3').setAttribute('class','doctors-toggle__button');

    document.getElementById(carouselIndex).setAttribute('class','treatments-images');
    document.getElementById(toggleIndex).setAttribute('class','highlited-toggle__button');
}

function testImageCarousel(carouselIndex,toggleIndex){
    document.getElementById('test-carousel-1').setAttribute('class','hide-tests-container');
    document.getElementById('test-carousel-2').setAttribute('class','hide-tests-container');
    
    
    document.getElementById('test-toggle-1').setAttribute('class','toggle');
    document.getElementById('test-toggle-2').setAttribute('class','toggle');

    document.getElementById(carouselIndex).setAttribute('class','tests-container');
    document.getElementById(toggleIndex).setAttribute('class','toggle-blue');
}

function moreServicesCarousel(carouselIndex){
    document.getElementById('more-services-carousel-1').setAttribute('class','hide-treatment-figure-container');
    document.getElementById('more-services-carousel-2').setAttribute('class','hide-treatment-figure-container');

    document.getElementById(carouselIndex).setAttribute('class','treatment-figure-container');
}