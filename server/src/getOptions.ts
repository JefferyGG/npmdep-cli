export const getOptions = (arr: string[]) => {
    // 存储提取出的参数
    const params: { [key: string]: string } = {};
    
    for (let i = 0; i < arr.length; i++) {
        // 判断元素是否以双横线开头（参数名称）
        if (arr[i].startsWith("--")) {
          const paramName: string = arr[i].slice(2); // 去除双横线前缀
          const paramValue: string = arr[i + 1]; 
          params[paramName] = paramValue; 
          i++; 
        }
      }
    return params;
};
