import { defineComponent, ref, reactive } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import img from './assets/logo.png'

const renderHello = () => {
  return <HelloWorld msg="nihao" />
}


export default defineComponent({
  setup() {
    const state = reactive({
      name: 'John'
    })
    const numberRef = ref(1)

    setInterval(() => {
      state.name += '1'
      numberRef.value += 10
    }, 1000)

    return () => {
      const number = numberRef.value
      return (
        <div id='app'>
          <img src={img} alt="" />
          <p>{state.name + number}</p>
          <div>{renderHello()}</div>
        </div>
      )
    }
  }
})