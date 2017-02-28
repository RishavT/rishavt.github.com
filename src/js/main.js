var headContext = {
  title: 'Rishav Thakker'
};
var bodyContext = {
  title: 'Rishav Thakker',
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
  ],
  workExpCards: [
    {
      title: 'CourseBuilder Engineer at Google',
      description: 'Currently developing and maintaining CourseBuidler at Google.',
      backgroundImage: '/images/workexp/google.jpg'
    },
    {
      title: 'Software Developer at Thought(x) Media',
      description: 'Worked as a software developer at Thought(x) Media.',
      backgroundImage: '/images/workexp/thoughtx.jpg'
    }
  ]
};

var scrollTop = 0;

function makeTopBarVisible() {
  $(".portfolio-logo").click();
}

function onScroll(event) {
  var st = $(this).scrollTop();
  if (st > lastScrollTop) {
    // Indicates a down scroll
    if ($("body").height() > $(window).height()) {
      makeTopBarVisible();
    }
    lastScrollTop = st;
  }
}

function main() {
  var head = document.getElementsByTagName("head")[0];
  var body = document.getElementsByTagName("body")[0];
  var newHead = Handlebars.compile(head.innerHTML)(headContext);
  var newBody = Handlebars.compile(body.innerHTML)(bodyContext);
  document.getElementsByTagName("head")[0].innerHTML = newHead;
  document.getElementsByTagName("body")[0].innerHTML = newBody;

  // Register event for scroll down
  $(window).scroll(onScroll);
}

$(document).ready(main);
