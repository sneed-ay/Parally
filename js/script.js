document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.getElementById('hamburger-button');
    const closeButton = document.getElementById('close-button');
    const nav = document.getElementById('global-nav');
    const navLinks = nav.querySelectorAll('a');

    // ハンバーガーメニューを開く
    hamburgerButton.addEventListener('click', function() {
        nav.classList.add('is-active');
    });

    // 閉じるボタンでメニューを閉じる
    closeButton.addEventListener('click', function() {
        nav.classList.remove('is-active');
    });

    // ナビゲーションのリンクをクリックしたらメニューを閉じる
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            nav.classList.remove('is-active');
        });
    });
});