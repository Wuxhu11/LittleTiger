---
layout: page
title: Machine Learning
description: Foundation models, fine-tuning, prompt-tuning, neural network, reinforcement learning
img: assets/img/neural-networks-2.png
importance: 1
category: work
related_publications: true
---




### **Table of Contents**  
- [Foundation model](#FM)  
- [Reinforcement learning for decision-making and optimization](#RL)
- [Graph neural networks](#part1)



>### **Foundation Models (FM)**
<a id="FM"></a>  


<div style="float: right; margin-left: 20px; width: 52%;">
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/LLM-finetuning-prompt.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The process of applying FMs.
</div>
</div>


Generative AI (GenAI) has demonstrated transformative potential across diverse domains, and is supported by large foundation models (FMs) such as large language models (LLMs) like ChatGPT. 


<div align="center">
<div style="width: 52%;">
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/LoRA.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Fine-tuning. 
</div>
</div>
</div>


**Fine-tuning** is an approach to transfer learning in which the parameters of a pre-trained neural network model are trained on new data. It can be done on the entire neural network, or on only a subset of its layers. Low-rank adaptation (LoRA) is an adapter-based technique for efficiently fine-tuning models. The basic idea is to design a low-rank matrix that is then added to the original matrix.



<div align="center">
<div style="width: 52%;">
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/prompt-tuning.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Prompt-tuning
</div>
</div>
</div>

**Prompt tuning** is a technique in machine learning where a set of trainable inputs—called prompt tokens– are learned and added to the input of a large language model (LLM). These tokens guide the model to perform a specific task without changing any of the model’s actual weights.

In FL, a central server (CS) periodically gathers model updates from individual FL participants (i.e., clients), which are then aggregated to refne a global model. Similarly, each client regularly acquires the latest global model from the CS and further enhances it through local training. This iterative interplay between the CS and clients persists until the global model achieves convergence. 

There are two types of FL. In *cross-device FL*, clients are end-user devices such as smartphones or IoT devices, and CS is the final owner of the
trained model. In *cross-silo FL*, client are companies or organizations in private or public sectors and are the final owners/users of the trained model, while the CS has the authority to coordinate the FL training process. 


<div style="float: right; margin-left: 20px; width: 49%;">
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/fine-tuning.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The process of applying FMs.
</div>
</div>



<div style="float: right; margin-left: 20px; width: 49%;">
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/prompt-tuning.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The process of applying FMs.
</div>
</div>



>### **Reinforcement Learning for decision-making and optimization**
<a id="RL"></a>  


Reinforcement learning (RL) is a machine learning paradigm where an agent learns to make decisions by interacting with an environment. Through trial and error, it receives rewards for good actions and penalties for bad ones. The goal is to learn an optimal policy—a strategy—that maximizes cumulative reward over time. 



<div style="float: right; margin-left: 20px; width: 49%;">
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/prompt-tuning.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The process of applying FMs.
</div>
</div>




Data heterogeneity among clients somewhat reflects their data complementarity. FL itself is a collaborative network of clients where a client $i$ is complemented by other clients $j$ with different weights $w_{i,j}$. One basic way that FL works is to aggregate the clients’ local model updates according to their weights. In cross-silo FL, clients are typically organizations or companies in the public or private sector. Wihout proper design, such collaborative networks can feature conflict of interest between clients (e.g., [competition](https://en.wikipedia.org/wiki/Coopetition)) and [free-riding](https://en.wikipedia.org/wiki/Free-rider_problem). Data heterogeneity entails evaluating the client weights effectively and building a personalized FL model for each client. 

It is predicted that, by around 2028, the amount of high-quality data that LLMs will require to continue to improve their performance will exceed what is publicly available. This amplifies the importance of FL, which enables collaborative model training across distributed private data sources without sharing raw data.


Currently, I focus on how to build a collaborative network of multiple clients, and the questions of my study include:
1. Free-riding, competition, and collaboration {% cite Wu24a Tan24a chen2024free %}
2. Quantifying data heterogeneity/complementarity {% cite chenvoronoi Li24a %}
3. Personalized federated learning {% cite Liu25a Guo24a %}
4. Federated foundation models {% cite Yi25a %}

The first three questions are key to building an FL ecosystem in the case where clients are self-interested organizations or companies, while the fourth question is also important in the era of foundation models.



>### **3. Conlfict resolution: Competition, Free-riding, and Collaboration**
<a id="part1"></a>  

<span style="color: purple;">A series of our works initiated and advanced research of federated learning when competition exists between clients</span>, which is important since self-interested companies from the private sector are a key source of clients in cross-silo FL. 




We are <span style="color: blue;">the first to consider the case that all clients compete against each other</span> {% cite Wu24a %}. This occurs when all clients are in the same market area and provide the same service or product. In our study, we aim to maintain a negligible change in market share after clients join the FL ecosystem, and analyze the achievability of this objective. The classic marketing model of Rust \& Zahorik (1993) is used to model the market dynamics. We characterize the effect of FL on the model performance and the service quality of each client, which further affects the attractiveness of the service provided by this client. 

Formally, we introduce two notions of $\delta$-stable market and friendliness to measure the viability of FL and the market acceptability of FL. The client behaviours can be predicted using game theoretic tools (i.e., their optimal strategies concerning participation in FL). If the market $\delta$-stability is achievable, the final model performance improvement of each client shall be bounded, which relates to the market conditions of FL applications. We provide tight bounds and quantify the friendliness, $\kappa$, of given market conditions to FL. Experimental results show the viability of FL in a wide range of market conditions. 

---


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

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
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
