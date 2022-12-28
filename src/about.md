---
layout: layout.hbs
title: About
description: About
canonicalUrl: /about
---
# About
<i class="fa fa-fw fa-user me-1"></i>I am Benjamin Michalski.
## Work
<i class="fa fa-fw fa-briefcase me-1"></i>I engineer web applications. I get things done.
<i class="fa fa-fw fa-clock me-1"></i>I've been building web apps since 2011<span id="years-counter-wrapper" class="d-none"> (<span id="years-counter"></span> years, and counting)</span>.
## Resume
<i class="fab fa-fw fa-linkedin me-1"></i>See my resume on [LinkedIn](https://www.linkedin.com/in/benmichalski).
## Work samples
<i class="fab fa-fw fa-github me-1"></i>See my [GitHub repositories](https://github.com/bmichalski) and contributions.
<div id="contact-info-wrapper" class="d-none"><h2>Contact me</h2><span><i class="fa fa-envelope me-1"></i> By email: <a id="email"></a></span></div>

<script type="text/javascript">
  'use strict';
  
  var parts = [
   'b',
   'e',
   'n',
   '@',
   'b',
   'm',
   'i',
   'c',
   'h',
   'a',
   'l',
   's',
   'k',
   'i',
   '.',
   'i',
   'o',
  ];
  
  const full = parts.join('');

  document.getElementById('years-counter').innerHTML = ((new Date).getFullYear() - 2011) + 1;
  document.getElementById('email').innerHTML = full;
  document.getElementById('email').setAttribute('href', 'mailto:' + full);
  document.getElementById('years-counter-wrapper').classList.remove('d-none');
  document.getElementById('contact-info-wrapper').classList.remove('d-none');
</script>
