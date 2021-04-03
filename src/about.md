---
layout: layout.hbs
title: About
description: About
canonicalUrl: /about
---
## About
<i class="fa fa-fw fa-male mr-1"></i>I am Benjamin Michalski.
## Work
<i class="fa fa-fw fa-briefcase mr-1"></i>I engineer web applications. I get things done.
<i class="fa fa-fw fa-clock-o mr-1"></i>I've been building web apps since 2011<span id="years-counter-wrapper" style="display: none;"> (<span id="years-counter"></span> years, and counting)</span>.
## Resume
<i class="fa fa-fw fa-linkedin-square mr-1"></i>See my resume on [LinkedIn](https://www.linkedin.com/in/benmichalski).
## Work samples
<i class="fa fa-fw fa-github mr-1"></i>See my [GitHub repositories](https://github.com/bmichalski).
<div id="contact-info-wrapper" style="display: none;"><h2>Contact me</h2><span><i class="fa fa-envelope mr-1"></i> By email: <a id="email"></a></span></div>

<script type="text/javascript">
  'use strict'
  
  var parts = [
   'b',
   'e',
   'n',
   'j',
   'a',
   'm',
   'i',
   'n',
   '.',
   'm',
   'i',
   'c',
   'h',
   'a',
   'l',
   's',
   'k',
   'i',
   '@',
   'g',
   'm',
   'a',
   'i',
   'l',
   '.',
   'c',
   'o',
   'm',
  ]
  
  var full = parts.join('')

  $('#document').ready(function () {
    $('#years-counter').html(((new Date).getFullYear() - 2011) + 1)
    
    $('#email').html(full)
    $('#email').attr('href', 'mailto:' + full)
    
    $('#years-counter-wrapper').show()
    $('#contact-info-wrapper').show()
  })
</script>
