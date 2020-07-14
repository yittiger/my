import gojs from 'gojs';
// 节点定义方法
import * as utilFuns from './node-parts/index';
import tween, { animateFun } from './animation';
import AnimationEvents from './animation/animateManager';
import link from './template/link/index';
import node from './template/node/index';
import group from './template/group/index';
import layout from './layout';
// 数据管理
import DataManager from './dataManager/dataManager';
// diagram管理
import diagramManager from './dataManager/diagramManager';

// group
import { getGroupLayout, getGroupDragging, setGroupLayout } from './group';

export const go = gojs;
export const utils = utilFuns;
export const nodeTmpl = node;
export const linkTmpl = link;
export const groupTmpl = group;
export const animation = {
  func: animateFun,
  tween: tween,
  AnimationEvents: AnimationEvents
};
export const groupFun = { getGroupLayout, getGroupDragging, setGroupLayout };
export const dataUtils = { DataManager, diagramManager };
export const layoutUtils = layout;
