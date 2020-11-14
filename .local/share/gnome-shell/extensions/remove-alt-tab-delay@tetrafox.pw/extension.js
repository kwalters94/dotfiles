function init() {
}

function enable() {
    imports.ui.switcherPopup.POPUP_DELAY_TIMEOUT = 0;
}

function disable() {
    imports.ui.switcherPopup.POPUP_DELAY_TIMEOUT = 150;
}