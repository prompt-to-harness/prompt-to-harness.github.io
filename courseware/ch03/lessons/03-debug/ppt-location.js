/* Use the same actual deck order as the narration page. */
window.pptLocator = createPptLocator({section: window.lesson.section, pages: window.lesson.scenes});
window.pptLocator.bindPlayer();
