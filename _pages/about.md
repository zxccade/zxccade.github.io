---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Currently, I am a third-year PhD student in Computer Science at the Computer Vision Group in the School of Electronic Engineering and Computer Science at the Queen Mary University of London, under the supervision of [Prof. Shaogang Gong](http://www.eecs.qmul.ac.uk/~sgg/).

Before joining QMUL, I earned my Bachelor’s degree at Communication University of China and my Master’s degree at University College London.

My current research interests revolve around Deep Learning and Computer Vision, with a particular focus on Multimodal Video Understanding and Self-supervised Learning.


# 🔥 News
- *2025.09*: &nbsp;🎉🎉 One paper is accepted to **NeurIPS'25**!
- *2025.04*: &nbsp;🎉🎉 Our **INT** is accepted to **IJCAI'25**!
- *2024.07*: &nbsp;🎉🎉 One paper is accepted to **ECCV'24**!

# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ArXiv 2025</div><img src='images/urpa.png' alt="NeurIPS2025" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Uncertainty-quantified Rollout Policy Adaptation for Unlabelled Cross-domain Video Temporal Grounding](https://arxiv.org/abs/2508.06317), **NeurIPS 2025**

Jian Hu, **Zixu Cheng**, Shaogang Gong, Isabel Guan, Jianye Hao, Jun Wang, Kun Shao

[**Paper**](https://openreview.net/forum?id=RfNiN2rENM)**｜**[**ArXiv**](https://arxiv.org/abs/2508.06317) **|** [**Code**](https://github.com/lwpyh/URPO) **|** [**Webpage**](https://lwpyh.github.io/URPA/) 
<!-- <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong> -->
- Unlabelled cross-domain temporal grounding
- Uncertainty-quantified Rollout Policy Adaptation with uncertainty-weighted rewards
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ArXiv 2025</div><img src='images/vstar.png' alt="Arxiv2025" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[V-STaR: Benchmarking Video-LLMs on Video Spatio-Temporal Reasoning](https://arxiv.org/abs/2503.11495), **Arxiv 2025**

**Zixu Cheng**, Jian Hu, Ziquan Liu, Chenyang Si, Wei Li, Shaogang Gong

[**ArXiv**](https://arxiv.org/abs/2503.11495) **|** [**Code**](https://github.com/V-STaR-Bench/V-STaR) **|** [**Webpage**](https://V-STaR-Bench.github.io/) **|** [**HF Dataset**](https://huggingface.co/datasets/V-STaR-Bench/V-STaR) 
<!-- <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong> -->
- Benchmarking Video-LLMs on Video Spatio-Temporal Reasoning
- Highlight the weakness of comtemporary Video-LLMs
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ArXiv 2025</div><img src='images/cos.jpg' alt="Arxiv2025" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[CoS: Chain-of-Shot Prompting for Long Video Understanding](https://arxiv.org/abs/2502.06428), **Arxiv 2025**

Jian Hu, **Zixu Cheng**, Chenyang Si, Wei Li, Shaogang Gong

[**ArXiv**](https://arxiv.org/abs/2407.05118v1) **|**[**Code**](https://github.com/lwpyh/CoS_codes)
<!-- <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong> -->
- Long-video understanding by visual prompt learning
- Training-free mosaicing binary coding with pseudo-temporal grounding for long video understanding
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IJCAI 2025</div><img src='images/int.jpg' alt="IJCAI2025" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[INT: Instance-Specific Negative Mining for Task-Generic Promptable Segmentation](https://arxiv.org/abs/2407.05118v1), **IJCAI 2025**

Jian Hu, **Zixu Cheng**, Shaogang Gong

[**Paper**](https://www.ijcai.org/proceedings/2025/0124.pdf)**｜**[**ArXiv**](https://arxiv.org/abs/2407.05118v1)
<!-- <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong> -->
- Training-free test-time adaptation for task-generic promptable segmentation
- Progressive negative mining identifies hard-to-distinguish error categories
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ECCV 2024</div><img src='images/CFSR.jpg' alt="ECCV2024" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[SHINE: Saliency-aware HIerarchical NEgative Ranking for Compositional Temporal Grounding](https://arxiv.org/abs/2407.05118v1), **ECCV 2024**

**Zixu Cheng***, Yujiang Pu\*, Shaogang Gong, Parisa Kordjamshidi, Yu Kong (\*equal contribution)

[**Paper**](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/02948.pdf)**｜**[**ArXiv**](https://arxiv.org/abs/2407.05118v2)**|** [**Code**](https://github.com/zxccade/SHINE) 
<!-- <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong> -->
- LLM-driven methods for hard negative generation
- Coarse-to-Fine Saliency Ranking for Compositional Temporal Grounding
</div>
</div>


# 📖 Educations
- *2023.09 - now*, PhD, Queen Mary University of London (QMUL), London.
- *2021.09 - 2022.09*, Postgraduate, University College London (UCL), London.
- *2016.09 - 2020.06*, Undergraduate, Communication University of China (CUC), Beijing.

