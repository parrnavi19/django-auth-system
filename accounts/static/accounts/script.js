document.addEventListener('DOMContentLoaded', () => {
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    passwordInputs.forEach(input => {
        const wrapper = input.parentElement;
        if (wrapper && wrapper.classList.contains('input-wrapper')) {
            const toggleBtn = document.createElement('button');
            toggleBtn.type = 'button';
            toggleBtn.className = 'toggle-password';
            toggleBtn.innerText = 'Show';
            wrapper.appendChild(toggleBtn);

            toggleBtn.addEventListener('click', () => {
                if (input.type === 'password') {
                    input.type = 'text';
                    toggleBtn.innerText = 'Hide';
                } else {
                    input.type = 'password';
                    toggleBtn.innerText = 'Show';
                }
            });
        }
    });

    const alerts = document.querySelectorAll('.alert-toast');
    alerts.forEach(alert => {
        setTimeout(() => {
            alert.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            alert.style.opacity = '0';
            alert.style.transform = 'translateY(-10px)';
            setTimeout(() => alert.remove(), 500);
        }, 4000);
    });
});