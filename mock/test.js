module.exports = [
  {
    url: "/api/auth/roles/getMenuList",
    type: "get",
    response: () => {
      return {
        code: 0,
        data: [
          {
            key: "TKjXzdYSSC6REk1QWQ-ojw",
            label: "首页",
          },
          {
            key: "mA0TLZDsQ0qSGmUUNLENMA",
            label: "服务导航",
          },
          {
            key: "nz5wOwLnSj29nWq8y6EJXw",
            label: "分类管理",
          },
          {
            key: "suepVh4gSzqGDQch1pNg1g",
            label: "服务任务",
          },
          {
            key: "bRyIL4Z_SbSc_XSXCIsgXw",
            label: "知识库",
          },
          {
            key: "2GGoe9VZToyqbbfNe4_4wQ",
            label: "管理报表",
          },
          {
            key: "mGXO4aMNQ-WwLqCtDSF1aA",
            label: "系统管理",
          },
          {
            key: "QwXC8Yy3QsCfiCCoPOxupQ",
            label: "个人中心",
          },
          {
            key: "4teLpbuUR7Gk0BTr7sHrnQ",
            label: "配置管理",
          },
          {
            key: "ExMRfV-nTYKGEFxSe6VJ-Q",
            label: "专案管理",
          },
        ],
      };
    },
  },
  {
    url: "/api/getUsers",
    type: "get",
    response: (config) => {
      // 从查询参数中获取分页、过滤关键词等参数
      const { page = 1, limit = 5 } = config.query;

      // 分页
      const data = mockList.filter(
        (item, index) => index < limit * page && index >= limit * (page - 1)
      );

      return {
        code: 20000,
        data,
        total: mockList.length,
      };
    },
  },
  {
    url: "/api/addUser",
    type: "post",
    response: () => {
      // 直接返回
      return {
        code: 20000,
      };
    },
  },
  {
    url: "/api/updateUser",
    type: "post",
    response: () => {
      return {
        code: 20000,
      };
    },
  },
  {
    url: "/api/deleteUser",
    type: "get",
    response: () => {
      return {
        code: 20000,
      };
    },
  },
];
