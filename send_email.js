const SEND_TO = "scripts.ismail@gmail.com";

document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('mail_name').value;
    // const email = document.getElementById('mail_email').value;
    const title = document.getElementById('mail_title').value;
    const message = document.getElementById('mail_body').value;

    if (!name || !title || !message) {
        return;
    }

    const mailtoLink = `mailto:${SEND_TO}?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;

    // // Clear the form
    // document.getElementById('mail_name').value = '';
    // // document.getElementById('mail_email').value = '';
    // document.getElementById('mail_title').value = '';
    // document.getElementById('mail_body').value = '';
});



document.getElementById('btn_clear_form').addEventListener('click', () => {
    document.getElementById('mail_name').value = '';
    document.getElementById('mail_title').value = '';
    document.getElementById('mail_body').value = '';
});

