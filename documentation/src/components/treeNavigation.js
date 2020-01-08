import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { navigate } from 'gatsby';

const handleClick = function(event,treeItemData) {
    event.preventDefault();
    if (treeItemData.href) {
        navigate(treeItemData.href);
    }
}
const getLocalStorage = ()=> {
     const windowGlobal = typeof window !== 'undefined' && window;
     return windowGlobal.localStorage;
}

const getTreeItemsFromData = treeItems => {
    return treeItems.map(treeItemData => {
        let children = undefined;
    if (treeItemData.children && treeItemData.children.length > 0) {
        children = getTreeItemsFromData(treeItemData.children);
    }
    return (
        <TreeItem
            key={treeItemData.key}
            nodeId={treeItemData.nodeId}
            label={treeItemData.label}
            children={children}
            onClick={ (e) => {handleClick(e,treeItemData)}}
        />
        );
    });
};

const getExpandedNodesFromLocalStorage = ()=>{
    const localStorage = getLocalStorage();
    return localStorage && JSON.parse(localStorage.getItem("codeceptjs:documentation:sidebar:docs"));
}

export default function FileSystemNavigator({ treeItems }) {

    const handleChange = (event, nodes) => {
        const localStorage = getLocalStorage();
        localStorage && localStorage.setItem("codeceptjs:documentation:sidebar:docs", JSON.stringify(nodes));
    };
    return (
        <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            defaultExpanded={getExpandedNodesFromLocalStorage()}
            onNodeToggle={handleChange}
        >
            {getTreeItemsFromData(treeItems)}
        </TreeView>
    );
}
