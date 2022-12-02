export default function scrollTrigger(selector, options = {}) {

  function addObserver(el, options) {
    let callback = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    });

    callback.observe(el);
  }

  let els = document.querySelectorAll(selector);
  els = Array.from(els);

  els.forEach((el) => addObserver(el, options));
};
