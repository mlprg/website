export type Paper = {
	id: string;
	title: string;
	contribution?: string;
	authors?: string;
	citation?: string;
	proposer?: string;
	link?: string;
	// Optional tags if you want them later
	tags?: string[];
};

export const PAPERS: Paper[] = [
	{
		id: 'lecun-1998-lenet',
		link: 'https://ieeexplore.ieee.org/document/726791',
		title: 'Gradient-based learning applied to document recognition.',
		contribution: 'Convolutional Neural Networks (CNNs), particularly LeNet-5.',
		authors: 'LeCun, Y., Bottou, L., Bengio, Y., & Haffner, P.',
		citation: 'Proceedings of the IEEE, 86(11), 2278-2234. (1998).',
		proposer: 'Dr. Lin Li',
		tags: ['CNN', 'LeNet']
	},
	{
		id: 'vaswani-2017-transformer',
		link: 'https://arxiv.org/pdf/1706.03762',
		title: 'Attention is all you need.',
		contribution: 'The Transformer architecture.',
		authors:
			'Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., ... & Polosukhin, I.',
		citation: 'Advances in Neural Information Processing Systems, 30, 5998-6008. (2017).',
		proposer: 'Dr. Lin Li',
		tags: ['Transformers', 'Attention']
	},
	{
		id: 'radford-2018-gpt1',
		link: 'https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf',
		title: 'Improving language understanding by generative pre-training.',
		contribution: 'Generative Pre-trained Transformer (GPT-1).',
		authors: 'Radford, A., Narasimhan, K., Salimans, T., & Sutskever, I.',
		citation: 'OpenAI Technical Report. (2018).',
		proposer: 'Dr. Lin Li',
		tags: ['GPT', 'Language Modeling']
	},
	{
		id: 'radford-2019-gpt2',
		link: 'https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf',
		title: 'Language models are unsupervised multitask learners.',
		contribution: 'GPT-2 and demonstrating zero-shot task learning.',
		authors: 'Radford, A., Wu, J., Child, R., Luan, D., Amodei, D., & Sutskever, I.',
		citation: 'OpenAI Blog, 1(8). (2019).',
		proposer: 'Dr. Lin Li',
		tags: ['GPT-2', 'Zero-shot']
	},
	{
		id: 'devlin-2019-bert',
		link: 'https://arxiv.org/pdf/1810.04805',
		title: 'Bert: Pre-training of deep bidirectional transformers for language understanding.',
		contribution: 'Bidirectional Encoder Representations from Transformers (BERT).',
		authors: 'Devlin, J., Chang, M. W., Lee, K., & Toutanova, K.',
		citation:
			'Proceedings of the 2019 Conference of the North American Chapter of the Association for Computational Linguistics (NAACL-HLT), 4171-4186. (2019).',
		proposer: 'Dr. Lin Li',
		tags: ['BERT', 'Transformers']
	},
	{
		id: 'halawi-2024-covert-finetuning',
		link: 'https://arxiv.org/pdf/2406.20053',
		title: 'Covert Malicious Finetuning: Challenges in Safeguarding LLM Adaptation.',
		contribution: 'Analysis of malicious finetuning vulnerabilities in LLMs.',
		authors:
			'Danny Halawi, Alexander Wei, Eric Wallace, Tony T. Wang, Nika Haghtalab, Jacob Steinhardt.',
		citation:
			'Proceedings of the 41st International Conference on Machine Learning (ICML). (2024).',
		proposer: 'Dr. Shiwei Zeng',
		tags: ['LLM Safety', 'Fine-tuning']
	},
	{
		id: 'chen-li-2025-mha-learning',
		link: 'https://arxiv.org/pdf/2402.04084',
		title: 'Provably Learning a Multi-head Attention Layer.',
		contribution: 'Theoretical analysis of learning multi-head attention.',
		authors: 'Sitan Chen, Yuanzhi Li.',
		citation: 'Proceedings of the 57th Annual ACM Symposium on Theory of Computing (STOC). (2025).',
		proposer: 'Dr. Shiwei Zeng',
		tags: ['Theory', 'Attention']
	},
	{
		id: 'yin-steinhardt-2025-heads-matter',
		link: 'https://arxiv.org/pdf/2502.14010',
		title: 'Which Attention Heads Matter for In-Context Learning?',
		contribution: 'Analysis of attention head roles in in-context learning.',
		authors: 'Kayo Yin, Jacob Steinhardt.',
		citation:
			'Proceedings of the 42nd International Conference on Machine Learning (ICML). (2025).',
		proposer: 'Dr. Shiwei Zeng',
		tags: ['In-context Learning', 'Attention Heads']
	},
	{
		id: 'zhu-panigrahi-arora-2025-context-enhanced',
		link: 'https://arxiv.org/pdf/2503.01821',
		title: 'On the Power of Context-Enhanced Learning in LLMs.',
		contribution: 'Analysis of context-enhanced learning in LLMs.',
		authors: 'Xingyu Zhu, Abhishek Panigrahi, Sanjeev Arora.',
		citation:
			'Proceedings of the 42nd International Conference on Machine Learning (ICML). (2025).',
		proposer: 'Dr. Shiwei Zeng',
		tags: ['Context', 'LLMs']
	},
	{
		id: 'chen-as-krause-2025-safety-constraints',
		link: 'https://arxiv.org/pdf/2505.24445',
		title: 'Learning Safety Constraints for Large Language Models.',
		contribution: 'Method for learning safety constraints for LLMs.',
		authors: 'Xin Chen, Yarden As, Andreas Krause.',
		citation:
			'Proceedings of the 42nd International Conference on Machine Learning (ICML). (2025).',
		proposer: 'Dr. Shiwei Zeng',
		tags: ['Safety', 'Constraints']
	},
	{
		id: 'fan-etal-2025-unlearning-sam',
		link: 'https://arxiv.org/pdf/2502.05374',
		title:
			'Towards LLM Unlearning Resilient to Relearning Attacks: A Sharpness-Aware Minimization Perspective and Beyond.',
		contribution: 'Method for LLM unlearning resilient to attacks.',
		authors: 'Chongyu Fan, Jinghan Jia, Yihua Zhang, Anil Ramakrishna, Mingyi Hong, Sijia Liu.',
		citation:
			'Proceedings of the 42nd International Conference on Machine Learning (ICML). (2025).',
		proposer: 'Dr. Shiwei Zeng',
		tags: ['Unlearning', 'Robustness']
	},
	{
		id: 'ma-etal-2020-advml-vis',
		link: 'https://ieeexplore.ieee.org/document/8812988',
		title: 'Explaining Vulnerabilities to Adversarial Machine Learning through Visual Analytics.',
		contribution: 'Visual analytics for explaining adversarial ML vulnerabilities.',
		authors: 'Yuxin Ma, Tiankai Xie, Jundong Li, Ross Maciejewski.',
		citation:
			'IEEE Transactions on Visualization and Computer Graphics, 26(10), 3091-3101. (2020).',
		proposer: 'Dr. Jieqiong Zhao',
		tags: ['Adversarial ML', 'Visualization']
	},
	{
		id: 'gou-etal-2021-vatld',
		link: 'https://arxiv.org/pdf/2009.12975',
		title:
			'VATLD: A Visual Analytics System to Assess, Understand and Improve Traffic Light Detection.',
		contribution: 'Visual analytics system for traffic light detection models.',
		authors:
			'Liang Gou, Lincan Zou, Nanxiang Li, Michael Hofmann, Arvind Kumar Shekar, Axel Wendt and Liu Ren.',
		citation: 'IEEE Transactions on Visualization and Computer Graphics, 28(1), 328-338. (2021).',
		proposer: 'Dr. Jieqiong Zhao',
		tags: ['Visual Analytics']
	},
	{
		id: 'padilla-etal-2023-mfvs',
		link: 'https://ieeexplore.ieee.org/document/9904455',
		title:
			'Multiple Forecast Visualizations (MFVs): Trade-offs in Trust and Performance in Multiple COVID-19 Forecast Visualizations.',
		contribution: 'Study on trust and performance in forecast visualizations.',
		authors: 'Lace Padilla, Racquel Fygenson, Spencer C. Castro, Enrico Bertini.',
		citation: 'IEEE Transactions on Visualization and Computer Graphics, 29(1), 589-599. (2023).',
		proposer: 'Dr. Jieqiong Zhao',
		tags: ['Visualization', 'Trust']
	},
	{
		id: 'hagele-etal-2023-uncertainty-mds',
		link: 'https://ieeexplore.ieee.org/document/9908526',
		title: 'Uncertainty-Aware Multidimensional Scaling.',
		contribution: 'Uncertainty-aware multidimensional scaling technique.',
		authors: 'David Hagele, Tim Krake, and Daniel Weiskopf.',
		citation: 'IEEE Transactions on Visualization and Computer Graphics, 29(9), 3740-3754. (2023).',
		proposer: 'Dr. Jieqiong Zhao',
		tags: ['Uncertainty', 'MDS']
	},
	{
		id: 'wang-etal-2021-cnn-explainer',
		link: 'https://arxiv.org/pdf/2004.15004',
		title: 'CNN EXPLAINER: Learning Convolutional Neural Networks with Interactive Visualization.',
		contribution: 'Interactive visualization tool for learning CNNs.',
		authors:
			'Zijie J. Wang, Robert Turko, Omar Shaikh, Haekyu Park, Nilaksh Das, Fred Hohman, Minsuk Kahng, and Duen Horng (Polo) Chau.',
		citation: 'IEEE Transactions on Visualization and Computer Graphics, 27(2), 1396-1406. (2021).',
		proposer: 'Dr. Jieqiong Zhao',
		tags: ['CNN', 'Education', 'Visualization']
	},
	{
		id: 'chen-etal-2025-viseval',
		link: 'https://arxiv.org/pdf/2407.00981',
		title: 'VisEval: A Benchmark for Data Visualization in the Era of Large Language Models.',
		contribution: 'Benchmark for data visualization tasks for LLMs.',
		authors: 'Nan Chen, Yuge Zhang, Jiahang Xu, Kan Ren, and Yuqing Yang.',
		citation: 'IEEE Transactions on Visualization and Computer Graphics. (2025).',
		proposer: 'Dr. Jieqiong Zhao',
		tags: ['LLMs', 'Visualization', 'Benchmark']
	},
	{
		id: 'wu-etal-ieee-access-score-testing',
		title: 'Score-Based Hypothesis Testing for Unnormalized Models',
		authors: 'Suya Wu, Enmao Diao, Khalil Elkhalil, Jie Ding, Vahid Tarokh',
		citation: 'IEEE Access',
		proposer: 'Dr. Arman Adibi'
	},
	{
		id: 'bhandari-2018-td-linear',
		title:
			'A Finite-Time Analysis of Temporal Difference Learning With Linear Function Approximation',
		authors: 'Jalaj Bhandari, Daniel Russo, Raghav Singal',
		citation: '31st Conference on Learning Theory (COLT), PMLR 75:1691–1692, 2018',
		proposer: 'Dr. Arman Adibi'
	},
	{
		id: 'yin-etal-2018-byzantine-robust',
		title: 'Byzantine-Robust Distributed Learning: Towards Optimal Statistical Rates',
		authors: 'Dong Yin, Yudong Chen, Ramchandran Kannan, Peter Bartlett',
		citation: '35th International Conference on Machine Learning (ICML), PMLR 80:5650–5659, 2018',
		proposer: 'Dr. Arman Adibi'
	},
	{
		id: 'song-etal-2021-score-sde',
		title: 'Score-Based Generative Modeling Through Stochastic Differential Equations',
		authors:
			'Yang Song, Jascha Sohl-Dickstein, Diederik P. Kingma, Abhishek Kumar, Stefano Ermon, Ben Poole',
		citation: 'International Conference on Learning Representations (ICLR), 2021',
		proposer: 'Dr. Arman Adibi'
	},
	{
		id: 'nguyen-wainwright-jordan-2010-divergence',
		title: 'Estimating Divergence Functionals and the Likelihood Ratio by Convex Risk Minimization',
		authors: 'XuanLong Nguyen, Martin J. Wainwright, Michael I. Jordan',
		citation: 'IEEE Transactions on Information Theory, vol. 56, no. 11, pp. 5847–5861, 2010',
		proposer: 'Dr. Arman Adibi'
	},
	{
		id: 'johnson-kenaz-lbm',
		title: 'Generalized brain-state modeling with KenazLBM',
		authors:
			'Graham W. Johnson, Ghassan S. Makhoul, Derek J. Doss, Bruno Hidalgo Monroy Lerma, Leon Y. Cai, Emily Liao, Danika L. Paulo',
		citation: 'bioRxiv 2025.08.10.669538, 2025',
		proposer: 'Seth Barrett',
		tags: ['Transformers', 'Neuroscience']
	},
	{
		id: 'multimodal-interp-agent',
		title: 'A Multimodal Automated Interpretability Agent',
		authors:
			'Tamar Rott Shaham, Sarah Schwettmann, Franklin Wang, Achyuta Rajaram, Evan Hernandez, Jacob Andreas, Antonio Torralba',
		citation: 'Forty-first International Conference on Machine Learning. 2024.',
		proposer: 'Dr. Lin Li',
		tags: ['Multimodal', 'Agentic', 'XAI']
	},
	{
		id: 'chartgpt',
		title: 'ChartGPT: Leveraging LLMs to Generate Charts From Abstract Natural Language',
		authors: 'Yuan Tian, Weiwei Cui, Dazhen Deng, Xinjing Yi, Yurun Yang, Haidong Zhang',
		citation: 'IEEE Transactions on Visualization and Computer Graphics 31.3 (2024): 1731-1745.',
		proposer: 'Scichen Gao',
		tags: ['Chart', 'LLM']
	},
	{
		id: 'kumar-2023-conformal-mcqa',
		link: 'https://arxiv.org/abs/2305.18404',
		title: 'Conformal Prediction with Large Language Models for Multi-Choice Question Answering',
		contribution: 'Conformal prediction sets for LLM answers on multiple-choice questions.',
		authors:
			'Bhawesh Kumar, Charlie Lu, Gauri Gupta, Anil Palepu, David Bellamy, Ramesh Raskar, Andrew Beam',
		citation: 'arXiv:2305.18404, 2023.',
		tags: ['Conformal Prediction', 'LLM', 'Uncertainty']
	},
	{
		id: 'zeng-shen-2025-sparse-halfspaces',
		link: 'https://arxiv.org/abs/2505.21430',
		title:
			'Attribute-Efficient PAC Learning of Sparse Halfspaces with Constant Malicious Noise Rate',
		contribution:
			'Attribute-efficient, noise-robust PAC learning of sparse halfspaces via hinge loss minimization.',
		authors: 'Shiwei Zeng, Jie Shen',
		citation: 'arXiv:2505.21430, 2025.',
		tags: ['Theory', 'PAC Learning', 'Robustness']
	},
	{
		id: 'zhu-2025-rl-explain-human-decisions',
		link: 'https://arxiv.org/abs/2505.11614',
		title: 'Using Reinforcement Learning to Train Large Language Models to Explain Human Decisions',
		contribution:
			'RL fine-tuning of LLMs to produce natural-language explanations of human decision making. Code: https://github.com/xhb120633/rl_human_behavior',
		authors: 'Jian-Qiao Zhu, Hanbo Xie, Dilip Arumugam, Robert C. Wilson, Thomas L. Griffiths',
		citation: 'International Conference on Learning Representations (ICLR), 2026.',
		tags: ['Reinforcement Learning', 'LLM', 'Cognitive Science']
	}
];
