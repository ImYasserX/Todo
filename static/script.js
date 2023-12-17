document.addEventListener("DOMContentLoaded", function () {

    var listItems = document.querySelectorAll('.task');

    listItems.forEach(function (item, index) {
        var delay = index * 100; 

        item.style.opacity = '0';
        item.style.animation = 'fadeIn 0.5s ease-in-out ' + delay + 'ms forwards';
    });
});
