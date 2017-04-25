
function handleFormToggling() {
    var formsWidget = document.querySelector('.forms-widget');
    var tabMenu = formsWidget.querySelector('ul.tabs')
    var singleTabs = tabMenu.querySelectorAll('li.single-tab');
    var formsCollection = formsWidget.querySelector('ul.forms');
    var singleForms = formsCollection.querySelectorAll('li.single-form');
    var defaultSelectedIndex = 0;

    singleTabs[defaultSelectedIndex].classList.add('selected');
    singleForms[defaultSelectedIndex].classList.add('selected');

    singleTabs.forEach(function(singleTab) {
        singleTab.addEventListener('click', function() {
            tabMenu.querySelector('li.single-tab.selected').classList.remove('selected'); // clear previous selected
            this.classList.add('selected'); // mark selected tab
            var selectedIndex = getElementIndex(this, singleTabs); // index of selected tab
            formsCollection.querySelector('li.single-form.selected').classList.remove('selected');
            singleForms[selectedIndex].classList.add('selected'); // show selected form
        });
    });

    function getElementIndex(item, collection) { // from https://gist.github.com/astur/7c08319a414cb456c581
        return [].slice.call(collection).indexOf(item);
    }
}



handleFormToggling();
