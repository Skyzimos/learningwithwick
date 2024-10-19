// Dynamically modify, in real time, the paths for GitHub pages.

window.addEventListener('DOMContentLoaded', function () {
    if (!window.location.href.includes("github")) {
      function removeLearningWithWick(element, attribute) {
        let attrValue = element.getAttribute(attribute);
        if (attrValue && attrValue.includes("/learningwithwick")) {
          element.setAttribute(attribute, attrValue.replace("/learningwithwick", ""));
        }
      }
  
      const elements = document.querySelectorAll('[src], [href], [id]');
  
      elements.forEach(element => {
        if (element.hasAttribute('src')) {
          removeLearningWithWick(element, 'src');
        }
  
        if (element.hasAttribute('href')) {
          removeLearningWithWick(element, 'href');
        }
  
        if (element.hasAttribute('id')) {
          removeLearningWithWick(element, 'id');
        }
      });
  
      console.log("Paths modified for GitHub Pages");
    }
  });
  