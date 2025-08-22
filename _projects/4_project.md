---
layout: page
title: Miscellaneous
description: Mathematical optimization, algorithmic game theory, information security
img: assets/img/miscellaneous.png
importance: 3
category: work
related_publications: true
---




### **Table of Contents**  
- [Discrete optimization for parallel computing](#DOPC)  
- [Network economics](#AGT)
- [Homomorphic encryption](#HE)



>### **Discrete optimization for parallel computing**
<a id="DOPC"></a>  



<div align="center">
<div style="width: 78%;">
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/approximation-ratio.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Fine-tuning. 
</div>
</div>
</div>



In this area, my past efforts were devoted to **the design and analysis of approximation algorithms**. Approximation algorithms are efficient algorithms that find approximate solutions to optimization problems (in particular NP-hard problems) with provable guarantees on the distance of the returned solution to the optimal one.



>### **Scheduling Moldable Tasks**

Moldable tasks allow schedulers to determine the number of processors assigned to each task, thus enabling efficient use of large-scale parallel processing systems. We consider the problem of scheduling independent moldable tasks on processors and propose a new perspective of the existing speedup models: as the number $p$ of processors assigned to a task increases, the speedup is linear if $p$ is small and becomes sublinear after $p$ exceeds a threshold. Based on this, we propose an efficient approximation algorithm to minimize the makespan {% cite Wu23a %}. As a by-product, we also propose an approximation algorithm to maximize the sum of values of tasks completed by a deadline; this scheduling objective is considered for moldable tasks for the first time while similar works have been done for other types of parallel tasks.


<div align="center">
<div style="width: 78%;">
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/moldable.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Fine-tuning. 
</div>
</div>
</div>



>### **Scheduling Malleable Tasks**

Due to the ubiquity of batch data processing, the related problems of scheduling malleable batch tasks have received significant attention. We consider a fundamental model where a set of tasks is to be processed on multiple identical machines and each task is specified by a value, a workload, a deadline and a parallelism bound. Within the parallelism bound, the number of machines assigned to a task can vary over time without affecting its workload. In this paper, we identify a boundary condition and prove by construction that a set of malleable tasks with deadlines can be finished by their deadlines if and only if it satisfies the boundary condition. This core result plays a key role in the design and analysis of scheduling algorithms: (a) when several typical objectives are considered, such as social welfare maximization, machine minimization, and minimizing the maximum weighted completion time, and, (b) when the algorithmic design techniques such as greedy and dynamic programming are applied to the social welfare maximization problem. As a result, we give four new or improved algorithms for the above problems  {% cite Wu15a Wu24a %}.




>### **Network economics**
<a id="AGT"></a>  

Previously, I mainly focused on service design, pricing and operations, as well as incentive compatibility. The main theoretical tools or approaches are algorithmic game theory, queueing theory {% cite Hyytia17a %}, auctions {% cite Cheng23a %}, service differentiation, and analyitical modeling. Service design is the activity of planning and arranging infrastructure, communication and material components of a service in order to improve its quality, and the interaction between the service provider and its users. In algorithmic game theory, a mechanism is called incentive-compatible (IC) if every participant can achieve their own best outcome by reporting their true preferences. My main applicaiton area is public cloud services {% cite Wu19b Wu23a %}



Every project has a beautiful feature showcase page.
It's easy to include images in a flexible 3-column grid format.
Make your photos 1/3, 2/3, or full width.

To give your project a background in the portfolio page, just add the img tag to the front matter like so:

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
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
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
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
