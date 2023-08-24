import { findPkgs } from "./findPkgs";
import { exportJson } from "./exportJson";
//处理节点-----------------------------------------------------
export const handleNodes = (dir: string, repeatNodes: string[], topDeps:object) => {
    const repeat = [];
    const uniqueSet = new Set();
    const { names, nameVersions, files } = findPkgs(dir);

    for (let i = 0; i < names.length; i++) {
        const item = names[i];
        if (uniqueSet.has(item)) {
            repeat.push(item);
        } else {
            uniqueSet.add(item);
        }
    }
    //nameVersions.name去重
    const nvMap = new Map();
    nameVersions.forEach(item => {
        nvMap.set(item.name, item);
    });
    const nv = Array.from(nvMap.values());

    //处理repeatNodes
    const freqGroup: { [key: string]: string[] }= {
        "one": [],
        "twoTen": [],
        "tenMore": []
    };
    const countMap: { [key: string]: number } = {};
    for (const node of repeatNodes) {
        countMap[node] = (countMap[node] || 0) + 1;
      }
    for(const node in countMap){
        if(countMap[node] < 2){
            freqGroup["one"].push(node);
        }else if(countMap[node] < 11){
            freqGroup["twoTen"].push(node);
        }else{
            freqGroup["tenMore"].push(node);
        }
    }

    //nv-->rn
    const topDepsArr = Object.keys(topDeps);
    nv.forEach(item => {
        item.symbolSize = 10;
        item.category = "≤2";
        if(freqGroup["one"].includes(item.name)){
            item.symbolSize = 20;
            item.category = "≤2";
        }
        if (freqGroup["twoTen"].includes(item.name)) { 
            item.symbolSize = 30;
            item.category = "2-10";
        
        }
        if (freqGroup["tenMore"].includes(item.name)) { 
            item.symbolSize = 40;
            item.category = ">10";
        }

        if (topDepsArr.includes(item.name)) {
            item.symbolSize = 70;
            item.category = "topDeps";
        }
    });
    
    const renderNodes: nodesObj[] = nv;

    interface nodesObj {
        category: string;
        name: string;
        value: number;
        symbolSize: number;
    }
    exportJson(renderNodes, "public/data", "renderNodes.json");
    
};

//处理关系--------------------------------------------------------

export const handleLinks = (links:{[key: string]: string[]}) => {
    const renderLinks = [];
    for (const source in links) {
        const targets = links[source];
        for (const target of targets) {
            renderLinks.push({ source, target });
        }
    }
    exportJson(renderLinks, "public/data", "renderLinks.json");
};
