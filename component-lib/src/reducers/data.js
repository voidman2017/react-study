const initialState = {
    count: 0,
    list: [1, 2, 3],
    obj: {
        a: {
            e: {
                f: 3
            },
            b: 1
        },
        c: {
            d: 1
        }
    }
}

function dataApp(state = initialState, action) {
    switch (action.type) {
        case 'increase_count':
            return { ...state, count: state.count + 1 };

        case 'decrease_count':
            return { ...state, count: state.count - 1 };

        case 'add_count':
            return { ...state, count: state.count + ~~action.num };

        case 'add_list_err':
            /* state有变化，视图不会更新;因为数组是引用数据类型，如下操作没有返回新的数组;但是会在下一次正确的更新后获取到最新的数据 */
            state.list.push(action.data);
            return Object.assign({ ...state });

        case "delete_list_err":
            /* state有变化，视图不会更新;因为数组是引用数据类型，如下操作没有返回新的数组;但是会在下一次正确的更新后获取到最新的数据 */
            state.list.splice(action.data, 1);
            return Object.assign({ ...state });

        case 'add_list':
            return Object.assign({ ...state, list: [].concat(state.list, action.data) });

        case "delete_list":
            state.list.splice(action.data, 1);
            return Object.assign({ ...state, list: [].concat(state.list) });

        case 'obj_c_d':
            /* state有变化，视图不会更新;如下操作没有返回新的数组;但是会在下一次正确的更新后获取到最新的数据 */
            state.obj.c.d = action.data;
            return state;

        case 'obj_a_b1':
            /* 由于数据结构较复杂，只针对这一属性值修改，会影响到其他数据 */
            return Object.assign({ ...state, obj: { a: { b: action.data } } });

        case 'obj_a_b2':
            /* 对未更新的对象用原state中的对象进行手动赋值，较为复杂 */
            return Object.assign({ ...state, obj: { ...state.obj, a: { ...state.obj.a, b: action.data, } } })

        case 'obj_a_b3':
            /* 通过深拷贝，得到新的对象。这里深拷贝可以 使用lodash 的cloneDeep 方法*/
            let newObj = JSON.parse(JSON.stringify(state.obj));
            newObj.a.b = action.data;
            return Object.assign({ ...state, obj:newObj })


        default:
            return state;
    }
}
export default dataApp;