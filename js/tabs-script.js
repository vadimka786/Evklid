let Tabsbtn = document.querySelectorAll('.section-work__steps-button');
let TabsItems = document.querySelectorAll('.section_container_work');

Tabsbtn.forEach(function(element) {
    element.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;

        
        Tabsbtn.forEach(function(btn) {
            btn.classList.remove('steps-button-active')
        });

        e.currentTarget.classList.add('steps-button-active');

        TabsItems.forEach(function(element) {
            element.classList.remove('section-work_active')
        });

        document.querySelector(`[data-target = "${path}"]`).classList.add('section-work_active');

    });
});



