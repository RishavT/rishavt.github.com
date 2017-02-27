var headContext = {
  title: 'Rishav Thakker'
};
var bodyContext = {
  layout_titles: [
    {
      title: 'Portfolio',
      href: 'index.html',
      is_active: 'is_active'
    },
    {
      title: 'Blog',
      href: 'https://lazinessisawesome.wordpress.com'
    },
    {
      title: 'About',
      href: 'about.html'
    },
    {
      title: 'Contact',
      href: 'contact.html'
    }
  ]
};

function main() {
  var head = document.getElementById("head");
  var body = document.getElementById("body");
  var newHead = Handlebars.compile(head.innerHTML)(headContext);
  var newBody = Handlebars.compile(body.innerHTML)(bodyContext);
  document.getElementById("body").innerHTML = newBody;
  document.getElementById("head").innerHTML = newHead;
}
window.onload = main;
