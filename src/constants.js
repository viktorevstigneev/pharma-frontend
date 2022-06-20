export const POPUP_OVERLAY_CLASSNAME = 'modal__window';
export const API_URL = 'https://pharma-service.herokuapp.com';
export const ListName = {
	REWARDS: 'rewards',
	ACHIEVEMENTS: 'achievement',
	TASKS: 'tasks',
};

export const LISTS_DATA_ARRAY = [
	{
		name: ListName.REWARDS,
		buttonTitle: 'Add reward',
		isRewards: true,
	},
	{
		name: ListName.ACHIEVEMENTS,
		buttonTitle: 'Add achievment',
		isRewards: false,
	},
];

export const TaskStatus = {
	DONE: 'done',
	IN_PROGRESS: 'in progress',
};
