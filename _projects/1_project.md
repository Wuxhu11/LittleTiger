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
- [Cross-silo Federated learning](#FL)  
- [An overview of my research](#overview)
- [Competition, free-riding, and collaboration](#part1) 




>### **Cross-silo Federated Learning (FL)**
<a id="FL"></a>  

In FL, a central server (CS) periodically gathers model updates from individual FL participants (i.e., clients), which are then aggregated to refne a global model. Similarly, each client regularly acquires the latest global model from the CS and further enhances it through local training. This iterative interplay between the CS and clients persists until the global model achieves convergence. 

There are two types of FL. In *cross-device FL*, clients are end-user devices such as smartphones or IoT devices, and CS is the final owner of the
trained model. In *cross-silo FL*, client are companies or organizations in private or public sectors and are the final owners/users of the trained model, while the CS has the authority to coordinate the FL training process. 



>### **An Overview of My Research**
<a id="overview"></a>  

<div style="float: right; margin-left: 20px; width: 45%;">
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/research-overview-2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    An Overview of My Research.
</div>
</div>


Data heterogeneity represents data complementarity between clients. FL itself is a collaborative network of clients where a client $i$ is complemented by other clients $j$ with different weights $w_{i,j}$. One basic way that FL works is to aggregate the clients’ local model updates according to their weights. In cross-silo FL, clients are typically organizations or companies in the public or private sector. Wihout proper design, such collaborative networks can feature conflict of interest between clients (e.g., [competition](https://en.wikipedia.org/wiki/Coopetition)) and [free-riding](https://en.wikipedia.org/wiki/Free-rider_problem). Data heterogeneity entails evaluating the client weights effectively and building a personalized FL model for each client. 

It is predicted that, by around 2028, the amount of high-quality data that LLMs will require to continue to improve their performance will exceed what is publicly available. This  amplifies the importance of FL, which enables collaborative model training across distributed data sources without sharing raw data.


Currently, I focus on how to build a collaborative network of multiple clients, and the topics of my study include:
<ul>
    <li>Free-riding, competition, and collaboration {% cite Wu24a Tan24a chen2024free %}</li>
    <li>Quantifying data heterogeneity/complementarity {% cite chenvoronoi Li24a %}</li>
    <li>Personalized federated learning {% cite Liu25a Guo24a %}</li>
    <li>Federated foundation models {% cite Yi25a %}</li>
</ul>



>### **Competition, Free-riding, and Collaboration**
<a id="part1"></a>  

A series of our works initiated and advanced research of federated learning when competition exists between clients, which is important since self-interested companies from the private sector are a key source of clients in cross-silo FL. 

#### **Full competition between clients**


<div style="float: right; margin-left: 20px; width: 42%;">
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/research-overview-2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    An Overview of My Research.
</div>
</div>


We are <span style="color: blue;">the first to consider the case that all clients compete against each other</span> {% cite Wu24a %}. This occurs when all clients are in the same market area and provide the same service or product. In our study, we aim to maintain a negligible change in market share after clients join the FL ecosystem, and analyze the achievability of this objective. The classic marketing model of Rust \& Zahorik (1993) is used to model the market dynamics. We characterize the effect of FL on the model performance and the service quality of each client, which further affects the attractiveness of the service provided by this client. 

Formally, we introduce two notions of $\delta$-stable market and friendliness to measure the viability of FL and the market acceptability of FL. The FL-PT behaviours can be predicted using game theoretic tools (i.e., their optimal strategies concerning participation in FL). If the market $\delta$-stability is achievable, the final model performance improvement of each FL-PT shall be bounded, which relates to the market conditions of FL applications. We provide tight bounds and quantify the friendliness, $\kappa$, of given market conditions to FL. Experimental results show the viability of FL in a wide range of market conditions. 



#### **Partial competition between clients**


<div style="float: right; margin-left: 20px; width: 42%;">
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hospitals.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    An Overview of My Research.
</div>
</div>


We are also <span style="color: blue;">the first to consider the case that competition exists only in certain clients, not between any two clients</span> {% cite Tan24a %}. This occurs when there exist organizations in the same market that compete for the same population area, and there also exist organizations in different market areas that serve different populations. 

For example, hospitals can be clients and aim at improving public health. The hospital in city $C$ focuses exclusively on improving its own ML model, and its utility is independent of any client in other cities. Hospitals within the same city (e.g., city $B$) serve the same population; competition arises since these hospitals compete for patients and a hospital's utility is inversely proportional to another hospital's model performance. 



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
