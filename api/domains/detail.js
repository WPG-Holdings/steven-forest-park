import {
  setTokenInterceptors,
  DungJingMemberInstance,
  RESTfulUserInstance,
} from '@/api/instances';

export default {
  getSofaDetail: (id) => {
    const url = `/sofadetail/${id}`;

    return RESTfulUserInstance.get(url);
  },
  getChairDetail: (id) => {
    const url = `/chairdetail/${id}`;

    return RESTfulUserInstance.get(url);
  },
  getBedDetail: (id) => {
    const url = `/beddetail/${id}`;

    return RESTfulUserInstance.get(url);
  },

  getFabricDetail: (id) => {
    const url = `/fabricdetail/${id}`;

    return RESTfulUserInstance.get(url);
  },
};
