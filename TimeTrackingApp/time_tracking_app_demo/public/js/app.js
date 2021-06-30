/*
  eslint-disable react/prefer-stateless-function, react/jsx-boolean-value,
  no-undef, jsx-a11y/label-has-for, react/jsx-first-prop-new-line
*/
//1. 需求分析
//一个应用进行定时器的展示 并且能够创建定时器 每个定时器可编辑
// 组件构成
//父组件 TimersDashboard
// 列表组件：TimerList
// timer组件 EditableTimer：timer展示组件  timer编辑组件

// 控制+ 以及显示创建表单的组件
//2. 明确哪些组件是有状态的组件
//明确什么是可变的 手机静态程序中组件使用的数据 
// 分析 什么是可变的
// TimersDashboard 组件 toggle值 取决于用户的点击
// EditableTimerList 组件  
// 声明了两个子组件 
//Editable Timer  使用了 edit属性
//TimerForm 组件 交互输入字段 
//3. state准则
//它是通过props的父组件那里传来的么 如果是 它可能不是当前组件的state
//它会随着时间改变么 如果不是 它可能不是state 
//可以根据组件中的其他state或者props来计算么 如果是它不是state
//4. 确定每个state应该属于那个组件
//1.计时器列表 每个计数器的属性
//2. 是否打开计时器的编辑表单
//3. 是否打开创建表单
// 找到根据这个 state 进行渲染的所有组件。
//1. 找到他们的共同所有者（common owner）组件（在组件层级上高于所有需要该 state 的组件）。
//2. 该共同所有者组件或者比它层级更高的组件应该拥有该 state。
//3. 如果你找不到一个合适的位置来存放该 state，就可以直接创建一个新的组件来存放该 state，并将这一新组件置于高于共同所有者组件层级的位置。
import {useState} from 'react'
function TimersDashboard () {
  //toggle值 是否状态 数据在这里定义 随着时间改变 不能从其他state props中得到
  //1. 提供数据源 
  let defaultDataList =[
    {
      'title':'timer1',
      'project':'健身房',
      'id':uuid.v4(),
      'elapased':5456099,
      'runningSince':Date.now(),
  
    },
    {
      'title':'timer2',
      'project':'去上学',
      'id':uuid.v4(),
      'elapased':156099,
      'runningSince':null,
  
    },
    {
      'title':'timer3',
      'project':'坐飞机',
      'id':uuid.v4(),
      'elapased':456099,
      'runningSince':nuDate.now(),
  
    }
  ] 
  const [timerData,setTimerData] = useState(defaultDataList)
 
  return (
    <div className='ui three column centered grid'>
      <div className='column'>
        <EditableTimerList timers={timerData}></EditableTimerList>
        <ToggleableTimerForm toggle={false}></ToggleableTimerForm>
      </div>
    </div>
  )
}
function EditableTimerList (props) {
  //timerList容器
  //计时器的属性 在此组件中定义 随着时间改变 而不能从其他state或者props计算得到
  return (
    <div>
      {props.timers.map((item,index)=>{
         <EditableTimer key ={index} {...item}></EditableTimer>
      })
    }
      // <EditableTimer key={1} edit={false}></EditableTimer>
      // <EditableTimer elapased='8986300' key={2} edit={false}></EditableTimer>
      // <EditableTimer elapased='7986300' key={3} edit={true}></EditableTimer>
      // <EditableTimer elapased='6986300' key={4} edit={true}></EditableTimer>
    </div>
  )
}
function EditableTimer (props) {
  //展示timer 还是timer表单
  //edit 数据在此组件中定义 它会随着时间改变 且不能从其他state 或者props计算的到
  return (
    <div>
      {props.edit ? (
        <Timer {...props}></Timer>
      ) : (
        <TimerForm {...props}></TimerForm>
      )}
    </div>
  )
}
function TimerForm (props) {
  //timer表单
  let submitText = props.title ? '更新' : '创建'
  return (
    <div className='ui centered card TimerForm'>
      <div className='content'>
        <div className='ui form'>
          <div className='field'>
            <label>title</label>
            <input defaultValue={props.title}></input>
          </div>
          <div className='field'>
            <label>Project</label>
            <input defaultValue={props.project}></input>
          </div>
          <div className='ui two bottom attached  options'>
            <button className='ui basic blue button'>{submitText}</button>
            <button className='ui basic red button'>取消</button>
          </div>
        </div>
      </div>
    </div>
  )
}
function Timer (props) {
  //tiemer展示组件 数据从其他组件传来 无状态
  //
  let formateDate = helpers.renderElapsedString(props.elapased)
  return (
    <div className='ui centered card timer'>
      <div className='content'>
        <div className='timerInfo'>
          <div className='timerDesc'>
            <div className='timerName'>{props.title}</div>
            <p className='meta desc'>{props.project}</p>
          </div>
          <div className='center aligned description timerDetail'>
            <h2 className='centered'>{formateDate}</h2>
          </div>
          <div className='extra options'>
            <span className='right floated edit icon timer_delete'>
              <i className='delete icon'></i>
            </span>
            <span className='right floated edit icon timer_delete'>
              <i className='edit icon'></i>
            </span>
          </div>
        
        </div>
       
      </div>
      <div className='ui bottom attached blue basic button'>start</div>
    </div>
  )
}
function ToggleableTimerForm (props) {
  //控制显示+号还是 创建Timer表单
  return (
    <div>
      {props.toggle ? (
        <TimerForm title={false}></TimerForm>
      ) : (
        <div className='ui centered card '>
          <i className='centered plus icon'></i>
        </div>
      )}
    </div>
  )
}
ReactDOM.render(<TimersDashboard />, document.getElementById('content'))
