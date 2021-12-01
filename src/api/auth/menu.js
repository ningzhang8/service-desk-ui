import request from "@/utils/request";

// 查询菜单列表
export const getMenuList = () => {
  return request({
    url: "/auth/roles/getMenuList",
    method: "get",
  });
};
