
import Vue2 from 'vue2/vue2'
import Vue2Button from 'vue2/Button'
import React, {useState, useEffect, useRef} from 'react';

export const Vue2ButtonWrappered = (props)=>{
    // const [count, setCount] = useState(0)
    const {count, btnClick} = props;
    console.log(count)
    // const [count, setCount] = useState(props.count)
    useEffect(() =>{
        //   const vm = Vue2.extend(Vue2Button)
        //   new vm().$mount(`#vue2-button`);
        console.log('update count: ', count)
        const vm = new Vue2({
            render: h => {
                return h(
                    'div', {}, [
                        h(Vue2Button,
                            {
                              on: {
                                // 'btnClick': (val)=>{
                                // //   setCount(count++);
                                //   // count.current++;
                                //   console.log('vue2 button btnClick in app1', count)
                                // },
                                'onBtnClick': (val)=>{
                                //   setCount(count++);
                                    btnClick();
                                    console.log('vue2 button onBtnClick in app1', count)
                                }
                              },
                              props: {
                                  count: count
                              },
                              scopedSlots: {},
                            }),
                            // h('div', {attrs: {id: 'vue2-button'}})
                    ]
                )
            }
          }).$mount('#vue2-button');
          vm.$forceUpdate()

        })
    return (
        <>
          <div id="vue2-button"></div>
          {/* <div id="vue2-button"></div> */}
        </>
    )
}

// export class ReactWrapVue2 extends React.Component {

// }