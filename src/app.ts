import { useEffect } from 'react'
import { useStore } from '../src/store'
import { observer } from 'mobx-react-lite'
import './app.scss'
function App(props) {
  const {userStore}=useStore()
  useEffect(() => {
    userStore.initUser()
  },[])
  return (
    props.children
  )
}

export default observer(App);
