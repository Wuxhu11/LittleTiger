---
layout: page
permalink: /publications/
title: Publications 
description: \* indicates my student, † indicates equal contribution
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}




<div class="publications">

<h1>preprints</h1>

{% bibliography -f preprints %}

<h1>conference &amp; journal articles</h1>

{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}


</div>
