
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

    // document.querySelector('.email-form').addEventListener("submit", submitForm);

    // function submitForm(e) {
    //     e.preventDefault();
        
    //     let name = document.getElementById('name').value;
    //     let mail = document.getElementById('email').value;
    //     let contact = document.getElementById('num').value;
    //     let sub = document.getElementById('subject').value;
    //     let message = document.getElementById('message').value;
        
    //     // Reset the form after submission
    //     document.querySelector('.email-form').reset();
    //     sendMail(name, mail, contact, sub, message);
    // }
    
    // function sendMail(name, mail, contact, sub, message) {
    //     Email.send({
    //         // Host: "smtp.gmail.com",
    //         Username: "performence.marketing04@gmail.com",
    //         Password: "51B5FB14E8E5EA70CC07A989B1E52AEDE35F",
    //         SecureToken: "8e874cf8-b218-49a3-8c82-59b4848d44bb",
    //         To: 'performence.marketing04@gmail.com',
    //         From: 'performence.marketing04@gmail.com',
    //         Subject: `${name} sent you a message: ${sub}`,
    //         Body: `Name: ${name} <br/> Email: ${mail} <br/> Contact: ${contact} <br/> Message: ${message}`,
    //     }).then(
    //         message => alert(message)
    //     );
    // }
    


    document.querySelector('.email-form').addEventListener("submit", submitForm);

    function submitForm(e) {
        e.preventDefault();
    
        let name = document.getElementById('name').value;
        let mail = document.getElementById('email').value;
        let contact = document.getElementById('num').value;
        let sub = document.getElementById('subject').value;
        let message = document.getElementById('message').value;
    
        // Reset the form after submission
        document.querySelector('.email-form').reset();
    
        // Send the mail
        sendMail(name, mail, contact, sub, message);
    }
    
    function sendMail(name, mail, contact, sub, message) {
        Email.send({
            // Host: "smtp.gmail.com",
            Username: "performence.marketing04@gmail.com",
            Password: "51B5FB14E8E5EA70CC07A989B1E52AEDE35F",
            SecureToken: "8e874cf8-b218-49a3-8c82-59b4848d44bb",
            To: 'performence.marketing04@gmail.com',
            From: 'performence.marketing04@gmail.com',
            Subject: `${name} sent you a message: ${sub}`,
            Body: `Name: ${name} <br/> Email: ${mail} <br/> Contact: ${contact} <br/> Message: ${message}`,
        }).then(
            response => {
                if (response === 'OK') {
                    showMessage('sent-message');
                } else {
                    showMessage('error-message');
                }
            }).catch(error => {
                showMessage('error-message');
            });
    }
    
    function showMessage(type) {
        const messageElement = document.querySelector(`.${type}`);
        messageElement.style.display = 'block';
    
        // Hide the message after 5 seconds
        setTimeout(() => {
            messageElement.style.display = 'none';
        }, 5000);
    }
    