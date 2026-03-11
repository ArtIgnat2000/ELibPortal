(function () {
    function resolveBasePath(pathname) {
        var marker = '/ELibPortal/';
        var markerIndex = pathname.indexOf(marker);

        if (markerIndex !== -1) {
            return pathname.slice(0, markerIndex + marker.length - 1);
        }

        return '';
    }

    function resolveTargetPath(targetKey) {
        return targetKey === 'encyclopedia' ? '/encyclopedia' : '/presentations';
    }

    function navigateTop(url) {
        try {
            if (window.top && window.top.location) {
                window.top.location.href = url;
                return;
            }
        } catch (error) {
        }

        window.location.href = url;
    }

    function initPortalReturnButton() {
        var button = document.getElementById('back-btn');

        if (!button) {
            return;
        }

        var targetKey = button.getAttribute('data-portal-target')
            || document.body.getAttribute('data-portal-target')
            || 'presentations';
        var basePath = resolveBasePath(window.location.pathname);
        var targetUrl = basePath + resolveTargetPath(targetKey);

        button.setAttribute('href', targetUrl);
        button.setAttribute('target', '_top');

        button.addEventListener('click', function (event) {
            event.preventDefault();
            navigateTop(targetUrl);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPortalReturnButton);
    } else {
        initPortalReturnButton();
    }
})();