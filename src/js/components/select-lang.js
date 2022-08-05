if (document.querySelector('.select-lang')) {
    const selectLang = document.querySelector('.select-lang');
    const btn = selectLang.querySelector('.select-lang__title');
    const dropdown = selectLang.querySelector('.select-lang__dropdown');
    const links = selectLang.querySelectorAll('.select-lang__link');
    btn.addEventListener('click', () => {
        dropdown.classList.toggle('is-open');
        btn.classList.toggle('is-open');
    });
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.select-lang')) {
            dropdown.classList.remove('is-open');
            btn.classList.remove('is-open');
        }
    });
    links.forEach(el => {
        if (btn.textContent.trim() == el.textContent.trim()) {
            el.parentNode.classList.add('active');
        }
    });
}
