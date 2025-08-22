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
- [Graph neural networks](#GNN)



>### **Foundation Models (FMs)**
<a id="FM"></a>  



Generative AI (GenAI) has demonstrated transformative potential across diverse domains, and is supported by large FMs such as large language models (LLMs) like ChatGPT. 


<div align="center">
<div style="width: 48%;">
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

Our related works include:

- Junjie Wang, Guangjing Yang, Wentao Chen, Huahui Yi, Xiaohu Wu, Zhouchen Lin, Qicheng Lao. “MLAE: Masked LoRA Experts for Parameter-Efficient Fine-Tuning.” Submitted.
- Jiayu Huang (<span style="color: blue;">my student</span>), Xiaohu Wu, Qicheng Lao, Guanyu Gao, Tiantian He, Yew-Soon Ong, Han Yu. "Stabilized Fine-Tuning with LoRA in Federated Learning: Mitigating the Side Effect of Client Size and Rank via the Scaling Factor." Submitted.
  

<div align="center">
<div style="width: 48%;">
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/prompt-tuning.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Prompt-tuning.
</div>
</div>
</div>

**Prompt tuning** is a technique in machine learning where a set of trainable inputs—called prompt tokens– are learned and added to the input of a large language model (LLM). These tokens guide the model to perform a specific task without changing any of the model’s actual weights {% cite Yi25a %}.

Our other submitted works include:

- Zhu He, Haoran Zhang, Wentao Zhang, Shen Zhao, Qiqi Liu, Xiaohu Wu† (<span style="color: blue;">coresponding author</span>), Qicheng Lao†. “Learning conceptual text prompts from visual regions of interest for medical image segmentation.” Submitted to Engineering for the second round of review.
- Xueqi Bao, Ke Li, Xiaohu Wu, Ping Ma, Qicheng Lao. “Relation-Augmented Diffusion for Layout-to-Image Generation.” Submitted.


>### **Reinforcement Learning for decision-making and optimization**
<a id="RL"></a>  

<div style="float: right; margin-left: 20px; width: 49%;">
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/RL-decision-making.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    RL for decision-making.
</div>
</div>

Reinforcement learning (RL) is a machine learning paradigm where an agent learns to make decisions by interacting with an environment. Through trial and error, it receives rewards for good actions and penalties for bad ones. The goal is to learn an optimal policy—a strategy—that maximizes cumulative reward over time. 

In my research, I used RL for decision-making and have studied a range of related questions, including:

- Collaboration of large and small AI models: Optimizing inference delay and accuracy in cloud-edge environments {% cite Wang22a %}
- Use public clouds to cost-effectively process big-data tasks {% Wu17a Wu19a Wu25a %}



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



>### **Graph Neural Networks (GNNs) using Similarity- and Dissimilarity-based Messages**
<a id="GNN"></a>  



<div align="center">
<div style="width: 48%;">
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/GNN.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Graphical view of the proposed polarized message-passing (PMP) paradigm. By appropriately merging neighboring similarity- and dissimilarity-based messages, PMP allows GNNs to learn more expressive representations with sparse but strongly correlated neighbors.
</div>
</div>
</div>

We present Polarized message-passing (PMP), a novel paradigm to revolutionize the design of message-passing graph neural networks (GNNs). In contrast to existing methods, PMP captures the power of node-node similarity and dissimilarity to acquire dual sources of messages from neighbors. The messages are then coalesced to enable GNNs to learn expressive representations from sparse but strongly correlated neighbors. Three novel GNNs based on the PMP paradigm, namely PMP graph convolutional network (PMP-GCN), PMP graph attention network (PMP-GAT), and PMP graph PageRank network (PMP-GPN) are proposed to perform various downstream tasks. Theoretical analysis is also conducted to verify the high expressiveness of the proposed PMP-based GNNs. In addition, an empirical study of five learning tasks based on 12 real-world datasets is conducted to validate the performances of PMP-GCN, PMP-GAT, and PMP-GPN. The proposed PMP-GCN, PMP-GAT, and PMP-GPN outperform numerous strong message-passing GNNs across all five learning tasks, demonstrating the effectiveness of the proposed PMP paradigm.

