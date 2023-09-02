const data = [
    {
        id: '1',
        name: '父节点1',
        children: [
            {
                id: '1-1',
                name: '子节点1-1',
                children: [
                    {
                        id: '1-1-1',
                        name: '子节点1-1-1'
                    },
                    {
                        id: '1-1-2',
                        name: '子节点1-1-2'
                    }
                ]
            }
        ]
    },
    {
        id: '2',
        name: '父节点2',
        children: [
            {
                id: '2-1',
                name: '子节点2-1'
            }
        ]
    }
];

function treeToList (data) {
    let res = [];
    // const dfs = (tree) => {
    //     tree.forEach((item) => {
    //         if (item.children && item.children.length) {
    //             dfs(item.children);
    //             delete item.children; //改变了原数组
    //         }
    //         res.push(item);
    //     });
    // };
    const dfs = (tree) => {
        tree.forEach((item) => {
            // const node = {
            //     id: item.id,
            //     name: item.name
            // };
            const { children, ...node } = item;
            res.push(node);

            if (children && children.length) {
                dfs(children);
            }
        });
    };
    dfs(data);
    return res;
}
// console.log(treeToList(data));

function treeToList2 (data) {
    if (!Array.isArray(data) && data.length === 0) return;
    // 方式1
    return data.reduce((prev, cur) => {
        const { children } = cur;
        delete cur.children;
        return Array.isArray(children) && children.length > 0 ? prev.concat(treeToList(children), cur) : prev.concat(cur);
    }, []);

    //方式2
    // return data.reduce((prev, cur) => {
    //     const { children } = cur;
    //     return [
    //         ...prev,
    //         { ...cur },
    //         ...(Array.isArray(children) && children.length > 0 ? treeToList(children) : [])
    //     ];
    // }, []);
}
// console.log(treeToList2(data));

// 深度优先遍历
function treeToList3 (tree) {
    let  res = [];
    tree.forEach(item => {
        const { children, ...rest } = item;
        res.push(rest);
        if (children && children.length) {
            res.push(...treeToList3(children));
            // res = res.concat(treeToList3(children));
        }
    }
    );
    return res;
}
console.log(treeToList3(data));

// 广度优先遍历
function treeToList4 (tree) {
    const res = [];
    tree.forEach(item => {
        const queue = [item];
        while (queue.length) {
            const { children, ...rest } = queue.shift();
            res.push(rest);
            if (children && children.length) {
                queue.push(...children);
            }
        }
    });
    return res;
}
// console.log(treeToList4(data));