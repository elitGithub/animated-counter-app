const counters = document.querySelectorAll('.counter');
const speed = 200; //the lower the faster

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = Math.ceil(target / speed);

        if (count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 1)
        } else {
            count.innerText = target;
        }
    };

    updateCount();
});
