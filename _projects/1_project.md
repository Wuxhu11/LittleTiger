---
layout: page
title:  Federated Learning
description: An Overview of my Research
img: assets/img/publication_preview/federated-learning.png
importance: 1
category: work
related_publications: true
---


### **Table of Contents**  
- [Federated learning](#FL)  
- [An overview of my research](#overview)
- [Competition, free-riding, and collaboration](#part1) 




### **Federated Learning (FL)**
<a id="FL"></a>  

A central server (CS) periodically gathers model updates from individual FL participants (i.e., clients), which are then aggregated to refne a global model. Similarly, each client regularly acquires the latest global model from the CS and further enhances it through local training. This iterative interplay between the CS and clients persists until the global model achieves convergence.

<div align="center">
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/FL-framework.png" title="example image" class="img-fluid rounded z-depth-1" width="80%" %}
    </div>
</div>
<div class="caption">
    Illustration of Federated Learning.
</div>
</div>

---

### **An Overview of My Research**
<a id="overview"></a>  

Overall, my research strives to be both theoretically profound and practically feasible. 


One basic way that federated learning works is to aggregate the clients’ local model updates according to their weights. Data heterogeneity necessites evaluating data complementarity or similarity between clients, and building a personalized ML model for each client. 

FL itself is a collaborative network of clients where a client $i$ is complemented by other clients $j$ with different weights $w_{i,j}$, which measure the data heterogeneity between clients. In cross-silo FL, clients are typically organizations or companies in the public or private sector. Such collaborative networks feature conflict of interest (e.g., [competition](https://en.wikipedia.org/wiki/Coopetition)) and [free-riding](https://en.wikipedia.org/wiki/Free-rider_problem), and entails evaluating the complementary weights effectively and building personalized FL models for clients. 

It is predicted that, by around 2028, the amount of high-quality data that LLMs will require to continue to improve their performance will exceed what is publicly available. This  amplifies the importance of FL, which enables collaborative model training across distributed data sources without sharing raw data.


Currently, I focus on how to build a **collaborative network** of multiple clients in cross-silo settings:
<ul>
    <li>Free-riding, competition, and collaboration {% cite Wu24a Tan24a chen2024free %}</li>
    <li>Quantifying data heterogeneity/complementarity {% cite chenvoronoi Li24a %}</li>
    <li>Personalized federated learning {% cite Liu25a Guo24a %}</li>
    <li>Federated foundation models {% cite Yi25a %}</li>
</ul>


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/federated-learning-overview.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    An Overview of My Research.
</div>

---

### **Competition, free-riding, and collaboration**
<a id="part1"></a>  




Every project has a beautiful feature showcase page...
It's easy to include images in a flexible 3-column grid format.
Make your photos 1/3, 2/3, or full width.

To give your project a background in the portfolio page, just add the img tag to the front matter like so:

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/publication_preview/federated-learning.png
    ---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>


You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}. {% cite Tan24a %}
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
