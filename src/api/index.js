import ajax from "./ajax";
import ajax1 from "./wangAjax";
//请求首页
export const getIndexData = () => ajax.get("/getIndexData");

//请求搜索页的输入框placeholder
export const getPlaceholder = () => ajax1.post("/search/init.json");
//输入发送的请求数据
export const getPlaceholder = (key) =>
  ajax1.post("search/searchAutoComplete.json", (keywordPrefix = key));
