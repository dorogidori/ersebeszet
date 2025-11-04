import { default as createHeader } from './header.js';
import { default as createFooter } from './footer.js';
import { default as createSideBar } from './sidebar.js';

export default function createPageBase(pageId) {
    document.addEventListener('DOMContentLoaded', () => {
        // header
        createHeader();
        // footer
        createFooter();
        // sidebar
        createSideBar(pageId);
    });
}