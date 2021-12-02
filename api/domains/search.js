import { NoAuthInstance } from '@/api/instances';

export default {
  postSearchQuery: ({ page, question, team, sys }) => {
    const url = `/search/query`;
    const data = {
      page,
      size: 10,
      mustQueryMap: {
        question,
        team,
        sys,
      },
      shouldQueryMap: {},
      notQueryMap: {},
    };

    return NoAuthInstance.post(url, data);
  },
  getSearchDetail: ({ sid }) => {
    const url = `/search/detail/${sid}`;

    return NoAuthInstance.get(url);
  },
  getHotKeywordCounts: () => {
    const url = `/search/hotKeywordCounts?topNumber=6`;

    return NoAuthInstance.get(url);
  },
};
