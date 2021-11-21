import {
  setTokenInterceptors,
  DungJingMemberInstance,
  RESTfulUserInstance,
} from '@/api/instances';

export default {
  getSofaList: () => {
    const url = `/sofalist`;

    return RESTfulUserInstance.get(url);
  },
  getChairList: () => {
    const url = `/chairlist`;

    return RESTfulUserInstance.get(url);
  },
  getBedList: () => {
    const url = `/bedlist`;

    return RESTfulUserInstance.get(url);
  },
  getVideoList: (id) => {
    const url = `/videos/${id}`;

    return RESTfulUserInstance.get(url);
  },
};
