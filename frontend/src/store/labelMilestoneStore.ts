import { atom, selector, selectorFamily } from 'recoil';
import API, { authorizedHeaders } from 'util/api/api';
//레이블,모달 클릭 감지 및 리셑_____________________________________
interface labelMilestoneStateType {
  label: boolean;
  milestone: boolean;
}

export const labelMilestoneClickedState = atom<labelMilestoneStateType>({
  key: 'labelMilestoneState',
  default: { label: false, milestone: false },
});

export const resetTabClickedState = selector({
  key: 'resetTabClickedState',
  get: ({ get }) => {
    const tabClickedState = get(labelMilestoneClickedState);
    return tabClickedState;
  },
  set: ({ reset }) => {
    reset(labelMilestoneClickedState);
  },
});

//마일즈스톤___________________________________________

export const milestoneTrigger = atom<number>({
  key: 'milestoneTrigger',
  default: 0,
});
export const getMilestones = selectorFamily({
  key: 'GET/milestones',
  get:
    (status: string) =>
    async ({ get }) => {
      const token = localStorage.getItem('token');
      try {
        get(milestoneTrigger);
        const response = await fetch(API.MILESTONE.GET(status), {
          headers: authorizedHeaders(token),
        });
        const milestoneData = await response.json();
        return milestoneData;
      } catch (error) {
        console.log('마일스톤조회 에러:', error);
      }
    },
});
