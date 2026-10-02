export type Meeting = {
	term: 'Fall 2025' | 'Spring 2026' | 'Fall 2026';
	meetingLabel: string;
	date: string;
	paperTitle?: string;
	leaders?: string;
	time?: string;
	location: string;
	canceled?: boolean;
};

const HYBRID_LOCATION = 'Hybrid (Teams + RV2809, Riverfront campus)';
const FALL_TIME = '2:30–3:30 PM';
const SPRING_EARLY_TIME = '2:30–3:30 PM';
const SPRING_TIME = '2:00–3:00 PM';

export const SCHEDULE: Meeting[] = [
	// Fall 2025
	{
		term: 'Fall 2025',
		meetingLabel: 'Meeting 1',
		date: '2025-09-22',
		paperTitle: 'Gradient-based learning applied to document recognition.',
		leaders: 'Seth B',
		time: FALL_TIME,
		location: HYBRID_LOCATION
	},
	{
		term: 'Fall 2025',
		meetingLabel: 'Meeting 2',
		date: '2025-10-06',
		paperTitle: 'Attention is all you need. Advances in neural information processing systems',
		leaders: 'MD Mahady Hassan',
		time: FALL_TIME,
		location: HYBRID_LOCATION
	},
	{
		term: 'Fall 2025',
		meetingLabel: 'Meeting 3',
		date: '2025-10-20',
		paperTitle: 'Bert: Pre-training of deep bidirectional transformers for language understanding.',
		leaders: 'Brad Boswell',
		time: FALL_TIME,
		location: HYBRID_LOCATION
	},
	{
		term: 'Fall 2025',
		meetingLabel: 'Meeting 4',
		date: '2025-11-03',
		paperTitle: '',
		leaders: '',
		time: FALL_TIME,
		location: HYBRID_LOCATION
	},
	{
		term: 'Fall 2025',
		meetingLabel: 'Meeting 5',
		date: '2025-11-17',
		paperTitle: 'On the Power of Context-Enhanced Learning in LLMs',
		leaders: 'Sharmen S',
		time: FALL_TIME,
		location: HYBRID_LOCATION
	},
	{
		term: 'Fall 2025',
		meetingLabel: 'Meeting 6',
		date: '2025-12-01',
		paperTitle: '',
		leaders: '',
		time: FALL_TIME,
		location: HYBRID_LOCATION
	},

	// Spring 2026
	{
		term: 'Spring 2026',
		meetingLabel: 'Meeting 1',
		date: '2026-01-12',
		paperTitle: 'Logistic Meeting for Spring 2026',
		leaders: 'All',
		time: SPRING_EARLY_TIME,
		location: HYBRID_LOCATION
	},
	{
		term: 'Spring 2026',
		meetingLabel: 'Meeting 2',
		date: '2026-02-02',
		paperTitle: 'Improving Language Understanding by Generative Pre-Training',
		leaders: 'Rita',
		time: SPRING_TIME,
		location: HYBRID_LOCATION
	},
	{
		term: 'Spring 2026',
		meetingLabel: 'Meeting 3',
		date: '2026-02-16',
		paperTitle: 'Which Attention Heads Matter for In-Context Learning?',
		leaders: 'Sharmen',
		time: SPRING_TIME,
		location: HYBRID_LOCATION
	},
	{
		term: 'Spring 2026',
		meetingLabel: 'Meeting 4',
		date: '2026-03-02',
		paperTitle: 'Generalized brain-state modeling with KenazLBM',
		leaders: 'Seth',
		time: SPRING_TIME,
		location: HYBRID_LOCATION
	},
	{
		term: 'Spring 2026',
		meetingLabel: 'Meeting 5',
		date: '2026-03-16',
		paperTitle: 'ChartGPT: Leveraging LLMs to Generate Charts From Abstract Natural Language',
		leaders: 'Shichen Gao',
		time: SPRING_TIME,
		location: HYBRID_LOCATION
	},
	{
		term: 'Spring 2026',
		meetingLabel: 'Meeting 6',
		date: '2026-03-30',
		time: SPRING_TIME,
		location: HYBRID_LOCATION,
		canceled: true
	},
	{
		term: 'Spring 2026',
		meetingLabel: 'Meeting 7',
		date: '2026-04-13',
		paperTitle: 'A Multimodal Automated Interpretability Agent',
		leaders: 'Dr. Lin Li',
		time: SPRING_TIME,
		location: HYBRID_LOCATION
	},
	{
		term: 'Spring 2026',
		meetingLabel: 'Meeting 8',
		date: '2026-04-27',
		paperTitle: 'Covert Malicious Finetuning: Challenges in Safeguarding LLM Adaptation',
		leaders: 'Salil',
		time: SPRING_TIME,
		location: HYBRID_LOCATION
	},

	// Fall 2026 (meeting time not yet announced)
	{
		term: 'Fall 2026',
		meetingLabel: 'Meeting 1',
		date: '2026-08-25',
		paperTitle: 'Logistic Meeting for Fall 2026',
		leaders: 'All',
		location: HYBRID_LOCATION
	},
	{
		term: 'Fall 2026',
		meetingLabel: 'Meeting 2',
		date: '2026-09-22',
		location: HYBRID_LOCATION
	},
	{
		term: 'Fall 2026',
		meetingLabel: 'Meeting 3',
		date: '2026-10-06',
		paperTitle:
			'Conformal Prediction with Large Language Models for Multi-Choice Question Answering',
		leaders: 'Seth',
		location: HYBRID_LOCATION
	},
	{
		term: 'Fall 2026',
		meetingLabel: 'Meeting 4',
		date: '2026-10-20',
		paperTitle:
			'Attribute-Efficient PAC Learning of Sparse Halfspaces with Constant Malicious Noise Rate',
		leaders: 'Dr. Shiwei Zeng',
		location: HYBRID_LOCATION
	},
	{
		term: 'Fall 2026',
		meetingLabel: 'Meeting 5',
		date: '2026-11-03',
		leaders: 'Rita',
		location: HYBRID_LOCATION
	},
	{
		term: 'Fall 2026',
		meetingLabel: 'Meeting 6',
		date: '2026-11-17',
		leaders: 'Alireza',
		location: HYBRID_LOCATION
	},
	{
		term: 'Fall 2026',
		meetingLabel: 'Meeting 7',
		date: '2026-12-01',
		paperTitle:
			'Using Reinforcement Learning to Train Large Language Models to Explain Human Decisions',
		leaders: 'Sharmen S',
		location: HYBRID_LOCATION
	}
];
