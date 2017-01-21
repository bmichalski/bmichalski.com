---
layout: layout.html
title: About
description: About
canonicalUrl: /about
---
## What I do
<i class="fa fa-male"></i>&nbsp;&nbsp;I am a software developer.
<i class="fa fa-clock-o"></i> I've been building web apps since 2011<span id="years-counter-wrapper" style="display: none;"> (<span id="years-counter"></span> years, and counting)<span>.
## Work samples
<i class="fa fa-github"></i> You can checkout my [GitHub repositories](https://github.com/bmichalski).
## Things I have been doing
<i class="fa fa-linkedin-square"></i> See my resume on [LinkedIn](https://www.linkedin.com/in/benmichalski).
<div id="contact-info-wrapper" style="display: none;"><h2>Contact me</h2><span><i class="fa fa-envelope"></i> By email: <a id="email"></a></span></div>
## What tools do I use?
<i class="fa fa-wrench"></i> Mainly [PHP](https://secure.php.net/) and [JavaScript](https://developer.mozilla.org/en/docs/Web/JavaScript) (client / server), with great framework / libraries such as [Symfony](https://symfony.com/), [React](https://facebook.github.io/react/), [Hapi](https://hapijs.com/) and many others.

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