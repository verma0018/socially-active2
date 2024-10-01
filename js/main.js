
var typed = new Typed(".typing", {
    strings: ["Connecting","Engaging", "Growing"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var spinner = function () {
            setTimeout(function () {
                if ($('#spinner').length > 0) {
                    $('#spinner').removeClass('show');
                }
            }, 1);
        };
        spinner();


let nav = document.querySelector(".navbar");
let colorChange = document.querySelector("#contact-changeColor");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
        colorChange.classList.add("contact-changeColor");
    }else{
        nav.classList.remove("header-scrolled");
        colorChange.classList.remove("contact-changeColor");
    }
}

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    document.querySelectorAll('.faq_question').forEach(item => {
        item.addEventListener('click', function() {
            const faqItem = this.parentElement;
    
            // Close all open FAQ items except the clicked one
            document.querySelectorAll('.faq_item').forEach(i => {
                if (i !== faqItem) {
                    i.classList.remove('open');
                }
            });
    
            // Toggle the open state of the clicked FAQ item
            faqItem.classList.toggle('open');
        });
    });
    

    document.querySelector('.contact').addEventListener("submit", submitForm);

    function submitForm(e){
        e.preventDefault();
        let name = document.getElementById('name').value;
        let mail = document.getElementById('email').value;
        let contact = document.getElementById('contact').value;
        let sub = document.getElementById('subject').value;
        let message = document.getElementById('message').value;
        document.querySelector('.contact-form').reset();
    
        sendMail(name,mail,contact,sub,message);
    }
    
    function sendMail(name,mail,sub,message) {
        Email.send({
            Host : "smtp.gmail.com",
            // Username : "sendmailtobetaque@gmail.com",
            Password : "dgmsrbdfrthytthh",
            // 61186C07E03B60A2AC7039EC93340D540140 This is My Elastic Mail SMTP Credentials Password for mail verma07126@gmail.com Port 2525
            // SecureToken : "22efb137-8bdd-4cb5-950a-8ea8b708b137",
            To : 'sendmailtobetaque@gmail.com',
            From : `${mail}`,
            Subject : `${name} sent you a message: ${sub}`,
            Body : `Name: ${name} <br/> Email: ${mail} <br/> Message: ${message}`,
        }).then(
            message => alert(message));
    }