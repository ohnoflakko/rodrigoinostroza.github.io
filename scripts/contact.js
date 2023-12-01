document.addEventListener('DOMContentLoaded', function () {
    const flagsElement = document.getElementById('flags');
    const textsToChange = document.querySelectorAll('[data-section]');
    const changeLanguage = async (language) => {
        const requestJson = await fetch(`../language/${language}.json`);
        const texts = await requestJson.json();

        for (const textToChange of textsToChange) {
            const section = textToChange.dataset.section;
            const value = textToChange.dataset.value;

            textToChange.innerHTML = texts[section][value];
            console.log(section, value)
        }
    };

    flagsElement.addEventListener('click', (e) => {
        const language = e.target.closest('.flags__item').querySelector('img').getAttribute('data-language');
        
        if (language) {
            changeLanguage(language);
        }
    });
});
