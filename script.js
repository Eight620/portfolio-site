document.addEventListener('DOMContentLoaded', function () {

    /**
     * ページ（セクション）切り替え機能
     */
    const navLinks = document.querySelectorAll('.nav-link');
    const workLinks = document.querySelectorAll('.work-link');
    const allLinks = [...navLinks, ...workLinks]; // すべてのナビゲーションリンクを結合
    const pages = document.querySelectorAll('.page');

    function switchPage(targetId) {
        // URLのハッシュが空、または'#'のみの場合は何もしない
        if (!targetId || targetId === '#') return;

        // すべてのページを非表示にする
        pages.forEach(page => {
            page.classList.remove('is-active');
        });

        // 対象のページを表示する
        const targetPage = document.querySelector(targetId);
        if (targetPage) {
            targetPage.classList.add('is-active');
        }

        // ナビゲーションリンクのアクティブ状態を更新
        navLinks.forEach(link => {
            // targetIdが制作物詳細ページの場合、Homeをアクティブにする
            const linkHref = link.getAttribute('href');
            if (targetId.startsWith('#work-detail-')) {
                if (linkHref === '#home') {
                    link.classList.add('is-active');
                } else {
                    link.classList.remove('is-active');
                }
            } else {
                 if (linkHref === targetId) {
                    link.classList.add('is-active');
                } else {
                    link.classList.remove('is-active');
                }
            }
        });

        // ページトップにスクロール
        window.scrollTo(0, 0);
    }

    // すべてのリンクにクリックイベントを設定
    allLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');
            // 外部リンク（target="_blank"を持つボタンなど）は対象外
            if (link.getAttribute('target') === '_blank') {
                return;
            }
            event.preventDefault(); // デフォルトのアンカー挙動をキャンセル
            switchPage(targetId);
        });
    });

});
